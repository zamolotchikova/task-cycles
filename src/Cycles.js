/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    let s = 0;
    for (let i = start; i <= end; ++i) {
        if (i % 2 == 0) {
            s = s + i;
        }
    }
    return s;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    let i = 0;

    while (a > 0.1) {
        a = a / 2;
        i = ++i;
    }
    return i;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    let i = 2;
    do {
        message = message.slice(0, i) + '_' + message.slice(i + 1);
        i = i + 3;
    } while (i < message.length);
    return message;
}
