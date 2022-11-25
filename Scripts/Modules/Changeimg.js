export default class Changeimg{
  constructor(Images, ImagesPreview){
    this.Images = document.querySelectorAll(Images);
    this.ImagesPreview = document.querySelectorAll(ImagesPreview);
   this.AcountPlus = this.AcountPlus.bind(this);
   this.ChangeImg = this.ChangeImg.bind(this);
   this.ClearPreview = this.ClearPreview.bind(this);
  }
  AcountPlus(){
    this.Images.forEach(image => {
      let Actual = +image.getAttribute('data-position');
      Actual++;
      if(Actual == 5) Actual = 1;
      image.setAttribute('data-position',`${Actual}`)
    })
  }
  
  ClearPreview(){
    this.ImagesPreview.forEach(image => {
      image.classList.remove('active');
      image.removeEventListener('click',  this.ChangeImg)

    });
  }
   // Uma função asincrona para que possamos dar 
   // Uma pausa entre uma callStack e outra
   // Utilizando o AWAIT
  async ChangeImg(event){

    const index = Array.from(this.ImagesPreview).indexOf(event.target);
    // Verificamos se a imagem clicada já está
    // Sendo exibida, caso sim, não executamos
    if(this.Images[index].getAttribute('data-position') != '1'){
      this.ClearPreview();
      this.ImagesPreview[index].classList.add('active');
      this.ImagesPreview.forEach((Image,index) => Image.removeEventListener('click', ()=> this.ChangeImg(Image,index)))
      this.AcountPlus();
    
   // O await espera uma promisse
   // À ser resolvida, logo retornamos
   // Uma promisse com um intervalo dentro
   // Assim podemos escolher o tempo de pausa
   // E antes do código prosseguir, ele da 
   // Um intervalo de 300ms
    function Sleep(time){
      return new Promise (resolve => setTimeout(resolve ,time))
    }
     await Sleep(300); 

    // Verificamos se o item 
    // Ja chegou ao seu destino
    // Se sim: Acaba o evento
    // Se não: Rechamamos este método
     if(this.Images[index].getAttribute('data-position') != '1')
     this.ChangeImg(event);
     else
     this.ImagesPreview.forEach((Image) => Image.addEventListener('click',  this.ChangeImg))
  }
}

  init(){
    if(this.Images.length && this.ImagesPreview.length){
      this.ImagesPreview.forEach((Image) => Image.addEventListener('click',  this.ChangeImg))
    }
    return this;
}
}
