import Book from './book.js';

export default class List {
  constructor(store) {
    this.store = store;
  }

  render() {
    document.querySelector('.add-new-link').classList.remove('active');
    document.querySelector('.list-link').classList.add('active');
    document.querySelector('.contact-link').classList.remove('active');

    document.querySelector('.list-page').classList.remove('hide');
    document.querySelector('.add-new-page').classList.add('hide');
    document.querySelector('.contact-continar').classList.add('hide');

    document.querySelector('.books').innerHTML = this.store.data.length ? this.store.data.map((value, i) => new Book(value.author, value.title, value.id).render(i)).join('') : '<h4 class="no-book">No Book</h4>';

    document.querySelectorAll('.remove').forEach((removeButton) => {
      removeButton.onclick = (e) => this.store.remove(e);
    });
  }
}