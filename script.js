const buttonShare = document.querySelector('.share-section__button-share');
const shareSectionSocial = document.querySelector('.share-section__social');
const shareSection = document.querySelector('.share-section');
const bottomContainer = document.querySelector('.card__bottom-container');
const user = document.querySelector('.user');
buttonShare.addEventListener('click', () => {
    buttonShare.classList.toggle('active');
    user.classList.toggle('active');
    shareSectionSocial.classList.toggle('active');
    shareSection.classList.toggle('active');
    bottomContainer.classList.toggle('active');
})
