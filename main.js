function preload() {

}

function setup () {
    canvas= createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses) ;
}
 
function  modelLoaded() {
    console.log('PoseNet Is initialized');
}

function gotPose(Results) {
 
    if(Results.length > 0)
    { 
        console.log(Results);
        console.log("nose x =" +  results[0].pose.pose.x);
        console.log("nose y =" +  results[0].pose.pose.y);
    }
}

function draw() {
 image(video, 0, 0, 300, 300);
}

function take_snapshot() {

    Save('myfilterimage.png');
}
