var app = AplJS.App({
	"sign":"example",
	"attach":true,
	"name":"Тестовое приложение",
	"bevents": ["keyup"],
	"callback":function(){
		console.log("Start app..");
		this.staff("operation", "");
		this.staff("role", "admin");
	}
}).wait("btn:switchToAdmin", function(){
	this.staff("role", "admin");
}).wait("btn:switchToManager", function(){
	this.staff("role", "manager");
})