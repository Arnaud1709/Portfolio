/* Script Carousel */
const carousel = document.querySelector('.carouselHomemade');
const pictures = carousel.querySelectorAll('ul>li');
let chrono = null;

if( pictures.length > 1 ){
    loadCaroussel();
}


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
    
    if( index === -1 ){
        console.log('carousel-homemade');
        autoPlay();
    }else{
        manuelPlay( index );
    }
    
}


marker.setVisible(false);



function manuelPlay( index  ){
    //Selection du li qui à la classe active
    const currentPicture = carousel.querySelector('ul > li.active');

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

    chrono = setTimeout( 'carousselPlay();' , 5000)
}



function autoPlay(   ){
    //Selection du li qui à la classe active
    const currentPicture = carousel.querySelector('ul > li.active');

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

        chrono = setTimeout( 'carousselPlay();' , 5000)
   
}

/* Off-canvas du projet 1 */
function openNav1() {
    document.getElementById("myProject1").style.left = "0";
    document.getElementById("fullpage").style.zIndex = "999"
  }
  
  function closeNav1() {
    document.getElementById("myProject1").style.left = "-100vw";
    document.getElementById("fullpage").style.zIndex = "95"
  }

  /*  Off canvas du projet 2*/
  function openNav2() {
    document.getElementById("myProject2").style.width = "0";
  }
  
  function closeNav2() {
    document.getElementById("myProject2").style.width = "-100vw";
  }

  /*  Off canvas du projet 3*/
  function openNav3() {
    document.getElementById("myProject3").style.width = "0";
  }
  
  function closeNav3() {
    document.getElementById("myProject3").style.width = "-100vw";
  }

  /*  Off canvas du projet 4*/
  function openNav4() {
    document.getElementById("myProject4").style.width = "0";
  }
  
  function closeNav4() {
    document.getElementById("myProject4").style.width = "-100vw";
  }