//bring images in

var reader = new FileReader();
var dataToUpload = {};

$('#file').on('focusout', function() {

  reader.onload = function (event) {
    try {
      console.log(event.target.result);
        dataToUpload.file = event.target.result;
    } catch (ex) {
        throw new Error("Error Error");
    }
  }

  var file = document.getElementById('file');

  reader.readAsDataURL(file.files[0]);
});

imageFile = dataToUpload.file;
