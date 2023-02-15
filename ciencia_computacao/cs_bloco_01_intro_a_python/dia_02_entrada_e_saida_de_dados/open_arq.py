# Não rodar:

#  Vai falhar porque o OS tem limite de arquivos que pode abrir:
# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f"arquivo{index}.txt", "w"))