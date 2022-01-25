app.wait("bind:role", function(value){
	switch(value){
		case "admin": this.beep("setoperation:{admin}"); break;
		case "manager": this.beep("setoperation:{manager}"); break;
	}
}).wait("setoperation:{admin}", function(){
	this.staff("operation", `
		<ul>
			<li>Добавить</li>
			<li>Удалить</li>
			<li>Скрыть</li>
		</ul>
	`);
}).wait("setoperation:{manager}", function(){
	this.staff("operation", `
		<ul>
			<li>Скрыть</li>
		</ul>
	`);
})