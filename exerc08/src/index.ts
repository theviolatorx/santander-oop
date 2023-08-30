/* 8. Crie uma classe `Book` com propriedades `title`, `author` e `year`. Crie um método que retorna os detalhes do livro. */

class Book {
    title: string;
    author: string;
    year: number;

    constructor(
        title: string,
        author: string,
        year: number,
    ) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    descBook(): string{
        return `
        Título do Livro: ${this.title}
        Autor: ${this.author}
        Ano: ${this.year}
        `;
    }
}

const book = new Book("As gambiaras em JS", "Gleidson",2022);
console.log(book.descBook());
