function BlogListSection() {
  let Posts = ""
  window.Blogs.forEach(Post => {
    Posts = `
      ${Posts}
      
      <div class="col-12 mb-3">
        <div class="border border-dark border-opacity-25 p-4 rounded-4">
          <div class="row d-flex">
            <div class="col-10 me-auto">
              <span class="h5 fw-bold">
                ${Post.Title}
              </span>
              <span class="d-block">
                ${Post.Description}
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
      ${Posts}
    </div>
  `
}