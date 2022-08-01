const arr = [0, 3, 2 ,5 ,6 ,8 ,1 ,9 , 4, 2, 1, 2, 9, 6, 4, 1, 7, -5, 23, 6, 35, 6, 32]; // Задаем массив
let count = 0 // Считаем число итераций

function qsort(array) { // Задаем функцию быстрой сортировки
    if (array.length <= 1) { 
        return array // если кол-во элементов в массиве меньше или равно 1 возвращаем его
    }
    let pivotIndex = Math.floor(array.length / 2); // Значение середины массива
    let pivot = array[pivotIndex] // добавляем это значение в переменную
    let less = [] // Задаем массив, в который будут входить значения, меньше центрального
    let greater = [] // больше центрального
    for (let i = 0; i < array.length; i++) { // Проходим по всему массиву, сравнивая с центральным
        count +=1 // счетчик итераций
        if (i === pivotIndex)
            continue
        if (array[i] < pivot ) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...qsort(less), pivot, ...qsort(greater)] // возвращаем отсортированный массив
}


console.log(qsort(arr)) // выводим отсортированный массив
console.log('count', count) // выводим количество итераций