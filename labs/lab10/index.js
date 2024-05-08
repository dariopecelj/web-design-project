$(document).ready(function() {
  $("#registration-form").validate({
      rules: {
          firstname: "required",
          lastname: "required",
          email: {
              required: true,
              email: true
          },
          password: {
              required: true,
              minlength: 8
          }
      },
      messages: {
          firstname: "Please enter your first name",
          lastname: "Please enter your last name",
          email: "Please enter a valid email address",
          password: {
              required: "Please provide a password",
              minlength: "Your password must be at least 8 characters long"
          }
      },
      submitHandler: function(form) {
          form.submit();
      }
  });
});