let BlogsURL = "./configuration/Posts.yml"
let ExampleBlogs = false

async function FetchBlogs() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", BlogsURL, true)
  xhr.onreadystatechange = async function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = jsyaml.load(xhr.responseText)
      window.Blogs = res
      return;
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      if(BlogsURL != "./configuration/Posts.example.yml") {
        ExampleBlogs = true
        BlogsURL = "./configuration/Posts.example.yml"
        FetchBlogs()
      } else {
        return console.error("Posts.yml could not be found!")
      }
    }
  }
  xhr.send()
}