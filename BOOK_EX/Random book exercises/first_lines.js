 
/*
let arr = ['milk', 'bread' , 'apple' , 'pancackes','strwberries' , 'veggies'] ;

arr.splice(1, 1 , 'bananas', 'eggs' ) ; 


console.log(arr.indexOf('milk'));
arr.splice(2,0, 'Carrot' , 'lettuce') ; 

console.log(arr);

let arr2 = ['jouice', 'pop'] ; 

let arr3 = arr.concat(arr2).concat(arr2) ;
 console.log(arr3) ; 

 console.log(arr3.lastIndexOf('pop')) ; 

 let arr = [1,2,3] ;
 let arrOfarr = [arr ,arr ,arr] ; 
 console.log(arrOfarr) ; 
*/

//------- OBJECTS -----------//

let myCar = {

    type: "Mercedes Benz",
    model: "myBack", 
    cargo:"flase" , 
    engine: 6.3 ,
    color:"black"  ,
    forsale: "true" ,

}

// updating propreties // 
myCar.cargo = "true" 

//assigning a objects value to a variable
let x = "model";
myCar[x]= "GLE" ; 

console.log(myCar[x]) ;

x= "forsale" ;
myCar[x] = "false" ; 
 
console.log(myCar[x]) ; 

//----------OBJECT INSIDE OBJECT -------------//

let humans = {
    gender:{
        morethan2:"yes" ,
        isItStupid:"yes", 
        canUchooseIt: "reecently i guess" 
    } , 
    inteligence:"stupid" , 
    description: "animals with brain" , 
    givebirth:"true"
}

humans.gender.isItStupid="extremely" ;
humans ["gender"] ["isItStupid"] = "fk ye it iz"

console.log(humans.gender.isItStupid);

//---------ARRAYS IN OBJECTS-------------//

