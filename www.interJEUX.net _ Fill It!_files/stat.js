var info = "";
function ss_escape(s) {
var plus;
  s = escape(s);
  while ((plus = s.indexOf("+")) > 0) {
    s = s.substr(0,plus) + "%2B" + s.substr(plus+1,s.length);
  }
  return s;
}
  
var appname = navigator.appName;
//var appversion = parseFloat(navigator.appVersion);
var appver = navigator.appVersion;
if (appver.indexOf("MSIE 5") && appname=="Microsoft Internet Explorer") appversion = "5"; else appversion = parseFloat(appver);
var scr = col = "";
var loc = window.location.href;
var ref = parent.document.referrer;
var os = navigator.platform;

if (appname == "Netscape") {
  if (appversion >= 4) {
    scr = screen.width+'x'+screen.height;
    col = screen.pixelDepth;
  }
}
if (appname == "Microsoft Internet Explorer") {
  if (appversion >= 4) {
    scr = screen.width+'x'+screen.height;
    col = screen.colorDepth;
  }
}
    
if (! loc) loc = "";
if (! ref) ref = "";
if (! os) os = "";

info = 
    '&ref=' + ss_escape(ref)
  + '&scr=' + ss_escape(scr) + '&col=' + escape(col)
  + '&os=' + ss_escape(os) + '&loc=' + ss_escape(loc)
  + '&app=' + ss_escape(appname + ' ' + appversion);
