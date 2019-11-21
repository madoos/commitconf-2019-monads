const Identity = (value) => {
  return {
    value,
    map: (f) => Identity(f(value)) // implement map method 
  }
}

const five = Identity(5);

console.log(five.map(x=>x));