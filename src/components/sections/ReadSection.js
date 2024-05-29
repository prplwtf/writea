function ReadSection() {
  if(window.location.hash == "#read") return Route("#blog")
  
  let PostContentFile = `${window.location.hash.replace("#read/", "")}.md`
  let Post = window.Blogs.find(item => item.Content === PostContentFile)
  let PostContentPath = `./posts/${Post.Content}`

  return `
    ${NavigationBarElement()}
    <div class="py-4 text-center">
      <p class="mb-3 text-danger-emphasis">
        ${Post.Topic}
      </p>
      <p class="h2 fw-bolder mb-3">
        ${Post.Title}
      </p>
      <p class="opacity-75">
        ${Post.Description}
      </div>
    </div>
    ${FooterElement()}
  `
}