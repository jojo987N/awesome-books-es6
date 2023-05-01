import List from './list.js';

export default class Store {
  constructor() {
    this.data = JSON.parse(localStorage.getItem('books')) || [];
  }

  add(book) {
    this.data.push(book);
    localStorage.setItem('books', JSON.stringify(this.data));
  }

  remove(e) {
    const id = parseInt(e.target.parentElement.id, 10);
    this.data = this.data.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.data));
    const list = new List(this);
    list.render();
  }
}