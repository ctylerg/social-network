//bring images in

var reader = new FileReader();
reader.onload = function (event) {
  try {
    $('#image').val(event.target.result);
  } catch (ex) {
    throw new Error("Error Error");
  }
}


var dataToUpload = {};

$(document).ready(function(){

  $('#file').on('focusout', function() {
    var file = document.getElementById('file');
    reader.readAsDataURL(file.files[0]);  // When complete... run reader.onload
  });

});
