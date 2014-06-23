if (!window.jQuery) {
  var jq = document.createElement('script'); jq.type = 'text/javascript';
  // Path to jquery.js file, eg. Google hosted version
  jq.src = "//ajax.aspnetcdn.com/ajax/jQuery/jquery-2.1.0.min.js",
  //jq.src = 'js/jquery.min.js'; // local loading
  document.getElementsByTagName('head')[0].appendChild(jq);
}

var PDP = {}; // stop it being loaded twice (until we want that.)
PDP.config = { version: "0.03", overlay: {}, menu: {} },
// check the local store for css and config
PDP.loadUserSettings = function(){
 // check local storage (recursively, the local settings may indicate that the settings are in another castle)
    console.log('looking for settings');
},
PDP.loadUserData = function(){
// check local storage for data
    console.log('checking local storage for user data');
},
PDP.loadContextMenu = function(){
    // slurp in the template from t/default_context_menu.html
    console.log('creating ContextMenu');
    var cm = document.createElement('menu');
    cm.setAttribute("type", 'context');
    cm.setAttribute("id", 'PDP_overlay_CM');
  //document.getElementById('PDP_overlay').appendChild(cm);
  // can't do that becase we may not have created the DIV yet
    document.getElementsByTagName('head')[0].appendChild(cm);
    $('#PDP_overlay_CM').load('../t/default_context_menu.html');
    console.log('loading ContextMenu');
},
PDP.setZindex = function(){
   var c = this.config;
   var maxZ = 1;
   $.map($('body > *'), function(e,n){
        if($(e).css('position')=='absolute'){
            if($(e).css('z-index')>maxZ){
                maxZ = parseInt($(e).css('z-index'))|| maxZ++ ;
            }
           }
    });
   c.overlay.Zindex = maxZ + 1;
   $('#PDP_overlay').length ? $('#PDP_overlay').css('z-index',c.overlay.Zindex) : PDP.log('z-index: ' + c.overlay.Zindex);
},
PDP.log = function (m, t) {
// alert the user of something
 console.log(t +": " + m);
},
PDP.say = function (m, t) {
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
  var c = this.config;
  this.loadUserSettings(),
  this.loadUserData();
  //"undefined" == typeof this.config.overlay.noShow ?  this.loadOverlay() : console.log("overlay hidden by config") ; 
  this.config.overlay.noShow != 1 ? this.loadOverlay() :  console.log("overlay hidden by config") ; 
  this.config.menu.noShow != 1 ? this.menu.append(this.menu.tab) : console.log("menu hidden by config") ; 
  this.loadContextMenu();
  this.setZindex();
  var autoSave = setInterval(function savePDP() { PDP.update()}, 500);
},
PDP.update = function() {
// save data and send changes
    //this.log('Saving data', 'info');
}
PDP.loadOverlay = function(){
    console.log("loading overlay");

    var ovl = document.createElement('div');
    ovl.setAttribute("contentEditable", true);
    ovl.setAttribute("id", 'PDP_overlay');
    ovl.setAttribute("class", 'PDP_overlay');
    ovl.setAttribute("contextmenu", 'PDP_overlay_CM');
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

