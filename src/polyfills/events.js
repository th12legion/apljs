/*------------ Слушатели на события ------------*/
if (!Element.prototype.njEventStorage) {
	Element.prototype.njEventStorage = [];
}

if (!Element.prototype.listen) {
	Element.prototype.listen = function(mode,eventName,callBack){
		var mode = mode.toLowerCase();
		if (mode=="on"){
			if (eventName==undefined){return false;}
			var callBack = callBack || function(){};
			this.njEventStorage.push({evt:eventName, func:callBack});
			this.addEventListener(eventName, callBack);
		}else if('off'){
			if (callBack==undefined && eventName==undefined){
				for(var i=0,len = this.njEventStorage.length; i<len; i++){
					this.removeEventListener(this.njEventStorage[i].evt,this.njEventStorage[i].func);
				}
				this.njEventStorage = [];
			}else if(callBack==undefined && eventName!=undefined){
				var tempNewStorage = [];
				for(var i=0,len = this.njEventStorage.length; i<len; i++){
					if (eventName==this.njEventStorage[i].evt){
						this.removeEventListener(this.njEventStorage[i].evt,this.njEventStorage[i].func);
					}else{
						tempNewStorage.push(this.njEventStorage[i]);
					}
				}
				this.njEventStorage = tempNewStorage;
			}else if(callBack!=undefined && eventName!=undefined){
				this.removeEventListener(eventName,callBack);
			}
		}
		return this;
	}
}
if (!Element.prototype.on) {
	Element.prototype.on = function (eventName,callBack){
		return this.listen("on",eventName,callBack);
	}
}

if (!Element.prototype.off) {
	Element.prototype.off = function (eventName,callBack){
		return this.listen("off",eventName,callBack);
	}
}

if (!Element.prototype.mouseClick) {
	Element.prototype.mouseClick = function (){
		var evt = new MouseEvent("click", {
				bubbles: true,
				cancelable: true,
				view: window
			});
		this.dispatchEvent(evt);
		return this;
	}
}
/*------------ Слушатели на события ------------*/

export var events = true;