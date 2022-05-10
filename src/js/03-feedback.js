import throttle from 'lodash.throttle';

const LOCALESTORAGE_KEY = "feedback-form-state";
const feedbackFormRef = document.querySelector(".feedback-form");
const emailRef = document.querySelector("input[name='email']");
const messageRef = document.querySelector("textarea[name='message']");

let inputData = {
    email: "",
    message: ""
}

autoCompleteFormFromLocaleStorage();

feedbackFormRef.addEventListener("input", throttle(writeToLocaleStorage, 500));

// Запись входящих данных в localeStorage
function writeToLocaleStorage() {
    inputData.email = emailRef.value;
    inputData.message = messageRef.value;
    const localeStorageData = JSON.stringify(inputData);
    localStorage.setItem(LOCALESTORAGE_KEY, localeStorageData)
}

// Автозаполнения формы. Если есть данные в LocaleStorage, берем значения из него и подгружаем в окна формы.
function autoCompleteFormFromLocaleStorage() {
    if (localStorage.getItem(LOCALESTORAGE_KEY)) {
        inputData = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY));
        emailRef.value = inputData.email;
        messageRef.value = inputData.message;        
    }
}

feedbackFormRef.addEventListener("submit", onSubmitBtnClick);

function onSubmitBtnClick(event){
    event.preventDefault();
    if(event.target.nodeName !== "FORM"){
        return;
    }

    if (emailRef.value === "" || messageRef.value === "") {
        return alert("Please fill in all the fields!");
      }

    const data = JSON.parse(localStorage.getItem(LOCALESTORAGE_KEY));
    console.log(data);

    emailRef.value = "";
    messageRef.value = "";

    localStorage.removeItem(LOCALESTORAGE_KEY);    
}
