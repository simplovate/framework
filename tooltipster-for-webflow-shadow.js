function tooltipster_init() {
    $('[tooltipster="top"]').tooltipster({
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        speed: 150,
        maxWidth: 300,
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="bottom"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        position: 'bottom',
        maxWidth: 300,
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="left"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        position: 'left',
        maxWidth: 300,
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="right"]').tooltipster({
        animation: 'fade',
        delay: 20,
        speed: 150,
        maxWidth: 300,
        position: 'right',
        maxWidth: 300,
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="right-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'right',
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="top-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'top',
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="left-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'left',
        theme: 'tooltipster-shadow'
    });
    $('[tooltipster="bottom-delay"]').tooltipster({
        animation: 'fade',
        delay: 800,
        speed: 150,
        maxWidth: 300,
        position: 'bottom',
        theme: 'tooltipster-shadow'
    });
}

$(document).ready(function() {
    tooltipster_init();
});
