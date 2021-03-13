function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modalloaded);
    poseNet.on('pose',gotPoses);

}
function modalloaded(){
    console.log("poseNet is loaded")
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log(noseX +"and"+ noseY);
    }

}

function draw(){
image (video,0,0,300,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}