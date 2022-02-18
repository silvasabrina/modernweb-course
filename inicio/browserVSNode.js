let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(modulo.exports === this)
console.log(module.exports)

//criando uma varialvel maluca: sem var e let
abc = 3 // nap faça isso em casa!!!
console.log(global.abc)

//modulo.exports = {e: 456, f: false, g: "teste"}
