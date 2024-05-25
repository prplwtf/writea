function UnloadScript(id) {
  var script = document.getElementById(id);
  if (script) {
    script.parentNode.removeChild(script);
    console.log(`Script with id "${id}" has been removed.`);
  } else {
    console.warn(`No script found with id "${id}".`);
  }
}