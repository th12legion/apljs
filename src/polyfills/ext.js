/*------------ Поиск элементов ------------*/

window.tar = function (selector, output, context){
	switch (typeof selector){
		case "function":
			if ( document.addEventListener ){
				document.addEventListener('DOMContentLoaded', selector);
			}else if (document.readyState && !document.onload) {
				document.onreadystatechange = function() {
					if (document.readyState == "loaded" || document.readyState == "complete") {
						document.onreadystatechange = null;
						selector();
					}
				}
			}else{
				document.onload = selector;
			}
		break;
		case "string":
			var context = context || document,
				index = output || 0,
				elemets = null,
				elem = null;
				
			if ( !selector ){
				return null;
			}
			
			if ( context.querySelectorAll ){
				elemets = context.querySelectorAll(selector);
				if (elemets.length>0){
					if (index==-1){
						var sliceArr = (Array.prototype.slice)?[].slice.call(elemets,0):elemets;
						return sliceArr;
					}
					elem = elemets[index];
					return (elem!=undefined)?elem:null;
				}
				if (index==-1){return [];}
			}
		break;
		case "object":
		case "array":
			//if (nj.require_is(filename)){return nj;}
			var callBack = output || function (){return false;},
				loadedStatus = function (loadedFile,cBack){
					if (loadedFile.readyState && !loadedFile.onload) {
						loadedFile.onreadystatechange = function() {
							if (loadedFile.readyState == "loaded" || loadedFile.readyState == "complete") {
								loadedFile.onreadystatechange = null;
								cBack();
							}
						}
					}else{
						loadedFile.onload = cBack;
					}
				},
				file = "",
				reg = /\.(js|css)/i,
				match = null,
				load_status = true;
			for (var i=0,len=selector.length; i<len; i++){
				load_status = true
				file = selector[i];
				match = reg.exec(file);
				if (match==null){continue;}
				tar('script',-1).forEach(function(script){
					if (script.src.indexOf(file)!=-1){
						load_status = false;
						callBack.call(script);
					}
				});
				tar('link',-1).forEach(function(link){
					if (link.href.indexOf(file)!=-1){
						load_status = false;
						callBack.call(link);
					}
				});
				if (load_status==false){
					//console.log("Tar Файл "+file+" уже загружен!");
					continue;
				}
				switch(match[1]){
					case "js":
						var newFile = document.createElement('script'),
							head = document.getElementsByTagName('HEAD')[0];
						newFile.type = 'text/javascript';
						//document.getElementsByTagName('HEAD')[0].appendChild(newFile);
						head.insertBefore(newFile, head.firstChild);
						loadedStatus(newFile,callBack);
						newFile.src = file;
					break;
					case "css":
						var newFile = document.createElement('link'),
							head = document.getElementsByTagName('HEAD')[0];
						newFile.type = 'text/css';
						newFile.rel = 'stylesheet';
						//document.getElementsByTagName('HEAD')[0].appendChild(newFile);
						head.insertBefore(newFile, head.firstChild);
						loadedStatus(newFile,callBack);
						newFile.href = file;
					break;
				}
			}
			
		break;
	}
	return null;
}

/*------------ Поиск элементов ------------*/

/*------------ Разное ------------*/

if (!Element.prototype.css) {
	Element.prototype.css = function(option,value){
		if (typeof option=="string" && value!=undefined){
			this.style[option] = value;
			return this;
		}else if(typeof option=="string" && value==undefined){
			return (this.style[option]!=undefined)?this.style[option]:"";
		}else if(typeof option == "object"){
			for (var key in option){
				this.style[key] = option[key];
			}
		}
	}
}

if (!Element.prototype.wrap) {
	Element.prototype.wrap = function(parent_element){
		if(parent_element==undefined){return false;}
		parent_element.innerHTML = this.outerHTML;
		this.parentNode.replaceChild(parent_element,this);
		return parent_element;
	}
}

if (!Element.prototype.replace) {
	Element.prototype.replace = function(replace_element){
		if(replace_element==undefined){return false;}
		this.parentNode.replaceChild(replace_element,this);
		return replace_element;
	}
}

if (!Element.prototype.clear) {
	Element.prototype.clear = function(){
		while (this.hasChildNodes()) {
			this.removeChild(this.firstChild);
		}
	}
}

if (!Element.prototype.info) {
	Element.prototype.info = function(){
		var rect_info = this.getBoundingClientRect();
		rect_info.width = (rect_info.width)?rect_info.width:(rect_info.right-rect_info.left);
		rect_info.height = (rect_info.height)?rect_info.height:(rect_info.bottom-rect_info.top);
		
		return {
			'width':rect_info.width,
			'height':rect_info.height,
			'left':rect_info.left,
			'right':rect_info.right,
			'top':rect_info.top,
			'bottom':rect_info.bottom
		};
	}
}

if (!Element.prototype.position) {
	Element.prototype.position = function(){
		var x = (function(elem){
			 var curleft = 0;
			if (elem.offsetParent) {
				while (1) {
					curleft+=elem.offsetLeft;
					if (!elem.offsetParent) {
						break;
					}
					elem=elem.offsetParent;
				}
			} else if (elem.x) {
				curleft+=elem.x;
			}
			return curleft;
		})(this);
		var y = (function(elem){
			var curtop = 0;
			if (elem.offsetParent) {
				while (1) {
					curtop+=elem.offsetTop;
					if (!elem.offsetParent) {
						break;
					}
					elem=elem.offsetParent;
				}
			} else if (elem.y) {
				curtop+=elem.y;
			}
			return curtop;
		})(this);
		
		return {"x":x,"y":y};
	}
}

/**
*	Функция для создания ХТМЛ ноде элементов
*
*	@param {String} name - Имя элемента 
*	@param {Object} attributes - Атрибуты элемента
*	
*	@return {HTMLNode} - ХТМЛ элемент
*
*/
window.newElem = function(name, attributes){
	var el = document.createElement(name);
	if ( typeof attributes == 'object' ) {
		for ( var i in attributes ) {
			el.setAttribute( i, attributes[i] );
			if ( i.toLowerCase() == 'class' ) {
				el.className = attributes[i]; // for IE compatibility
			} else if ( i.toLowerCase() == 'style' ) {
				el.style.cssText = attributes[i]; // for IE compatibility
			}
		}
	}
	for ( var i = 2; i < arguments.length; i++ ){
		var val = arguments[i];
		if ( typeof val == 'string' ) { val = document.createTextNode( val ) };
		el.appendChild( val );
	}
	return el;
}

/*------------ Разное ------------*/

export var ext = true;