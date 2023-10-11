function createPhoneNumber(numbers){
    
  let array = new Array(numbers) ;
  let prefix= array.slice(0,3) ;
  console.log(array) ;
  let first3Numbers = array.slice(3,6) ;
  let fullNr = array.slice(6,10) ;
   let string= "("+prefix+")"+first3Numbers+"-"+fullNr ;
    console.log(string) ;
  
  }

  createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) ;
