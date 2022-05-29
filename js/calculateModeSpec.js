var cm = require('./calculateMode')

console.log(JSON.stringify(cm.calculateMode([1,2,3,3])) === JSON.stringify([3]))            
console.log(JSON.stringify(cm.calculateMode([4.5, 0, 0])) === JSON.stringify([0]))           
console.log(JSON.stringify(cm.calculateMode([1.5, -1, 1, 1.5])) === JSON.stringify([1.5]))   
console.log(JSON.stringify(cm.calculateMode([1,1,2,2])) === JSON.stringify([1,2]))           
console.log(JSON.stringify(cm.calculateMode([1,2,3])) === JSON.stringify([1,2,3]))           
console.log(JSON.stringify(cm.calculateMode(["who", "what", "where", "who"])) === JSON.stringify(["who"]))