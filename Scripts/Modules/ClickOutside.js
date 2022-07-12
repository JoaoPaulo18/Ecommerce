export default class OutsideClick{
  constructor(elements,Btn,callback){
    this.Btn = Btn;
    this.elements = elements;
    this.callback = callback;
    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick(event){
    if(event.target == this.Btn.childNodes[1].childNodes[0]){
      document.documentElement.removeEventListener('click', this.HandleClick)
    }
    else if(!(this.elements.contains(event.target))){
    document.documentElement.removeEventListener('click', this.HandleClick)
    this.callback();
    }
  }


  init(){
    if(this.elements && this.callback){
      setTimeout(()=> document.documentElement.addEventListener('click', this.HandleClick))
    }
    return this;
  }
}