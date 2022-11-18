const displayBoard = document.getElementById('game-board');

displayBoard.firstElementChild.focus();
let el = displayBoard.firstElementChild;

const keys = document.querySelectorAll('.keyboard-row button');
keys.forEach(key => key.addEventListener('click', (e) => {
    el.focus();
    console.log(e.target.getAttribute('data-key'));
    el.value = e.target.getAttribute('data-key');
    el.setAttribute('disabled', true);
    el.nextElementSibling.removeAttribute('disabled');
    el = el.nextElementSibling;

}));

document.addEventListener('keypress', (e) => {
    el.focus();
    console.log(typeof(e.key));
    el.value = e.key;
    el.setAttribute('disabled', true);
    el.nextElementSibling.removeAttribute('disabled');
    el = el.nextElementSibling;
});







