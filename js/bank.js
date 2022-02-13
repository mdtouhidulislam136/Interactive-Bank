document.getElementById('login-button').addEventListener('click', function() {
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;


    if (userEmail == 'mdtouhidul.islam@tuni.fi' && userPassword == 'secret'){
        window.location.href='banking.html';

    }


});