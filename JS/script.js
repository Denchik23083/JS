function updateTime(){
    time = document.getElementById("time");

    time.innerHTML = new Date().toTimeString();
}

setInterval(updateTime, 1000);