function applyFilter(pixels,filterMode){
  var d = pixelDensity();
  var tempImageSize = 4 * (width * d) * (height * d);

  switch(filterMode){

    case 1:   //Grayscale
      for(var i = 0;i < tempImageSize;i += 4){
        grayValue = floor((pixels[i] + pixels[i+1] + pixels[i+2])/3)
        pixels[i] = grayValue;
        pixels[i+1] = grayValue;
        pixels[i+2] = grayValue;
      }
      break;

    case 2:  //Reddify
      for(var i = 0;i < tempImageSize;i += 4){
        pixels[i] = pixels[i]*3 * (pixels[i]*3/255);
      }
      break;

    case 3:  //Inversion?
      for(var i = 0;i < tempImageSize;i += 4){
        pixels[i] = 255 - pixels[i]; //Color inverted
        pixels[i+1] = 255 - pixels[i+1]; // In theory xD
        pixels[i+2] = 255 - pixels[i+2];
      }
      break;

    case 4: //Apocalypse
      for(var i = 0;i < tempImageSize;i += 4){
        var m = 255/2;
        pixels[i] = (pixels[i] > m ? 0 : 255 );
        pixels[i+1] = (pixels[i + 1] > m ? 0 : 255 );
        pixels[i+2] = (pixels[i + 2] > m ? 0 : 255 );
      }
      break;

    case 5:  //Nevermind xD lets make a pen
      for(var i = 0;i < tempImageSize;i += 4){
        pixels[i] = pixels[i] - pixels[i]/5;
        pixels[i+1] = pixels[i + 1] - pixels[i + 1]/5;
        pixels[i+2] = pixels[i + 2] + pixels[i + 2]/5;
      }
      break;

  }
  return pixels;
}
