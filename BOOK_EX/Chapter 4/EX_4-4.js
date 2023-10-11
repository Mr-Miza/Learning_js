let randomNumber = Math.random() *5;
randomNumber= Math.round(randomNumber) ;
let sentence ;
//let ask = prompt('ask smth ig , lol') ;
console.log(randomNumber) ;
switch (randomNumber){
    case 0 :
        sentence= 'smth random ig ' ;
        break;
    case 1 :
        sentence= 'idk what im doing ' ;
        break;
    case 2: 
        sentence = 'lmfao' ;
        break ;
    case 3 :
        sentence='bosh' ;
        break;
     case 4 :
         sentence= 'still bosh' ;
         break;
    case 5:
        sentence='oreee' ;
        break;
}   
console.log() ;
console.log(sentence) ;