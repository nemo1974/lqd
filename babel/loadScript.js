function loadScript(path, callback) {

  var done = false;
  var scr = document.createElement('script');

  scr.onload = handleLoad;
  scr.onreadystatechange = handleReadyStateChange;
  scr.onerror = handleError;
  scr.src = path;
  document.body.appendChild(scr);

  function handleLoad() {
    if (!done) {
      done = true;
      callback(path, "ok");
    }
  }

  function handleReadyStateChange() {
    var state;

    if (!done) {
      state = scr.readyState;
      if (state === "complete") {
        handleLoad();
      }
    }
  }
  function handleError() {
    if (!done) {
      done = true;
      callback(path, "error");
    }
  }
}