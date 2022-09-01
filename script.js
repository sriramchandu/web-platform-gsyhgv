console.log('Hello!');
jQuery(document).ready(function ($) {
  $('#exampleInputEmail1, #exampleInputPassword1')
    .focus(function () {
      $(this).parent().addClass('focused');
    })
    .blur(function () {
      $(this).parent().removeClass('focused');
    });
});
