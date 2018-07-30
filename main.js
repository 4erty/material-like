document.addEventListener('DOMContentLoaded', ()=>{
  let button = document.querySelector('.button-colored');
  button.addEventListener('click', ()=>{ makeModal('Заголовок', 'Вопрос?', (event)=>{ console.log(event); }); });
});

function makeModal(header = '', section = '', callback){
  let back = document.createElement('aside');
  back.className = 'material-dialog';
  back.setAttribute('role', 'alertdialog');
  back.setAttribute('aria-labelledby', 'material-dialog-label');
  back.setAttribute('aria-describedby', 'material-dialog-description');
  document.body.appendChild(back);
  let dialog = document.createElement('div');
  dialog.className = 'material-dialog__surface';
  let dialogHeader = document.createElement('header');
  dialogHeader.className = 'material-dialog__header';
  let dialogHeaderH2 = document.createElement('h2');
  dialogHeaderH2.setAttribute('id', 'material-dialog-label');
  dialogHeaderH2.className = 'material-dialog__header__title';
  dialogHeaderH2.textContent = header;
  dialog.appendChild(dialogHeader).appendChild(dialogHeaderH2);
  let dialogBody = document.createElement('section');
  dialogBody.setAttribute('id', 'material-dialog-description');
  dialogBody.className = 'material-dialog__body';
  dialogBody.textContent = section;
  dialog.appendChild(dialogBody);
  let dialogFooter = document.createElement('footer');
  dialogFooter.className = 'material-dialog__footer';
  let buttonCancel = document.createElement('button');
  buttonCancel.className = 'material-button material-dialog__footer__button material-dialog__footer__button--cancel';
  buttonCancel.setAttribute('type', 'button');
  buttonCancel.textContent = 'Cancel';
  dialogFooter.appendChild(buttonCancel);
  let buttonAccept = document.createElement('button');
  buttonAccept.className = 'material-button material-dialog__footer__button material-dialog__footer__button--accept';
  buttonAccept.setAttribute('type', 'button');
  buttonAccept.textContent = 'Accept';
  dialogFooter.appendChild(buttonAccept);
  dialog.appendChild(dialogFooter);
  let backdrop = document.createElement('div');
  backdrop.className = 'material-dialog__backdrop';
  back.appendChild(dialog);
  back.appendChild(backdrop);
  document.body.appendChild(back);
  dialog.classList.add('material-dialog--open');
  back.addEventListener('click', event=>{
    event.target.classList.contains('material-dialog__backdrop') && back.remove();
  });
  buttonCancel.addEventListener('click', ()=>{ back.remove(); });
  buttonAccept.addEventListener('click', callback);
}
