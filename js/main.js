var Qutoes=[
{
quote:`"Be yourself; everyone else is already taken. "`,
author:`"--Oscar Wilde"`
},
{
    quote:`"So many books, so little time. "`,
    author:`"--Frank Zappa"`
    },{
        quote:`"A room without books is like a body without a soul. "`,
        author:`"--Marcus Tullius Cicero"`
        },{
            quote:`"You only live once, but if you do it right, once is enough. "`,
            author:`"--Mae West"`
            },{
                quote:`" Be the change that you wish to see in the world."`,
                author:`"--Mahatma Gandhi"`
                }

];
var newIndex;
var lastIndex;
var displayedQuotes=[];
function getQuotes(){
    if(displayedQuotes.length ==Qutoes.length){
        displayedQuotes=[]
}
do {
    newIndex=Math.floor(Math.random()*Qutoes.length);
} while (newIndex==lastIndex||displayedQuotes.includes(newIndex));
lastIndex=newIndex
console.log(newIndex);
displayedQuotes.push(newIndex)
document.getElementById('quote').innerHTML=Qutoes[newIndex].quote;
document.getElementById('author').innerHTML=Qutoes[newIndex].author;
}