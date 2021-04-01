var data = require('./dictionary');


// var data=[{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"}];

let word = data.find(el => el.code === "Drag");
// => {name: "Albania", code: "AL"}
console.log(country["name"]);