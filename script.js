//@TODO iterate throughout images
//@TODO Grab buttons and add event listener
//@TODO iterate through an array depending on the button
//@TODO set target image and clicked image
const images=[
    "images/catia-dombaxe-fKyYtenmvcw-unsplash.jpg",
    "images/danny-greenberg-VY6nWjvYq9g-unsplash.jpg",
    "images/gavin-wilson-U3ZtDbTPWpE-unsplash.jpg",
    "images/guogete-ENBbE0uGYgs-unsplash.jpg",
    "images/jacalyn-beales-TG7A8msMsKc-unsplash.jpg",
    "images/jack-prew-5bze5kVrfAU-unsplash.jpg",
    "images/jack-prew-feexj8sv1DM-unsplash.jpg",
    "images/jonathan-caliguire-55UHPGrgJGE-unsplash.jpg",
    "images/neom-m5Wj2ThjA14-unsplash.jpg",
    "images/spenser-sembrat-fBnuxrXzDs0-unsplash.jpg",
    "images/tamas-tokos-ou8-_71Qigc-unsplash.jpg",
    "images/tetiana-kobzeva-ohy4BjZo118-unsplash.jpg",
]
document.getElementById("close").addEventListener("click", closeImage);
document.getElementById("next").addEventListener("click", nextImage);
document.getElementById("prev").addEventListener("click", prevImage);
initialize();

function closeImage(){
    //@set hidden class on the container
    //@reset img src to blank or placeholder
    console.log("you closed the image!");
}

function nextImage(){
    console.log("you want the next image!");
}
function prevImage(){
    console.log("you want the previous image!");
}

function initialize(){
    //iterate through images
    let articles = document.createElement('section');
    articles.setAttribute('id', 'imglist');

    for (i=0; i < images.length; i++){
        let img = document.createElement('img');
        //let link = document.createElement('a');

        img.setAttribute('src', images[i]);
        img.setAttribute('alt', 'gallery image');
        img.style.display = "block";
        //console.log(img);
        articles.appendChild(img);
    }
    document.getElementById("img_gallery").appendChild(articles);
}