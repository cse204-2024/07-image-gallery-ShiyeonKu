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
    //select image that needs to be closed
    //set attribute of the image / container to hidden
    let modal = document.getElementById('modal');
    let content = document.getElementById('modal_content');
    content.lastChild.remove();
    modal.style.display = "none";
}

function nextImage(){
    //select image that is currently displayed
    //select image that should be displayed next from an array
    //replace the current displayed image with the next image from the array
    let id = document.getElementById('modal_content').lastChild.id;
    let content = document.getElementById('modal_content');
    let modalimg = document.createElement('img');
    let imgid=0;

    for (i=0; i< images.length; i++){
        if (i == id){
            if(i == 11){
                imgid = 0;
            }else{
                imgid = i+1;
            }
        }
    }
    let image = document.getElementById(imgid);
    modalimg.setAttribute('src', image.src);
    modalimg.setAttribute('id', image.id);
    content.lastChild.remove();
    content.appendChild(modalimg);
}
function prevImage(){
    //select image that is currently displayed
    //select image that was displayed previously from an array
    //replace the current displayed image with the previous image from the array
    let id = document.getElementById('modal_content').lastChild.id;
    let content = document.getElementById('modal_content');
    let modalimg = document.createElement('img');
    let imgid=0;

    for (i=0; i< images.length; i++){
        if (i == id){
            if(i == 0){
                imgid = 11;
            }else{
                imgid = i-1;
            }
        }
    }
    let image = document.getElementById(imgid);
    modalimg.setAttribute('src', image.src);
    modalimg.setAttribute('id', image.id);
    content.lastChild.remove();
    content.appendChild(modalimg);
}

function initialize(){
    //iterate through images
    let articles = document.createElement('section');
    articles.setAttribute('id', 'imglist');

    for (i=0; i < images.length; i++){
        let img = document.createElement('img');
        let div = document.createElement('div');
        //let link = document.createElement('a');

        img.setAttribute('src', images[i]);
        img.setAttribute('alt', 'gallery image');
        img.setAttribute('id', i);
        img.style.display = "block";
        div.setAttribute('class', 'imgbox');
        div.setAttribute('id', 'imagediv');
        articles.setAttribute('class', 'gallery');
        //console.log(img);
        div.append(img);
        articles.append(div);
    }
    document.getElementById("img_gallery").append(articles);
}

//when image is clicked, open up a modal
for(i=0; i< images.length; i++){
    document.getElementById(i).addEventListener("click", openModal);
}


function openModal(){
    //grab id of the clicked image, append selected image to the modal div
    let id = this.id;
    let modal = document.getElementById('modal');
    let content = document.getElementById('modal_content');
    let modalimg = document.createElement('img');

    for (i=0; i< images.length; i++){
        if (i == id){
            console.log("found image" + i);
            modalimg.setAttribute('src', images[i]);
            modalimg.setAttribute('id', i);
        }
    }
    content.appendChild(modalimg);
    modal.style.display = "block";
}