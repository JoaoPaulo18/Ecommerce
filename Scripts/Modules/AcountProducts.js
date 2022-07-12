export default class Acount{
  constructor(Btns,Add,Amount){
    this.Btns = document.querySelectorAll(Btns)
    this.Add = document.querySelector(Add)
    this.Amount = document.querySelector(Amount)
    this.Cart = document.querySelector('#BuysContainer');
    this.Acount = document.querySelector('.acount');
    this.ClickEvent = this.ClickEvent.bind(this);
    this.addCart = this.addCart.bind(this);
    this.DelCheck = this.DelCheck.bind(this);
    this.acount = 0; 
  }

  DelCheck(){
    this.Cart.innerHTML = '<span class="Empty">Your cart is empty.</span>';
    this.Acount.classList.add("Zero");
  } 

  addCart(event){
    // Colocamos todos os valores
    // E retiramos a Classe "Zero"
    // Para o numero aparecer
    event.preventDefault();
    if(this.acount > 0){
    this.Acount.innerHTML = this.acount;
    this.Acount.classList.remove("Zero");
    this.Cart.innerHTML = `
    <div class="InfosProduct">
    <div class="Texts">
    <img src="./images/image-product-1.jpg">
    <div class="TextInfos">
    <span class="infoTitle">Fall Limited Edition Sneakers</span>
    <span class="Prices">$125.00 x${this.acount}<span class="Total"> $${125 * this.acount}</span></span>
    </div>
    <img id="Delete" src="./images/icon-delete.svg">
    </div>
    <a href="#" id="Checkout">Checkout</a>
    </div>
    `;
    ['Delete','Checkout'].forEach(item=> document.querySelector(`#${item}`).addEventListener('click', this.DelCheck));
    }
  }

  ClickEvent(event){
    // Para não precisarmos adicionar
    // Manualmente aos dois botões
    // O Event Listener, colocamos
    // Nos dois e verificamos com 
    // Qual estamos falando
    event.target.id == 'Plus' ? this.acount++ : this.acount--;
    if(this.acount<0) this.acount = 0;
    this.Amount.innerHTML = this.acount;
  }

  init(){
    if(this.Btns.length){
     this.Btns.forEach(Btn => Btn.addEventListener('click', this.ClickEvent));
     this.Add.addEventListener('click', this.addCart)
    }
    return this;
  }
}