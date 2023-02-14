def find_average(numbers: list[int]) -> float:
   sum = 0
   for num in numbers:
      sum += num
   return sum / len(numbers)