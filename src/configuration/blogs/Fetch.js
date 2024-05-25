async function FetchBlogs() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "./config/Blogs.yml", true)
  xhr.onreadystatechange = async function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = jsyaml.load(xhr.responseText)
      await RenderBlogs(res)
      return;
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      return console.error("Blogs.yml could not be found!")
    }
  }
  xhr.send()
}