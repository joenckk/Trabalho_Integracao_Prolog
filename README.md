# Integração do Prolog com Python e JavaScript

## Sobre o projeto

Este trabalho foi desenvolvido para a disciplina de **Paradigmas de Linguagem de Programação** e apresenta dois exemplos práticos de integração da linguagem lógica Prolog com outras linguagens de programação.

O objetivo é demonstrar como o Prolog pode ser utilizado para executar regras lógicas enquanto Python e JavaScript são responsáveis pela interação com o usuário.

## Integrantes

- Fabiana Lorensoni
- Isabella Vieira Joenck

**Professora:** Alessandra Bortoletto Garbelotti Hoffmann

**Instituição:** Universidade Tecnológica Federal do Paraná (UTFPR) — Campus Medianeira

**Ano:** 2026

## Exercício 1 — Python + Prolog

Sistema de aprovação de alunos que recebe uma nota de 0 a 10 e consulta regras em Prolog para determinar se o aluno está aprovado ou reprovado.

**Arquivos:**
- `Exercicio_1_Python/main.py`
- `Exercicio_1_Python/regras.pl`

**Requisitos:** Python, SWI-Prolog e biblioteca PySwip.

**Como executar:**

```bash
pip install pyswip
cd Exercicio_1_Python
python main.py
```

## Exercício 2 — JavaScript + Prolog

Programa que recebe um número inteiro e utiliza regras em Prolog para verificar se ele é par ou ímpar.

**Arquivos:**
- `Exercicio_2_JavaScript/main.js`
- `Exercicio_2_JavaScript/regras.pl`

**Requisitos:** Node.js e SWI-Prolog.

**Como executar:**

```bash
cd Exercicio_2_JavaScript
node main.js
```

**Observação:** no arquivo `main.js`, o caminho do executável do SWI-Prolog está configurado para uma instalação padrão no Windows. Caso necessário, ajuste esse caminho conforme a instalação utilizada.

## Tutorial acadêmico

O repositório também contém um tutorial com explicações sobre as integrações, desenvolvimento dos exercícios, instruções de execução, resultados e referências.

## Conclusão

Os exercícios demonstram duas formas de integração com Prolog: por meio da biblioteca PySwip, no Python, e pela execução de um processo externo do SWI-Prolog, no JavaScript.

Dessa forma, o projeto evidencia como diferentes paradigmas de programação podem trabalhar em conjunto na resolução de problemas.
