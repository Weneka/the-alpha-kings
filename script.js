/* Popup Functionality */

const popup = document.getElementById('popup');
const btn = document.getElementById('subscribe');
const span = document.getElementsByClassName('close-popup')[0];

btn.onclick = function() {
    popup.style.display = 'block';
}

span.onclick = function() {
    popup.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

function readMore() {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('moreText');
    const btnText = document.getElementById('btn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more';
        moreText.style.display = 'none';
    }
    
    else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less';
        moreText.style.display = 'inline';
    }
}

btn.addEventListener('click', readMore);