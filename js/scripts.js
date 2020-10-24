$(document).ready(() => {
    $('.readMore').on('click', (e) => {
        e.preventDefault();
        let text = $(e.target).siblings('.friends__text');
        text.toggleClass('show');
        if (text.hasClass('show')) {
            $(e.target).text('Скрыть');
        } else {
            $(e.target).text('Читать текст полностью...');
        }
    });
});
