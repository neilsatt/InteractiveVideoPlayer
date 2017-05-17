document.addEventListener('DOMContentLoaded', function() {


// Highlight text as it is spoken
let myVideo = document.getElementById("mainVideo");

// Reset font color back to black
function resetColor(spanNum) {
    spanNum.style.color = 'black';
}
    
// use the Media event 'timeupdate' to check the current video time
myVideo.addEventListener('timeupdate', function(){
    let currentTime = myVideo.currentTime;
    //console.log(currentTime);
    // Paragraph One
    if (currentTime > 0 && currentTime < 4.13 ) {
       span1.style.color = 'orange';
    }
    else if (currentTime > 4.13 && currentTime < 7.53 ) {
       span2.style.color = 'orange';
       resetColor(span1);
    }
    else if (currentTime > 7.53 && currentTime < 11.27 ) {
       span3.style.color = 'orange';
       resetColor(span2);
    }
    else if (currentTime > 11.27 && currentTime < 13.96 ) {
       span4.style.color = 'orange';
       resetColor(span3);
    }
    // Paragraph Two
    else if (currentTime > 13.96 && currentTime < 17.94 ) {
       span5.style.color = 'orange';
       resetColor(span4);
    }
    else if (currentTime > 17.94 && currentTime < 22.37 ) {
       span6.style.color = 'orange';
       resetColor(span5);
    }
    else if (currentTime > 22.37 && currentTime < 26.88 ) {
       span7.style.color = 'orange';
       resetColor(span6);
    }
    else if (currentTime > 26.88 && currentTime < 30.92 ) {
       span8.style.color = 'orange';
       resetColor(span7);
    }
    // incorrect timings in captions file - updated here 
     else if (currentTime > 30.92 && currentTime < 32.10 ) {
       span9.style.color = 'orange';
       resetColor(span8);
    }
    
     else if (currentTime > 32.10 && currentTime < 34.73 ) {
       span10.style.color = 'orange';
       resetColor(span9);
    }
    
     else if (currentTime > 34.73 && currentTime < 39.43 ) {
       span11.style.color = 'orange';
       resetColor(span10);
    }
    // Paragraph Three
    
    
});
        
    
    
});
