 var p = 0;

 function num(val) {
     if (val == '/') {
         p = document.getElementById("inputBar").value;
         document.getElementById("inputBar").value = '';
         float = 1;
     } else if (val == 'x') {
         p = document.getElementById("inputBar").value;
         document.getElementById("inputBar").value = '';
         float = 2;
     } else if (val == '+') {
         p = document.getElementById("inputBar").value;
         document.getElementById("inputBar").value = '';
         float = 3;
     } else if (val == '-') {
         p = document.getElementById("inputBar").value;
         document.getElementById("inputBar").value = '';
         float = 4;
     } else {
         document.getElementById("inputBar").value += val;
     }
 }

 function numEqual() {
     console.log(float);
     console.log(p);
     var k;
     k = document.getElementById("inputBar").value;
     if (float == 1) {
         var text = Number(p) / Number(k);
     } else if (float == 2) {
         var text = Number(p) * Number(k);
     } else if (float == 3) {
         var text = Number(p) + Number(k);
     } else if (float == 4) {
         var text = Number(p) - Number(k);
     }
     document.getElementById("inputBar").value = text;

 }

 function numClear() { 
     document.getElementById("inputBar").value = '';
  }