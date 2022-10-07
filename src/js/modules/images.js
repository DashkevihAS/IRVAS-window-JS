const images = () => {
  const imgPopup = document.createElement('div');
  const imgWorkplace = document.querySelector('.works');
  const imgBig = document.createElement('img');

  imgPopup.classList.add('popup');
  imgWorkplace.appendChild(imgPopup);

  imgPopup.style.display = 'none';
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';

  imgPopup.appendChild(imgBig);
  imgBig.style.maxHeight = '80%';
  imgBig.style.maxWidth = '80%';

  imgWorkplace.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      imgBig.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }

    if (target && target.classList.contains('popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

export default images;
