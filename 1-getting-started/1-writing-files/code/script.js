document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        if (button.innerHTML === 'ON') {
            button.innerHTML = 'OFF';
        } else {
            button.innerHTML = 'ON';
        }
    });
});
