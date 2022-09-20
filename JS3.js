let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];
let count = 0,
  max = 0;
let b = [],
  i;
for (i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      b.push(arr[i]);
      count++;
    }
  }
}
if (arr[i] in b) {
  return;
} else {
  console.log(b);
}
//     if(count>max){
//         max=count
//    // console.log(arr[i])
//}

//console.log(b)
