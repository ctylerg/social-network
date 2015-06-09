# a social-network
*It's Twitter-like*

An exclusive social media app.  Users can create an unique user, sign in and post/create/delete posts.  Users also have the option to post pictures.

#Technologies
- Ruby on Rails
- Ruby
- Javascript
- jQuery
- Authentication
- Base 64
- ActiveRecord
- Skeleton



##Screenshots
![Post a Message](/App/assets/images/Profile.png)


![Sign in!](/App/assets/images/Sign-In.png)

#Version 2.0
- location map to show your posts
- more security
- link to friends posts

##Code
(the real reason you have scrolled this far down)

Here is some cool code to bring images in, so that they could be posted.  It took some work but was well worth it.
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






#Author
[Tyler Geneva](https://github.com/ctylerg)
