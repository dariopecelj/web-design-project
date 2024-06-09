var users = [];
var messages = [];

// Function to serialize form data
serializeForm = (form) => {
    let jsonResult = {};
    $.each($(form).serializeArray(), function() {
        jsonResult[this.name] = this.value;
    });
    return jsonResult;
};

// Function to handle the main form submission
$("#contact-form").validate({
    rules: {
        name: 'required',
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 20
        }
    },
    messages: {
        name: 'Please enter your name',
        email: {
            required: 'Please enter your email',
            email: 'Please enter a valid email address'
        },
        password: {
            required: 'Please enter a password',
            minlength: 'Password must be at least 8 characters long',
            maxlength: 'Password cannot be longer than 20 characters',
        }
    },
    submitHandler: function(form, event) {
        try {
            $.blockUI({ message: '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>' });
            event.preventDefault();
            let data = serializeForm(form);
            users.push(data);

            // Reset the form
            $("#contact-form")[0].reset();

            // Unblock UI and show success toast after request is complete
            setTimeout(function() {
                console.log(users);
                $.unblockUI();
                toastr.success('Form submitted successfully.', 'SUCCESS');
                // Show the modal
                $('#contact-modal').modal('show');
            }, 1000);

        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
            toastr.error('An error occurred. Please try again later.', 'ERROR');
        }
    }
});

// Function to handle the modal form submission
$("#contact-modal-form").validate({
    rules: {
        username: 'required',
        message: 'required'
    },
    messages: {
        username: 'Please enter the recipient\'s name',
        message: 'Please enter your message'
    },
    submitHandler: function(form, event) {
        try {
            event.preventDefault();
            let data = serializeForm(form);
            messages.push(data);

            // Reset the modal form
            $("#contact-modal-form")[0].reset();

            // Hide the modal and show success toast
            $('#contact-modal').modal('hide');
            toastr.success('Message sent successfully.', 'SUCCESS');

            // Log the messages array to the console
            console.log(messages);
        } catch (error) {
            console.error('Error in submitHandler:', error);
            toastr.error('An error occurred. Please try again later.', 'ERROR');
        }
    }
});
// Function to handle the "Change Password" modal submission
$("#password-modal-form").validate({
    rules: {
        'old-password': 'required'
    },
    messages: {
        'old-password': 'Please enter your old password'
    },
    submitHandler: function(form, event) {
        try {
            event.preventDefault();
            $(form)[0].reset();
            // Hide the current modal
            $('#password-modal-toggle').modal('hide');
            // Show the next modal
            $('#password-modal-toggle2').modal('show');
        } catch (error) {
            console.error('Error in submitHandler:', error);
            toastr.error('An error occurred. Please try again later.', 'ERROR');
        }
    }
});

// Function to handle the second "Change Password" modal submission
$("#password-modal-form2").validate({
    rules: {
        'new-password': {
            required: true,
            minlength: 8,
            maxlength: 20
        }
    },
    messages: {
        'new-password': {
            required: 'Please enter a new password',
            minlength: 'Password must be at least 8 characters long',
            maxlength: 'Password cannot be longer than 20 characters'
        }
    },
    submitHandler: function(form, event) {
        try {
            event.preventDefault();
            // Reset the modal form
            $(form)[0].reset();
            // Hide the modal
            $('#password-modal-toggle2').modal('hide');
            // Show success toast
            toastr.success('Password changed successfully.', 'SUCCESS');
        } catch (error) {
            console.error('Error in submitHandler:', error);
            toastr.error('An error occurred. Please try again later.', 'ERROR');
        }
    }
});

// Function to handle the "Forgot Password" button click event
$(document).on('click', '#forgot-pass-btn', function() {
    // Show the "Change Password" modal
    $('#password-modal-toggle').modal('show');
});


