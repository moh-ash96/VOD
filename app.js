alert('Welcome to our page');

var message = '';

var internetSpeed = prompt('What is your internet speed in mbps?');
console.log(internetSpeed);

if(internetSpeed < 50 && internetSpeed > 0){
    message = "Too slow, you can't use this service";
}else if (internetSpeed >100){
    message ='You are the master come in';
}else if (internetSpeed >=50){
    message = 'That is a good speed you can proceed'
}else {
    message = 'please refresh and put a NUMBER'
}
alert(message);
document.write('<h2>'+message+'</h2>');


/* to do list
put images 
use a while loop
use for loop in putting more than onr image at the page


*/




var type = prompt('What type of vieos do you like, movies or tv');

while(type !=='tv' && type !== 'movies'){
    type= prompt('please choose tv or movies')
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

var videos =prompt('How many videos do you want?');

for(var i = 0; i<videos; i++){
    document.write(result2);
}


 
