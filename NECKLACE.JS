noseX=0
noseY=0


function preload() {
    NECK=loadImage("https://i.postimg.cc/CxZ5X6zn/download.png");
 
}

function setup()
{
    canvas = createCanvas(360,300) ;
    canvas.position(600, 200) ;
    video = createCapture(VIDEO) ;
    video.size(360,300) ;
    video.hide() ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose' , gotResult) ;
}

function modelLoaded()
{
    console.log("Model is loaded..") ;
}

function gotResult(results)
{
    if(results.length > 0) {
        console.log(results) ;
        noseX = results[0].pose.nose.x -45;
        noseY = results[0].pose.nose.y + 65;
        console.log(noseX) ;
        console.log(noseY) ;
    }
}

function draw() {
    image(video, 0, 0, 360, 300);
    image(NECK, noseX, noseY, 80,50) ;
}
function take_snapshot()
{
    save('myLipstickFilterPic') ;
}

function back()
{
   window.location = "Index.html";
}
