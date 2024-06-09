$(document).on('click', '.gallery-image', function () {
    const src = $(this).attr('src');
    $('#modalImage').attr('src', src);
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
});