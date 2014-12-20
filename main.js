var myInputText = document.querySelector('#name');
var myInputEmail = document.querySelector('#myEmail');
var myButton = document.querySelector('#myButton');
var myCheck = document.querySelector('#myCheckbox');
function checkName() {
    var getMyName = document.querySelector('#name').value;
    document.querySelector('#nameErr').innerHTML = "";
    if (!getMyName) {
        document.querySelector('#nameErr').innerHTML = "введите ваше имя";
        setBorderError('name');
        return 1;
    } else if (getMyName.length < 3) {
        document.querySelector('#nameErr').innerHTML = 'имя не может быть меньше 3 символов';
        setBorderError('name');
        return 1;
    } else if (!(/^[a-zA-Z0-9]+$/.test(getMyName))) {
        document.querySelector('#nameErr').innerHTML = 'имя должно состоять из комбинации латинских букв и арабских цифр!';
        setBorderError('name');
        return 1;
    } else {
        return 0;
    }
}
function chekEmail() {
    var getMyEmail = document.querySelector('#myEmail').value;
    document.querySelector('#myEmailErr').innerHTML = "";
    if (!getMyEmail) {
        document.querySelector('#myEmailErr').innerHTML = "введите ваш Email";
        setBorderError('myEmail');
        return 1;
    } else if (!(/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/.test(getMyEmail))) {
        document.querySelector('#myEmailErr').innerHTML = 'Ошибка в E-mail!';
        setBorderError('myEmail');
        return 1;
    } else {
        return 0;
    }
}
function setBorder(id) {
    if (document.querySelector('#name')) {
        id = 'name';
    }
    document.querySelector('#' + id).style.border = "1px solid #C0C0C0";
    document.querySelector('#' + id + 'Err').innerHTML = "";
}
function setBorderError(id) {
    document.querySelector('#' + id).style.border = "1px solid red";
    document.querySelector('#' + id + 'Err').style.color = "red";
}
function checkboxValid() {
    if (myCheck.checked === false) {
        document.querySelector('#myCheckErr').style.color = "red";
    }
}
function checkForm(e) {
    var err, err1, err2;
    err = checkName();
    err1 = chekEmail();
    err2 = checkboxValid();
    if (err === 0 && err1 === 0) {
        document.querySelector('#myForm').submit();
    }
}
myInputText.addEventListener('click', setBorder);
myInputEmail.addEventListener('click', setBorder);

myButton.addEventListener('click', checkForm);