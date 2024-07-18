let cards=[]
let sum = 0
let blackJack=false
let isAlive=true
let message=''
let player={
    name:'Harinesh',
    chip:145
   }
messageEl=document.getElementById('message-el')
sumEl=document.querySelector('h4')
cardEl=document.getElementById('card-el')

let playerEl=document.getElementById('player-el')
playerEl.textContent=player.name+' :  $'+player.chip
function getRandomCard()
{
    let randomNumber= Math.floor(Math.random()*13 ) +1
    if (randomNumber ===1){
        return 11
    }else if (randomNumber>=11){ 
        return 10
    }
    else{
        return randomNumber
    }
}

function startgame(){
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    rendergame()
}
function rendergame()
{
    cardEl.textContent="Card: "
    for( let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+' '
    } 
    sumEl.textContent="Sum: "+sum
    if (sum<=20){
        message="Do you want to draw the card"

    }else if (sum ===21){
        message="Woohoo! you got blackjack"
        blackJack=true
    }else{
        message="you out of the game "
        isAlive=false
    }
    console.log(message)
    messageEl.textContent=message
    
}
function newcard(){
    if (isAlive==true && blackJack==false){
        console.log("Drawing a new card from the deck")
        let hardcard=getRandomCard()
        sum+=hardcard
        cards.push(hardcard)
        console.log(cards)
        rendergame() 
    }
    
}