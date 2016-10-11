var Ourimage, filterMode = 0;
var button1, button2, button3, button4, button5;


var urlImage = 'http://i.imgur.com/Zf5Im77.jpg';


$('#urlImage').on('input', preload)

function preload() {
  if($('#urlImage').val()){
    urlImage = $('#urlImage').val();
  }
  OurImage = loadImage(urlImage);
}

function renderImage() {
  image(OurImage, 0, 0, OurImage.width, OurImage.height, 0, 0,
    590, 320);
  loadPixels();
  pixels = applyFilter(pixels, filterMode);
  updatePixels();
}

function setup() {
  var canvas = createCanvas(500,500);
  canvas.parent('myCanvas');
  createButtons();
  renderImage();
}
