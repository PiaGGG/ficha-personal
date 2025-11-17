$(document).ready(() => {
    const $body = $('body');
    const storageKey = 'modoNoche';

    // Aplicar preferencia guardada al cargar
    if (localStorage.getItem(storageKey) === 'true') {
        $body.addClass('dark-mode');
        $('.modo-noche').text('☀️');
    } else {
        $('.modo-noche').text('🌙');
    }

    $('.modo-noche').on('click', () => {
        const enabled = $body.toggleClass('dark-mode').hasClass('dark-mode');
        localStorage.setItem(storageKey, enabled);
        $('.modo-noche').text(enabled ? '☀️' : '🌙');
    });
});