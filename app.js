alert('Welcome to our page');

var message = '';

var internetSpeed = prompt('What is your internet speed in mbps?');
console.log(internetSpeed);

if(internetSpeed < 50){
    message = "Too slow, you can't use this service";
}else if (internetSpeed >100){
    message ='You are the master come in';
}else if (internetSpeed >=50){
    message = 'That is a good speed you can proceed'
}else {
    message = 'please refresh and put a NUMBER'
}

document.write('<h2>'+message+'</h2>');


alert(message);


