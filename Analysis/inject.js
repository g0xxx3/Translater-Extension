function _injectChild(b) {
    var a = document.getElementsByTagName("head")[0];
    a || (a = document.body.parentNode.appendChild(document.createElement("head")));
    a.appendChild(b)
}

function _loadJs(b) {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.charset = "UTF-8";
    a.src = b;
    _injectChild(a)
}

function _loadCss(b) {
    var a = document.createElement("link");
    a.type = "text/css";
    a.rel = "stylesheet";
    a.charset = "UTF-8";
    a.href = browser.runtime.getURL(b);
    _injectChild(a)
}

var d=document;
var b=d.body;
_loadJs('../Analysis/provider/google.js')
var v=b.insertBefore(d.createElement('div'),b.firstChild);
v.id='google_translate_element';
v.style.display='none';
var p=d.createElement('script');
p.text="function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'',includeLanguage: ['zh-CN']},'google_translate_element')}";
p.setAttribute('type','text/javascript');
_injectChild(p);
undefined;
