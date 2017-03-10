$.ajax({
  url: 'http://www.randomtext.me/api/lorem/p-1/10-50',
  dataType: 'json',
  success: function(data) {
    
    $(function (){
        var text = data.text_out;
        $("#mount-point").append('<div class="userText" style="order: 1">'+text+'</div>');
    
  })},
});
