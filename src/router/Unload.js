function Unload(id) {
  var script = document.getElementById(id);
  if (script) {
    script.parentNode.removeChild(script);
  } else {
    return console.info(`Failed to unload script with id "${id}"`);
  }
}