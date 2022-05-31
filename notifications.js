// ========================================================================================
// Класс для Уведомлений
// ========================================================================================

class Notification {

  constructor(options) {

    this.wrapper = options.wrapper;
    this.title = options.title;
    this.typeNotify = options.typeNotify;
    this.text = options.text;
    this.footer = options.footer;
    this.timeout = options.timeout;

    this.initNotify();

  }

  initNotify() {

  	const pushWrapp = document.querySelector(this.wrapper);
    const notifyMain = document.createElement('div');
    notifyMain.className = 'notifications';
    pushWrapp.appendChild(notifyMain);

    const notifyRow = document.createElement('div');
    notifyRow.className = 'notifications__row';
    notifyMain.appendChild(notifyRow);

	const notifyIcon = document.createElement('div');
    notifyIcon.className = 'notifications__icon';
    this.setNotifyType(this.typeNotify, notifyIcon);
    notifyRow.appendChild(notifyIcon);

    const notifyContent = document.createElement('div');
    notifyContent.className = 'notifications__content';
    // notifyContent.textContent = this.title;
    notifyRow.appendChild(notifyContent);    

    const notifyTitle = document.createElement('div');
    notifyTitle.className = 'notifications__title';
    notifyTitle.textContent = this.title;
    notifyContent.appendChild(notifyTitle); 

    const notifyText = document.createElement('div');
    notifyText.className = 'notifications__text';
    notifyText.textContent = this.text;
    notifyContent.appendChild(notifyText);

    const notifyTextFooter = document.createElement('div');
    notifyTextFooter.className = 'notifications__text_footer';
    notifyTextFooter.textContent = this.footer;
    notifyContent.appendChild(notifyTextFooter);

    const notifyClose = document.createElement('div');
    notifyClose.className = 'notifications__close';
    notifyRow.appendChild(notifyClose);
   

    // const pushWrapp = document.querySelector(this.wrapper);
    // const notifyMain = document.createElement('div');
    // notifyMain.className = 'notify';
    // pushWrapp.appendChild(notifyMain);

    // const notifyRow = document.createElement('div');
    // notifyRow.className = 'notify__row';
    // notifyMain.appendChild(notifyRow);

    // const notifyClose = document.createElement('div');
    // notifyClose.className = 'notify__close';
    // notifyRow.appendChild(notifyClose);

    // const notifyIcon = document.createElement('span');
    // notifyIcon.className = 'notify__icon';
    // this.setNotifyType(this.typeNotify, notifyIcon);
    // notifyRow.appendChild(notifyIcon);

    // const notifyTitle = document.createElement('div');
    // notifyTitle.className = 'notify__title';
    // notifyTitle.textContent = this.title;
    // notifyRow.appendChild(notifyTitle);

    // const notifyText = document.createElement('p');
    // notifyText.className = 'notify__text';
    // notifyText.textContent = this.text;
    // notifyMain.appendChild(notifyText);

    // setTimeout(function () {
    //   notifyMain.style.opacity = 1;
    // }, 500);

    notifyClose.addEventListener('click', function (e) {
      notifyMain.style.opacity = 0;
      notifyMain.remove();
    });

    this.timeoutNotify(notifyMain);

  }

  setNotifyType(typeNotify, iconElem) {

    switch (typeNotify) {
      case 'success':
        iconElem.classList.toggle('notifications__icon--success');
        break;
      case 'clock':
        iconElem.classList.toggle('notifications__icon--clock');
        break;
      case 'error':
        iconElem.classList.toggle('notifications__icon--error');
        break;
      default:
        break;
    }
  }

  timeoutNotify(notify) {

    setTimeout(function () {
      notify.style.opacity = 0;
    // }, this.timeout - 1500);
    }, this.timeout);

    setTimeout(function () {
      notify.remove();
    }, this.timeout);

  }
}