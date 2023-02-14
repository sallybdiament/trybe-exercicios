def find_biggest_number(first_number: int, second_number: int) -> int:
    if first_number > second_number:
        biggest = first_number
    else: 
        biggest = second_number
    return biggest

print(find_biggest_number(5, 3))
