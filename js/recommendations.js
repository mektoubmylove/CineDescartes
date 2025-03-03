
    
  
    document.addEventListener('DOMContentLoaded', () => {
        // Exemple de tableau de recommandations (10 éléments)
        const recommendations = [
            { id: 1, title: "Millennium Mambo", video: "recommandations/reco1.mp4",image: "recommandations/reco1.jpg", description: "Hou Hsiao-hsien, 2001 \n (Taïwan, France)"},
            { id: 2, title: "Mektoub, My Love: canto uno", video: "recommandations/reco2.mp4",image: "recommandations/reco2.jpg", description: "Abdellatif Kechiche, 2018 (France)" },
            { id: 3, title: "Pacifiction", video: "recommandations/reco3.mp4",image: "recommandations/reco3.jpg", description: "Albert Serra, 2022 (France)" },
            { id: 4, title: "Right Now, Wrong Then", video: "recommandations/reco4.mp4",image: "recommandations/reco4.jpg", description: " 	Hong Sang-soo, 2015 \n (Corée du Sud)" },
            { id: 5, title: "La Notte", video: "recommandations/reco5.mp4",image: "recommandations/reco5.jpg", description: "Michelangelo Antonioni , 1961 \n (France, Italie)" },
            { id: 6, title: "August in the Water", video: "recommandations/reco6.mp4",image: "recommandations/reco6.jpg", description: "Gakuryū Ishii, 1995 (Japon)" },
            { id: 7, title: "A Bittersweet Life", video: "recommandations/reco7.mp4",image: "recommandations/reco7.jpg", description: "	Kim Jee-woon, 2005 \n (Corée du Sud)" },
            { id: 8, title: "Blackhat", video: "recommandations/reco8.mp4",image: "recommandations/reco8.jpg", description: "	Michael Mann, 2015 \n (États-Unis)" },
            { id: 9, title: "Paranoid Park", video: "recommandations/reco9.mp4", image: "recommandations/reco9.jpg",description: "Gus Van Sant, 2007 \n (France, États-Unis) " },
          { id: 10, title: "Rehearsals for Retirement", video: "recommandations/reco10.mp4",image: "recommandations/reco10.jpg", description: "Philip Solomon, 2007 \n(États-Unis)" },
            { id: 11, title: "Quei loro incontri", video: "recommandations/reco11.mp4",image: "recommandations/reco11.jpg", description: "Jean-Marie Straub et Danièle Huillet, 2006 \n (France, Italie)" },
            { id: 12, title: "Aguirre, the Wrath of God", video: "recommandations/reco12.mp4",image: "recommandations/reco12.jpg", description: "Werner Herzog, 1972 \n (Allemagne de l'Ouest, Mexique, Pérou)" }
          ];
      
        // Récupérer le conteneur des cartes et l'overlay
        const container = document.getElementById('card-container');
        const overlay = document.getElementById('video-overlay');
        const overlayVideo = document.getElementById('overlay-video');
        const closeOverlayBtn = document.getElementById('close-overlay');
      
        // Générer la grille des cartes
        recommendations.forEach(reco => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.setAttribute('data-id', reco.id);
      
          // Afficher l'image en tant que thumbnail
          const img = document.createElement('img');
          img.src = reco.image;
          img.alt = reco.title;
      
          // Titre
          const titleEl = document.createElement('h2');
          titleEl.innerText = reco.title;
      
          // Description
          const para = document.createElement('p');
          para.innerText = reco.description;
      
          card.appendChild(img);
          card.appendChild(titleEl);
          card.appendChild(para);
      
          // Ajouter la carte au conteneur
          container.appendChild(card);
      
          // Ajout d'un écouteur de clic sur la carte
          card.addEventListener('click', () => {
            // Charger la vidéo correspondante dans l'overlay
            overlayVideo.src = reco.video;
            overlay.classList.add('active');
            overlayVideo.play();
      
            // Optionnel : passer en plein écran
            if (overlayVideo.requestFullscreen) {
              overlayVideo.requestFullscreen();
            } else if (overlayVideo.mozRequestFullScreen) { /* Firefox */
              overlayVideo.mozRequestFullScreen();
            } else if (overlayVideo.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
              overlayVideo.webkitRequestFullscreen();
            } else if (overlayVideo.msRequestFullscreen) { /* IE/Edge */
              overlayVideo.msRequestFullscreen();
            }
          });
        });
      
        // Fermer l'overlay lorsqu'on clique sur le bouton de fermeture
        closeOverlayBtn.addEventListener('click', () => {
          overlay.classList.remove('active');
          overlayVideo.pause();
          overlayVideo.currentTime = 0;
          // Quitter le mode plein écran si activé
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        });
      
        // Permet également de fermer l'overlay en cliquant sur l'arrière-plan
        overlay.addEventListener('click', (e) => {
          if (e.target === overlay) {
            overlay.classList.remove('active');
            overlayVideo.pause();
            overlayVideo.currentTime = 0;
            if (document.exitFullscreen) {
              document.exitFullscreen();
            }
          }
        });
      });

      function initTheme() {
        const theme = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('light-mode', theme === 'light');
        document.querySelector('.toggle-ball').classList.toggle('active', theme === 'light');
    }
      
      // Ajoute un écouteur d'événement sur le conteneur du toggle
      document.querySelector('.toggle-container').addEventListener('click', () => {
        const isLight = !document.body.classList.contains('light-mode');
        document.body.classList.toggle('light-mode', isLight);
        document.querySelector('.toggle-ball').classList.toggle('active', isLight);
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
      
      // Initialisation au chargement de la page
      window.addEventListener('DOMContentLoaded', () => {
        initTheme();
      });
      