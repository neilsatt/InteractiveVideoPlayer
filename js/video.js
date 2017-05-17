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
       span1.style.color = '#ff8c00';
    }
    else if (currentTime > 4.13 && currentTime < 7.53 ) {
       span2.style.color = '#ff8c00';
       resetColor(span1);
    }
    else if (currentTime > 7.53 && currentTime < 11.27 ) {
       span3.style.color = '#ff8c00';
       resetColor(span2);
    }
    else if (currentTime > 11.27 && currentTime < 13.96 ) {
       span4.style.color = '#ff8c00';
       resetColor(span3);
    }
    // Paragraph Two
    else if (currentTime > 13.96 && currentTime < 17.94 ) {
       span5.style.color = '#ff8c00';
       resetColor(span4);
    }
    else if (currentTime > 17.94 && currentTime < 22.37 ) {
       span6.style.color = '#ff8c00';
       resetColor(span5);
    }
    else if (currentTime > 22.37 && currentTime < 26.88 ) {
       span7.style.color = '#ff8c00';
       resetColor(span6);
    }
    else if (currentTime > 26.88 && currentTime < 30.92 ) {
       span8.style.color = '#ff8c00';
       resetColor(span7);
    }
    else if (currentTime > 32.10 && currentTime < 34.73 ) {
       span9.style.color = '#ff8c00';
       resetColor(span8);
    }
    else if (currentTime > 34.73 && currentTime < 39.43 ) {
       span10.style.color = '#ff8c00';
       resetColor(span9);
    }
    else if (currentTime > 39.43 && currentTime < 41.19 ) {
       span11.style.color = '#ff8c00';
       resetColor(span10);
    }
    // Paragraph Three
    else if (currentTime > 42.35 && currentTime < 46.30 ) {
       span12.style.color = '#ff8c00';
       resetColor(span11);
    }
    else if (currentTime > 46.30 && currentTime < 49.27 ) {
       span13.style.color = '#ff8c00';
       resetColor(span12);
    }
    else if (currentTime > 49.27 && currentTime < 53.76 ) {
       span14.style.color = '#ff8c00';
       resetColor(span13);
    }
    else if (currentTime > 53.76 && currentTime < 57.78 ) {
       span15.style.color = '#ff8c00';
       resetColor(span14);
    }
    else if (currentTime > 57.78 && currentTime < 60.15 ) {
       span16.style.color = '#ff8c00';
       resetColor(span15);
    }
    
});
        
    
    
});
