async function ReadSection() {
  if(window.location.hash == "#read") return Route("#blog")
  
  let PostContentFile = `${window.location.hash.replace("#read/", "")}.md`
  let Post = window.Blogs.find(item => item.Content === PostContentFile)
  if(!Post) { return window.location = "#404" }
  let PostContentPath = `./posts/${Post.Content}`

  ModifyAppTitle(Post.Content.replace(".md", ""))

  let PostThumbnail = ""
  if(Post.Thumbnail) {
    PostThumbnail = `
      <img src="./images/${Post.Thumbnail}" writea="read.header.thumbnail" class="rounded-top-4 object-fit-cover" height="200px" width="100%"/>
    `
  }

  let Visibility = ""
  if(!Post.Discoverable) {
    Visibility = `<i class="bi bi-link"></i> unlisted`
  }

  fetch(PostContentPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`)
      }
      return response.text()
    })
    .then(content => {
      setTimeout(() => {
        document.querySelector('[writea="read.content"]').style.opacity = 0
        setTimeout(() => {
          content = PreRenderBlogFeatures(content)
          let MarkdownContainer = document.getElementById('MarkdownContainer')
          MarkdownContainer.innerHTML = marked.parse(content)
          hljs.highlightAll(document.getElementById('MarkdownContainer'))
          MarkdownContainer.innerHTML = PostRenderBlogFeatures(MarkdownContainer.innerHTML)
          document.querySelector('[writea="read.content"]').style.opacity = 1
          ProgressBar(100)
        }, 225)
      }, 200)
    })
    .catch(error => {
      console.error('Error fetching the Markdown content:', error)
    })

  return `
    ${NavigationBarElement()}
    <div class="pt-2"></div>
    <div writea="read.header" class="pb-4 bg-dark-subtle rounded-4">
      ${PostThumbnail}
      <div class="px-5 mb-4 pt-5">
        <p writea="read.header.info" class="mb-1 text-primary-emphasis">
          ${Post.Topic || "post"}
          <span class="d-none d-sm-block text-dark float-end">
            ${Visibility}
          </span>
        </p>
        <p writea="read.header.title" class="h2 fw-bolder mb-1">
          ${Post.Title || "No title available"}
        </p>
        <p writea="read.header.description" class="opacity-75">
          ${Post.Description || "No description available"}
        </div>
      </div>
    </div>
    <div writea="read.content" class="p-xs-0 p-sm-5 py-5">
      <div id="MarkdownContainer">
        <p class="placeholder-wave">
          <span class="opacity-25 placeholder col-12 rounded-pill"></span>
          <span class="opacity-25 placeholder col-11 rounded-pill"></span>
          <span class="opacity-25 placeholder col-11 rounded-pill"></span>
          <span class="opacity-25 placeholder col-10 rounded-pill"></span>
          <span class="opacity-25 placeholder col-10 rounded-pill"></span>
          <span class="opacity-25 placeholder col-9 rounded-pill"></span>
          <span class="opacity-25 placeholder col-9 rounded-pill"></span>
          <span class="opacity-25 placeholder col-8 rounded-pill"></span>
        </p>
      </div>
    </div>
    ${FooterElement()}
  `
}