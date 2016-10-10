var Ourimage,TheirImage,filterMode = 0;
var button1,button2,button3,button4,button5;


var urlImage = 'http://i.imgur.com/Zf5Im77.jpg';


$('#urlImage').on('input',function(){
  urlImage = $(this).val();
})

function preload(){
  OurImage = loadImage(urlImage);
}

function renderImage(){
  image(OurImage, 0,0,OurImage.width,OurImage.height, 0,0,
  590,320);
  loadPixels();
  pixels = applyFilter(pixels,filterMode);
  updatePixels(); //LOL WOOT? I am confused >?:D
}

function setup(){
  //Yep
  createCanvas(OurImage.width,OurImage.height);
  createButtons();
  renderImage();

}
