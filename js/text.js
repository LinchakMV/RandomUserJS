$.ajax({
  url: 'http://www.randomtext.me/api/lorem/p-1/10-50',
  dataType: 'json',
  success: function(data) {
    
    $(function (){
        var text = data.text_out;
        $("#mount-point").append('<div class="userText" style="order: 1">'+text+'</div>');
    
  })},
});

// // Создаём объект запроса
// var request = new XMLHttpRequest();

//  // Указываем тип запроса (GET) и адрес, к которому будет выполнятся запрос
// var url = "http://www.randomtext.me/api/lorem/p-1/10-50";
// request.open("GET", url);


// // Задаём функцию, которая будет вызываться при изменении состояния готовности запроса
// request.onreadystatechange = function () { 
// 	// Проверяем состояние готовности и статус запроса
// 	if (request.readyState === 4 && request.status === 200) { 
// 		// Десериализуем полученную JSON строку в объект JavaScript
// 		var response = JSON.parse(request.responseText);
// 	}
// }