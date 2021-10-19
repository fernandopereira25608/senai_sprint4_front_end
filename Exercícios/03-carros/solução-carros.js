/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = parametro => {
    if (parametro) {
        return true
    }
    else {
        return false
    }
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy("");

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(true);
isTruthy(1);
isTruthy(1.1);
isTruthy(-1);
isTruthy("1");
isTruthy(" ");
isTruthy({});
isTruthy([]);
isTruthy(new Date(2021, 10, 14));
isTruthy(Infinity);

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = new Object();
this.marca = "Chevrolet"
this.modelo = "Onix"
this.placa = "ABC1234"
this.ano = 2016
this.cor = "Vermelho"
this.quantasPortas = 4
this.assentos = 5
this.quantidadePessoas = 0;

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = cor => {
    carro.cor = cor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return `Esse carro é um ${carro.obterMarca()}, ${carro.obterModelo()}`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".

//TESTAR
carro.adicionarPessoas = numeroPessoas => {
    numeroPessoas = carro.quantidadePessoas;
    if (numeroPessoas >= 0 & carro.quantidadePessoas === carro.assentos) {
        return "O carro já está lotado!";
    }
    
    if (carro.assentos - numeroPessoas > 1){
        return `Só cabem mais ${(carro.assentos - carro.quantidadePessoas)} pessoas!`;
    }

    if((carro.assentos - carro.quantidadePessoas) === 1){
        return `Só cabe mais uma pessoa!`;
    }

    else{
        carro.quantidadePessoas += numeroPessoas;
        return `Já temos ${numeroPessoas}} pessoas no carro!`;
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());

// Mude a cor do carro para vermelho.
carro.mudarCor("cinza");

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
carro.mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4);

// Faça o carro encher.
carro.adicionarPessoas(6);

// Tire 4 pessoas do carro.
carro.adicionarPessoas(-4);

// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10);

// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);