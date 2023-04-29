import Book from "./book.js";
export default class List {
    constructor(store){
        this.store = store;
        this.books = document.querySelector('.books');
      
    }
    render(){
        this.books.innerHTML = this.store.data.map((value, i) => new Book(value.author, value.title, value.id).render(i)).join('');
        document.querySelectorAll('.remove').forEach((removeButton) => {
            removeButton.onclick = (e) => this.store.remove(e);
          });
    }
}