window.addEventListener('contextmenu', function (e) {
  document.body.innerHTML += '<p>Right-click is disabled</p>'
  e.preventDefault();
}, false);
