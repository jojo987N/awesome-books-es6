import { DateTime } from './node_modules/luxon/src/luxon.js';
import Store from './modules/store.js';
import List from './modules/list.js';
import AddNew from './modules/addNew.js';
import Contact from './modules/contact.js';

const store = new Store();

window.onload = () => {
  document.querySelector('.date').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

  const list = new List(store);

  list.render();

  document.querySelector('.add-new-link').onclick = () => new AddNew(store).render();

  document.querySelector('.list-link').onclick = () => list.render();

  document.querySelector('.contact-link').onclick = () => Contact.render();
};
