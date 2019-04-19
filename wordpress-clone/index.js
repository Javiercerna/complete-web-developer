document.onscroll = function (event) {
    let pageTop = window.scrollY;
    let pageBottom = pageTop + window.innerHeight;

    let fadeElements = document.querySelectorAll('.fade');


    for (let ind=0; ind < fadeElements.length; ind++) {
        let elementTop = offset(fadeElements[ind]).top;
        if (elementTop < pageBottom) {
            fadeElements[ind].classList.add('visible')
        }
    }
};

function offset(el) {
    let rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}
