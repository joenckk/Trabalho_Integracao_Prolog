% Verifica se um numero e par
par(N) :-
    integer(N),
    0 is N mod 2.

% Verifica se um numero e impar
impar(N) :-
    integer(N),
    1 is abs(N mod 2).
