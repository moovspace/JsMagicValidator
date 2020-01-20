# JsInputValidator - form input validation jquery plugin
Validate form input with regex, show input error label with icon, animate and move placeholder to input top.


## Sample html file
JsMagicValidator-plugin.html


### Include files in head
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

<!-- JsMagicValidator -->
<link rel="stylesheet" type="text/css" href="JsMagicValidator.css">
<script src="JsMagicValidator.js"></script> 
```


### Html
```html
<form method="POST">
    <input type="text" name="email" placeholder="Enter e-mail address" value="" class="input-email" data-error="Invalid e-mail address">
    <input type="text" name="username" placeholder="Enter username" value="" class="input-username" data-error="Invalid username (only letters, numbers and dot).">
    <input type="password" name="pass" placeholder="Enter password" value="" class="input-pass" data-error="Invalid password (min. 8 characters)">
    <input type="submit" name="send" value="Login" class="btn">
</form>
```


### Js
```javascript
<script type="text/javascript">
$(document).ready(function() {
    $('.input-email').JsMagicValidator({validate : /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/});
    $('.input-username').JsMagicValidator({validate : /^[a-zA-Z]{1}[a-zA-Z0-9\.]{1,30}$/});
    $('.input-pass').JsMagicValidator({validate : /^[^\s].{8,}$/});
});
</script>
```


### Image
![](https://github.com/moovspace/JsInputValidator/blob/master/JsMagicValidator.png)

#### jQuery plugin how to
- https://learn.jquery.com/plugins/advanced-plugin-concepts/
- https://dzone.com/articles/how-to-write-your-own-jquery-plugin
- https://gabrieleromanato.name/add-properties-and-methods-to-jquery-plugins
- http://yarpo.pl/2011/04/22/jquery-tworzenie-wlasnych-wtyczek/

#### Js import, export ECS6 (ECMAScript 6)
- https://javascript.info/import-export
- https://kursjs.pl/kurs/es6/moduly.php
