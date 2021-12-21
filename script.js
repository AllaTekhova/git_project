"use strict"

let numb = 50;

// while(numb <= 55) {
//    console.log(numb);
//    numb++;
// }

// do {
//    console.log(numb);
//    numb++;
// }
// while(numb < 55);

for(let i = 1; i < 8; i++) {
   if(i === 6) {
      break; // доходит до 6 и останавливается, не включая 6 в список и остонавливает выполнения условия
   }
   console.log(i);
}

for(let i = 1; i < 8; i++) {
   if(i === 6) {
      continue;  // пропускает 6 и продолжает пока не выполнится условие
   }
   console.log(i);
}