# Frontend Mentor - Interactive card details

Esta é uma solução para o desafio [Interactive card details de Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Os desafios do Frontend Mentor ajudam a melhorar suas habilidades de codificação através da construção de projetos realistas.

# Índice

- [Resumo](#resumo)
  - [Desafio](#desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Processo](#processo)
  - [Construção](#construção)
  - [Aprendizado](#aprendizado)
- [Recursos](#recursos)
- [Autor](#autor)

<br>

# Resumo

## Desafio

<br>

Este projeto consiste em uma página de cadastro de cartão fictícia, que conta com um design responsivo e validação do formulário. Durante o preenchimento dos dados, eles são atualizados automaticamente na imagem representativa.

Os usuários devem ser capazes de:

- Preencher o formulário e ver os detalhes do cartão atualizando em tempo real;
- Receber a mensagem de erro quando o formulário é enviado, se:
  - Qualquer campo estiver vazio;
  - O número do cartão, data se validade, ou campos CVC estão no formato errado;
- Veja o layout ideal dependendo do tamanho da tela de seu dispositivo;
- Veja os estados interativos para elementos elementos na página.

<br>

## Screenshot

### **Mobile**

<p style="text-align:center;">
    <img width="375px" src="./assets/presentation/mobile.png"></img>
</p>

<br>

### **Desktop**

<p style="text-align:center;">
    <img width="1440px" src="./assets/presentation/desktop.png"></img>
</p>

<br>

## Links

- Site: [Interactive card](https://10-interactive-card-details.vercel.app);

<br>

# Processo

## Construção

<br>

- **HTML:**
  - Marcação semântica;
  - Metodologia BEM.
- **Sass/Scss:**
  - Divisão de responsabilidade em diferentes arquivos;
  - Pseudo-classe e pseudo-elemento;
  - Variáveis;
  - Flexbox;
  - Elementos interativos.
- **JavaScript:**
  - Validação de campos de entrada do formulário;
  - Manipulação do DOM;
  - Exportação de funções para uso em outros arquivos.

<br>

## Aprendizado

<br>

***Limitar permissão de inserção de caracteres numéricos a um input type text. Aplicar formatação desejada para dados específicos***

```JavaScript
export function numberValidation(input) {
  const regex = /[^0-9]/g;

  input.addEventListener("input", () => {
    let number = input.value.replace(regex, "");

    if (number.length > 4) {
      number = number.match(/.{1,4}/g).join(" ");
    }

    input.value = number;

    if (input.value.length < input.minLength) {
      input.setCustomValidity("Your card number has 16 digits");
    } else {
      input.setCustomValidity("");
    }
  });
}
```

<br>

***Limitar permissão de inserção de caracteres numéricos a um input type text e criar a validação para datas***

```JavaScript
export function dateValidation(input) {
  if (input.name === "date") {
    input.addEventListener("input", (e) => {
      const value = e.target.value;

      // Expressão regular para verificar se o valor é um número de 0 a 9
      const regex = /^[0-9]*$/;

      if (!regex.test(value)) {
        // Remove todos os caracteres não numéricos do valor de entrada
        e.target.value = value.replace(/[^0-9]/g, "");
      }
    });
  }
}

export function monthValidation(input) {
  if (input.name === "date" && input.id === "month") {
    const month = parseInt(input.value, 10);
    if (month < 1 || month > 12 || isNaN(month)) {
      input.setCustomValidity("Enter a valid value");
    } else {
      input.setCustomValidity("");
    }
  }
}
```

# Recursos

- [Evento "invalid"](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/invalid_event);
- [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityStateF);
- [.replace](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace);
- [.match](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match);
- [.join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join).
- [.parseInt](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt):

# Autor

- Site pessoal - [Mathews Mattar](https://www.linkedin.com/in/mathewsmattar/)
