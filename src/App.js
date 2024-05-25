document.addEventListener("DOMContentLoaded", (async () => {
  // Register global variables
  App = document.getElementById("App")
  AppTitle = document.getElementById("AppTitle")

  // Prepare global variables
  var Configuration = []

  // Initialize application
  await FetchConfiguration() // Fetch and render configuration
  await FetchBlogs() // Fetch and render configuration

  // Navigate home
  var interval = setInterval(function() {
    if (typeof window.Configuration == 'undefined') return;
    clearInterval(interval);

    Navigate("Home")
  }, 10);
}))