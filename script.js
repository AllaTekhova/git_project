"use strict"

if(4 == 9) {
   console.log(`Ok!`);
}
else{
   console.log(`error`);
}

const numb = 50;

// if(numb < 49) {
//    console.log(`Error`);
// }
// else if(numb > 100) {
//    console.log(`too much`);
// }
// else{
//    console.log(`Ok`);
// }


// (numb == 50) ? console.log(`Ok`) : console.log(`Error`);


switch(numb) {
   case 49: console.log(`no`);
   break;
   case 100: console.log(`no again`);
   break;
   case 50: console.log(`yes`);
   break;
   default: console.log(`not today`);
   break;
}