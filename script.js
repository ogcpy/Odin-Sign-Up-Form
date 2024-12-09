const passwd = document.getElementById("passwd");
const passwdConf = document.getElementById("conf-passwd");
const message = document.getElementById("passwd-match-message");

message.textContent = '* Passwords do not match. ';
        message.style.color = 'red';
        passwdConf.style.border = '2px solid red';

function checkPass() {
    if (passwdConf.value === '') {
        message.textContent = '* Please confirm the password';
        passwdConf.style.border = '1px solid #e5e7eb';
    } else if (passwd.value === passwdConf.value) {
        message.textContent = '* Passwords match!';
        message.style = 'green';
        passwdConf.style.border = '2px solid green';
    } else {
        message.textContent = '* Passwords do not match. ';
        message.style.color = 'red';
        passwdConf.style.border = '2px solid red';
    }
}

passwd.addEventListener('input', checkPass);
passwdConf.addEventListener('input', checkPass);