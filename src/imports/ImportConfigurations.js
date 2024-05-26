async function ImportConfigurations() {
  Import("./src/configuration/RenderConfiguration.js", "RenderConfiguration")
  Import("./src/configuration/FetchConfiguration.js", "FetchConfiguration", function() { FetchConfiguration() })
  Import("./src/configuration/FetchBlogs.js", "FetchBlogs", function() { FetchBlogs() })
}