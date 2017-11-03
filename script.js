//Zadacha 7 & 8
document.getElementById('btn1').onclick=years;
function years(){
	var f=document.getElementById('inp1').value; 
		f=parseInt(f); 
	if (f>16) {
			console.log('Добро пожаловать')
	}
	if (f<16){
		console.log('Вы ещё молоды');
	}
	else {
			console.log('Введите возраст');
	}
}	

