window.canvas = {}

window.canvas.startLoop = function(c) {
  window.canvas.domElement = c;
  requestAnimationFrame(function() {
    window.canvas.loop();
  });
}

window.canvas.loop = function () {
  c = window.canvas.domElement.getContext("2d");

  c.fillStyle = "#f00";
  c.fillRect(50, 50, 100, 100);

  for (var i = 0; i < main.getAnts().length; i++)
  {
    var ant = main.getAnts()[i];
    window.canvas.drawAnt(c, ant.x, ant.y, ant.dir);
  }

  requestAnimationFrame(canvas.loop);
}

ARROW_LENGTH = 10;
window.canvas.drawAnt = function (c, x, y, dir) {
  c.strokeStyle = "#000";
  c.lineWidth = 2;
  
  c.beginPath();
  
  c.moveTo(x, y);
  c.lineTo(x+ARROW_LENGTH*Math.sin(dir), y+ARROW_LENGTH*Math.cos(dir));
  
  c.stroke();
  c.closePath();
}