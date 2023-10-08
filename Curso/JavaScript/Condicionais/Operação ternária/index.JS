// Solicita ao usuário que digite um número e o converte para um número inteiro
var valor = parseInt(prompt('Digite um número:'));

// Determina se o número é par ou ímpar e armazena o resultado
var identificador = (valor % 2 === 0) ? 'Par' : 'Ímpar';

// Solicita ao usuário que digite outro número e o converte para um número decimal
var valor2 = parseFloat(prompt('Digite outro número:'));

// Determina se o segundo número é positivo, negativo ou zero e armazena o resultado
var resultado = (valor2 > 0) ? 'Positivo' : (valor2 < 0) ? 'Negativo' : 'Zero';

// Pergunta ao usuário se ele é um administrador e armazena a resposta
var isAdmin = confirm('Você é um administrador?');

// Com base na resposta do usuário, define 'acesso' como 'Acesso concedido' ou 'Acesso negado'
var acesso = isAdmin ? 'Acesso concedido' : 'Acesso negado';

// Exibe os resultados no console
console.log('Resultado 1:', identificador);
console.log('Resultado 2:', resultado);
console.log('Resultado 3:', acesso);