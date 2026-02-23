const inputCheck = document.querySelector('#dark-mode')
const element = document.querySelector('body')
inputCheck.addEventListener('click',() => {
    const mode = inputCheck.checked ? 'dark': 'light'
    element.setAttribute("data-bs-theme", mode)
})
function atualizarData() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let dataFormatada = `${dia}/${mes}/${ano}`
    document.getElementById('dataAtual').innerHTML = `&copy; todos os direitos reservados a Líder Foto ${dataFormatada}`
}
window.onload = function() {
    atualizarData()
}
window.revelar = ScrollReveal({reset:false})
revelar.reveal('.animate-title1',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})

window.revelar = ScrollReveal({reset:false})
revelar.reveal('.animate-paragraph1',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})

window.revelar = ScrollReveal({reset:false})
revelar.reveal('.animate-main-btn',{
     duration: 2000,
     distance: '90px',
     origin: 'left'
})

const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeBtn = document.getElementById("close-btn");
const cartCounter = document.getElementById("cart-count");

const nameInput = document.getElementById("customer-name");
const nameWarn = document.getElementById("name-warn");

const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");
let cart = [];
cartBtn.addEventListener("click", () => {
    updateCartModal();
    cartModal.style.display = "flex";
    cartBtn.innerHTML= `ver meu carrinho ${qu}`;
});

cartModal.addEventListener("click", (event) => {
    if(event.target === cartModal){
        cartModal.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    cartModal.style.display = "none";
});

menu.addEventListener("click", (event) => {
    const parentButton = event.target.closest(".add-to-cart");
    if(parentButton){
        const name = parentButton.dataset.name;
        const price = parseFloat(parentButton.dataset.price);
        addToCart(name, price);
    }
});

function addToCart(name, price){
    const existingItem = cart.find(item => item.name === name);
    if(existingItem){
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCartModal();
}

function removeFromCart(name){
    const item = cart.find(item => item.name === name);
    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        cart = cart.filter(item => item.name !== name);
    }
    updateCartModal();
}
function updateCartModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartElement = document.createElement("div");
        cartElement.classList.add("d-flex", "flex-column", "mb-3");

        cartElement.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <p class="fw-bold mb-0">${item.name}</p>
                <p class="mb-0">Qtd: ${item.quantity}</p>
                <p class="fw-bold mb-0">${item.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}</p>
            </div>
        `;
        const removeBtn = document.createElement("button");
        removeBtn.classList.add("btn", "btn-outline-danger", "btn-sm", "mt-2");
        removeBtn.innerHTML = `<i class="bi bi-trash2-fill"></i> Remover`;
        removeBtn.addEventListener("click", () => removeFromCart(item.name));

        cartElement.appendChild(removeBtn);
        cartItemsContainer.appendChild(cartElement);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL"
    });
    cartCounter.innerHTML = `(${cart.length}) <i class="bi bi-cart-plus-fill"></i>`;
}

nameInput.addEventListener("input", () => {
    if(nameInput.value !== ""){
        nameWarn.style.display = "none";
    }
});

addressInput.addEventListener("input", () => {
    if(addressInput.value !== ""){
        addressWarn.style.display = "none";
    }
});

checkoutBtn.addEventListener("click", () => {
    if(cart.length === 0) return;

    if(nameInput.value === ""){
        nameWarn.style.display = "flex";
        return;
    }

    if(addressInput.value === ""){
        addressWarn.style.display = "flex";
        return;
    }

    const cartItems = cart.map(item =>
        `• ${item.name} | Qtd: ${item.quantity} | ${item.price.toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}`
    ).join("\n");
    cart = [];

    const message = encodeURIComponent(
        ` Cliente: ${nameInput.value}\n\n Pedido:\n${cartItems}\n\n Endereço: ${addressInput.value}\n\nTotal: ${cartTotal.textContent}`
    );

    const phone = "5511967293457";
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    cart = [];
    updateCartModal();
});