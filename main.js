  noseX=0;
  noseY=0;

function preload() {
 clown_nose = loadImage('https://i.postimg.cc/fRKWTxFJ/download-19-removebg-preview.png');

}

 function setup() {
     canvas = createCanvas(300,300 )
     canvas.center();
     video = createCapture(VIDEO);  
     video.size(300, 300);
     video.hide();

     poseNet = ml5.poseNet(video, modelloaded);
     poseNet.on('pose', gotPoses);
 }
   function modelloaded() {
       console.log('poseNet Is Intialized');
   }

 function draw() {
 image(video, 0, 0, 300, 300);
 image(clown_nose, noseX, noseY, 30, 30);

 }

 function take_snapshot(){
     save('myFilterImage.png');
 }

 function gotPoses(results)
{
    if(results.length > 0)
    {  
        console.log(results);
        noseX = results[0].pose.nose.x-10;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
}
}