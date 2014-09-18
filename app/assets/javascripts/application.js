// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require bootstrap

$(document).ready(function() {
  $(".has-tooltip").tooltip();
  
  $('body').scrollspy({ target: '.navbar-scroll' });
  
  $("#contact-form-button").on("click", function () {
    var haveError = false;
    $(".alert").remove();
    
    $(".contact-form .form-group").each(function() {
      var $group = $(this);
      $group.removeClass("has-warning has-error has-success");
      if ($group.find("input").val().length === 0) {
        $group.addClass("has-error");
        haveError = true;
      } else {
        $group.addClass("has-success");
      }
    });
    
    if (haveError) {
      $(".container").prepend(
        "<div class='alert alert-danger' role='alert'>You have an error</div>");
    } else {
      $(".container").prepend(
        "<div class='alert alert-success' role='alert'>Great Success!</div>");
    }
  });
});