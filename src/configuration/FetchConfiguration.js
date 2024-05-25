async function FetchConfiguration() {
  var xhr = new XMLHttpRequest()
  xhr.open("GET", "./config/Configuration.yml", true)
  xhr.onreadystatechange = async function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = jsyaml.load(xhr.responseText)
      window.Configuration = res
      await RenderConfiguration()
      return;
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      return console.error("Configuration.yml could not be found!")
    }
  }
  xhr.send()
}