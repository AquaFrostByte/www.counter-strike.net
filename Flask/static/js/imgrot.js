// Points to dynamic random image pool in static/img/
var imagesArray = [
    "/static/img/img1.gif",
    "/static/img/img2.gif",
    "/static/img/img3.gif"
];
var index = Math.floor(Math.random() * imagesArray.length);
document.write("<img src='" + imagesArray[index] + "' alt='Header Image'>");