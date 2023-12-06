# Algorithms
Задачи из тренировок Яндекса по Алгоритмам 4.0

Все скрипты принимают ввод из input.txt и выводят результат в output.txt

Прим.: lec1-4.js, lec1-5.js, lec2-3.js, lec2-4.js, lec3-2.js - не закончены

## 0-1.js Не минимум на отрезке
Задана последовательность целых чисел a1, a2, …, an. Задаются запросы: сказать любой элемент последовательности на отрезке от L до R включительно, не равный минимуму на этом отрезке.

Формат ввода
В первой строке содержатся два целых числа N, 1 ≤ N ≤ 100 и M, 1 ≤ M ≤ 1000 — длина последовательности и количество запросов соответственно.

Во второй строке — сама последовательность, 0 ≤ a[i] ≤ 1000.

Начиная с третьей строки перечисляются M запросов, состоящих из границ отрезка L и R, где L, R - индексы массива, нумеруются с нуля.

Формат вывода
На каждый запрос выводится в отдельной строке ответ — любой элемент на [L, R], кроме минимального. В случае, если такого элемента нет, выводится "NOT FOUND".

## lec1-1.js Partition
Базовым алгоритмом для быстрой сортировки является алгоритм partition, который разбивает набор элементов на две части относительно заданного предиката.
По сути элементы массива просто меняются местами так, что левее некоторой точки в нем после этой операции лежат элементы, удовлетворяющие заданному предикату, а справа — не удовлетворяющие ему.
Например, при сортировке можно использовать предикат «меньше опорного», что при оптимальном выборе опорного элемента может разбить массив на две примерно равные части.

Формат ввода
В первой строке входного файла содержится число N — количество элементов массива (0 ≤ N ≤ 106).
Во второй строке содержатся N целых чисел a[i], разделенных пробелами (-109 ≤ ai ≤ 109).
В третьей строке содержится опорный элемент x (-109 ≤ x ≤ 109).
X не обязательно встречается среди a[i].

Формат вывода
Выводится результат работы алгоритма при использовании предиката «меньше x»: в первой строке выводится число элементов массива, меньших x, а во второй — количество всех остальных.

## lec1-2.js Быстрая сортировка
Быстрая сортировка с использованием алгоритма из предыдущей задачи

Формат ввода
В первой строке входного файла содержится число N — количество элементов массива (0 ≤ N ≤ 10^6).
Во второй строке содержатся N целых чисел a[i], разделенных пробелами (-10^9 ≤ a[i] ≤ 10^9).

Формат вывода
Выводится результат сортировки, то есть N целых чисел, разделенных пробелами.

Прим.: работает, но недостаточно эффективно

## lec1-3.js Слияние
Базовый алгоритм для сортировки слиянием — алгоритм слияния двух упорядоченных массивов в один упорядоченный массив. Эта операция выполняется за линейное время с линейным потреблением памяти.

Формат ввода
В первой строке входного файла содержится число N — количество элементов первого массива (0 ≤ N ≤ 10^6).
Во второй строке содержатся N целых чисел a[i], разделенных пробелами, отсортированные по неубыванию (-10^9 ≤ ai ≤ 10^9).
В третьей строке входного файла содержится число M — количество элементов второго массива (0 ≤ M ≤ 10^6).
В третьей строке содержатся M целых чисел b[i], разделенных пробелами, отсортированные по неубыванию (-10^9 ≤ bi ≤ 10^9).

Формат вывода
Выводится результат слияния этих двух массивов, то есть M + N целых чисел, разделенных пробелами, в порядке неубывания.

Прим.: работает, но недостаточно эффективно

## lec2-1.js Равенство подстрок
Дана строка S, состоящая из строчных латинских букв.

Нужно определить, совпадают ли строки одинаковой длины L, начинающиеся с позиций A и B.

Формат ввода
В первой строке записана S (1 ≤ |S| ≤ 2 ⋅ 10^5), состоящая из строчных латинских букв.

Во второй строке записано число Q (1 ≤ Q ≤ 2 ⋅ 10^5) — количество запросов.

В следющих Q строках записаны запросы: целые числа L, A и B (1 ≤ L ≤ |S|, 0 ≤ A, B ≤ (|S| - L)) — длина подстрок и позиции, с которых они начинаются.

Формат вывода
Если строки совпадают — выводится "yes", иначе — "no".

## lec2-2.js Основание строки
Строка S была записана много раз подряд, после чего от получившейся строки взяли префикс и дали вам. Задача определить минимально возможную длину исходной строки S.

Формат ввода
В первой и единственной строке входного файла записана строка, которая содержит только латинские буквы, длина строки не превышает 50000 символов.

Формат вывода
Минимально возможная длина исходной строки S.

## lec3-1.js Дейкстра
Прим.: частичное решение
Дан ориентированный взвешенный граф. Нужно найти кратчайшее расстояние от одной заданной вершины до другой.

Формат ввода
В первой строке содержатся три числа: N, S и F (1≤ N ≤ 100, 1 ≤ S, F ≤ N), где N — количество вершин графа, S — начальная вершина, а F — конечная. В следующих N строках вводится по N чисел, не превосходящих 100, – матрица смежности графа, где -1 означает что ребра между вершинами нет, а любое неотрицательное число — наличие ребра данного веса. На главной диагонали матрицы записаны нули.

Формат вывода
Выводится искомое расстояние или -1, если пути между указанными вершинами не существует.
