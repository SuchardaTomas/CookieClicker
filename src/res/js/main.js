const cookie = document.getElementById('cookie');
const counter = document.getElementById('counter');
const autoclicker = document.getElementById('autoclicker');
const doubleclick = document.getElementById('doubleclick');

let cookieCount = 0;
let autoClickerPrice = 100;
let doubleClickPrice = 50;

let click = 1;
let multiclick = 2;

cookie.onclick = () => {
    cookieCount += click;
    counter.innerHTML = `Number of cookie: ${cookieCount}`;
}

autoclicker.onclick = () => {
    if (cookieCount >= autoClickerPrice) {
        cookieCount -= autoClickerPrice;
        counter.innerHTML = `Number of cookie: ${cookieCount}`;

        autoclicker.style.display = 'none';

        setInterval(() => {
            cookie.onclick();
        }, 500);
    }
}

doubleclick.onclick = () => {
    if(cookieCount >= doubleClickPrice) {
        cookieCount -= doubleClickPrice;
        counter.innerHTML = `Number of cookie: ${cookieCount}`;
        multiclick++;

        doubleClickPrice *= 2;
        doubleclick.innerHTML = `Buy multiclick ${multiclick}x (${doubleClickPrice})`;

        click++;
    }
}

