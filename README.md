# social-network
twitter-like


Users can create an unique user, sign in and post/create/delete posts.

Add pics?

Here is some cool code that I to bring images in so that they could be posted.  It took some work but was well worth it.
```ruby
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
```

Skeleton framework was used for a unified look across the app.
