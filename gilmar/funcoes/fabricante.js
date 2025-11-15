function minhaFuncao(objeto) {
  objeto.fabricante = "Toyota";
}

var meucarro = {fabricante: "Honda", modelo: "civic", ano: 1998,};

var x,y;

x = meucarro.fabricante;

minhaFuncao(meucarro);
y=meucarro.fabricante;