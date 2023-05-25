// Selecting all the form fields
const nameInput = document.querySelector('[name="name"]');
const u_emailInput = document.querySelector(`[name="u_email"]`);
const phoneInput = document.querySelector(`[name="phone"]`);
const textInput = document.querySelector(`[name="text"]`);

$(function () {
    // Changes colour of navbar to give a colour changing effect
    $(document).scroll(function(){
        $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
    }); 

    // Hover effects for the elements in the nav-bar 
    $(`.navbar-light .navbar-nav .nav-link`).hover(function () {
        $(this).css(`color`, `#B19979`);
    }, function () {
        $(this).css(`color`, `white`);
    });

    // Hover effects for the button btnD1
    $(`.btnD1`).hover(function() {
        $(this).css(`background-color`, `#B19979`);
        $(this).css(`color`, `white`);
    }, function () {
        $(this).css(`background-color`, `#fff`);
        $(this).css(`color`, `#000`);
    });

    // Adding focus effects to input fields
    $(`.feedback .form-control`).focus(function () {
        $(this).css(`border`, `none`);
        $(this).css(`box-shadow`, `none`);
        $(this).css(`border-bottom`, `4px solid #B19979`);
    });

    // Adding hover effects to input fields
    $(`.feedback .form-control`).hover(function () {
        $(this).css(`border`, `none`);
        $(this).css(`box-shadow`, `none`);
        $(this).css(`border-bottom`, `4px solid #B19979`);
    }, function () {
        $(this).css(`border-bottom`, `none`);
    });

    $(`[name="name"]`).on(`keyup` ,function () {
        localStorage.setItem(`nameInput`, $(this).val());
    });

    $(`[name="u_email"]`).on(`keyup` ,function () {
        localStorage.setItem(`u_emailInput`, $(this).val());
    });

    $(`[name="phone"]`).on(`keyup` ,function () {
        localStorage.setItem(`phoneInput`, $(this).val());
    });

    $(`[name="text"]`).on(`keyup` ,function () {
        localStorage.setItem(`textInput`, $(this).val());
    });

    $(`form`).validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
            },
            u_email: {
                required: true,
                email: true,
                maxlength: 255
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10,
            },
            text: {
                required: true,
                minlength: 2
            },
            messages: {
                name: {
                    required: 'This field is required',
                    minlength: `Name should have more than 2 characters`
                },
                phone: {
                    required: 'This field is required'
                },
                u_email: 'Enter a valid email',
                text: `required`
            },
            submitHandler: function(form) {
                form.submit();
            }
        }
    });
});

const formSubmitBtn = document.querySelector(`.form-group button`);

formSubmitBtn.addEventListener(`click`, function() {
    localStorage.clear();
    console.log(`pressed submit`);
});

// Check if there are any saved values in local storage and set them as the input values
if (localStorage.getItem('nameInput')) {
    nameInput.value = localStorage.getItem('nameInput');
}

if (localStorage.getItem('u_emailInput')) {
    u_emailInput.value = localStorage.getItem('u_emailInput');
}

if (localStorage.getItem('phoneInput')) {
    phoneInput.value = localStorage.getItem('phoneInput');
}

if (localStorage.getItem('textInput')) {
    textInput.value = localStorage.getItem('textInput');
}

// Add event listeners to save the input values to local storage whenever they are changed
nameInput.addEventListener('change', function() {
    localStorage.setItem('nameInput', nameInput.value);
});

u_emailInput.addEventListener('change', function() {
    localStorage.setItem('u_emailInput', emailInput.value);
});

phoneInput.addEventListener('change', function() {
    localStorage.setItem('phoneInput', phoneInput.value);
})

textInput.addEventListener('change', function() {
    localStorage.setItem('textInput', messageInput.value);
});
