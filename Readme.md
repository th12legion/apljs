# Описание
Маленькая библиотека для работы с веб страницей. Без реактиности и сложных концепций. Некоторые возможности:
- Ловить события;
- Управлять структурой дом дерева;
- Связывать переменные со страницей(Обновление рендера на странице, привязка к инпуту);
- Создавать базовую структуру приложение и т.д.

Так же библиотека может работать и  независимо от страницы и просто выполнять задачу построения каркаса приложения.

# Зависимости
Нет никаких зависимостей. Все, что вам нужно, уже добавлено, включая полифиллы для работы в старых браузерах. 

# Как это работает?
Для начала работы надо создать приложение.
```javascript
	let app = AplJS.App();
```
Это приложение, с помощью которого вы можете взаимодействовать со страницей. Чтобы сделать его действительно полезным при создании, вы можете передать необходимые параметры. Приложение принимает в качестве объекта один параметр (параметры по умолчанию перечислены ниже). 

```javascript
	{ // Список опций приложения
		"type": "apl", // Тип приложения apl || daemon
		"rtime": 1, // Время перевызова таймера если приложение daemon
		"name": null,// Имя приложения
		"sign": null,// Подпись ХТМЛ контейнера приложения, раcполагается в дата атрибуте apl-sign=""
		"attach": false,// Указатель искать ли приложение по сигнатуре
		"auto": false,// Запускать ли приложение автоматически true || false
		"bevents": ["keyup"], // Событие по которому срабатывает связывание поля и переменной
		"callback": function(){}// Функция коллбека, которую приложение вызывает при запуске или каждый раз при вызове демона
	}
```
Важным параметром является sign , который связывает приложение со страницей. Принимает селектор. 

```javascript
	let app = AplJS.App({
		"sign": "test"
	});
```
На странице должен быть добавлен элемент с атрибутом apl-sign. Таких элементов может быть много.

```html
	<div apl-sign="test"></div>
```

Параметр attach сообщает приложению, следует ли прикреплять приложение к странице. 

После создание приложение нужно его запустить.

```javascript
app.run();
```

У приложение есть список публичных методов:
- run;
- stop;
- wait
- beep;
- del;
- staff;
- grab.

# run
Метод run запускает приложение и принимает в себя один параметр.
При вызове метода можно передать функцию обратного вызова, которую надо вызвать после старта приложения. В этой функции более высокий приоритет чем у той, котрую можно передать в качестве параметра при создание приложение. Если параметр не указан, будет вызвана функция с параметров.

# stop
Остановка приложения и отключение его от страницы.

# wait
Метод который заставляет приложение ожидать определенного действие от страниц, пользователя или внутренних вызовов. У методе есть определенный форматы записи и принимает два обязательных параметра.

```javascript
	app.wait("", function(){
		// Будет вызвано при срабатывание нужного вейта
	})
```

Первый параметр является таргетом вейта и имеет такую структуру.

"type:pointer{extension}[method]"

type может быть двух видов:
- Системный;
- Пользовательский.

Системные типы:
- bind(привязка к изменениям состояния переменных);
- btn(привязка к кликабельному элементу на странице);
- event(привязка к событиям);
- hash(привязка к url hash);
- route(привязка к url).
- param(привязка к get параметрам).

Пользовательский тип - что угодно кроме системных типов.
Например:
- test;
- hello и т.д.

```javascript
	app.wait("btn", ()=>{});
	app.wait("hello", ()=>{});
```

Для вызова wait достаточно типа. Но, для более удобной работы 
после типа можно указать двоеточие и в любом порядке указатель, расширение и метод.

## Указатель
Так как вейтов одного типа может быть много для указания конкретного вейта можно добавить указатель.

```javascript
	app.wait("btn:show", ()=>{
		console.log("Кто-то нажал на кнопку.");
	});
	app.wait("hello:world", ()=>{
		console.log("Привет, мир!");
	});
	app.wait("hello:john", ()=>{
		console.log("Привет, Джон Доу!");
	});
```

## Расширение
Вейты могут возвращать значения. Из за множественности вейтов одного вида при возвращение значения из вейта они возвращают значение всех вызваных вейтов в виде объекта с ключами. Ключ состоит из 
wait_ИНДЕКС_ТЕКУЩЕГО_ВЕЙТА (wait_1, wait_2 и т.д.).
Для более удобной работы с возвращаемыми значениями можно использовать расширение. Оно позволяет идентифицировать возвращенное значение.


```javascript
	app.wait("hello:world{forAll}", ()=>{
		console.log("Привет, мир!");
		return "world";
	});
	app.wait("hello:john{onlyJohn}", ()=>{
		console.log("Привет, Джон Доу!");
		return "john";
	});
```
При вызове таких вейтом общим методом они вернут значения в виде.
```json
	{
		"wait_forAll": "world",
		"wait_onlyJohn": "john"
	}
```

## Метод
Метод в большей своей степени указывается для работы c разными системными вещами. Например указание событий на которые будет реагировать ивентовый вейтер. Так же метод можно передавать несколько параметров [Первый метод, Второй метод].

```javascript
	app.wait("event:[keyup, keydown]", (elem, event, info)=>{
		console.log("Событие в инпуте!");
		console.log(elem, event, info);
	});
```

Как и расширение, метод можно использоваться как дополнительный способ идентивикации вейта, поэтому может принимать любое значение.

## Полный wait

```javascript
	app.wait("hello:world{forAll}[console]", ()=>{
		console.log("Hello, world!");
	});

	app.wait("hello:world{forAll}[alert]", ()=>{
		alert("Hello, world!");
	});
```

# beep

Для вызова wait нужно сообщить приложению об этом. Для этого используется метод beep. Первым параметром он принимает таргет созданого ранее вейта. Далее передаются параметры, которые вейт принимает.

```javascript
	app.beep("hello:world{forAll}[console]");
	app.beep("hello:world{forAll}[alert]");

	app.wait("hello:name", (name)=>{
		console.log("Hello, "+name+"!");
	});

	app.beep("hello:name", "John");
```

## Работа с возвращаемым значением

При вызове beep все подходящие вейты будут вызваны и вернут значения в виде объекта с ключами. С подписью, либо с индексом. Но если выполнить beep c расширением то, будет возвращено только одно значение где будет совпадение с расширением вейта.  

```javascript
	app.wait("hello:name{withStatus}", (name)=>{
		console.log("Hello, "+name+"!");
		return true;
	});
	let status = app.beep("hello:name{withStatus}", "John");
```

# del

Метод для удаления вейта. Первым параметром он принимает таргета созданого ранее вейтера. При удаление учитывается только тип и указатель.
Таргет вида "hello:world{forAll}[console]" будет равен "hello:world".

# staff

Для работы с состоянием приложения используются несколько методов. Для создания и изменения переменной библиотека предоставляет метод staff.

```javascript
	app.staff("name", "John");
```

Метод принимает 3-й параметр. true или false.
Если параметр ровняется true(по умолчанию). То будет инициировано системное собитие bind и будут вызваны все вейты, которые привязаны к изминениям данной переменной.

Метод принимает 4-й параметр. true или false.
Если параметр ровняется false(по умолчанию). То html будет выведен как есть. Если true то, html будет выведен как текст.

```javascript
	app.wait("bind:name", (val, name)=>{
		console.log("Была изменена переменная:", name, val);
	});
	app.staff("name", "John");
```

# grab

Для взятия текущего состояния переменной используется метод grab.
Принимает два параметра имя переменной и значение по умолчанию.

```javascript
	app.grab("name");
	app.grab("name", "John");
```

# Работа с системными типами вейтеров
- bind(привязка к изменениям состояния переменных);
- btn(привязка к кликабельному элементу на странице);
- event(привязка к событиям);
- hash(привязка к url hash);
- route(привязка к url).
- param(привязка к гет параметрам).

## bind

```javascript
	app.wait("bind:name", (value, name)=>{
		console.log("Имя:", value);
	});
```

## btn

```html
	<div apl-btn="show">Показать</div>
```

```javascript
	app.wait("btn:show", (element, event, info)=>{
		console.log("Показать имя.");
	});
```

## event

```html
	<div apl-event="[click]">Показать</div>
```

```javascript
	app.wait("event:[click]", (element, event, info)=>{
		console.log("Показать имя.");
	});
```
## hash

```javascript
	app.wait("hash:#john", ()=>{
		console.log("Пользователь Джон.");
	});
```

## route

```javascript
	app.wait("route:/about", ()=>{
		console.log("Библиотека для работы со страницей.");
	});
```

Можно использовать регулярные выражения.

```javascript
	app.wait("route:/user/name:reg(/.+/gi);", (params)=>{
		console.log("Привет", params["name"]);
	});
```

## param

```javascript
	app.wait("param:lang", (value, name)=>{
		console.log("Язык страницы:", value);
	});
```

# Привязка состояния переменной к странице
Привязка двусторонняя.

```html
	<input type="text" apl-bind="name" apl-event="[keyup]"/>
```
apl-bind="name" привязывает инпут к изменениям от приложение.
apl-event="[keyup]" сообщает приложению об изменениях.

Проверка значения перед передачей приложению.
Пока значение не совпадет с регулярным выраженим или не будет пустым байнд вейтеры не получат значение.

```html
	<input type="text" apl-bind="mail" apl-event="[keyup]" apl-check="/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/"/>
```

```javascript
	app.staff("name", "Джон");
	app.wait("bind:name", (value)=>{
		console.log("Новое значение имени:", value)
	});
	app.wait("bind:mail", (value)=>{
		console.log("Новое значение почты:", value)
	})
```
# Использование стрелочной функции

Стрелочные функции можно использовать как и обычные. Но они теряют this приложения.