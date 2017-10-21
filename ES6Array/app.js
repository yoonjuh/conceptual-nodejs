var buffer = new ArrayBuffer(8); // 8 bites == 64 bit 
var view = new Int32Array(buffer); // 32 bit 

view[0] = 5;
view[1] = 15;
//view[2] = 30;
console.log(view);