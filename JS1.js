let alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let n = 3,
  s = " ";
num = n - 1;
let i, j, ind;
for (i = 0; i < n; i++) {
  for (j = 0; j < n; j++) {
    ind = num + n * j;
    if (ind < 26) {
      s += alpha[ind] + " ";
    } else {
      ind = n - (25 - (ind - 6 - 1));
      s += alpha[ind] + " ";
    }
  }
  console.log(s);
  num--;
  s = " ";
}
