# Ex 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertica.

your_name = input('Digite seu nome:')

for letter in your_name:
    print(letter)

# Ex 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

input_numbers = input("Digite uma lista de números separados por um espaço: ")
list_numbers = input_numbers.split(' ')
soma = 0
for number in list_numbers:
    if (number.isdigit() == False):
        print(f"Erro ao somar valores, {number} é um valor inválido")
    else:
        soma += int(number)
print(f"A soma dos valores válidos é {soma}.")

#  Ex 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que: lê todas essas informações; aplique um filtro, mantendo somente as pessoas que estão reprovadas; escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.
recuStudents = []
with open("file.txt") as lista_estudantes:
    print(lista_estudantes)
    for line in lista_estudantes:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            recuStudents.append(student_grade[0] + "\n")


with open("ex3.txt", mode="w") as recuStudentsFile:
    print(recuStudents)
    recuStudentsFile.writelines(recuStudents)