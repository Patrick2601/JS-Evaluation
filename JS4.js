let top = -1;
let a = [],
  temp = [],
  ele;
//   const removeOdd=()=> {
//     for (let i = 0; i < a.length; i++)
//       if (a[top] % 2 !== 0) {
//         a.pop();
//       }
//   }

class stack {
  push = (ele) => {
    top++;
    a.push(ele);
    console.log("Pushed");
  };
  pop = () => {
    a.pop();
    top--;
    console.log("Poped");
  };
  display() {
    console.log(a);
    console.log(`Top is at ${top}`);
  }
 
}

const removeOdd = (a) => {
  for (let i = 0; i < top; i++) {
    if (a[top] % 2 !== 0) {
      o.pop();
      console.log(a);
    } else {
      return
    }
  }
};


let o = new stack();
o.push(1);
o.push(2);
o.push(3);
o.push(4);
o.push(5);
o.push(6);
o.display();
console.log("----------------------");
console.log("++++++++++-------+++++");

const res = removeOdd(a);
console.log(res);
o.display();

