//@@@@
//BUBBLES !!! :)
//@@@@
$(function(w,d,m){
  //variables
  var Wt,Ht,cnvs,ctx,maxF=25,bubbles=[];
  //Predefinition
  cnvs=document.getElementsByName("bubble")[0];
  ctx=cnvs.getContext('2d');
  //Functions
  function setWidthCanvas(){
    Wt=w.innerWidth;
    Ht=w.innerHeight;
    cnvs.width=Wt;
    cnvs.height=Ht;
  }
  $( window ).resize(function() {
    setWidthCanvas();
  });
  setWidthCanvas();
  //images
  var img1 = new Image();
  img1.src = './images/bubble1.png';
  var img2 = new Image();
  img2.src = './images/bubble2.png';
  var img3 = new Image();
  img3.src = './images/bubble3.png';
  var img4 = new Image();
  img4.src = './images/bubble4.png';
  //Array images
  images = [img1,img2,img3,img4]
  for(var i = 0; i < maxF; i++)
  {
    bubbles.push({
      x: m.random()*Wt,
      y: m.random()*Ht,
      r: m.random()*3,
      img: images[m.floor((m.random() * 3) + 0)],
    });
  }
  function bubblefall(){
    var time = (new Date()).getTime();
    var widthScale = Math.sin(time / 200) * 0.1 + 0.9;
    var heightScale = -1 * Math.sin(time / 200) * 0.1 + 0.9;
    var oscilating = (Math.sin(time / 900) * 0.05 + 0.9)*1;

    ctx.clearRect(0, 0, Wt, Ht);
    ctx.fillStyle = "rgba(0, 0, 200, 0)";
    for(var i = 0; i < maxF; i++){
      var f = bubbles[i];
      ctx.drawImage(f.img,f.x*oscilating,f.y,f.img.width*widthScale,f.img.height*heightScale);
    }
    ctx.fill();
    var angl=0;
    for(var i=0;i<maxF;i++){
      angl+=0.1;
      var f=bubbles[i];
      f.y += -(m.abs(m.cos(angl))*3);
      if(f.x > Wt || f.x < 0 || f.y < -20){
        f.x=m.random()*Wt;
        f.y=Ht;
      }
    }
  }
  setInterval(bubblefall, 30);
}(window,document,Math));
