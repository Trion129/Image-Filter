function changeMode(mode){
  console.log(mode);
  filterMode = mode;
  renderImage();
}

function createButtons(){
  button1 = select('#mode1');
  button2 = select('#mode2');
  button3 = select('#mode3');
  button4 = select('#mode4');
  button5 = select('#mode5');

  button1.mousePressed(function(lol){
    changeMode(1)
  });
  button2.mousePressed(function(lol){
    changeMode(2)
  });
  button3.mousePressed(function(lol){
    changeMode(3)
  });
  button4.mousePressed(function(lol){
    changeMode(4)
  });
  button5.mousePressed(function(lol){
    changeMode(5)
  });


}
