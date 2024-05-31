$(document).on('click', '.toggle-btn', function () {
    const faqContent = document.querySelector('.faq-content');
    if (faqContent) {
        faqContent.style.display = faqContent.style.display === 'none' ? 'block' : 'none';
    }
});