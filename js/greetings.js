const USERNAME_KEY = "userName";
const HIDDEN_CLASSNAME = "hidden";
const FADE_OUT_CLASSNAME = "fade-out";

const welcomeContainer = document.querySelector("#welcome-container");
const welcomeForm = document.querySelector("#welcome-form");
const welcomeInput = document.querySelector("#welcome-form input");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onNameSubmit(event){
    event.preventDefault(); // 기본 동작 방지 
    const userName = welcomeInput.value;
    localStorage.setItem(USERNAME_KEY, userName); // DB에 저장
    welcomeContainer.classList.add(FADE_OUT_CLASSNAME); // 페이드아웃 클래스 적용
}

if (savedUsername === null){
    // 저장된 사용자 이름이 없는 경우 => 시작 페이지 
    welcomeContainer.classList.remove(HIDDEN_CLASSNAME)
    welcomeForm.addEventListener("submit", onNameSubmit);

} else{
    // 기본 페이지 
    
}