var font=null;window.proofingPhase="Hamburgers";var fontFormats={truetype:"ttf",opentype:"otf"},json="src/js/proof.json",utc=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),utcNoSlash=(new Date).toJSON().slice(0,10).replace(/-/g,"");function toggleClass(e,t){$("#"+e+" .testarea").toggleClass(t)}function preserveUnique(e){for(var t={},a=[],n=e.length,s=0,l=0;l<n;l++){var o=e[l];1!==t[o]&&(t[o]=1,a[s++]=o)}return a}function showErrorMessage(e){var t=document.getElementById("message");e&&0!==e.trim().length?t.style.display="block":t.style.display="none",t.innerHTML=e}function uint8ToBase64(e){for(var t="",a=e.byteLength,n=0;n<a;n++)t+=String.fromCharCode(e[n]);return window.btoa(t)}function localStorageClear(){localStorage.clear(),localStorage.setItem("proofingPhase","Hamburgers"),location.reload()}function whichFontSize(e){if("t__size-xxl"===e)return"140";if("t__size-xl"===e)return"100";if("t__size-l"===e)return"84";if("t__size-m"===e)return"56";if("t__size-s"===e)return"28";if("t__size-xs"===e)return"14";var t=e.length;return t<25?"t__size-xxl":t<50?"t__size-xl":t<95?"t__size-l":t<200?"t__size-m":t<1e3?"t__size-s":"t__size-xs"}function removeElementsByClass(e){for(var t=document.getElementsByClassName(e);0<t.length;)t[0].parentNode.removeChild(t[0])}function removeElementsByID(e){var t=$("#"+e);t.slideUp("slow",function(){t.remove()})}function saveData(e,t){if("undefined"!=typeof Storage)if("thisContent"!==t)localStorage.setItem(e,t);else{var a=$("#"+e).text();localStorage.setItem(e,a)}}function setStage(p){var d=document.getElementById("section__article-app"),v=document.getElementById("section__header-stage-buttons"),h="",_="",b="",y="";$.getJSON(json,function(e){for(stage in e){if(stage===p){var t=function(){if(font.tables.fvar){var e=[];for(var t in font.tables.fvar.axes){var a=font.tables.fvar.axes[t].tag;e.push(a)}for(var n in y+="font-variation-settings:",font.tables.fvar.axes){var s=font.tables.fvar.axes[n].minValue,l=font.tables.fvar.axes[n].maxValue,o=(a=font.tables.fvar.axes[n].tag,font.tables.fvar.axes[n].name.en);if(localStorage.getItem(r+"-slider-"+a+"-val")){var i=localStorage.getItem(r+"-slider-"+a+"-val");y+="'"+a+"' "+i+" "}else{i=font.tables.fvar.axes[n].defaultValue;y+="'"+a+"' "+i+" "}h+='<label for="'+c+"-"+a+'">'+o+" </label>",h+='<span class="t__right" id="'+c+"-"+a+'-val">'+i+"</span>",h+='<input id="'+c+"-"+a+'" type="range" class="slider" min="'+s+'" max="'+l+'" value="'+i+'" oninput="passfvarValue(\''+r+"', '"+a+"', this.value, '"+e+"')\">",n!=font.tables.fvar.axes.length-1&&(y+=", ")}y+=";"}};h="",gsubFeatures=font.tables.gsub.features,console.log(gsubFeatures);var a=[];for(var n in gsubFeatures)if("aalt"!==gsubFeatures[n].tag){var s=gsubFeatures[n].tag;a.push(s)}for(var l in a=preserveUnique(a),e[stage])if("Features"!==stage||a.includes(l)){var o=whichFontSize(e[stage][l]),i="section__proofing-"+l,r="item--"+l,c=r+"-slider",f="";if(localStorage.getItem(c+"-fontSize-val"))f+="font-size: "+(g=localStorage.getItem(c+"-fontSize-val"))+"pt;";else var g=whichFontSize(o);if(localStorage.getItem(c+"-lineHeight-val")){f+="line-height: "+(u=localStorage.getItem(c+"-lineHeight-val"))+";"}else{var u="1.2";f+="line-height: 1.2;"}if(localStorage.getItem(c+"-letterSpacing-val")){f+="letter-spacing: "+(m=localStorage.getItem(c+"-letterSpacing-val"))+"em;"}else{var m="0em";f+="letter-spacing: 0em;"}for(var n in h+='<div id="'+r+'" class="item">',h+='<button class="btn btn-link add-item-above chip" onclick="insertField(\''+r+"')\">+ Add Proof Window</button>",h+='<div class="u__flex">',h+='<div class="item__sliders mr-6 pt-2"><div class="item__sliders-wrapper">',h+='<label for="'+c+'-fontSize">Font Size </label><span class="t__right" id="'+c+'-fontSize-val">'+g+'pt</span><input id="'+c+'-fontSize" type="range" class="slider" min="4" max="160" step="2" value="'+g+'" oninput="passStyleValue(\''+r+"', 'fontSize', this.value)\">",h+='<label for="'+c+'-lineHeight">Line Height </label><span class="t__right" id="'+c+'-lineHeight-val">'+u+'</span><input id="'+c+'-lineHeight" type="range" class="slider" min="0.6" max="3.0" step="0.01" value="'+u+'" oninput="passStyleValue(\''+r+"', 'lineHeight', this.value)\">",h+='<label for="'+c+'-letterSpacing">Letter Spacing </label><span class="t__right" id="'+c+'-letterSpacing-val">'+m+'</span><input id="'+c+'-letterSpacing" type="range" class="slider" min="-0.4" max="0.4" step="0.01" value="'+m+'" oninput="passStyleValue(\''+r+"', 'letterSpacing', this.value)\">",t(),h+='<div id="btn__wrapper-case" class="u__flex btn__wrapper">',h+='<button class="btn btn-link textTransform-uppercase mr-1 mb-1" title="Uppercase" onclick="passStyleValue(\''+r+"','textTransform', 'uppercase')\">TT</button>",h+='<button class="btn btn-link textTransform-capitalize mr-1 mb-1" title="Capitalize" onclick="passStyleValue(\''+r+"','textTransform', 'capitalize')\">Tt</button>",h+='<button class="btn btn-link textTransform-lowercase mr-1 mb-1" title="Lowercase" onclick="passStyleValue(\''+r+"','textTransform', 'lowercase')\">tt</button>",h+="</div>",h+='<div id="btn__wrapper-columns" class="u__flex btn__wrapper">',h+='<button class="btn btn-link column-count-1 mr-1 mb-1" title="1 column layout" onclick="passStyleValue(\''+r+"','column-count', '1')\">☱</button>",h+='<button class="btn btn-link column-count-2 mr-1 mb-1" title="2 column layout" onclick="passStyleValue(\''+r+"','column-count', '2')\">☷</button>",h+='<button class="btn btn-link column-count-3 mr-1 mb-1" title="3 column layout" onclick="passStyleValue(\''+r+"','column-count', '3')\">☵</button>",h+="</div>",h+='<div class="btn__wrapper">',gsubFeatures){s=gsubFeatures[n].tag;b+="."+s+'-feat { font-feature-settings: "'+s+'" 1;}',h+='<div class="btn btn-link chip d-block" title="Turn on and off feature preview" onclick="toggleClass(\''+r+"', '"+s+"-feat')\">"+s+' <span class="float-right">'+s+"</span></div>"}if(h+="</div>",h+='<button class="btn btn-secondary mr-1 mb-1 mt-6" title="Applies styles above to all text fields currently visable." onclick="passStyleValue(\''+r+"','idiocracy','global')\">Global Idiocracy</button>",h+="</div>",h+="</div>",h+='<div class="item__proof">',h+='<button class="btn btn-link remove-item-this" onclick="removeElementsByID(\''+r+"')\">×</button>","Features"===stage){o=whichFontSize(e[stage][l].sample);h+='<h6 class="h6" title="'+e[stage][l].definition+'" contentEditable="true" onkeyup="saveData(\''+i+"-title', 'thisContent')\">"+l+'</h6><span class="testarea-values small"> <span class="fontSize">fontSize: '+g+'pt</span> <span class="lineHeight">lineHeight: '+u+'</span> <span class="letterSpacing">letterSpacing: '+m+"</span></span>",h+='<div id="'+i+'" style="'+f+" "+y+'" class="t__importedfontfamily '+o+' testarea" contenteditable="true" spellcheck="false" onkeyup="saveData(\''+i+"', 'thisContent')\">",localStorage.getItem(i)?h+=localStorage.getItem(i):h+=e[stage][l].sample}else h+='<h6 contentEditable="true" onkeyup="saveData(\''+i+"-title', 'thisContent')\">"+l+'</h6><span class="testarea-values small"> <span class="fontSize">fontSize: '+g+'pt</span> <span class="lineHeight">lineHeight: '+u+'</span> <span class="letterSpacing">letterSpacing: '+m+"</span></span>",h+='<div id="'+i+'" style="'+f+" "+y+'" class="t__importedfontfamily '+o+' testarea" contentEditable="true" spellcheck="false" onkeyup="saveData(\''+i+"', 'thisContent')\">",localStorage.getItem(i)?h+=localStorage.getItem(i):h+=e[stage][l];h+="</div>",h+="</div>",h+="</div>",h+="</div>"}}""===h&&(console.log(h),h+='<div class="item u__flex t__center"><div class="item__proof">No features found! :...(</div></div>'),stage===p?_+='<li class="tab-item active tab__setstage" onclick="setStage(\''+stage+'\')"><a class="#">'+stage+"</a></li>":_+='<li class="tab-item tab__setstage" onclick="setStage(\''+stage+'\')"><a class="#">'+stage+"</a></li>"}v.innerHTML=_,d.innerHTML=h,$("#style__opentype-features").html(b)}),saveData("proofingPhase",p)}function insertField(e){console.log(e);var t=jQuery("#"+e).clone();$("#"+e).prepend(t);var a=t.height();t.css("height","auto"),t.css("height","0px").animate({height:a},600)}function passStyleValue(e,t,a){if("fontSize"===t||"lineHeight"===t||"letterSpacing"===t?(saveData(e+"-slider-"+t+"-val",a),"fontSize"===t?a+="pt":"letterSpacing"===t&&(a+="em"),document.getElementById(e+"-slider-"+t+"-val").innerHTML=a):saveData(e+t,a),"idiocracy"===t){var n=$("#"+e+" .testarea").attr("style");$(".testarea").attr("style",n)}else $("#"+e+" .testarea").css(t,a);if($("#"+e+" .testarea-values").has("."+t).length)$("#"+e+" .testarea-values ."+t).html(" "+t+": "+a);else{var s="<span class='"+t+"'> "+t+": "+a+"</span>";$("#"+e+" .testarea-values").append(s)}$(".btn."+t+"-"+a).addClass("active").siblings(".btn").removeClass("active")}function passfvarValue(e,t,a,n){saveData(e+"-slider-"+t+"-val",document.getElementById(e+"-slider-"+t+"-val").innerHTML=a),Array.isArray(n)||(n=n.split(","));var s="";if(1==n.length)s+="'"+t+"' "+a+" ";else for(f=0;f<n.length;f++){if(t==n[f])s+="'"+t+"' "+a;else{var l=document.getElementById(e+"-slider-"+n[f]).value;s+="'"+String(n[f])+"' "+l}f!=n.length-1&&(s+=", ")}if($("#"+e+" .testarea").css("font-variation-settings",s),$("#"+e+" .testarea-values").has(".fvar").length)$("#"+e+" .testarea-values .fvar").html(s);else{var o="<span class='fvar'>"+s+"</span>";$("#"+e+" .testarea-values").append(o)}}function displayFontData(e){var t,a="";for(t in font.tables){if(font.tables[t],"cmap"===t){var n=font.tables.cmap.glyphIndexMap,s=Object.keys(n).length;window.proofingPhase=s<=100?"Hamburgers":400<=s?"Diacritics":"Spacing"}var l=font.outlinesFormat;if(l=fontFormats[l],"name"!==t);else{if(nameHtml="",font.names.designer)var o=font.names.designer.en;else o="No Designer Name :(";if(font.names.postScriptName)var i=font.names.postScriptName.en;else i="Font Name";nameHtml+='<h6 class="h6 section__header-name u__flex-grow-1 t__left" contenteditable="true" spellcheck="false">'+o+"</h6>",nameHtml+='<a class="off-canvas-toggle h6 section__header-name u__flex-grow-1 t__center p-sticky" href="#sidebar-demo" spellcheck="false">'+i+"</a>",a+='.t__importedfontfamily { font-family: "'+e+'" }',nameHtml+='<h6 class="h6 section__header-name  u__flex-grow-1 t__right">'+utc+"</h6>",document.getElementById("section__header-names").innerHTML=nameHtml}}$("#style__fontfamily").html(a),localStorage.getItem("proofingPhase")?setStage(localStorage.getItem("proofingPhase")):setStage(window.proofingPhase)}function onFontLoaded(e,t,a){window.font=e;var n=[];n.push(e),window.URL.createObjectURL(new Blob(n,{type:"application/zip"})),displayFontData(window.fontFamily=a),"localhost"!==location.hostname&&"127.0.0.1"!==location.hostname&&""!==location.hostname||(localStorage.setItem("fontFamily",a),localStorage.setItem("fontFamilySource",t))}function onReadFile(e){var t=e.target.files[0],a=e.target.files;if(1<e.target.files.length)for(var n=0;n<e.target.files.length;n++){var s,l=a[n];(s=new FileReader).onload=function(e){new DataView(e.target.result);var t=opentype.parse(e.target.result);t.file={name:e.name,lastModified:e.lastModified,size:e.size,type:e.type},t.type="upload",t.fontFamily=t.names.postScriptName.en,t.menuName=t.fontFamily;var a=new Uint8Array(e.target.result);$("#style__fontface").append("@font-face {font-family:'"+t.fontFamily+"'; src: url('data:;base64,"+uint8ToBase64(a)+"') format('truetype');} "),$("#section__header-file-buttons").append('<span class="btn__setfont chip d-block" title="'+t.fontFamily+'" id="btn__setfont-'+t.fontFamily+'" onclick="setFont(\'data:;base64,'+uint8ToBase64(a)+"', '"+t.fontFamily+"')\">"+t.fontFamily+"</span>")},s.readAsArrayBuffer(l)}else(s=new FileReader).onload=function(e){try{var t=opentype.parse(e.target.result),a=t.names.postScriptName.en;onFontLoaded(t,"fonts/"+t.names.postScriptName.en,a),t.file={name:e.name,lastModified:e.lastModified,size:e.size,type:e.type},t.type="user:local";var n=new Uint8Array(e.target.result);$("#style__fontface").html("@font-face {font-family:'"+window.fontFamily+"';  src: url('data:;base64,"+uint8ToBase64(n)+"') format('truetype');} "),showErrorMessage("")}catch(e){throw showErrorMessage(e.toString()),e.stack&&console.log(e.stack),e}},s.onerror=function(e){showErrorMessage(e.toString())},s.readAsArrayBuffer(t)}function setFont(a,n){opentype.load(a,function(e,t){onFontLoaded(t,a,n)})}function serverLoad(){var e=document.getElementById("section__header-file-buttons");setFont("fonts/gooper-VF.ttf","gooper-VF-ttf"),$("#style__fontface").html('@font-face { font-family: "gooper-VF-ttf"; src: url("fonts/gooper-VF.ttf");}');e.innerHTML='<form class="box has-advanced-upload" method="post" action="" enctype="multipart/form-data"><div class="box__input"><input id="fontInput" class="box__file" type="file" name="files[]"  data-multiple-caption="{count} files selected" multiple /></form><div id="message"></div><div id="listfonts"></div>',document.getElementById("fontInput").addEventListener("change",onReadFile,!1)}function localLoad(){var r=document.getElementById("section__header-file-buttons");document.getElementById("section__header-file-buttons").innerHTML="Place fonts you want to proof into <code>/fonts</code> to begin";var c="",f="",g="";$.get("../src/txt/fonts.txt",{},function(e){g=e.split("fonts/");for(var t,a=[],n=0;n<g.length;n++)""!=g[n]&&(thisFont=g[n].trim(),a.push(thisFont));preserveUnique(a),a.sort();for(n=0;n<a.length;n++){var s=a[n],l=s.split(".").pop();thisFontName=s.replace("ignore/","").replace("-"," ").replace(/([A-Z])/g," $1").trim(),thisFontFamily=s.replace(".","-"),c+='<div class="btn__setfont chip d-block" title="'+s+'" id="btn__setfont-'+thisFontFamily+'" onclick="setFont(\'fonts/'+s+"', '"+thisFontFamily+"')\">"+thisFontName.substring(0,thisFontName.length-4)+'<span class="float-right">'+l+"</span></div>",f+='@font-face { font-family: "'+thisFontFamily+'"; src: url("fonts/'+s+'");}'}if(r.innerHTML=c,localStorage.getItem("fontFamilySource"))var o=localStorage.getItem("fontFamilySource"),i=localStorage.getItem("fontFamily");else o="fonts/"+a[a.length-1],i=thisFontFamily;for(setFont(o,i),$("#style__fontface").append(f),console.log("local storage"),t=0;t<localStorage.length;t++)console.log(localStorage.key(t)+"=["+localStorage.getItem(localStorage.key(t))+"]")},"text")}window.onload=function(){"localhost"===location.hostname||"127.0.0.1"===location.hostname||""===location.hostname?localLoad():serverLoad(),$("#section__header-file-buttons").on("click",".btn__setfont",function(){$(this).addClass("active").siblings().removeClass("active"),$(this).addClass("visited")}),$("#section__header-stage-buttons").on("click",".btn__setstage",function(){$(this).addClass("active").siblings().removeClass("active")}),$("#btn__view-tools-toggle").on("click",function(e){$(".body__idiotproofed").toggleClass("tools-visible")}),document.body.className+=" loaded"};var isAnimating=null;function animatefvarValue(e,t,a,n,s,l){document.getElementById(e+"-slider-"+t+"-val").value=a;var o="",i=null;if(null!==isAnimating)$("#style__fvar-animation").html(""),isAnimating=null;else{i=function(e,t){CSSRule.WEBKIT_KEYFRAMES_RULE?o+="@-webkit-keyframes "+e+" {"+t+"}":CSSRule.MOZ_KEYFRAMES_RULE?o+="@-moz-keyframes "+e+" {"+t+"}":CSSRule.KEYFRAMES_RULE&&(o+="@keyframes "+e+" {"+t+"}")},Array.isArray(l)||(l=l.split(","));var r="";if(1==l.length)i(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+';}25% {font-variation-settings:"'+t+'" '+n+';}50% {font-variation-settings:"'+t+'" '+s+";}");else{for(f=0;f<l.length;f++)if(t!==l[f]){var c=document.getElementById(id+"-slider-"+l[f]).value;r+="'"+String(l[f])+"' "+c+","}i(t+"infinite",'0%, 100% {font-variation-settings:"'+t+'" '+a+", "+(r=r.substring(0,r.length-1))+';}25% {font-variation-settings:"'+t+'" '+n+", "+r+';}50% {font-variation-settings:"'+t+'" '+s+", "+r+";}")}$("#style__fvar-animation").html(o),$("#"+e).css("font-variation-settings","unset").css("animation",t+"infinite 4s ease-in-out infinite"),isAnimating=!0}}