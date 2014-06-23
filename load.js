"undefined" == typeof PDP ? !
(function () {
  var a, b, c, d, e = "0.04",
    f = document.createDocumentFragment(),
    g = [{
      charset: "UTF-8",
      type: "link",
      url: "//alexxroche.github.io/personal-data-protocol/css/pdp.css",
      async: !0,
      nocache: !0
    }, {
      type: "script",
      url: "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min.js",
      async: !1,
      nocache: !0
    }, {
      type: "script",
      url: "//www.google.com/jsapi",
      async: !1,
      nocache: !0
    }, {
      charset: "UTF-8",
      type: "script",
      url: "//alexxroche.github.io/personal-data-protocol/js/pdp.js",
      async: !1,
      nocache: !1
    }];
  for (d = 0; d < g.length; d++) a = g[d], b = document.createElement(a.type), c = a.nocache ? "?v=" + e : "", "link" === a.type ? (b.rel = "stylesheet", b.href = a.url + c) : "script" === a.type && (b.src = a.url + c), b.async = a.async, f.appendChild(b);
  document.head.appendChild(f)
}()) : (function() { 
$('#PDP_overlay').length ? (function() { $('#PDP_overlay').is(":visible")  ? PDP.log('Overlay already in place', 409) : (function(){ $('#PDP_overlay').show(); PDP.log("Overlay revealied", 200);}()) }()) :
(function() { PDP.say("Loading a fresh one", "Personal Data Overlay was deleted!"); PDP.init();})() 
}());

