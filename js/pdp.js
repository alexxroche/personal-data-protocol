if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min.js",
  //jq.src = 'js/jquery.min.js'; // local loading
  document.getElementsByTagName('head')[0].appendChild(jq);
}

var PDP = {}; // stop it being loaded twice (until we want that.)
PDP.config = { version: "0.02", overlay: {}, menu: {} },
// check the local store for css and config
PDP.loadUserSettings = function(){
 // check local storage (recursively, the local settings may indicate that the settings are in another castle)
    console.log('looking for settings');
},
PDP.loadUserData = function(){
// check local storage for data
    console.log('checking local storage for user data');
},
PDP.message = function (m, t) {
// alert the user of something
alert(t +": " + m);
},
PDP.menu = function(){
// parent for the menu functions
},
PDP.menu.tab = function(){
// create the menu tab
},
PDP.menu.append = function(){
// if the settings don't explicity block it, then add a menu icon to the overlay
// so that the user can access the config menu
},
PDP.init = function () {
  var a = this,
    b = this.config;
  this.loadUserSettings(),
  this.loadUserData();
  //"undefined" == typeof this.config.overlay.noShow ?  this.loadOverlay() : console.log("overlay hidden by config") ; 
  this.config.overlay.noShow != 1 ? this.loadOverlay() :  console.log("overlay hidden by config") ; 
  this.config.menu.noShow != 1 ? this.menu.append(this.menu.tab) : console.log("menu hidden by config") ; 
},
PDP.update = function() {
// save data and send changes
}
PDP.loadOverlay = function(){
    console.log("loading overlay");

    var ovl = document.createElement('div');
    ovl.setAttribute("contentEditable", true);
    ovl.setAttribute("class", 'PDP_overlay overlay');
    ovl.innerHTML = 'Welcome to Your Personal Data: Feel free to add something here';
    var body_elm = {};
    if( body_elm = document.getElementsByTagName('body')[0]){
        body_elm.appendChild(ovl);
    }else{
        document.getElementsByTagName('html')[0].appendChild('<body><span class="warn">Missing body</span>' + ovl + '</body></html');
    };
};

var loadPDPinit = setTimeout(function loadPDP() { PDP.init()}, 500);
//var autoSave = setInterval(function savePDP() { PDP.update()}, 500);

