"undefined" == typeof PDP ? !
function () {
  // alert("Loading PDP");
  var a, b, c, d, e = "0.02",
    f = document.createDocumentFragment(),
    g = [{
      type: "link",
      url: "//alexxroche.github.io/personal-data-protocol/css/pdp.css",
      async: !0,
      nocache: !0
    }, {
      type: "script",
      url: "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min.js",
      async: !1,
      nocache: !1
    }, {
      type: "script",
      url: "//www.google.com/jsapi",
      async: !1,
      nocache: !1
    }, {
      type: "script",
      url: "//alexxroche.github.io/personal-data-protocol/js/pdp.js",
      async: !1,
      nocache: !1
    }];
  for (d = 0; d < g.length; d++) a = g[d], b = document.createElement(a.type), c = a.nocache ? "?v=" + e : "", "link" === a.type ? (b.rel = "stylesheet", b.href = a.url + c) : "script" === a.type && (b.src = a.url + c), b.async = a.async, f.appendChild(b);
  document.head.appendChild(f)
}() : PDP.message("Personal Data Overlay is already loaded!", "error");

