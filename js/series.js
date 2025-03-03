document.addEventListener('DOMContentLoaded', () => {
    // Exemple de tableau de séries (10 vidéos)
    const series = [
      { id: 1, title: "Histoire(s) du cinéma", video: "series/series1.mp4", description: "Jean-Luc Godard, 1988 - 1998 (France)" },
      { id: 2, title: "Dekalog", video: "series/series2.mp4", description: "Krzysztof Kieślowski, 1988 (Pologne)" },
      { id: 3, title: "Neon Genesis Evangelion", video: "series/series3.mp4", description: "Hideaki Anno, 1995 - 1996 (Japon)" },
      { id: 4, title: "La Maison des bois", video: "series/series4.mp4", description: "Maurice Pialat, 1971 (France)" },
      { id: 5, title: "P'tit Quinquin", video: "series/series5.mp4", description: "Bruno Dumont, 2014 (France)" },
      { id: 6, title: "Coincoin et les Z'inhumains", video: "series/series6.mp4", description: "Bruno Dumont, 2018 (France)" },
      { id: 7, title: "Shameless (US)", video: "series/series7.mp4", description: "Showtime, 2011 - 2021 (États-Unis)" },
      { id: 8, title: "Twin Peaks", video: "series/series8.mp4", description: "Mark Frost - David Lynch, 1990 - 1991 (États-Unis)" },
      { id: 9, title: "Severance", video: "series/series9.mp4", description: "Apple TV, 2022 - en production (États-Unis)" },
      { id: 10, title: "Succession", video: "series/series10.mp4", description: "HBO, 2018 - 2023 (États-Unis)" }
    ];
  
    const container = document.getElementById('series-container');
  
    // Pour chaque série, créer un élément de la liste
    series.forEach((serie, index) => {
      // Créer le conteneur de la série
      const item = document.createElement('div');
      item.classList.add('series-item');
  
      // Créer l'élément vidéo
      const videoEl = document.createElement('video');
      videoEl.src = serie.video;
      videoEl.controls = true;
      videoEl.preload = "metadata";
  
      // Créer l'élément pour le numéro de classement
      const rankEl = document.createElement('div');
      rankEl.classList.add('rank');
      rankEl.innerText = `${index + 1} - ${serie.title}`;
 // numéro de classement (1 à 10)
  
      // Créer le paragraphe pour la description
      const para = document.createElement('p');
      para.innerText = serie.description;
  
      // Assembler l'élément
      item.appendChild(videoEl);
      item.appendChild(rankEl);
      item.appendChild(para);
  
      // Ajouter l'élément à la page
      container.appendChild(item);
    });
  });
  
  function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', theme === 'light');
    const toggleBall = document.querySelector('.toggle-ball');
    if (toggleBall) {
      toggleBall.classList.toggle('active', theme === 'light');
    }
  }
  
  // Ajoute un écouteur d'événement sur le conteneur du toggle
  document.querySelector('.toggle-container').addEventListener('click', () => {
    const isLight = !document.body.classList.contains('light-mode');
    document.body.classList.toggle('light-mode', isLight);
    const toggleBall = document.querySelector('.toggle-ball');
    if (toggleBall) {
      toggleBall.classList.toggle('active', isLight);
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
  
  // Initialisation au chargement de la page
  window.addEventListener('DOMContentLoaded', () => {
    initTheme();
  });