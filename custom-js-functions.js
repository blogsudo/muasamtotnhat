(function(a){a.fn.menumaker=function(c){var b=a(this),d=a.extend({title:"Menu",format:"dropdown",sticky:!1},c);return this.each(function(){b.prepend('<div id="menu-button">'+d.title+"</div>");a(this).find("#menu-button").on("click",function(){a(this).toggleClass("menu-opened");var b=a(this).next("ul");b.hasClass("open")?b.hide().removeClass("open"):(b.show().addClass("open"),"dropdown"===d.format&&b.find("ul").show())});b.find("li ul").parent().addClass("has-sub");multiTg=function(){b.find(".has-sub").prepend('<span class="submenu-button"></span>');
b.find(".submenu-button").on("click",function(){a(this).toggleClass("submenu-opened");a(this).siblings("ul").hasClass("open")?a(this).siblings("ul").removeClass("open").hide():a(this).siblings("ul").addClass("open").show()})};"multitoggle"===d.format?multiTg():b.addClass("dropdown");!0===d.sticky&&b.css("position","fixed");resizeFix=function(){768<a.window.outerWidth&&b.find("ul").show();768>=a.window.outerWidth&&b.find("ul").hide().removeClass("open")};resizeFix();return a(window).on("resize",resizeFix)})}})(jQuery);
$(window).bind("scroll",function(){0<$(window).scrollTop()?($("header").css("position","fixed"),$(".menu-wrapper").addClass("fixed"),$(".search-icon").addClass("added")):($("header").removeAttr("style"),$(".menu-wrapper").removeClass("fixed"),$(".search-icon").removeClass("added"))});$(window).resize(function(){res_changes()});function getElementByXpath(a){return document.evaluate(a,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}
function res_changes(){var a=$(".blog-posts").width();$(".comments .fb_iframe_widget > span").css("width",a-17);$(".comments .fb_iframe_widget > span > iframe").css("width",a-17);$(window).width();767<$(window).width()&&1023>=$(window).width()&&($(".widget#HTML2").css("position","inherit"),$(".widget#HTML2").css("top","0"));766>=$(window).width()&&($(".widget#HTML2").css("position","inherit"),$(".widget#HTML2").css("top","0"));300>=$(window).width()?$(".search-input").addClass("small-search"):$(".search-input").removeClass("small-search")}
function removeHtmlTag(a,c){var b=document.createElement("div");b.innerHTML=a;a=b.textContent||b.innerText||"";if(-1!=a.indexOf("<")){for(var b=a.split("<"),d=0;d<b.length;d++)-1!=b[d].indexOf(">")&&(b[d]=b[d].substring(b[d].indexOf(">")+1,b[d].length));a=b.join("")}for(c=c<a.length-1?c:a.length-2;" "!=a.charAt(c-1)&&-1!=a.indexOf(" ",c);)c++;a=a.substring(0,c-1);a=a.replace(/&nbsp;/g," ");a=a.replace(/\u00a0/g," ");return a+"..."}
function createThumb(a){var c=document.getElementById(a),b=document.getElementById("href-"+a),d="<span class='main-img defaul-img'><a href='"+b.innerHTML+"'><img style='float: left;padding: 0px 15px 5px 0px!important;'  src='https://lh3.googleusercontent.com/-TGoUYaPpjII/VRGDv2U6D6I/AAAAAAAAJlw/qmlwwoIuS8w/s"+img_thumb_width+"/blogsudo_default_pic.gif' /></a></span>",c=c.getElementsByTagName("img");1<=c.length&&(d=c[0].src.replace("/s0/","/w"+img_thumb_width+"-h"+img_thumb_height+"-c/"),c=d.replace("/s1600/",
"/w"+img_thumb_width+"-h"+img_thumb_height+"-c/"),c=d.replace("/s596/","/w"+img_thumb_width+"-h"+img_thumb_height+"-c/"),d=c.replace("/s617/","/w"+img_thumb_width+"-h"+img_thumb_height+"-c/"),d='<span class="main-img"><a href="'+b.innerHTML+'"><img style="float: left;padding: 0px 15px 5px 0px!important;" src="'+d+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px"/></a></span>');b.innerHTML="";document.getElementById("thumb-"+a).innerHTML=d}
function createSummary(a){var c=document.getElementById(a),b="<div>"+removeHtmlTag(c.innerHTML,summary_img)+"</div>";c.innerHTML="";document.getElementById("summ-"+a).innerHTML=b};