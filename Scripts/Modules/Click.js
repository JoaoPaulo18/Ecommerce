import OutsideClick from "./ClickOutside.js";

export default class Menu{
  constructor(Btn, Element = Btn){
    this.Btn = document.querySelector(Btn);
    this.Element = document.querySelector(Element);
    if(this.Element.parentNode != this.Btn.parentNode)
    this.Parent = this.Element.parentNode;
    this.HandleClick = this.HandleClick.bind(this);
    this.HandleClickOut = this.HandleClickOut.bind(this);
  }

  //Se foi clicado no Menu
  //Adicionamos um simples clickOutside 
  //No Parent do Menu
  HandleClickOut(event){
    if(event.target === this.Parent){
    this.Btn.classList.toggle('active');
    this.Element.classList.toggle('active');
    this.Parent.classList.toggle('active');
    this.Parent.removeEventListener('click',this.HandleClickOut);
    this.importClickOutside;
   }
  }

  //Recebe o evento de click em algum dos botes selecionados
  //Verifica se a varaiavel Parent existe
  //Se sim ou não ja sabemos qual botão foi clicado
  //(SIM: MENU, NÃO: CART)
  HandleClick(){
    this.Btn.classList.toggle('active');
    this.Element.classList.toggle('active');
    if(this.Parent){
    this.Parent.classList.toggle('active');
    if(this.Parent.classList.contains('active'))
    this.Parent.addEventListener('click', this.HandleClickOut)
    else
    this.Parent.removeEventListener('click',this.HandleClickOut)
    }else{
        this.importClickOutside = new OutsideClick(this.Element,this.Btn,()=>{
          this.Element.classList.remove('active');
          this.Btn.classList.remove('active');
        })
        this.importClickOutside.init();
    }
    //No Else acima utilizamos
    //De outra classe criada especificamente
    //Para verificarmos o clickOutside
    //Passando o código que deve ser executado 
    //E os Elementos necessários para tal ativação 
  }

  init(){
      if(this.Btn){
        this.Btn.addEventListener("click",this.HandleClick);
      }
      return this;
  }
}