// about.pocallum.cat — main.js

// Goatcounter analytics
(function() {
  var s = document.createElement('script');
  s.setAttribute('data-goatcounter', 'https://about-pocallum.goatcounter.com/count');
  s.async = true;
  s.src = '//gc.zgo.at/count.js';
  document.head.appendChild(s);
})();

// Mailto obfuscat
document.querySelectorAll('a[data-mailto]').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'mai' + 'lto:' + 'hola' + '@' + 'pocallum.cat';
  });
  el.setAttribute('href', '#');
});
