function Unload(id) {
  var script = document.getElementById(id);
  if (script) {
    script.parentNode.removeChild(script);
  } else {
    console.warn(`No script found with id "${id}".`);
  }
}