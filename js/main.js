document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){

    // create code for on load icon
    var compContainer = document.getElementById('compContainer');
    var comp = document.getElementById('comp');
    var txt  = document.getElementById('txt');
    //text to be written out
    var troll = 'Write on me now, or else ... you will have to watch me write on ';
    var troll2 = ' and on';
    var counter = 0;


function loader() {
    //Granting access... animation
    var perp = setInterval(function(){txt.innerHTML += '.';}, 1000);
    //Access granted animation
    setTimeout(function(){
        txt.innerHTML = 'ACCESS GRANTED';
        clearInterval(perp);
    }, 4000);

    //Enlarge size of Computer
    setTimeout(function(){
        txt.innerHTML = '';
        compContainer.style.height = '100%';
        compContainer.style.width = '100%';
        comp.style.boxSizing = 'initial';
        comp.style.height = '100%';
        comp.style.width = '100%';
        comp.style.border = 'solid 20px #00ff00';
        comp.style.marginLeft = '-20px';
        comp.style.marginTop = '-20px';
        comp.style.width = '100%';
        comp.style.height = '100%';
        txt.style.fontSize = '1.55rem';
    }, 5250);

    //start writing out text
    setTimeout(function(){
    //every 50 ms reiterate over next point in string
      var counterID = setInterval(function(){
        var str = troll.substr(0, counter);

        txt.placeholder = str;

        counter++;

        if ( counter >=  troll.length ) {
          clearInterval( counterID );
        }
      }, 50);
    }, 5300);

    setTimeout(function(){
    //every 50 ms reiterate over next point in string
      setInterval(function(){
        var str = troll2.substr(0, counter);

        txt.placeholder += str;

        counter++;
      }, 100);
    }, 8400);
}
loader();
}
