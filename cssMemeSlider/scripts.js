const currentImage = document.querySelector('.carousel__image img');
const controls = Array.from(document.querySelectorAll('.btn-control'));
const description = document.querySelector('.description');

const data = {
    1: {
        src: './images/img1.jpg',
        alt: 'img 1',
        text: 'You said you work at Google! :)',
    },
    2: {
        src: './images/img2.jpg',
        alt: 'img 2',
        text: 'HTML, CSS, JS :)',
    },
    3: {
        src: './images/img3.jpg',
        alt: 'img 3',
        text: 'Stackoverflow - Developer :)',
    },
    4: {
        src: './images/img4.jpg',
        alt: 'img 4',
        text: 'It\'s too late. :)',
    }
}

const state = {
    currentId: 1,
}

controls.forEach((buttton) => {
    buttton.addEventListener('click', (event) => {
        const { currentTarget } = event;
        const currentId = currentTarget.dataset.control;
        currentTarget.querySelector('span').classList.add('active-control');
        document.querySelector(`.btn-control[data-control='${state.currentId}'] span`).classList.remove('active-control');
        currentImage.classList.add('toFadeOut');
        description.classList.add('toFadeOut');
        state.currentId = currentId;
    });
});

currentImage.addEventListener('animationend', (event) => {
    const { animationName } = event;
    if (animationName === 'fadeOut') {
        currentImage.setAttribute('src', data[state.currentId].src);
        currentImage.setAttribute('alt', data[state.currentId].alt);
        currentImage.classList.remove('toFadeOut');
        currentImage.classList.add('toFadeIn');

        description.textContent = data[state.currentId].text;
        description.classList.remove('toFadeOut');
        currentImage.classList.add('toFadeIn');
    }
    if (animationName === 'fadeIn') {
        currentImage.classList.remove('toFadeIn');
        description.classList.remove('toFadeIn');
    }
});

currentImage.setAttribute('src', data[1].src);
currentImage.setAttribute('alt', data[1].alt);
document.querySelector('.btn-control span').classList.add('active-control');
description.textContent = data[1].text;