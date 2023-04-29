export default class Contact {
  static render() {
    document.querySelector('.add-new-link').classList.remove('active');
    document.querySelector('.list-link').classList.remove('active');
    document.querySelector('.contact-link').classList.add('active');

    document.querySelector('.add-new-page').classList.add('hide');
    document.querySelector('.list-page').classList.add('hide');
    document.querySelector('.contact-continar').classList.remove('hide');
  }
}