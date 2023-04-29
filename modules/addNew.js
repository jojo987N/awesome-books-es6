import Book from './book.js';

export default class AddNew {
  constructor(store) {
    this.store = store;
  }

  render() {
    document.querySelector('.add-new-link').classList.add('active');
    document.querySelector('.list-link').classList.remove('active');
    document.querySelector('.contact-link').classList.remove('active');

    document.querySelector('.add-new-page').classList.remove('hide');
    document.querySelector('.list-page').classList.add('hide');
    document.querySelector('.contact-continar').classList.add('hide');
    const addButton = document.querySelector('.add');

    addButton.onclick = (event) => {
      const title = document.querySelector('.title');
      const author = document.querySelector('.author');
      event.preventDefault();
      this.store.add(new Book(author.value, title.value));
      document.querySelector('.msg').classList.remove('message');
      title.value = '';
      author.value = '';
      setTimeout(() => {
        document.querySelector('.msg').classList.add('message');
      }, 1000);
    };
  }
}