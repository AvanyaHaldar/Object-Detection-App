status = "";
objects = [];

function setup() {
  canvas = createCanvas(700, 450);
  canvas.center();
  objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function preload() {
  img = loadImage("ve.jpg");
}
function draw() {
  image(img, 0, 0, 700, 450);
  if (status != "") {
    for (i = 0; i < objects.length; i++) {
      document.getElementById("status").innerHTML = "Status : Objects Detected";
      percent = Math.floor(objects[i].confidence * 100);
      fill("blue");
      text(objects[i].label + " " + percent + " %", objects[i].x, objects[i].y);
      noFill();
      stroke("blue");
      textSize(18);
      rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

    }
  }
}

function modelLoaded() {
  console.log("Cocossd Is Initialized");
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.log(error);
  }
  else {
    console.log(result);
    objects = result;
  }
}