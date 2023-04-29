export default class Book {
    constructor(author, title, id) {
        this.title = title;
        this.author = author;
        this.id = id || Math.floor(Math.random() * (999 - 100 + 1) + 100);
    }

    render(i) {
        return `
        <article id=${this.id} class="book-list book-${i % 2 === 0 ? 'odd' : ''}">
            <div>
                <span>"${this.title}"</span>
                <span>by</span>
                <span>${this.author}</span>
            </div>
            <button class="remove button">remove</button>
        </article>`;
    }
}


{/* <article id=${this.id}>
      <div class="card">
        "<p>${this.title}</p>"
        <span>by</span>
        <p>${this.author}</p>
      </div>
      <button class="remove">Remove</button>
      </article> */}