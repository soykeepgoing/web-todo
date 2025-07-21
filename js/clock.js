const dateText = document.querySelector("h2#date");
const oneMinute = 1000 * 60; // 1000ms * 60
function getDate(){
    const date = new Date();
    const year = String(date.getFullYear()); 
    const month =String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    dateText.innerText = `${year}.${month}.${day} ${hours}:${minutes}`;
}

getDate();
setInterval(getDate, oneMinute);