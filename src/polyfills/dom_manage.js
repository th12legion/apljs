/*------------ Работа с селекторами ------------*/
if (!Element.prototype.matches) {
	Element.prototype.matches = Element.prototype.matchesSelector || 
	Element.prototype.mozMatchesSelector ||
	Element.prototype.msMatchesSelector || 
	Element.prototype.oMatchesSelector || 
	Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
	Element.prototype.closest = function(css) {
		var node = this;
		while (node) {
			if (node.matches(css)) return node;
			else node = node.parentElement;
		}
		return null;
	};
}

if (!document.querySelectorAll){
	document.querySelectorAll = function (selector){
		var colections = [],
			elements = document.getElementsByTagName("*");
		[].forEach.call(elements,function(el){
			if (el.matches(selector)==true) {
				colections.push(el);
			}
		});
		return colections;
	};
}

if (!Element.prototype.find) {
	Element.prototype.find = function(selector){
		var elemets = this.querySelectorAll(selector);
		return elemets;
	}
}
/*------------ Работа с селекторами ------------*/

/*------------ Работа с фтрибутами ------------*/
if (!Element.prototype.attr) {
	Element.prototype.attr = function(name, value){
		if(this == null){return false;}
		var name = name || "";
		var value = (typeof value=="undefined")?false:value;
		
		if (name==""){
			return false;
		}
		
		if(value===null){
			this.removeAttribute(name);
			return true;
		}else if(value===false){
			return this.getAttribute(name);
		}else{
			this.setAttribute(name, value);
			return true;
		}
	}
}
/*------------ Работа с фтрибутами ------------*/

export var dom_manage = true;