
  basketball.onmousedown = function(event) {
    basketball.style.position = 'absolute';
    basketball.style.zIndex = 1000;
    document.body.appendChild(basketball);
    moveAt(event.pageX, event.pageY);
    function moveAt(pageX, pageY) {
      basketball.style.left = pageX - basketball.offsetWidth / 2 + 'px';
      basketball.style.top = pageY - basketball.offsetHeight / 2 + 'px';
    }
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    document.addEventListener('mousemove', onMouseMove);
    basketball.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      basketball.onmouseup = null;
    };
  };
  basketball.ondragstart = function() {
    return false;
  };