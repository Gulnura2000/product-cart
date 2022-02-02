let openbtn = document.querySelector('.open')
let body = document.body
let shop = document.querySelector(".shop")


function creatcart(){
let cart = document.createElement('div')
let heading = document.createElement('h2')
let filed = document.createElement('div')
let closebtn = document.createElement('button')



heading.textContent = 'в нашей корзине';
closebtn.textContent = 'закрыть';
// shop.innerHTML = cart.innerHTML
document.body.appendChild(cart)
cart.appendChild(heading)
cart.appendChild(filed)
cart.appendChild(closebtn)

cart.classList.add('cart')
filed.classList.add('filed')
closebtn.classList.add('closebtn')



// body.innerHTML = cart.innerHTML

}


creatcart()

let cart = document.querySelector('.cart')
let filed = document.querySelector('.filed')
let closebtn = document.querySelector('.closebtn')

function opencart(){
cart.style.display = 'block'
}
function closecart(){
    cart.style.display = 'none'
 }


 openbtn.addEventListener('click' , opencart)
 closebtn.addEventListener('click' , closecart)


 let buttons = document.querySelectorAll('button')
 let products = document.querySelectorAll('.product')

 for(let i = 0; i<8; i++){
     buttons[i].addEventListener('click', function(){
       let item = products[i].cloneNode(true)
    //    let btn = document.querySelector('button')
       buttons[i].remove();
       filed.appendChild(item)
       products[i].remove()
     })
 }