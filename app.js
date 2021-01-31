var name = '';

var userName = prompt('Hello! What is your name?')
console.log(userName);
alert('Welcome '+ userName);

function speed (){

    var message = '';
    
    var internetSpeed = prompt('What is your internet speed in Mbps?');
    console.log(internetSpeed);
    
    if(internetSpeed < 50 && internetSpeed > 0){
        message = "Too slow, you can't use these services";
    }else if (internetSpeed >100){
        message ='Great speed, please come in';
    }else if (internetSpeed >=50){
        message = 'Nice, you can proceed'
    }else {
        message = 'Please refresh and put a NUMBER'
    }
    alert(message);
    document.write('<h3>'+message+'</h3>');
}
speed();



/* to do list
put images 
use a while loop
use for loop in putting more than onr image at the page


*/

var customData = function(){

    var type = prompt('What do you prefer, movies or tv?');
    
    while(type !=='tv' && type !== 'movies'){
        type= prompt('Please Choose tv or movies')
    }
    
    var pic = '';
    
    if(type === 'movies'){
        pic = '<img src="Photos/Movies.jpg" width="500px" />';
    }else if(type === 'tv'){
        pic = '<img src="Photos/tv.png" width="500px" />';
    }
    var result = '';
    
    result = pic;
    
    document.write (pic);
    
    var result2='';
    result2 = '<img src = "Photos/video.png" width="250px"/>'
    
    var videos =prompt('How many videos do you want watch today?');
    
    for(var i = 0; i<videos; i++){
        document.write(result2);
    }
}
customData ();



