// <!-- ************ -->

function manageOnClick() {
    const handlerStatus = document.getElementById('if-you-interest');
    handlerStatus.innerText = 'Yes, Absolutely im very interested';
    body.style.backgroundColor = 'orange';


}


// *Right in the input field and then click the button and then show a message for you.
document.getElementById('button-update').addEventListener('click', function() {
    const inputField = document.getElementById('input-field');

    const inputText = inputField.value;
    const p = document.getElementById('input-display');
    p.innerText = inputText;
    inputField.value = '';


});