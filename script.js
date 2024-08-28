


const timeFeed = document.getElementById("feedTimer");  
const timeWash = document.getElementById("washTimer");
const timePlay = document.getElementById("playTimer");
const screen = document.getElementById("screen");    
const txt = document.getElementById("textBox");

let item1;
let item2;
let item3;
let timerWash = 60; //start verdier for timere
let timerPlay = 60;
let timerFood = 60;



function washBear() {  
    item1 = '<img src="img/happy.png"/>';  
    screen.innerHTML = item1;

    const washTimer = setInterval(function() {
        timerWash--; // reduserer tid med 1 sek
        timeWash.innerHTML = timerWash; //skal oppdatere html med nåværende tid
        // ikke rør RRRRRRRRR
        if (timerWash === 0) { //sjekker om tiden har kommet til 0sek
            clearInterval(washTimer); //stopper nedtelling
            txt.innerHTML = "BEAR IS SAD"; 
            screen.innerHTML = '<img src="img/sad.png">'; 
        }
    }, 1000);
}

// IKKE RØR NOE OVER DENNE LINJEN VÆR SÅ FUCKING SNILL TAKK

function feedBear() {  
    item2 = '<img src="img/happy.png"/>';  
    screen.innerHTML = item2;

    const feedTimer = setInterval(function() {
        timerFood--; // reduserer tid 1 sek
        timeFeed.innerHTML = timerFood; //skal oppdatere html med nedtelling
        
        if (timerFood === 0) { //sjekker om tiden har kommet til 0sek
            clearInterval(timerFood); //stopper nedtelling
            txt.innerHTML = "BEAR IS SAD"; 
            screen.innerHTML = '<img src="img/knife.png">'; 
        }
    }, 1000);
}

function playWithBear() {  
    item3 = '<img src="img/happy.png"/>';  
    screen.innerHTML = item3;

    const playTimer = setInterval(function() {
        timerPlay--; // reduserer tid
        timePlay.innerHTML = timerPlay; //skal oppdatere html med nedtelling
        
        if (timerPlay === 0) { //sjekker om tiden har kommet til 0sek
            clearInterval(timerPlay); //stopper nedtelling
            txt.innerHTML = "BEAR WANTS TO PLAY"; 
            screen.innerHTML = '<img src="img/crying.png">'; 
        }
    }, 1000);
}



