// 1. Soma dos números pares
function somaPares(arr) {
    return arr.filter(num => num % 2 === 0).reduce((acc, val) => acc + val, 0);
  }
  
  // 2. Filtrar palavras com mais de 4 letras
  function palavrasMaioresQue4(arr) {
    return arr.filter(palavra => palavra.length > 4);
  }
  
  // 3. Contar quantas vezes um número aparece no array
  function contarOcorrencias(arr, numero) {
    return arr.filter(item => item === numero).length;
  }
  
  // 4. Multiplicar todos os elementos por um número
  function multiplicarArray(arr, multiplicador) {
    return arr.map(num => num * multiplicador);
  }
  
  // 5. Inverter as palavras de uma frase
  function inverterFrase(str) {
    return str.split(' ').reverse().join(' ');
  }
  
  // EXEMPLOS DE USO:
  
  const numeros = [1, 2, 3, 4, 5, 6, 2];
  const palavras = ['casa', 'elefante', 'sol', 'computador', 'ar'];
  const frase = "Hoje o céu está lindo";
  
  console.log("1. Soma dos pares:", somaPares(numeros)); // 2 + 4 + 6 + 2 = 14
  console.log("2. Palavras com mais de 4 letras:", palavrasMaioresQue4(palavras)); // ['elefante', 'computador']
  console.log("3. Ocorrências do número 2:", contarOcorrencias(numeros, 2)); // 2
  console.log("4. Array multiplicado por 3:", multiplicarArray(numeros, 3)); // [3, 6, 9, 12, 15, 18, 6]
  console.log("5. Frase invertida:", inverterFrase(frase)); // "lindo está céu o Hoje"