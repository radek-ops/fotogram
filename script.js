/* funktions start durch  <body onload="startFunction()"> */

function startFunction() {

      createDiv();
      
      
    }

       let imgArray = [
      "./img/img_1.jpg",
      "./img/img_2.JPG",
      "./img/img_3.JPG",
      "./img/img_4.JPG",
      "./img/img_5.JPG",
      "./img/img_6.JPG",
      "./img/img_7.jpg",
      "./img/img_8.JPG",
      "./img/img_9.JPG",
      "./img/img_10.JPG",
      "./img/img_11.JPG",
      "./img/img_12.JPG",
      "./img/img_15.jpg",
      "./img/img_16.jpg",
      "./img/img_17.jpg",
      "./img/img_19.jpg",
      "./img/img_20.jpg",
      "./img/img_21.jpg",
      "./img/img_22.jpg",
      "./img/img_23.jpg",
    ];
  

  /* images werden hinzugefügt*/
  function createDiv(){

   let arry = document.getElementById("all_images");
       arry.innerHTML =  ' ';   /* main wird geleert  */
    
     for (let index = 0; index < imgArray.length; index++) {
          let newImg = document.createElement("img");
              newImg.className = 'main_images';
              newImg.setAttribute('src',  imgArray[index]);
      /*  dem (elternElement) 'main'  werden die imges zugefügt  */
            arry.appendChild(newImg);         
           
  }

  

}


  
         
    
  


 

