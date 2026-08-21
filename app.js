const WHATSAPP = '5210000000000'; // Reemplaza por el número real del negocio, con código de país.
const products = [
  { name: 'Taza clásica', price: 129, color: '#f1c0ae', art: 'Tu<br>foto' }, { name: 'Vaso térmico', price: 249, color: '#b8d7d0', art: 'Café<br>club' },
  { name: 'Playera personalizada', price: 279, color: '#d8f04b', art: 'HECHO<br>PARA TI', type: 'shirt' }, { name: 'Portavasos · Set 4', price: 169, color: '#d8c7ef', art: 'Casa<br>dulce casa' },
  { name: 'Shaker Gym', price: 219, color: '#fa7345', art: 'NO<br>EXCUSES' }, { name: 'Termo deportivo', price: 289, color: '#9dbde0', art: 'KEEP<br>GOING' },
  { name: 'Playera Gym', price: 299, color: '#49405d', art: 'BEAST<br>MODE', type: 'shirt' }, { name: 'Mouse pad', price: 159, color: '#e8db9f', art: 'Tu<br>espacio' }
];
let cart = [];
const money = value => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);
const grid = document.querySelector('#product-grid');
grid.innerHTML = products.map((p, i) => `<article class="product"><div class="product-image" style="background:${p.color}"><div class="product-object ${p.type || ''}">${p.art}</div></div><div class="product-info"><h3>${p.name}</h3><p>${money(p.price)}</p><button class="add-product" data-index="${i}" aria-label="Agregar ${p.name}">+</button></div></article>`).join('');
function renderCart() { const items = document.querySelector('#cart-items'); const total = cart.reduce((sum, item) => sum + item.price, 0); document.querySelector('#cart-count').textContent = cart.length; document.querySelector('#cart-total').textContent = money(total); items.innerHTML = cart.length ? cart.map((item, i) => `<div class="cart-item"><div class="cart-thumb" style="background:${item.color}"></div><div><h3>${item.name}</h3><p>${money(item.price)}</p></div><button class="remove" data-remove="${i}" aria-label="Quitar">×</button></div>`).join('') : '<p class="empty-cart">Tu bolsa está esperando algo especial.</p>'; }
function openCart(){document.querySelector('#cart-panel').classList.add('open');document.querySelector('#overlay').classList.add('open')}
function closeCart(){document.querySelector('#cart-panel').classList.remove('open');document.querySelector('#overlay').classList.remove('open')}
function whatsapp(message){window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener')}
grid.onclick = event => { const button = event.target.closest('[data-index]'); if (!button) return; cart.push(products[button.dataset.index]); renderCart(); openCart(); };
document.querySelector('#cart-items').onclick = event => { const b = event.target.closest('[data-remove]'); if (!b) return; cart.splice(b.dataset.remove, 1); renderCart(); };
document.querySelector('#open-cart').onclick=openCart;document.querySelector('#close-cart').onclick=closeCart;document.querySelector('#overlay').onclick=closeCart;
document.querySelector('#checkout').onclick = () => { if (!cart.length) return; const list = cart.map(item => `• ${item.name} — ${money(item.price)}`).join('\n'); whatsapp(`Hola, quiero realizar este pedido:\n\n${list}\n\nTotal estimado: ${money(cart.reduce((sum,item) => sum + item.price,0))}\n\n¿Me ayudan a personalizarlo?`); };
document.querySelector('#whatsapp-general').onclick = e => {e.preventDefault(); whatsapp('Hola, quisiera información sobre sus productos personalizados.')};
const input = document.querySelector('#design-text'), text = document.querySelector('#mug-text'), face = document.querySelector('.mug-face'), handle = document.querySelector('.mug-handle'), image = document.querySelector('#uploaded-image');
input.oninput=()=>text.textContent=input.value.replace(/[<>]/g,'').trim()||'TU IDEA';
document.querySelector('#swatches').onclick=e=>{const swatch=e.target.closest('.swatch');if(!swatch)return;document.querySelectorAll('.swatch').forEach(x=>x.classList.remove('selected'));swatch.classList.add('selected');face.style.background=swatch.dataset.color;handle.style.borderColor=swatch.dataset.color};
document.querySelector('#design-image').onchange=e=>{const file=e.target.files[0];if(!file)return;image.src=URL.createObjectURL(file);image.style.display='block';text.style.display='none'};
let drag=false,start=0,rotation=-8;const stage=document.querySelector('#stage'),mug=document.querySelector('#mug-3d');stage.onpointerdown=e=>{drag=true;start=e.clientX;stage.setPointerCapture(e.pointerId)};stage.onpointermove=e=>{if(!drag)return;rotation+=(e.clientX-start)*.45;start=e.clientX;mug.style.transform=`rotateY(${rotation}deg) rotateZ(-3deg)`};stage.onpointerup=()=>drag=false;mug.style.transform='rotateY(-8deg) rotateZ(-3deg)';
document.querySelector('#send-design').onclick=()=>whatsapp(`Hola, quiero cotizar mi taza personalizada.\n\nFrase: ${input.value.trim()||'Sin frase'}\nImagen/logo: ${image.style.display==='block'?'Sí (la enviaré en este chat)':'No'}\n\nMe gustaría que revisaran mi diseño.`);
renderCart();
