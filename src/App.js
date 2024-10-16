var Timestamp = Math.round(Date.now() / 240000)
document.addEventListener("DOMContentLoaded", (async () => {
  // Register global variables
  var App = document.getElementById("App")
  var AppTitle = document.getElementById("AppTitle")
  var AppTheme = document.getElementById("AppTheme")
  var AppColor = document.getElementById("AppColor")
  var ProgressBarElement = document.getElementById("ProgressBarElement")

  // Import components
  await ImportConfigurations()
  await ImportElements()

  // Navigate
  var interval = setInterval(function() {
    if (typeof window.Configuration == 'undefined') return;
    clearInterval(interval);

    Route(window.location.hash)
  }, 10); 
}))

function Error() {
  ModifyAppTitle()
  ProgressBar(100)
  return App.innerHTML = `An unknown error occured, check your browser console for more information.`
}