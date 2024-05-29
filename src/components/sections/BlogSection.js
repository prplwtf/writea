function BlogSection() {
  let Posts = ""
  window.Blogs.forEach(Post => {
    if(!Post.Discoverable) return

    if (Post.Topic.length > 20) {
      Post.Topic = Post.Topic.substring(0,20)+".."
    }

    if (Post.Title.length > 65) {
      Post.Title = Post.Title.substring(0,65)+".."
    }

    if (Post.Description.length > 100) {
      Post.Description = Post.Description.substring(0,100)+".."
    }

    let PostThumbnail = ""
    if (Post.Thumbnail) {
      PostThumbnail = `
        <div class="col-12">
          <img src="${Post.Thumbnail}" class="col-12 rounded-2 mb-3 object-fit-cover" height="90px" width="100%"/>
        </div>
      `
    }

    Posts = `
      ${Posts}
      
      <div class="col-12 mb-3" style="cursor:pointer;" onclick="Route('#read/${Post.Content.replace('.md', '')}')">
        <div class="border border-dark border-opacity-25 p-4 rounded-4">
          <div class="row d-flex">
            ${PostThumbnail}
            <div class="col-10 me-auto">
              <span class="d-block text-danger-emphasis mb-1">
                ${Post.Topic || "post"}
                <span class="text-dark"><i class="bi bi-dot"></i> ${Post.Content}</span>
              </span>
              <span class="h5 fw-bold">
                ${Post.Title || "No title available"}
              </span>
              <span class="d-block">
                ${Post.Description || "No description available"}
              </span>
            </div>
            <div class="col-auto my-auto">
              <button type="button" class="btn shadow-none text-danger-emphasis"><i class="bi bi-chevron-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    `
  });
  return `
    ${NavigationBarElement()}
    <div class="row">
      ${Posts || `
        <p>
          There haven't been any posts yet, check back later!
        </p>
      `}
    </div>
    ${FooterElement()}
  `
}