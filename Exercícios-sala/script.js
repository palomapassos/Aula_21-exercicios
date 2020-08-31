/*1*/

/*a*/
const maioridade = idade => {return idade>=18 ? true : false};

console.log(maioridade(19));


/*b*/
const escolherHeroina = grupo => {
    let heroina;
    heroina = (heroina === 'marvel') ? 'Capitã Marvel' : 'Mulher Maravilha';
    return heroina;
}

console.log(escolherHeroina('marvel'));

/*c*/
const calcularIdade = (animal, idade) => {
    return animal === 'gato' ? 
        (idade <= 1 ?
            15 : ((idade>1 && idade <=2) ? 
                    15+10 : 15+10+((idade-2)*4)))
    :(animal==='cachorro' ? (idade<=1 ? 
                                    15 : 15+((idade-1)*7))
    : 15);
}

console.log(calcularIdade('peixe', 1));