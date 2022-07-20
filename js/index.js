let timeClock = document.querySelector('.clock>.time');
let dateClock = document.querySelector('.clock>.date');
window.onload = function(){
    window.setInterval(function(){
            var now = new Date();
            
            const year = now.getFullYear();
            const date = now.getDate();
            let month = now.getMonth() + 1;
            if (month < 10) month = '0' + month;
    
            const formatted = `${date}.${month}.${year}`;

            timeClock.innerHTML = now.toLocaleTimeString();
            dateClock.innerHTML = formatted;
    }, 1000);
};