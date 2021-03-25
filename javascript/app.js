alert("welcome in other community ");



var favAnimal = prompt('Choose your favorite', 'Dogs , Cats , Barids, monkys');
alert ("you will see what you choose in the end of page")
if (favAnimal === 'Dogs'){
document.write('<img src="https://rjeem.com/wp-content/uploads/2019/06/%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%A8.jpg" hight= 500 width=500>')
} else if (favAnimal === 'Cats'){
    document.write('<img src ="https://i.pinimg.com/originals/10/b9/e1/10b9e1376c80d06f1b33d4c79888c7f4.jpg" hight= 500 width=500>');
} else if (favAnimal === 'Barids'){
    document.write('<img src="https://alshababradio.ps/upload/ar/images/1608643686-8427-11.jpg" hight= 500 width=500>');
} else if (favAnimal === 'Monkys'){
    document.write('<img src="https://lh3.googleusercontent.com/proxy/k_R_73CKe-JIl7BfvI9c0MTtH936qR9ZiOhhqdNA9H97gKFUe-JvApAheOHz9KI5M22aIlhXUlMNm9vjiRNXjOkmrfVjLsHV1GTjZsWeqxsM7WGc6gCSivuvxG_CFpYDOnv82AGv08a4khkrYpKBbPZXrKFfyBR0" hight= 500 width=500>');
} else {
    alert('pick your favorite again please!');
}
