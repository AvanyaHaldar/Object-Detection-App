status="";

function setup() {
    canvas=createCanvas(700,450); 
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
  }

  function preload() {
    img=loadImage("Fruits.jpg");
}
function draw() {
    image(img,0,0,700,450);
}

function modelLoaded() {
    console.log("Cocossd Is Initialized");
    status=true;
    objectDetector.detect(img,gotResult);
  }

function gotResult(error,result) {
    if (error) {
      console.log(error);
    } 
   else{
     console.log(result);
   }
   }