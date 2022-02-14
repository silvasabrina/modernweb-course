const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores [3])
console.log(valores[4])

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, "teste")
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

// splice
var arr = [1,2,3,4,5];
arr.splice(2, 0, 999)
console.log(arr)
arr.splice(4, 1)

//indexOf
console.log(arr.indexOf(5));

//join
var arr2 = ['o', 'rato', 'roeu']
console.log(arr2.join(" "));
console.log(arr.reverse())