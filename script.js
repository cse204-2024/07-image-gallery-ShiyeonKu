//@TODO iterate throughout images
//@TODO Grab buttons and add event listener
//@TODO iterate through an array depending on the button
//@TODO set target image and clicked image
const images=[
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/catia-dombaxe-fKyYtenmvcw-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/danny-greenberg-VY6nWjvYq9g-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/gavin-wilson-U3ZtDbTPWpE-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/guogete-ENBbE0uGYgs-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/jacalyn-beales-TG7A8msMsKc-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/jack-prew-5bze5kVrfAU-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/jack-prew-feexj8sv1DM-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/jonathan-caliguire-55UHPGrgJGE-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/neom-m5Wj2ThjA14-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/spenser-sembrat-fBnuxrXzDs0-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/tamas-tokos-ou8-_71Qigc-unsplash.jpg",
    "/Users/shiyeonku/Desktop/cse204SP2024/07-image-gallery-ShiyeonKu/images/tetiana-kobzeva-ohy4BjZo118-unsplash.jpg",
]
document.getElementById("close").addEventListener("click", closeImage());
document.getElementById("next").addEventListener("click", nextImage());
document.getElementById("prev").addEventListener("click", prevImage());

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

    for (i=0; i < images.length; i++){
        let img = document.createElement('img');
        //let link = document.createElement('a');

        img.setAttribute('src', images[i]);
        img.setAttribute('alt', 'gallery image');

        articles.appendChild(img);
    }
    articles.style.display = "block";
    document.getElementById("img_gallery").appendChild(aritcles);
}