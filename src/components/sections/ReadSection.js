async function ReadSection() {
  if(window.location.hash == "#read") return Route("#blog")
  
  let PostContentFile = `${window.location.hash.replace("#read/", "")}.md`
  let Post = window.Blogs.find(item => item.Content === PostContentFile)
  let PostContentPath = `./posts/${Post.Content}`

  ModifyAppTitle(Post.Content.replace(".md", ""))

  let PostThumbnail = ""
  if(Post.Thumbnail) {
    PostThumbnail = `
      <img src="./thumbnails/${Post.Thumbnail}" class="rounded-top-4 mb-5 object-fit-cover" height="170px" width="100%"/>
    `
  }

  let Visibility = ""
  if(!Post.Discoverable) {
    Visibility = `private`
  } else {
    Visibility = `public`
  }

  fetch(PostContentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`)
      }
      return response.text()
    })
    .then(content => {
      content = RenderBlogFeatures(content)
      document.querySelector('#MarkdownContainer').innerHTML = marked.parse(content)
      hljs.highlightAll(document.getElementById('MarkdownContainer'))
      ProgressBar(100)
    })
    .catch(error => {
      console.error('Error fetching the Markdown content:', error)
    })

  return `
    ${NavigationBarElement()}
    <div class="pt-2"></div>
    <div class="pb-4 bg-dark-subtle rounded-4">
      ${PostThumbnail}
      <div class="px-5 mb-4">
        <p class="mb-1 text-primary-emphasis">
          ${Post.Topic || "post"}
          <span class="text-dark">
            <i class="bi bi-slash"></i>
            ${Visibility}
          </span>
        </p>
        <p class="h2 fw-bolder mb-1">
          ${Post.Title || "No title available"}
        </p>
        <p class="opacity-75">
          ${Post.Description || "No description available"}
        </div>
      </div>
    </div>
    <div class="p-xs-0 p-sm-5 py-5">
      <div id="MarkdownContainer"></div>
    </div>
    ${FooterElement()}
  `
}