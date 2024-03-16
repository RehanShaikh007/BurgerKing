let btn = document.getElementById('order_btn')
let burger = document.getElementById('burger')
let fries = document.getElementById('fries')
let drink = document.getElementById('drink')

let myObj = {
    burger: 'https://th.bing.com/th/id/OIP.cbExHEBoI5yiZc9_WtzJ-gHaFW?rs=1&pid=ImgDetMain',

    fries: 'https://th.bing.com/th/id/OIP.luL7Bd_5I781LTego2kslAHaGL?rs=1&pid=ImgDetMain',

    drink: 'https://th.bing.com/th/id/OIP.Jbut8OEAL8XS1xK-zS7NJQHaIX?rs=1&pid=ImgDetMain',

  
};

function checker() {

    let food = undefined;

    if (!(burger.checked || fries.checked || drink.checked)) {
        alert('Choose Anyone')
        return;
    }

    if (burger.checked) {
        food = burger.value;
    } else if (fries.checked) {
        food = fries.value;
    } else if (drink.checked) {
        food = drink.value;
    } else if (burger.checked || fries.checked || drink.checked ) {
        const foods = Object.keys(myObj);
        food = foods[Math.floor(Math.random() * foods.length)];
    }

    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, 1000)
    })

    promise.then(() => {
        let img = document.getElementById("image")
        img.src = myObj[food];
    }).catch((e) => {
        console.log(e);
    })

}

btn.addEventListener('click', checker);