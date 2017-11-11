let openMenu = {
  menuTuggleElemStr: '#goods-toggler',
  overlayElemStr: '#page-overlay',
  menuTuggleElem:    document.getElementById('goods-toggler'),
  overlayElem:      document.getElementById('page-overlay'),
  mobMenu:          document.getElementById('mob-menu'),
  wrapper:          document.getElementById('wrapper'),

  addActive(){
    this.overlayElem.classList.add('active');
    this.mobMenu.classList.add('open');
    this.wrapper.classList.add('block-y-scroll');
  },

  removeActive(){
    this.overlayElem.classList.remove('active');
    this.mobMenu.classList.remove('open');
    this.wrapper.classList.remove('block-y-scroll');
  },

  menuBtnHandler(e) {
    let menuToggle = e.currentTarget;
    menuToggle.classList.toggle('active');

    if (!menuToggle.classList.contains('active')) {
      this.removeActive();

    } else {
      this.addActive();
      $(this.overlayElemStr).one('click', this.overlayHandler.bind(this));
    }
  },

  overlayHandler() {
    this.menuTuggleElem.classList.remove('active');
    this.removeActive();
  },

  menuTuggle() {
    $(this.menuTuggleElem).on('click', this.menuBtnHandler.bind(this));
  },

  init() {
    this.menuTuggle();
  }
};
export default openMenu.init();