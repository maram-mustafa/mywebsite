alert("welcome in other community ");



var favAnimal = prompt('Choose your favorite', 'Dogs , Cats , Birds , monkeys');
alert ("you will see what you choose in the end of page")
if (favAnimal === 'Dogs'){
document.write('<img src="https://rjeem.com/wp-content/uploads/2019/06/%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8.jpg" hight= 500 width=500>')
} else if (favAnimal === 'Cats'){
    document.write('<img src ="https://i.pinimg.com/originals/10/b9/e1/10b9e1376c80d06f1b33d4c79888c7f4.jpg" hight= 500 width=500>');
} else if (favAnimal === 'Birds'){
    document.write('<img src="https://alshababradio.ps/upload/ar/images/1608643686-8427-11.jpg" hight= 500 width=500>');
} else if (favAnimal === 'Monkys'){
    document.write('<img src="https://rjeem.com/wp-content/uploads/2019/10/289974-Sepik.jpg" hight= 500 width=500>');
} else {
    alert('pick your favorite again please!');
}

function gussingGame(){
var dogGame = prompt(' I have four legs. im very smart and i like play. i like smell things, Guess who I am ...');
var dogName = 'Dog';

while( dogGame !== dogName){
    dogGame = prompt('please try again!')
    return dogName;
}
}
gussingGame()



var animalName = prompt('What is the animal you intend to adopt (cat, dog, monkey or bird)');
var adaptionChoose = prompt('How many animals do you intend to adopt..?!');
var image = '';

for(var i = 1 ; i <=adaptionChoose; i++ ){
    if(animalName === 'dog'){
        image = image + '<img src="images/dog.jpg" hight= 500 width= 500 />';
    }else if(animalName === 'cat'){
        image = image + '<img src="images/cat.jpg" hight= 500 width= 500 />';
    }else if(animalName === 'monkey'){
        image = image + '<img src="images/monky.jpg" hight= 500 width= 500 />';
    }else if(animalName === 'bird'){
        image = image + '<img src="images/birds.jpg" hight= 500 width= 500 />';
    }
}

console.log(image);
document.write(image);



var month = prompt('In which month do you want to receive your pet? Enter the month please!')

function calculateDate(date){
    //  number(3) indicating the current month
    var monthOfReceipt = month - 3; 
    alert('You will receive a message with all the details after ' + monthOfReceipt + ' month')

    return monthOfReceipt;
}

calculateDate(month);




function greet(name) {
    return "Hello, " + name;
  }
  greet("Grace Hopper");