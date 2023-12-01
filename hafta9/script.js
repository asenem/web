let red = math.floor(math.random() * 256) ;
let green = math.floor(math.random() * 256);
let blue = math.floor(math.random() * 256);

console.log(red, green, blue);
document.body.style.backgroundColor= 'rgb(${red},${blue},${green})';
