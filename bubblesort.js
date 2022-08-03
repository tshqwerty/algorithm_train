const arr = [0, 3, 2 ,5 ,6 ,8 ,1 ,9 , 4, 2, 1, 2, 9, 6, 4, 1, 7, -5, 23, 6, 35, 6, 32]; // Задаем массив
let count = 0 // Считаем число итераций

function bubbleSort(array) { // Задаем функцию
  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array.length; j++) {
      if (array[j+1] < array[j]) { // При условии если следующий элемент меньше
        let tmp = array[j] // записываем в переменную tmp текущий элемент
        array[j] = array[j+1] // текущему элементу присваеваем следующий
        array[j+1] = tmp // следующему присваиваем, сохраненный в переменную tmp
      }
      count+=1 // счетчик итераций
    }
  }
  return array // возвращаем массив
}

console.log('lenght', arr.lenght)
console.log(bubbleSort(arr))
console.log('count = ', count)