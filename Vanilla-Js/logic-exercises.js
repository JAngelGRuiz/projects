//////// SORTING OBJECT'S ARRAY ////////
function sortingUsers(users){
  function comparinFunc(a, b){
    if(a.lastName > b.lastName) return 1
    if(a.lastName < b.lastName) return -1
    return 0
  }

  const sortedUsers = users.sort(comparinFunc)

  return sortedUsers
}
console.log(sortingUsers([{ firstName: 'Ana', lastName: 'Caro'}, { firstName: 'Diana', lastName: 'Bonilla'}]))



//////// INTERVALO MENOR /////////
function smallerInterval(numbers) {

  let leng = numbers.length
  let currentInterval;
  let interval;
  let firstNumber;
  let secondNumber;
  let indexes;

  for(let j = 0; j < leng; j++){
    for(let i = 0; i < leng; i++){
      if(j === i) continue

      if(j === 0){
        interval = Math.abs(numbers[j] - numbers[i])
      }

      currentInterval = Math.abs(numbers[j] - numbers[i])

      if(interval >= currentInterval){
        interval = currentInterval
        firstNumber = numbers[j]
        secondNumber = numbers[i]
        indexes = [j, i]
      }
    }
  }

  return [[firstNumber, secondNumber], indexes]
}
console.log(smallerInterval([1, 5, 10, 1]));




///////// PROMEDIO DE UN ARRAY ///////
function promedio(numbers){
  const sum = numbers.reduce((accumulator, current) => accumulator + current)
  return (sum / numbers.length)
}
console.log(promedio([2, 6]))



//////// SALTO DE LÍNEA //////
function saltoDeLinea(str){
  return str.replaceAll(' ', '\n')
}
console.log(saltoDeLinea('Hello Word !')) 




//////// SUMA MÁS PEQUEÑA /////////
function sumaMenor (numbers) {
  let leng = numbers.length
  let currentSum;
  let sum;

  for(let j = 0; j < leng; j++){
    for(let i = 0; i < leng; i++){
      if(j === i) continue
      console.log('sumas: ', numbers[j], numbers[i])
      if(j === 0) {
        sum = numbers[j] + numbers[i]
      }
      currentSum = numbers[j] + numbers[i]

      if(sum >= currentSum){
        sum = currentSum
      }
    }
  }

  return sum
}
console.log(sumaMenor([2, 4, 6, 0, 4]))




//////// SUMA igual a K ////////
function suma(numbers, k) {
    const leng = numbers.length
    let sum;
    let firstNumber;
    let secondNumber;
  
    for(let j = 0; j < leng; j++){
      for(let i = 0; i < leng; i++){
        if(j === i) continue
  
        sum = numbers[j] + numbers[i]
  
        if(sum === k){
          firstNumber = numbers[i]
          secondNumber = numbers[j]
        }else {
          firstNumber = 0
          secondNumber = 0
        }
      }
    }
  
    return [firstNumber, secondNumber]
  }
console.log(suma([0,1,2,3], 6)) 