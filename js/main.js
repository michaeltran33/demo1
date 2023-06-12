var prevImg = "";
var cX = 0;
var cY = 0;
const screens = ["lounge","kitchen","bedroom" ];
var screen = screens[0];
//temp hardode
let objects = "curtain, windows, spot light, capinet,pot,candles,curshion,sofa,draw table,table lamp,desk,chair,carpet,frame picture";
let arrayObjects = objects.replace(/, /g,",").split(",");

const showPopup = (evt) => {
  var elPopup = document.getElementById("popup");
  elPopup.style.display = "block";
  //console.log(cX + "px");
  elPopup.style.left = cX + "px";
  elPopup.style.top = cY + "px";
  
};

//elArea.addEventListener("click", showPopup);

let mousePos = { x: undefined, y: undefined };

window.addEventListener('mousemove', (event) => {
  mousePos = { x: event.clientX, y: event.clientY };
  cX = mousePos.x;
  cY = mousePos.y;
  //console.log(mousePos.x,mousePos.y);
});

function showDetail(x) {
x.children[0].style.display = "block";
// showPopup(x); 
}

function hideDetail(x) {
  x.children[0].style.display = "none";
 }

function getText(link) {
    	speak(link.innerHTML);
	}

function bigImg(x) {
    //x.style.border ="thin solid red";
    var txt = x.getAttribute('alt');
    var wrap = document.getElementsByClassName("wrap");
    var txt2 = "url(" + '"imgs/' + txt + '")';
    if (prevImg == txt2) { return }
    prevImg = txt2;
    wrap[0].style.backgroundImage =  txt2; 
    wrap[0].style.backgroundRepeat  = "no-repeat";
    wrap[0].style.backgroundSize = "inherit";
    console.log(txt2);
  }

function speak(text){
   if (text == "") {text = "this it it"};
     
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[0]; // default
      msg.rate = 1; // 0.1- 10
      msg.pitch = 1; // 0-2
      msg.text = text;
      msg.volume = 1; // 0-1
      msg.lang = 'en';
      msg.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };
      speechSynthesis.speak(msg);
    
 }
 var isIOS = (function () {
  var iosQuirkPresent = function () {
      var audio = new Audio();

      audio.volume = 0.5;
      return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
  };

  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  var isAppleDevice = navigator.userAgent.includes('Macintosh');
  var isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)

  return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
})();

   $(function(){

      console.log(arrayObjects);
      let txt = '"imgs/' + screen + "/00.jpg";
      let txt2 = "url(" + txt + '")';
      console.log(txt2);
      document.body.style.backgroundImage = txt2;

      // See if this is a touch device
      if ('ontouchstart' in window)
      {
        // Set the correct body class
        $('body').removeClass('no-touch').addClass('touch');
        
        // Add the touch toggle to show text
        $('div.boxInner').click(function(){
          $(this).closest('.boxInner').toggleClass('touchFocus');
        });
      }
    });
