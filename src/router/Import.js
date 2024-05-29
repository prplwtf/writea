function Import(url, id, callback) {
  if (document.getElementById(id)) {
    return;
  }
  
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.id = id;

  script.onload = function() {
    if (callback) callback();
  };

  script.onerror = function() {
    console.error(`Failed to load script with id "${id}"`);
  };

  script.src = url;
  document.head.appendChild(script);
}