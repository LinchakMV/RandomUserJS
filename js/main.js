$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) { $.each(data.results, function(index, value){
    $(function (){
        var lastName = value.name.last; s = lastName.charAt(0).toUpperCase() + lastName.substr(1);
        var firstName = value.name.first; a = firstName.charAt(0).toUpperCase() + firstName.substr(1);
        var fullName = s + " " + a; 
        var photoUser = value.picture.large;
        $("#mount-point").append('<div class="userGenerate"><img src="'+photoUser+'" alt=""/><p>'+fullName + '</p></div>');
    });
  })},
});


