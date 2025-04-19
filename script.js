 const slides = [
      {
        id: 'slide-1',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'slide-2',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'slide-3',
        image: 'https://images.unsplash.com/photo-1508923567004-3a6b8004f3d5?auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'slide-4',
        image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&q=80'
      }
    ];

    let currentSlide = 0;

    const leftSlide = document.querySelector('.left-slide');
    const slideElements = leftSlide.querySelectorAll('div');
    const imageSlide = document.getElementById('image-slide');

    const showSlide = (index) => {
      slideElements.forEach((el, i) => {
        el.classList.toggle('active', i === index);
      });
      imageSlide.style.backgroundImage = `url(${slides[index].image})`;
    };

    document.querySelector('.up-button').addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    document.querySelector('.down-button').addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    // Initial load
    showSlide(currentSlide);