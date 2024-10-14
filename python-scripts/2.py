#Display sum of first ten elements starting from element "5":

numbers = [1, 5, 2, 3, 1, 4, 1, 23, 12, 2, 3, 1, 2, 31, 23, 1, 2, 3, 1, 23, 1, 2, 3, 123]

sum_numbers = sum(numbers[numbers.index(5):numbers.index(5) + 10])
print(sum_numbers)
