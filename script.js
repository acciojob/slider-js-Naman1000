const themes = [
    {
      id: 'slide-1',
      h1: 'Nature flower',
      p: 'all in pink',
      img: 'https://via.placeholder.com/800x600?text=Nature+flower'
    },
    {
      id: 'slide-2',
      h1: 'Bluuue Sky',
      p: "with it's mountains",
      img: 'https://via.placeholder.com/800x600?text=Bluuue+Sky'
    },
    {
      id: 'slide-3',
      h1: 'Lonely castle',
      p: 'in the wilderness',
      img: 'https://via.placeholder.com/800x600?text=Lonely+castle'
    },
    {
      id: 'slide-4',
      h1: 'Flying eagle',
      p: 'in the sunset',
      img: 'https://via.placeholder.com/800x600?text=Flying+eagle'
    }
  ];

 const leftSlide = document.getElementById('left-slide');
  const rightSlideImg = document.getElementById('slide-img');
  const upBtn = document.querySelector('.up-button');
  const downBtn = document.querySelector('.down-button');

  let currentIndex = 0;

  function updateSlide(index) {
    const theme = themes[index];
    leftSlide.innerHTML = `<h1>${theme.h1}</h1><p>${theme.p}</p>`;
    rightSlideImg.src = theme.img;
    rightSlideImg.alt = theme.h1;
  }

  upBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + themes.length) % themes.length;
    updateSlide(currentIndex);
  });

  downBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % themes.length;
    updateSlide(currentIndex);
  });