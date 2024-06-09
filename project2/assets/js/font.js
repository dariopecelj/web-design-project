$(document).on('click', '#smallFont', function () {
    $('.font-changeable').css('--font-size', '0.8rem'); // Adjust font size as needed
});

$(document).on('click', '#normalFont', function () {
    $('.font-changeable').css('--font-size', '1rem'); // Adjust font size as needed
});

$(document).on('click', '#largeFont', function () {
    $('.font-changeable').css('--font-size', '1.2rem'); // Adjust font size as needed
});
