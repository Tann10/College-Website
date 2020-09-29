// function simpleMessage() {
//     alert("Coffee time")
// }

// setTimeout(simpleMessage, 5000); milliseconds

var myImage = document.getElementById("mainImage");
var imageArray = ['image/image01.jpg', 
'image/image02.jpg', 
'image/image03.jpg',
'image/image04.jpg'];

var imageIndex = 0;

function changeImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    imageIndex++;
    if (imageIndex >= imageArray.length) {
        imageIndex =0;
    }
}

var intervalHandler = setInterval(changeImage, 1000);
myImage.onclick = function() {
    clearInterval(intervalHandler);
}