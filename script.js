let products = [
    {link:"product1.html", image: '1.jpg', name: 'Автомобиль Dodge Charge', price: 9000000},
    {link:"product2.html", image: '2.jpg', name: 'Автомобиль Ford Mustand GT500', price: 82914000},
    {link:"product3.html", image: '3.jpg', name: 'Автомобиль Audi Q8', price: 10600000},
    {link:"product4.html", image: '4.jpg', name: 'Автомобиль Aston Martin', price: 129600000},
    {link:"product5.html", image: '5.jpg', name: 'Автомобиль Ford Mustang Shelby GT500', price: 13520000},
    {link:"product6.html", image: '6.jpg', name: 'Автомобиль Honda NSX', price: 12520014},
    {link:"product7.html", image: '7.jpg', name: 'Автомобиль Audi A5', price: 1450000},
    {link:"product8.html", image: '8.jpg', name: 'Автомобиль Honda Accord 9', price: 2100000},
    {link:"product9.html", image: '9.jpg', name: 'Автомобиль MAZDA 6', price: 3336100},
    {link:"product10.html", image: '10.jpg', name: 'Автомобиль Mercedes-Bens E-200', price: 5550000},
    {link:"product11.html", image: '11.jpg', name: 'Автомобиль Audi e-tron GT', price: 8900000},
    {link:"product12.html", image: '12.jpg', name: 'Автомобиль Subaru BRZ', price: 2318000},
    {link:"product13.html", image: '13.jpg', name: 'Автомобиль McLaren F1', price: 7612800},
    {link:"product14.html", image: '14.jpg', name: 'Автомобиль Chevrolrt Camaro', price: 4850000},
    {link:"product15.html", image: '15.jpg', name: 'Автомобиль Porsche 911', price: 14800000},
    {link:"product16.html", image: '16.jpg', name: 'Автомобиль Alfa Romeo 4C', price: 4100000},
    {link:"product17.html", image: '17.jpeg', name: 'Автомобиль Lotus Evora', price: 7930000},
    {link:"product18.html", image: '18.jpg', name: 'Автомобиль Koenigsegg Agera R', price: 108900000},
    {link:"product19.html", image: '19.jpg', name: 'Автомобиль Audi R8', price: 3996000},
    {link:"product20.html", image: '20.jpg', name: 'Автомобиль Ford GT40', price: 646800000},
];

function showModal(messageText, buttonText) {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    
    let message = modal.getElementsByClassName('message') [0];
    message.innerHTML = messageText;
    let button = modal.getElementsByTagName('button') [0];
    button.innerHTML = buttonText;

    document.body.style.overflow = 'hidden';
    let overlay = document.getElementsByClassName('overlay') [0];
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
}
function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    setTimeout(function() {
    modal.style.visibility = 'hidden';
    }, 350); // 200ms + 150ms
    modal.style.opacity = '0';

    document.body.style.overflow = 'auto';
    let overlay = document.getElementsByClassName('overlay') [0];
    setTimeout(function() {
    overlay.style.visibility = 'hidden';
    }, 200);
    overlay.style.opacity = '0';
}
function notReadyAlert(event) {
    showModal('Sorry, not ready yet!<br>Извините, еще не готово!', 'Эх, жаль');
    event.preventDefault();
    return false;
}

function search() {
    let cards = document.getElementsByClassName('card');
    let name = document.getElementById('search').value;
    let nameRegExp = new RegExp(name, 'i');
    for(let i = 0; i<products.length; i++) {
        let product = products[i];
        if(nameRegExp.test(product.name)) {
            let card = cards[i];
            card.style.border = '1px dashed red';
            card.style.backgroundColor = 'yellow';

    setTimeout(function() {
        card.style.border = 'none';
        card.style.backgroundColor = '';
    }, 2000);
}
    }
}

function generateMenu() {
let menu = document.querySelector('nav.main-menu ul');
menu.innerHTML = '';

let items = [
    {href: 'index.html', text: 'Товары'},
    {href: 'contacts.html', text: 'Контакты'},
    {href: 'promotions.html', text: 'Акции'},
];

for(let i = 0; i<items.length; i++) {
    let link = document.createElement('a');
    link.innerText = items[i].text;
    link.href = items[i].href;
    if(items[i].href =='') {
        link.addEventListener('click', notReadyAlert);
    }

    let menuItem = document.createElement('li');
    menuItem.appendChild(link);

    menu.appendChild(menuItem);
}
}

function showProductInfo(product) {
showModal(`
<div><img src="${product.image}"></div>
<div>${product.name}</div>
<div>${product.price} &#8381;</div>
`);
}

function generateCards() {


let main = document.querySelector('main');
for(let product of products) {
    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.innerHTML = `

    <a href="${product.link}">
        <div class="image"><img src="${product.image}"></div>
        <div class="product-name">${product.name}</div>
        <div class="price">${product.price} &#8381;</div>
    </a>
    `;
    cardDiv.querySelector('a').addEventListener('click', function() {
        showProductInfo(product);
    });
    main.append(cardDiv);
}
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key) {
        if(key.key == 'Enter')
        search();
    });


generateMenu();
generateCards()
}