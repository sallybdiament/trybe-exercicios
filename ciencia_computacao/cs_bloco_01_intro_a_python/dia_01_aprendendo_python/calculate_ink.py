import math

def calculate_inc(m: int):
    qty_liters = (1/3)*m
    qty_canels_ink = math.ceil(qty_liters / 18)
    # qty_canels_ink = qty_liters//18
    # as // realizam a divisão e retornam somente o inteiro (quociente)
    # if qty_liters % 18:
        # qty_canels_ink += 1
    return (qty_canels_ink, qty_canels_ink*80)

print(calculate_inc(18))
