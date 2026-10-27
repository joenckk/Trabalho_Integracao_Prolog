from pathlib import Path
from pyswip import Prolog

# Inicia o Prolog
prolog = Prolog()

# Carrega as regras do arquivo Prolog
arquivo = Path(__file__).resolve().parent / "regras.pl"
prolog.consult(str(arquivo))

print("=== SISTEMA DE APROVACAO DE ALUNOS ===")

try:
    nota = float(input("Digite a nota do aluno: ").replace(",", "."))

    if nota < 0 or nota > 10:
        print("Erro: a nota deve estar entre 0 e 10.")

    elif list(prolog.query(f"aprovado({nota})")):
        print("Resultado: Aluno aprovado!")

    elif list(prolog.query(f"reprovado({nota})")):
        print("Resultado: Aluno reprovado!")

except ValueError:
    print("Erro: digite uma nota valida.")
