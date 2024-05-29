function BlogListSection() {
  let Posts = ""
  window.Blogs.forEach(Post => {

    if (Post.Topic.length > 20) {
      Post.Topic = Post.Topic.substring(0,20)+".."
    }

    let PostThumbnail = ""
    if (Post.Thumbnail) {
      PostThumbnail = `
        <div class="col-12">
          <img src="${Post.Thumbnail}"/>
        </div>
      `
    }

    Posts = `
      ${Posts}
      
      <div class="col-12 mb-3">
        <div class="border border-dark border-opacity-25 p-4 rounded-4">
          <div class="row d-flex">
            ${PostThumbnail}
            <div class="col-10 me-auto">
              <span class="d-block text-danger-emphasis mb-1">
                ${Post.Topic || ""}
                <span class="text-dark">- ${Post.Content}</span>
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
    <div class="row">
      ${Posts || `
        <p>
          There haven't been any posts yet, check back later!
        </p>
      `}
    </div>
  `
}