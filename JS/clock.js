const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0")
    const Minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")

    clock.innerHTML = `${hours}:${Minutes}:${seconds}`
}

getClock(); 
setInterval(getClock,1000) //5초다마다 실행되게 하는 함수, 5000ms
