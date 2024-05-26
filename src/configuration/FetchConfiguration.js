async function FetchConfiguration() {
  var xhr = new XMLHttpRequest()
  let ConfigurationURL = "./configuration/Configuration.yml"
  if(window.location.hostname == "gravity.prpl.wtf") {
    ConfigurationURL = "./configuration/Configuration.example.yml"
  }
  xhr.open("GET", ConfigurationURL, true)
  xhr.onreadystatechange = async function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var res = jsyaml.load(xhr.responseText)
      window.Configuration = res
      await RenderConfiguration()
      return;
    }
    if (xhr.readyState == 4 && xhr.status == 404) {
      window.Configuration = false
      await RenderConfiguration()
      return console.error("Configuration.yml could not be found!")
    }
  }
  xhr.send()
}