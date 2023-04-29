import Book from './modules/book.js';
import Store from './modules/store.js';
import List from './modules/list.js';

const store = new Store();

window.onload = () => {
  // const books = document.querySelector('.books');
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  const listLink = document.querySelector('.list-link')
  const addNewLink = document.querySelector('.add-new-link')

  // books.innerHTML = store.data.map((value, i) => new Book(value.author, value.title, value.id).render(i)).join('');
  // document.querySelectorAll('.remove').forEach((removeButton) => {
  //   removeButton.onclick = (e) => store.remove(e);
  // });

  const list = new List(store)
  list.render()

  addNewLink.onclick = () => {
    document.querySelector('.add-new-page').classList.remove("hide")
    document.querySelector('.list-page').classList.add("hide")
    const addButton = document.querySelector('.add');

    addButton.onclick = (event) => {
      event.preventDefault();
      const book = new Book(title.value, author.value);
      store.add(book);
      // const wrapper = document.createElement('div');
      // wrapper.innerHTML = book.render(2);
      // console.log(book.render(2))
  
      // const div = wrapper.firstChild;
      // console.log(div.childNodes);
      // [...div.childNodes].filter((c) => c.localName === 'button')[0].onclick = (e) => store.remove(e);
  
      // books.appendChild(div);
    };
  }
  listLink.onclick = () => {
    document.querySelector('.list-page').classList.remove("hide")
    document.querySelector('.add-new-page').classList.add("hide")

  //   books.innerHTML = store.data.map((value, i) => new Book(value.author, value.title, value.id).render(i)).join('');
  //   document.querySelectorAll('.remove').forEach((removeButton) => {
  //   removeButton.onclick = (e) => store.remove(e);
  // });
    list.render()

  }
};
