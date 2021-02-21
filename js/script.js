/* Script Carousel1 */
let carousel = null;
let pictures = null;
let chrono = null;



function loadCaroussel(){
    //Affecter la classe active au premier li
    pictures[0].classList.add("active");

    //Création de la div
    const areaButton = document.createElement('DIV');
    areaButton.classList.add('area_button');

    for( let i = 0; i < pictures.length; i++ ){
        const cursor = document.createElement('A');
        cursor.classList.add('cursor');
        
        if( i === 0 ){
            cursor.classList.add('active');
        }

        cursor.setAttribute('href', '#');
        cursor.addEventListener('click', function(e){
            e.preventDefault();
            clearTimeout(chrono);
            //Je sélectionne tous les le liens qui sont dans la div
            const cursors = carousel.querySelectorAll('div > a');

            //Retourne le numéro ou l'index de A qui a été cliqué
            const index =  [].indexOf.call(cursors, this );
            carousselPlay( index  );
        });

        areaButton.appendChild(cursor);
        
    }

    //Ajout de la div dans la div carousel
    carousel.appendChild(areaButton);
    chrono = setTimeout('carousselPlay();', 6000);
}


function carousselPlay( index = -1 ){
    
    if( index === -1){
        console.log('carousel-homemade');
        autoPlay();
    }else{
        manuelPlay( index );
    }
}

function stopPlay(){
  for(picture of pictures){
    picture.classList.remove("active");
  }
  carousel.querySelector(".area_button").remove();
}


function manuelPlay( index  ){
    //Selection du li qui à la classe active
    const currentPicture = carousel.querySelector('li.active');

    //On recherche l'index du li qui à la classe active parmis tous les li
    const currentIndex = [].indexOf.call( pictures, currentPicture );

    if( index !== currentIndex ){

        //Ajout de la classe active au li ayant l'index de la varaible index
        // et suppresssion de la classe active du li qui la possède pour le moment
        currentPicture.classList.remove('active');
        pictures[index].classList.add('active');
        
        //On sélectionne les curseurs
        const cursors = carousel.querySelectorAll('div > a');
        cursors[currentIndex].classList.remove('active');
        cursors[index].classList.add('active');

        
    }

    chrono = setTimeout( 'carousselPlay();' , 6000)
}



function autoPlay(   ){
    //Selection du li qui à la classe active
    const currentPicture = carousel.querySelector('li.active');

    //On recherche l'index du li qui à la classe active parmis tous les li
    const currentIndex = [].indexOf.call( pictures, currentPicture );

    //Index du future élément à activer
    const index = ( currentIndex === ( pictures.length - 1 ) )? 0 : currentIndex + 1 ;

    

        //Ajout de la classe active au li ayant l'index de la varaible index
        // et suppresssion de la classe active du li qui la possède pour le moment
        currentPicture.classList.remove('active');
        pictures[index].classList.add('active');
        
        //On sélectionne les curseurs
        const cursors = carousel.querySelectorAll('div > a');
        cursors[currentIndex].classList.remove('active');
        cursors[index].classList.add('active');

        chrono = setTimeout( 'carousselPlay();' , 6000)
   
}

/* Off-canvas du projet 1 */
function openNav1() {
    document.getElementById("myProject1").style.left = "0";
    document.getElementById("fullpage").style.zIndex = "999";
    carousel = document.querySelector('#carouselHomemade1');
    pictures = carousel.querySelectorAll('li');
    if( pictures.length > 1){
      loadCaroussel();
    }
  }
  
  
  function closeNav1() {
    document.getElementById("myProject1").style.left = "-100vw";
    document.getElementById("fullpage").style.zIndex = "95";
    chrono = null;
    stopPlay();
    carousel = null;
    pictures = null;
  }

  /*  Off canvas du projet 2*/
  function openNav2() {
    document.getElementById("myProject2").style.left = "0";
    document.getElementById("fullpage").style.zIndex = "999";
    carousel = document.querySelector('#carouselHomemade2');
    pictures = carousel.querySelectorAll('li');
    if( pictures.length > 1){
      loadCaroussel();
    }
  }
  
  function closeNav2() {
    document.getElementById("myProject2").style.left = "-100vw";
    document.getElementById("fullpage").style.zIndex = "95";
    chrono = null;
    stopPlay();
    carousel = null;
    pictures = null;
    
  }

  /*  Off canvas du projet 3*/
  function openNav3() {
    document.getElementById("myProject3").style.left = "0";
    document.getElementById("fullpage").style.zIndex = "999";
    carousel = document.querySelector('#carouselHomemade3');
    pictures = carousel.querySelectorAll('li');
    if( pictures.length > 1){
      loadCaroussel();
    }
  }
  
  
  function closeNav3() {
    document.getElementById("myProject3").style.left = "-100vw";
    document.getElementById("fullpage").style.zIndex = "95";
    chrono = null;
    stopPlay();
    carousel = null;
    pictures = null;
  }

  /*  Off canvas du projet 4*/
  function openNav4() {
    document.getElementById("myProject4").style.left = "0";
    document.getElementById("fullpage").style.zIndex = "999";
    carousel = document.querySelector('#carouselHomemade4');
    pictures = carousel.querySelectorAll('li');
    if( pictures.length > 1){
      loadCaroussel();
    }
  }
  
  
  function closeNav4() {
    document.getElementById("myProject4").style.left = "-100vw";
    document.getElementById("fullpage").style.zIndex = "95";
    chrono = null;
    stopPlay();
    carousel = null;
    pictures = null;
  }