document.querySelector(".btn").addEventListener('click',()=>{
    let randomNumber1= Math.floor(Math.random()*6)+1;
    let randomNumber2= Math.floor(Math.random()*6)+1;
    
    let dice1 = `images/dice${randomNumber1}.png`;
    let dice2 = `images/dice${randomNumber2}.png`;
    
    let first= document.querySelector(".img1");
    let second= document.querySelector(".img2");
    
    first.setAttribute("src",dice1);
    second.setAttribute("src",dice2);
    
    let text=document.querySelector("h1");
    if(randomNumber1>randomNumber2){
        text.innerHTML="Player1 Wins ";
    }else if(randomNumber2>randomNumber1){
        text.innerHTML="Player2 Wins ";
    }else{
        text.innerHTML="Draw";
    }
});
