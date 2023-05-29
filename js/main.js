function getText(link) {
    	speak(link.innerHTML);
	}
	
   function speak(text){
   if (text == "") {text = "this it it"};
     
      var msg = new SpeechSynthesisUtterance();
      var voices = window.speechSynthesis.getVoices();
      msg.voice = voices[0]; // default
      msg.rate = 1; // 0.1- 10
      msg.pitch = 2; // 0-2
      msg.text = text;
      msg.volume = 1; // 0-1
      msg.lang = 'en';
      msg.onend = function(e) {
        console.log('Finished in ' + event.elapsedTime + ' seconds.');
      };
      speechSynthesis.speak(msg);
    
 }

   $(function(){
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
