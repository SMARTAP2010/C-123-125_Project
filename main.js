noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;  

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded)
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('Posenet is Initialized!');
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +  "; noseY = " + noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("Left Wrist X = " + leftWristX + "; Right Wrist X = " + rightWristX);
  }
}

function draw() {
  document.getElementById("square_side").innerHTML = "Width and Height of be text will be = " + difference + "px";
  background('#969A97');
  fill('#000');
  stroke('#000');
  text("ATHARVA", noseX, noseY);
  textSize(difference);
}