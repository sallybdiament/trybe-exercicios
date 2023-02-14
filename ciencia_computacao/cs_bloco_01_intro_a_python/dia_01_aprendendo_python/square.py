def square_asteriscos (num: int) -> str:
    linha = ''
    for num in range(num):
        linha += '*'
    for num in range(num+1):
        print(linha)

square_asteriscos(5)

# def draw_square(n):
#     for row in range(n):
#         print(n * '*')
