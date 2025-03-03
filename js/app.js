// Movie data
const movies = [
    { id: 1, image: 'images/movie1.jpg' },
    { id: 2, image: 'images/movie2.jpg' },
    { id: 3, image: 'images/movie3.jpg' },
    { id: 4, image: 'images/movie4.jpg' },
    { id: 5, image: 'images/movie5.jpg' },
    { id: 6, image: 'images/movie6.jpg' },
    { id: 7, image: 'images/movie7.jpg' },
    { id: 8, image: 'images/movie8.jpg' },
    { id: 9, image: 'images/movie9.jpg' },
    { id: 10, image: 'images/movie10.jpg' },
    { id: 11, image: 'images/movie11.jpg' },
    { id: 12, image: 'images/movie12.jpg' },
    { id: 13, image: 'images/movie13.jpg' },
    { id: 14, image: 'images/movie14.jpg' },
    { id: 15, image: 'images/movie15.jpg' },
    { id: 16, image: 'images/movie16.jpg' },
    { id: 17, image: 'images/movie17.jpg' },
    { id: 18, image: 'images/movie18.jpg' },
    { id: 19, image: 'images/movie19.jpg' },
    { id: 20, image: 'images/movie20.jpg' },
    { id: 21, image: 'images/movie21.jpg' },
    { id: 22, image: 'images/movie22.jpg' },
    { id: 23, image: 'images/classic1.jpg' },
    { id: 24, image: 'images/classic2.jpg' },
    { id: 25, image: 'images/classic3.jpg' },
    { id: 26, image: 'images/classic4.jpg' },
    { id: 27, image: 'images/classic5.jpg' },
    { id: 28, image: 'images/classic6.jpg' },
    { id: 29, image: 'images/classic7.jpg' },
    { id: 30, image: 'images/classic8.jpg' },
    { id: 31, image: 'images/classic9.jpg' },
    { id: 32, image: 'images/classic10.jpg' },
    { id: 33, image: 'images/classic11.jpg' },
    { id: 34, image: 'images/classic12.jpg' },
    { id: 35, image: 'images/classic13.jpg' },
    { id: 36, image: 'images/classic14.jpg' },
    { id: 37, image: 'images/classic15.jpg' },
    { id: 38, image: 'images/classic16.jpg' },
    { id: 39, image: 'images/classic17.jpg' },
    { id: 40, image: 'images/classic18.jpg' },
    { id: 41, image: 'images/classic19.jpg' },
    { id: 42, image: 'images/classic20.jpg' },
    { id: 43, image: 'images/classic21.jpg' },
    { id: 44, image: 'images/classic22.jpg' },
    { id: 45, image: 'images/classic23.jpg' },
    { id: 46, image: 'images/classic24.jpg' },
    { id: 47, image: 'images/classic25.jpg' },
    { id: 48, image: 'images/classic26.jpg' },
    { id: 49, image: 'images/new1.jpg' },
    { id: 50, image: 'images/new2.jpg' },
    { id: 51, image: 'images/new3.jpg' },
    { id: 52, image: 'images/new4.jpg' },
    { id: 53, image: 'images/new5.jpg' },
    { id: 54, image: 'images/new6.jpg' },
    { id: 55, image: 'images/new7.jpg' },
    { id: 56, image: 'images/new8.jpg' },
    { id: 57, image: 'images/new9.jpg' },
    { id: 58, image: 'images/new10.jpg' },
    { id: 59, image: 'images/new11.jpg' },
    { id: 60, image: 'images/new12.jpg' },
    { id: 61, image: 'images/new13.jpg' },
    { id: 62, image: 'images/new14.jpg' },
    { id: 63, image: 'images/new15.jpg' },
    { id: 64, image: 'images/new16.jpg' },
    { id: 65, image: 'images/new17.jpg' },
    { id: 66, image: 'images/new18.jpg' },
    { id: 67, image: 'images/hk1.jpg' },
    { id: 68, image: 'images/hk2.jpg' },
    { id: 69, image: 'images/hk3.jpg' },
    { id: 70, image: 'images/hk4.jpg' },
    { id: 71, image: 'images/hk5.jpg' },
    { id: 72, image: 'images/hk6.jpg' },
    { id: 73, image: 'images/hk7.jpg' },
    { id: 74, image: 'images/hk8.jpg' },
    { id: 75, image: 'images/hk9.jpg' },
    { id: 76, image: 'images/hk10.jpg' },
    { id: 77, image: 'images/hk11.jpg' },
    { id: 78, image: 'images/hk12.jpg' },
    { id: 79, image: 'images/hk13.jpg' },
    { id: 80, image: 'images/hk14.jpg' }
];


class Slider {
    constructor(sliderId, movies) {
        this.sliderContent = document.getElementById(sliderId);
        this.movies = movies;
        this.currentIndex = 0;
        this.slideWidth = 200 + 10; // movie-card width + gap
        
        // Initialisation
        this.initSlider();
        this.addButtonListeners(sliderId);
    }

    // Dans la classe Slider, vérifiez la méthode initSlider :
// Dans la classe Slider, méthode initSlider :
// Remplacez la méthode initSlider par :
// Remplacez la méthode initSlider par :
initSlider() {
    this.sliderContent.innerHTML = '';
    this.movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <a href="movie.html?id=${movie.id}">
                <img src="${movie.image}" >
            </a>
        `;
        this.sliderContent.appendChild(movieCard);
    });
}

    slideNext() {
        this.currentIndex++;
        if(this.currentIndex > this.movies.length - Math.floor(window.innerWidth / this.slideWidth)) {
            this.currentIndex = 0;
        }
        this.updateSlider();
    }

    slidePrev() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.movies.length - Math.floor(window.innerWidth / this.slideWidth);
        }
        this.updateSlider();
    }

    updateSlider() {
        this.sliderContent.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
    }

    addButtonListeners(sliderId) {
        const sliderElement = document.getElementById(sliderId).parentElement;
        sliderElement.querySelector('.next-btn').addEventListener('click', () => this.slideNext());
        sliderElement.querySelector('.prev-btn').addEventListener('click', () => this.slidePrev());
    }
}

// Données pour chaque slider
// Modifiez le tableau slidersData comme ceci :
const slidersData = [
    {
        id: 'slider-content1',
        movies: movies.slice(0, 22) 
    },
    {
        id: 'slider-content2',
        movies: movies.slice(22, 48) 
    },
    {
        id: 'slider-content3',
        movies: movies.slice(48,66) 
    },
    {
        id: 'slider-content4',
        movies: movies.slice(66,81) 
    }
];


// Initialisation des sliders
slidersData.forEach(data => new Slider(data.id, data.movies));

// Gestion responsive globale
window.addEventListener('resize', () => {
    slidersData.forEach(data => {
        const slider = new Slider(data.id, data.movies);
        slider.currentIndex = 0;
        slider.updateSlider();
    });
});




    function initTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('light-mode', theme === 'light');
        document.querySelector('.toggle-ball').classList.toggle('active', theme === 'light');
    }
    
    document.querySelector('.toggle-container').addEventListener('click', () => {
        const isLight = !document.body.classList.contains('light-mode');
        document.body.classList.toggle('light-mode', isLight);
        document.querySelector('.toggle-ball').classList.toggle('active', isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
    
    // Initialisation au chargement
    window.addEventListener('DOMContentLoaded', () => {
        initTheme();
        
        // Initialisation des sliders
        slidersData.forEach(data => new Slider(data.id, data.movies));
        
        // Gestion responsive
        window.addEventListener('resize', () => {
            slidersData.forEach(data => {
                const slider = new Slider(data.id, data.movies);
                slider.currentIndex = 0;
                slider.updateSlider();
            });
        });
    });