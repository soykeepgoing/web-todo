const USERNAME_KEY = "userName";
const FADE_IN_CLASSNAME = "fade-in";
const FADE_OUT_CLASSNAME = "fade-out";

const welcomeContainer = document.querySelector("#welcome-container");
const welcomeForm = document.querySelector("#welcome-form");
const welcomeInput = document.querySelector("#welcome-form input");

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onNameSubmit(event){
    event.preventDefault(); // 기본 동작 방지 
    const userName = welcomeInput.value;
    localStorage.setItem(USERNAME_KEY, userName); // DB에 저장
    welcomeContainer.classList.remove(FADE_IN_CLASSNAME); // 등장 효과 삭제 
    welcomeContainer.classList.add(FADE_OUT_CLASSNAME); 
}

if (savedUsername === null){
    // 저장된 사용자 이름이 없는 경우 => 시작 페이지 
    welcomeContainer.classList.add(FADE_IN_CLASSNAME); // 페이드인으로 등장
    welcomeForm.addEventListener("submit", onNameSubmit); 

} else{
    // 기본 페이지 
    welcomeContainer.classList.add(FADE_OUT_CLASSNAME); 
}