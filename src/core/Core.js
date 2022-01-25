/*------------ Конструктор ------------*/

/**
*	Функция конструктор.
*
*	@author th12legion(Pavlo Kudil)
*
*	@constructor
* 	@this {App}
*
* 	@param {Object} app_options - параметры приложения.
*
*/
function App(app_options = {}){
	if (!(this instanceof App)){return new App(app_options)};
	this.__set_system_options__((typeof app_options["parent"]!="undefined"?app_options["parent"]:"body")); // Установка системных опций
	this.__set_app_options__(app_options);
	if (this.options["auto"]==true){ // Проверяем запускать ли приложение автоматически
		this.run();
	}
}

/*------------ Конструктор ------------*/

/*------------ Вспомагательные функции ------------*/

/**
*	Функция для поиска элементов приложения на котором произошло сосбтие
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} elem - Элемент на котором произошло событие.
* 	@param {Object} attr - Аттрибут элемента, который ищем.
* 	@param {Object} elem - Сигнатура приложения.
*
*	@return {Array} - Массив со статусом и элементом
*
*/
var search_element = function(elem, attr, sign){
	var btn = elem.target.closest("["+attr+"]");
	if (btn==null){return [false,null];}

	var app = btn.closest('[apl-sign="'+sign+'"]');
	if(app==null){return [false,null];}

	return [true, btn];
}
/*------------ Вспомагательные функции ------------*/

/*------------ Установка опций приложения ------------*/

/**
*	Установка базовый опций.
*
*	@author th12legion(Pavlo Kudil)
*
*/
App.prototype.__set_system_options__ = function(parent = "body"){
	this.__started__ = false; // Запущено ли приложение
	this.__attached__ = false; // Прикреплино ли приложение
	this.__timer__ = null; // Запущено ли приложение
	this.__wait_list__ = []; // Массив подписаных событий, который буду ждать их вызова
	this.__scope__ = {}; // Объект для хранения переменных приложения
	this.__body__ = tar(parent); // Ищем основной элемент на странице
	this.__events_nlist__ = {}; // Объект для хранения нужных ивентов на прослушку
	this.__set_system_attached_callback__(); // Прикрипляем основную функцию каллбека событий
}

/**
*	Прикрипляем основную функцию каллбека событий.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/
App.prototype.__set_system_attached_callback__ = function(){
	let _this = this;

	// Функция калбек реагирующая на клик на странице
	this.__attached_callback__ = function(event){
		var [status_btn,btn] = search_element(event, "apl-btn", _this.options["sign"]);
		if (status_btn==true){
			let target = btn.attr('apl-btn');
			let tmp = target.match(/^(btn|route|param|hash|event)/);
			let target_type = (tmp!==null)?tmp[1]:"btn";
			
			target = (tmp===null)?target_type+":"+target:target;
			let [type, ext, method] = parse_wait(target);
			_this.beep(target, btn, event, {"type": type, "ext": ext, "method": method});
			return true;
		}
	};
}

/**
*	Установка опций, которые передали при инициализации.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/
App.prototype.__set_app_options__ = function(app_options = {}){
	this.__set_app_default_options__();
	this.__merge_app_options__(app_options);
}

/**
*	Установка дефолтных опций.
*
*	@author th12legion(Pavlo Kudil)
*
*/
App.prototype.__set_app_default_options__ = function(){
	this.options = { // Список опций приложения
		"type": "apl", // Тип приложения apl || daemon
		"rtime": 1, // Время перевызова таймера если приложение daemon
		"name": null,// Имя приложения
		"sign": null,// Подпись ХТМЛ контейнера приложения, раcполагается в дата атрибуте apl-sign=""
		"attach": false,// Указатель искать ли приложение по сигнатуре
		"auto": false,// Запускать ли приложение автоматически true || false
		"bevents": ["keyup"], // Событие по которому срабатывает связывание поля и переменной
		"callback": function(){}// Функция коллбека, которую приложение вызывает при запуске или каждый раз при вызове демона
	};
}

/**
*	Установка опций, которые передали при инициализации.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/
App.prototype.__merge_app_options__ = function(app_options){
	if (app_options!=undefined && typeof app_options == "object"){ // Если передали объект переписываем свойства в наш объект
		for (var key in app_options){
			this.options[key] = app_options[key];
		}
	}else if(app_options!=undefined && typeof app_options == "function"){ // Если функция, то записываем функцию возврата
		this.options["callback"] = app_options;
	}
}

/*------------ Установка опций приложения ------------*/

/*------------ Запуск/Остановка приложения ------------*/

/**
*	Функция для запуска приложения 
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {Function} callback - функция вызова, не обязательный параметр
*
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.run = function(callback){
	let _this = this;
	// Если приложение запущено, то повторного его не запускаем
	if(this.__started__==true){
		return this;
	}
	// Если надо прикрепить приложение к странице, то прикрепляем его
	if(this.options["attach"]===true){
		this.__attached__ = true;
		this.__body__.listen('on', 'click', this.__attached_callback__);

		window.addEventListener('popstate', function (event) {
			_this.__router_check_run__();
		});

		if(_this.options["bevents"].length>0){
			let bind_evnets = _this.options["bevents"].join(",");
			this.wait("event:["+bind_evnets+"]",function(elem, event){
				let bind = elem.attr("apl-bind");
				if(bind===null || bind===""){return false;}
				if(this.grab(bind)==elem.value){return false;}
				let check = elem.attr("apl-check");
				if(check!=null && elem.value!==""){
					let check_storage = check.split("/");
					if(check_storage.length!=3){
						elem.attr("apl-error", "value");
						return false;
					}
					let check_status = elem.value.match(new RegExp(check_storage[1], check_storage[2]));
					if(check_status===null){
						elem.attr("apl-error", "value");
						return false;
					}
				}
				elem.attr("apl-error", null);
				this.staff(bind, elem.value);
				return true;
			});
		}
	}
	 // Ставим статус запуска приложения
	this.__started__ = true;
	// Если есть новый коллбек, то обновляем коолбек приложения
	if(callback!=undefined && typeof callback == "function"){this.options["callback"] = callback;}
	// Вызываем коолбек

	// Если надо прикрепить приложение к странице, то прикрепляем его
	this.options["callback"].call(this);
	// Если приложение демон то запускаем таймер
	if(this.options["type"]==="daemon"){
		let _this = this;
		this.__timer__ = setInterval(() => {
			_this.options["callback"].call(_this);
		}, this.options["rtime"] * 1000);
	}
	
	this.__router_check_run__();
	
	return this;
}

/**
*	Остановка приложения 
*
*	@author th12legion(Pavlo Kudil)
*
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.stop = function(){
	if(this.__attached__==true){
		this.__body__.listen('off', 'click', this.__attached_callback__);
		this.__attached__ = false;
	}
	this.__started__ = false;

	if(this.options["type"]==="daemon" && this.__timer__!=null){
		clearInterval(this.__timer__);
	}
}

/*------------ Запуск/Остановка приложения ------------*/

/*------------ Регистрация и вызов вейтеров ------------*/
/**
*	Метод для проверки URL и вызова вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*/
App.prototype.__router_check_run__ = function(){
	this.beep("route:"+location.pathname);
	if(location.hash!=""){
		this.beep("hash:"+location.hash);
	}
	let params_pos = location.href.indexOf("?");
	if(params_pos!==-1){
		let params_str = location.href.slice(params_pos+1).split("#")[0];
		let params = parse_params(params_str);
		for(let key in params){
			this.beep("param:"+key, params[key], key);
		}
	}
}

/**
*	Функция для парсинга вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} str_params - строка параметров
*	
*	@return {Object} - Список обработанных параметров
*
*/
var parse_params = function(str_params){
	var ret = {},
		seg = str_params.split('&'),
		len = seg.length, i = 0, s;
	for (;i<len;i++) {
		if (!seg[i]) { continue; }
		s = seg[i].split('=');
		ret[s[0]] = s[1];
	}
	return ret;
}

/**
*	Функция для парсинга вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель на вейтер
*	
*	@return {Array} - Список обработанных параметров
*
*/
var parse_wait = function(raw_target = ""){
	raw_target = raw_target.toLowerCase();
	raw_target = raw_target.replace(/\)[\s]+;/gi, ");").replace(/\/+/gi,"/").replace(/[\/+]$/gi,"");

	let retrun_list = ["", "*", "*", "*"];
	let return_index = 0;
	let part = 0;
	let expression = false;
	let reg_list = [];
	let reg = "";

	for(let i = 0; i<raw_target.length; i++){
		switch (raw_target[i]) {
			case ":":if(part==0){part = 1;return_index = 3;break;}
			case "{":if(part==1 && expression==false){return_index = 1;break;}
			case "[":if(part==1 && expression==false){return_index = 2;break;}
			case "}":
			case "]":if(part==1 && expression==false){return_index = 3;break;}
			default:
				if(expression===true){reg += raw_target[i];}
				if(raw_target[i]=="(" && raw_target.substring(i-3, i)=="reg"){expression = true; reg = "";}
				
				if(raw_target[i]==")" && typeof raw_target[i+1]!="undefined" && raw_target[i+1]==";"){
					expression = false; reg_list.push(reg.substring(0, reg.length - 1)); reg = "";
				}
				retrun_list[return_index] = (retrun_list[return_index]=="*")?"":retrun_list[return_index];
				retrun_list[return_index] += raw_target[i];
				break;
		}
	}
	
	retrun_list[3] = retrun_list[0]+":"+retrun_list[3];
	retrun_list[4] = reg_list;
	for(let i = 0; i<reg_list.length; i++){
		let reg_key = "reg("+reg_list[i]+");";
		retrun_list[3] = retrun_list[3].replace(reg_key, "reg@"+i);
	}
	retrun_list[3] = retrun_list[3].replace(/\s+/gi, "");
	retrun_list[2] = retrun_list[2].replace(/\s+/gi, "");
	
	return retrun_list;
}

/**
*	Функция запуска листенеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {Object} event_list - Список ивентов
*	
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.__start_event_listeners__ = function(){
	if(this.options["attach"]===false){
		return this;
	}

	let _this = this;
	for(let key in this.__events_nlist__){
		if(this.__events_nlist__[key]!==null){continue;}
		(function(event_name){
			_this.__events_nlist__[key] = function(event){
				var [status_element, element] = search_element(event, "apl-event", _this.options["sign"]);
				if (status_element==true){
					let target = element.attr('apl-event');
					let tmp = target.match(/^(event)/);
					let target_type = (tmp!==null)?tmp[1]:"event";
					
					target = (tmp===null)?target_type+":"+target:target;
					let [type, ext, method_raw, target_raw] = parse_wait(target);
					let method_storage = method_raw.split(",");
					for(let i = 0; i<method_storage.length; i++){
						let method = method_storage[i];
						if(method!="*" && method!=event_name){
							continue;
						}
						target = target_raw+"{"+ext+"}"+"["+method+"]";
						_this.beep(target, element, event, {"type": type, "ext": ext, "method": method});
					}
					return true;
				}
			}
		})(key);
		
		this.__body__.listen('on', key, this.__events_nlist__[key]);
	}

	return this;
}

/**
*	Функция для добавления в список цели для прослушивания кликов на псевдокнопки приложени
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какой вейтер слушать
*	@param {Function} callback - функция вызова, не обязательный параметр
*	
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.wait = function(raw_target = "", callback){
	//if(raw_target.indexOf(":")==-1){return this;}
	callback = callback || function(){};
	
	let [type, ext, method_raw, target, exprs] = parse_wait(raw_target);
	if(type===target || (type=="event" && method_raw==="*")){return this;}
	
	let method_storage = method_raw.split(",");
	for(let i = 0; i<method_storage.length; i++){
		let method = method_storage[i];

		if(type=="event"){
			if(typeof this.__events_nlist__[method]=="undefined"){
				this.__events_nlist__[method] = null;
			}

			this.__start_event_listeners__();
		}
		
		if(typeof this.__wait_list__[target]=="undefined"){
			this.__wait_list__[target] = [];
		}

		this.__wait_list__[target].push({"ext":ext,"func":callback, "exprs":exprs, "method":method, "type":type});
	}

	return this;
}

/**
*	Функция для вызова функции, которую поставили на прослушку
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какую кнопку слушать
*	@param {Разный тип} arguments - data параметры, который надо передать в функцию.
*	
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.beep = function(raw_target){
	//if(raw_target.indexOf(":")==-1){return this;}
	
	let args = Array.prototype.slice.call(arguments, 1);
	if(args.length==0){
		args.push(null);
	}
	
	let [type, ext, method, target] = parse_wait(raw_target);
	
	let return_values = {},
		return_value = null;
	let return_status = false;
	let wait_index = 1;
	let _this = this;
	let force_waiters = function(parent, out_args){
		for (let i = 0; i<parent.length; i++){
			if (ext!="*" && parent[i]["ext"]!=ext){
				continue;
			}
			
			if (method!="*" && parent[i]["method"]!=method){
				continue;
			}
			
			return_value = parent[i]["func"].apply(_this, out_args);
			if (return_value!=null && typeof return_value != "undefined"){
				return_status = true;
				if(parent[i]["ext"]=="*"){
					return_values["wait_"+wait_index] = return_value;
					wait_index++;
				}else{
					return_values["wait_"+parent[i]["ext"]] = return_value;
				}
			}
		}
	}

	if (this.__wait_list__[type+":*"]!=undefined ){
		force_waiters(this.__wait_list__[type+":*"], args);
	}
	
	if(target==type+":*"){
		for(let key in this.__wait_list__){
			if(this.__wait_list__[key][0]["type"]!=type 
			   || key == this.__wait_list__[key][0]["type"]+":*"){continue;}
			force_waiters(this.__wait_list__[key], args);
		}
	}else if (this.__wait_list__[target]!=undefined){
		force_waiters(this.__wait_list__[target], args);
	}else if (type === "route"){
		for(let key in this.__wait_list__){
			if(this.__wait_list__[key][0]["type"]!="route" || key == this.__wait_list__[key][0]["type"]+":*"){continue;}
			let beep_storage = target.substring(type.length+1).split("/");
			let list_storage = key.substring(type.length+1).split("/");
			beep_storage = beep_storage.filter(i => i);
			list_storage = list_storage.filter(i => i);
			
			if(beep_storage.length!=list_storage.length){break;}
			let compare = true;
			let route_args = {};
			
			for(let j = 0; j<beep_storage.length; j++){
				let var_name = "";
				let var_expr = "";
				let var_expr_keys = "";

				if(list_storage[j].slice(0,4)==="reg@"){
					let expr_key = parseInt(list_storage[j].slice(4));
					let expr_raw = this.__wait_list__[key][0]["exprs"][expr_key];
					if(expr_raw[0]!="/"){
						let var_pos = expr_raw.indexOf(":");
						if(var_pos!=-1){
							var_name = expr_raw.substring(0, var_pos);
							var_expr = expr_raw.substring(var_pos+1);
							let tmp = var_expr.split("/");
							tmp = tmp.filter(i => i);
							var_expr = tmp[0];
							var_expr_keys = tmp[1];
						}
					}

					let reg = (var_expr!="")?new RegExp(var_expr, var_expr_keys):"";

					if(reg=="" || beep_storage[j].match(reg)===null){
						compare = false;
						break;
					}else{
						route_args[var_name] = beep_storage[j];
					}
				}else if(beep_storage[j]!=list_storage[j]){
					compare = false;
					break;
				}
			}
			if(compare===true){
				force_waiters(this.__wait_list__[key], [route_args]);
			}
		}
	}
	
	// Если надо вернуть все параметры и есть что возвращать, возвращаем это
	if (ext!="*" && return_status==true){
		return return_values[ext];
	}
	
	return (return_status==false)?this:return_values;

}

/**
*	Функция для удаления вейтера из приложения
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какой вейтер удалять
*	
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.del = function(raw_target = ""){
	if(raw_target.indexOf(":")==-1){return this;}
	
	let [type, ext, method, target] = parse_wait(raw_target);

	delete this.__wait_list__[target];

	return this;
}

/*------------ Регистрация и вызов вейтеров ------------*/

/*------------ Работа с хранилищем данных ------------*/

/**
*	Функция для задания переменной
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} name - Имя переменной.
*	@param {Разный тип} val - Значение переменной.
*	@param {Boolean} bind - Отправлять ли событие bind.
*	
*	@return {this} - Возвращаем объект App
*
*/
App.prototype.staff = function(name, val = null, bind = true, protection = false){
	this.__scope__[name] = val;
	if(bind===true){
		this.beep("bind:"+name, val, name);
	}
	
	if(this.options["attach"]==true){
		let bind_elems = tar('[apl-sign="'+this.options["sign"]+'"] [apl-bind="'+name+'"]', -1);
		for(let i = 0; i<bind_elems.length; i++){
			let bind_elem = bind_elems[i];
			if(bind_elem!=null && typeof bind_elem.value!="undefined" && bind===true && bind_elem.value!=val){
				bind_elem.value = (val===null || typeof val=="undefined")?"":val;
			}else if(bind_elem!=null && typeof bind_elem.innerHTML!="undefined" && bind===true && protection===false){
				bind_elem.innerHTML = (val===null || typeof val=="undefined")?"":val;
			}else if(bind_elem!=null && typeof bind_elem.innerText!="undefined" && bind===true && protection===true){
				bind_elem.innerText = (val===null || typeof val=="undefined")?"":val;
			}
		}
	}

	return this;
}

/**
*	Функция для взятия переменной
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} name - Имя переменной
*	@param {Разный тип} dval - Дефолтное значение переменной, если переменная не существует.
*	
*	@return {Разный тип} - Значение переменной
*
*/
App.prototype.grab = function(name, dval = null){
	return (typeof this.__scope__[name]=="undefined")?dval:this.__scope__[name];
}

/*------------ Работа с хранилищем данных ------------*/

/*------------ APL атрибуты ------------*/

// apl-sign
// apl-btn
// apl-event
// apl-bind
// apl-check

/*------------ APL атрибуты ------------*/

export default App;