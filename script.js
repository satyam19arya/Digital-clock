const hour= document.getElementById("hour");
const minute= document.getElementById("minutes");
const second= document.getElementById("seconds");
const ampm= document.getElementById("ampm");

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampms= "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        ampms = "PM";
    }

    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    ampm.innerHTML = ampms;
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();