/*
Assunto 01 - Listas e índices

Em quaisquer linguagens de programação nós encontramos o conceito de "Estruturas de dados":
são formas diversas de organizar um conjunto de informações, sejam valores primitivos
(como strings, números e booleanos), variáveis e constantes, e até mesmo valores mais
complexos como outras estruturas de dados.

A primeira que veremos (novamente) são as "listas" ou "arrays". Se tratam de uma estrutura
que permite agrupar um conjunto de valores atribuindo a cada um deles uma "posição", como
a posição de alunos em uma fila.

Para criar uma lista, basta criar uma variável e atribuir a ela um conjunto de valores
agrupados com colchetes:

const minhaLista = ["item 1", "segundo item", "3º", "item quatro"]

Na lista acima, temos 4 itens. Para acessarmos a lista completa, basta utilizar o nome
da lista como se faz para qualquer variável:

console.log(minhaLista)      // Vai exibir ["item 1", "segundo item", "3º", "item quatro"]

E quando queremos acessar apenas um item da lista? Da mesma forma que em uma fila
de pessoas podemos referenciar a pessoa pela posição dela na lista (A sexta pessoa
da lista, levante a mão por favor!), podemos também referenciar os itens de uma lista
pela posição deles nesta lista. 

A sintaxe para isso é utilizar o nome da lista seguido do número correspondente
a posição desejada entre colchetes. Exemplo:

minhaLista[1]               // Acessa o valor "segundo item"

Notem que quando utilizamos o índice 1, estamos acessando o SEGUNDO item da lista.
Isso se deve ao fato que em quase toda linguagem de programação (JavaScript incluso)
índices, sejam de listas ou outras estruturas de dados com índices (como strings)
são contados começando a partir do zero. Então para acessar o primeiro item, usamos:

minhaLista[0]               // Acessa o valor "item 1"

Sendo assim, no exemplo acima de uma lista com quatro itens, o último item é acessado
usando o índice 3:

minhaLista[3]               // Acessa o valor "item quatro"

Pergunta: É sempre necessário saber o tamanho da lista para poder acessar itens
em ordem reversa? É possível começar do último?

Resposta: Não é necessário saber o tamanho total da lista. Toda lista traz consigo
além dos valores armazenados nela, algumas propriedades e funções. Podemos descobrir
o tamanho total da lista usando a propriedade "length", como na sintaxe abaixo:

minhaLista.length           // Nos retorna o valor 4

Notem que para a quantidade de itens da lista, não se considera a mesma contagem
que o índice: Uma lista com 4 itens não tem seus itens contados a partir do zero
por que uma lista pode existir com zero itens.

E como podemos então acessar o último item de uma lista sem saber o tamanho total
dela com antecedência? Podemos usar essa propriedade de "length"?

minhaLista[minhaLista.length]    // Nos retorna undefined

Na hora que usamos "minhaLista.length" como valor para o índice, o valor dentro
dos colchetes é substiituído pelo valor "4". Como vimos anteriormente, índices
são contados a partir do zero, então quando acessamos minhaLista[4], estamos
tentando na verdade acessar o QUINTO item, mas esta lista só tem quatro itens.

Se quisermos então acessar o último item da lista usando a propriedade "length"
podemos simplesmente subtrair 1 do número de itens da lista:

minhaLista[minhaLista.length - 1]      // Acessa o valor "item quatro"

Da mesma forma, podemos acessar o penúltimo item com:
minhaLista[minhaLista.length - 2]      // Acessa o valor "3º"

E o antepenúltimo item com:
minhaLista[minhaLista.length - 3]      // Acessa o valor "segundo item"

E por aí vai.

E como podemos modificar essa lista? Simples: Assim como qualquer variável,
basta acessar o valor e atribuir (com o sinal de =) um valor novo:

minhaLista[1] = "2º item"

Agora quando exibimos a lista completa, ao invés do valor anterior de:
["item 1", "segundo item", "3º", "item quatro"]
Temos o valor de:
["item 1", "2º item", "3º", "item quatro"]

E como podemos adicionar um item a mais na lista usando índices?

minhaLista[minhaLista.length] = "item nº 5"
["item 1", "2º item", "3º", "item quatro", "item nº 5"]

E como podemos trocar dois itens de lugar usando índices? Dois jeitos:

Jeito 1:
const minhaLista = ["item 1", "2º item", "3º", "item quatro", "item nº 5"]
let valorTemporario = minhaLista[1]
minhaLista[1] = minhaLista[3]
minhaLista[3] = valorTemporario

Resultado da lista:
["item 1", "item quatro", "3º", "2º item", "item nº 5"]

Expllicação: Para substituir o segundo item com o quarto, criamos uma variável
provisória para "guardar" o valor do segundo item. Após isso modificamos o
valor do segundo item para ser igual ao valor do quarto item, e por fim
modificamos o valor do quarto item para ser igual ao valor original do
segundo item que estava guardado na variável temporária.

Jeito 2:
const minhaLista = ["item 1", "2º item", "3º", "item quatro", "item nº 5"]
[ minhaLista[2], minhaLista[4] ] = [ minhaLista[4], minhaLista[2] ]

Resultado da lista:
["item 1", "2º item", "item nº 5", "item quatro", "3º"]

Explicação: JavaScript permite atribuir múltiplos valores a múltiplas variáveis,
mas para que isso funcione é necessário utilizar uma sintaxe chamada "desestruturação":
Essa sintaxe permite que uma lista ou um objeto sejam "separados" em múltiplas
variáveis ao mesmo tempo, exemplo:

let [tlocaLetlas, comilona] = ["Cebolina", "Magali", "Mônica", "Cascão"]
tlocaLetlas      // Recebeu o valor de ["Cebolinha"]
comilona         // Recebeu o valor de ["Magali"]

Os valores restantes no exemplo acima são descartados. É possível não descartar
estes valores, mas isso fica para uma próxima lição.

------------------------------------------------------------------------------

Questões 01 a 10: Exercícios com manipulação direta de índices

MÍNIMO NECESSÁRIO PARA NOTA MÁXIMA: 7 questões
*/

/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
// Array na linha abaixo
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = frutas[1]

/* Questão 2
Ainda utilizando o array criado na questão 1, armazene na variável "resposta02"
o último item da lista. Use a propriedade "length" para auxiliar a encontrar
o índice deste último item.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta02 = frutas[frutas.length - 1]

/* Questão 3
Continuando com o array criado na questão 1, altere o quarto item da lista para
a fruta "abacaxi". Na variável "resposta03" envie a lista completa com a nova fruta.
*/
// Operações necessárias e resposta a partir da linha abaixo
frutas[3] = "abacaxi"
export const resposta03 = frutas

/* Questão 4
Ainda com a lista da questão 1, acrescente a fruta "limão" no final da lista, e
envie a lista inteira na variável "resposta04".
*/
// Operações necessárias e resposta a partir da linha abaixo
frutas[frutas.length] = 'limao'
export const resposta04 = frutas

/* Questão 5
Para finalizar com o array da questão 1, troque as posições dos itens "laranja"
e "manga", e armazene a lista modificada completa na variável "resposta05".
*/
// Operações necessárias e resposta a partir da linha abaixo
let frutateporaria = frutas[2]
frutas[2] = frutas[5]
frutas[5] = frutateporaria
export const resposta05 = frutas

/* Questão 6
Crie um array (também com const ao invés de let) chamado "numeros" com os valores
7, 2, 4, 9, 8, 6, 1 nesta ordem. Armazene na variável "resposta06" o resultado do
número no índice zero multiplicado pelo item no penúltimo índice.
*/
// Array na linha abaixo
const numeros = [7, 2, 4, 9, 8, 6, 1]
// Operações necessárias e resposta a partir da linha abaixo
resultado = numeros[0] * numeros[numeros.length - 2]
export const resposta06 = resultado

/* Questão 7
Seguindo com a lista criada na questão 7, utilizando os índices de cada item,
avance eles em uma posição (e mande o último item para a primeira posição),
de modo que a lista se torne 1, 7, 2, 4, 9, 8, 6. Armazene a lista na
variável "resposta07"
*/
// Operações necessárias e resposta a partir da linha abaixo
let ultimoNumero = numeros[6]
numeros[6] = numeros[5]
numeros[5] = numeros[4]
numeros[4] = numeros[3]
numeros[3] = numeros[2]
numeros[2] = numeros[1]
numeros[1] = numeros[0]
numeros[0] = ultimoNumero

export const resposta07 = numeros

/* Questão 8
Continuando com a lista da questão 7, adicione no final da lista o resultado
da soma de todos os números anteriores da lista. Retorne a lista completa na
variável "resultado08". É proibido usar métodos de listas e funções.
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta08 = false

/* Questão 9
Ainda com a lista da questão 7, mude:
- O segundo item para a quarta posição
- O quarto item para a sexta posição
- O sexto item para a segunda posição
E retorne a lista completa na variável "resultado09"
*/
// Operações necessárias e resposta a partir da linha abaixo
export const resposta09 = false

/* Questão 10
Finalizando com a lista da questão 7, crie uma nova lista com três itens onde:
- O primeiro item da nova lista é o último da anterior
- O segundo item da nova lista é o penúltimo da anterior
- O terceiro item da nova lista é o antepenúltimo da anterior
*/
// Nova lista abaixo

// Operações necessárias e resposta a partir da linha abaixo
export const resposta10 = false

