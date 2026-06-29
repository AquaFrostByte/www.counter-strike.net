// Change the img1, img2 etc files to change the images u want to have in the left top corner they change every reload!
var imagesArray = [
    "/static/img/img1.gif",
    "/static/img/img2.gif", //these can be replaced to the users likeing 
    "/static/img/img3.gif"
];
var index = Math.floor(Math.random() * imagesArray.length);
document.write("<img src='" + imagesArray[index] + "' alt='Header Image'>");