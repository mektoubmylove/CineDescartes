// Récupère l'ID du film depuis l'URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');



const movies = [
  { 
    id: 1, 
    title: "Plein Soleil", 
    year: 1960, 
    director: "René Clément", 
    poster: "images/movie1.jpg", 
    description: "France-Italie / 1959 / 120 min \n\n D\'après le roman Monsieur Ripley de Patricia Highsmith.\n Avec Alain Delon, Maurice Ronet, Marie Laforêt.\n\n Tom Ripley est chargé par le père de son ami Philippe d'aller chercher le jeune homme, parti en Italie avec sa petite amie, et de le ramener en Californie. Tom s\'immisce peu à peu dans l'intimité du couple, malgré le mépris que Philippe lui porte.",
    article: "Plein Soleil est un film captivant sur la manipulation, l'aspiration à un statut social et la beauté de la tromperie. Son esthétique est marquée par des paysages méditerranéens magnifiques et une ambiance tendue." 
},
{ 
    id: 2, 
    title: "La Piscine", 
    year: 1969, 
    director: "Jacques Deray", 
    poster: "images/movie2.jpg", 
    description: "Un couple vit paisiblement en vacances en Provence, mais l'arrivée d'un ancien amant et de sa fille bouleverse leur quotidien.",
    article: "La Piscine explore les tensions psychologiques entre ses personnages, tout en utilisant l'environnement ensoleillé de la Côte d'Azur comme métaphore de la chaleur montante des émotions humaines. L'intensité des performances et la direction soignée rendent ce film incontournable."
},
{ 
    id: 3, 
    title: "L'eclisse", 
    year: 1962, 
    director: "Michelangelo Antonioni", 
    poster: "images/movie3.jpg", 
    description: "L'histoire d'une jeune femme qui quitte son fiancé, un courtier en bourse, et entame une relation avec un homme plus mystérieux dans un monde qui semble se désintégrer.",
    article: "L'Eclisse est un chef-d'œuvre du cinéma moderne, traité sous forme de métaphores visuelles et d'une analyse psychologique intense. Le film s'intéresse à la vacuité des relations humaines dans un monde en perte de repères."
},
{ 
    id: 4, 
    title: "Le Samouraï", 
    year: 1967, 
    director: "Jean-Pierre Melville", 
    poster: "images/movie4.jpg", 
    description: "Un tueur solitaire et méthodique, Jeff Costello, se retrouve pris dans un engrenage fatal après une mission ratée.",
    article: "Le Samouraï est un exemple parfait de film noir européen. Son rythme minimaliste et l'incarnation magistrale d'Alain Delon comme assassin froid et détaché en font un des plus grands films de genre."
},
{ 
    id: 5, 
    title: "Les Félins", 
    year: 1964, 
    director: "René Clément", 
    poster: "images/movie5.jpg", 
    description: "Une histoire d'amour naissante et de passion au cœur d'une intrigue policière où un homme est mêlé à un réseau de trafic.",
    article: "Les Félins est une histoire fascinante où l'atmosphère de tension et de mystère se mêle à la sensualité de ses personnages. C'est un thriller psychologique où la complexité des relations est mise en valeur avec des décors superbes."
},
{ 
    id: 6, 
    title: "Borsalino and Co", 
    year: 1974, 
    director: "Jacques Deray", 
    poster: "images/movie6.jpg", 
    description: "Après la mort de son partenaire, un gangster se lance dans une nouvelle série d'aventures criminelles à travers Marseille.",
    article: "Borsalino and Co continue l'histoire de Borsalino avec une touche de légèreté tout en maintenant une ambiance de film de gangsters efficace. Avec des scènes d'action captivantes et une grande alchimie entre ses acteurs principaux, il réussit à prolonger le succès du premier film."
},
{ 
    id: 7, 
    title: "La veuve couderc", 
    year: 1971, 
    director: "Pierre Granier-Deferre", 
    poster: "images/movie7.jpg", 
    description: "L'histoire d'une veuve qui entretient une relation passionnelle et destructrice avec un homme qu'elle accueille chez elle.",
    article: "La Veuve Couderc est un drame intime où l'amour se transforme en une spirale de passion et de violence. Les performances des acteurs, notamment de Simone Signoret, sont exceptionnelles et l'atmosphère sombre et oppressante du film est parfaitement mise en valeur."
},
{ 
    id: 8, 
    title: "Borsalino", 
    year: 1970, 
    director: "Jacques Deray", 
    poster: "images/movie8.jpg", 
    description: "Deux gangsters se retrouvent à collaborer après s'être croisés dans des affaires criminelles. Ils deviennent incontournables dans le monde du crime à Marseille.",
    article: "Borsalino est une brillante fusion entre action et comédie, alliant la grandeur des films de gangsters avec une grande élégance. L'alchimie entre Jean-Paul Belmondo et Alain Delon est l'une des raisons de son succès mondial."
},
{ 
    id: 9, 
    title: "Mr. KLEIN", 
    year: 1976, 
    director: "Joseph Losey", 
    poster: "images/movie9.jpg", 
    description: "Un marchand d'art français, Monsieur Klein, se retrouve confronté à un mystère qui commence à perturber sa vie, tout en étant soupçonné d'une affaire de juifs déportés.",
    article: "Mr. Klein est un thriller psychologique fascinant qui mêle enquête et réflexion sur l'identité. Avec une performance inoubliable d'Alain Delon, ce film est une réflexion poignante sur la guerre, la mémoire et l'individualité."
},
{ 
    id: 10, 
    title: "L'insoumis", 
    year: 1964, 
    director: "Alain Cavalier", 
    poster: "images/movie10.jpg", 
    description: "L'insoumis raconte l'histoire d'un homme qui lutte contre le système policier et militaire dans une société où le libre arbitre est mis en question.",
    article: "Ce film explore la résistance et l’individualité dans une époque où la société moderne semble écraser l'individu. Alain Cavalier délivre une performance forte et engagée, créant un film puissant et visionnaire."
},
{ 
  id: 11, 
  title: "Le clan des siciliens", 
  year: 1969, 
  director: "Henri Verneuil", 
  poster: "images/movie11.jpg", 
  description: "Un film de gangsters où deux criminels s'associent pour voler un bijou précieux, mais les choses ne se passent pas comme prévu.",
  article: "Le Clan des Siciliens est un classique du cinéma français, avec un scénario captivant et des personnages inoubliables. Jean Gabin et Alain Delon livrent des performances remarquables dans ce film d'action intense et mystérieux."
},
{ 
  id: 12, 
  title: "Flic Story", 
  year: 1975, 
  director: "Jacques Deray", 
  poster: "images/movie12.jpg", 
  description: "Un policier traque un dangereux criminel dans les rues de Paris, plongeant dans une enquête périlleuse et pleine de suspense.",
  article: "Flic Story combine action, suspense et un casting brillant, notamment un Lino Ventura impeccable. Ce film met en lumière l'univers complexe de la police parisienne des années 70."
},
{ 
  id: 13, 
  title: "Le Guépard", 
  year: 1963, 
  director: "Luchino Visconti", 
  poster: "images/movie13.jpg", 
  description: "Le film raconte l'histoire de Don Fabrizio, un noble sicilien du 19ème siècle, qui observe la transformation de la société autour de lui.",
  article: "Le Guépard est un chef-d'œuvre du cinéma mondial, un film magnifiquement filmé, avec des performances exceptionnelles de Burt Lancaster et Claudia Cardinale, et une réflexion profonde sur le changement social et l'aristocratie."
},
{ 
  id: 14, 
  title: "La Prima Notte di Quiete", 
  year: 1972, 
  director: "Valerio Zurlini", 
  poster: "images/movie14.jpg", 
  description: "L'histoire d'un homme en quête de paix intérieure dans une Italie marquée par la guerre et les tensions sociales.",
  article: "La Prima Notte di Quiete est un film poignant sur la réconciliation avec soi-même dans un contexte de bouleversements politiques et sociaux. Le réalisateur livre un drame intense, avec une atmosphère mélancolique et un portrait touchant du personnage principal."
},
{ 
  id: 15, 
  title: "Le Cercle Rouge", 
  year: 1970, 
  director: "Jean-Pierre Melville", 
  poster: "images/movie15.jpg", 
  description: "Un maître du crime, un ancien policier et un jeune braqueur se retrouvent impliqués dans un vol qui semble destiné à échouer.",
  article: "Le Cercle Rouge est un film d'une grande élégance, où la tension est palpable à chaque instant. Avec des personnages mystérieux et des scènes marquantes, c'est un incontournable du genre policier, porté par une direction d'acteurs et une mise en scène magistrales."
},
{ 
  id: 16, 
  title: "Mélodie en sous-sol", 
  year: 1963, 
  director: "Henri Verneuil", 
  poster: "images/movie16.jpg", 
  description: "Deux criminels, l'un un peu dépassé par les événements, l'autre plus ingénieux, préparent un cambriolage audacieux dans les sous-sols d'un casino.",
  article: "Mélodie en sous-sol est un film qui allie parfaitement tension, suspense et une dose d'humour noir. La performance de Jean Gabin et Alain Delon, deux légendes du cinéma français, fait de ce film un incontournable du genre."
},
{ 
  id: 17, 
  title: "Notre Histoire", 
  year: 1984, 
  director: "Bertrand Blier", 
  poster: "images/movie17.jpg", 
  description: "L'histoire d'un homme qui, après un accident, se retrouve confronté à sa propre existence et les relations qu'il entretient avec les autres.",
  article: "Notre Histoire est un film intime, explorant les complexités des relations humaines avec l'humour particulier de Bertrand Blier. Gérard Depardieu et Nathalie Baye offrent des performances touchantes dans cette réflexion sur la vie et l'amour."
},
{ 
  id: 18, 
  title: "Nouvelle vague", 
  year: 1990, 
  director: "Jean-Luc Godard", 
  poster: "images/movie18.jpg", 
  description: "Le film suit un groupe de jeunes qui se révoltent contre la société en vivant de manière bohème et en défiant les conventions.",
  article: "Nouvelle vague est un manifeste de la jeunesse rebelle, un film iconoclaste qui questionne les normes sociales. Avec sa mise en scène innovante et sa narration déstructurée, il incarne l'esprit du cinéma expérimental des années 90."
},
{ 
  id: 19, 
  title: "Big Guns", 
  year: 1973, 
  director: "Duccio Tessari", 
  poster: "images/movie19.jpg", 
  description: "Un ancien militaire se retrouve entraîné dans un conflit international impliquant des armes de destruction massive.",
  article: "Big Guns est un film d'action palpitant, avec des scènes spectaculaires et une intrigue pleine de suspense. Le réalisateur parvient à mêler action et réflexion sur les dangers géopolitiques du monde moderne."
},
{ 
  id: 20, 
  title: "Rocco et ses frères", 
  year: 1960, 
  director: "Luchino Visconti", 
  poster: "images/movie20.jpg", 
  description: "L'histoire de la famille Parondi, qui émigre du Sud de l'Italie vers Milan, où ils doivent affronter des défis et des conflits intérieurs.",
  article: "Rocco et ses frères est un film d'une force émotionnelle rare. Avec des performances exceptionnelles, il explore les thèmes de l'immigration, de la famille et de la lutte sociale avec une grande humanité."
},
{ 
  id: 21, 
  title: "La tulipe noire", 
  year: 1964, 
  director: "Christian-Jaque", 
  poster: "images/movie21.jpg", 
  description: "Dans un village hollandais, un homme se bat pour sauver une précieuse tulipe noire, symbole d'une grande fortune.",
  article: "La tulipe noire est un film d'aventure qui mêle romance et mystère. Avec une intrigue captivante et des décors pittoresques, ce film offre une expérience cinématographique pleine de charme."
},
{ 
  id: 22, 
  title: "Un flic", 
  year: 1972, 
  director: "Jean-Pierre Melville", 
  poster: "images/movie22.jpg", 
  description: "Un policier, en pleine traque d'un gang de malfaiteurs, se retrouve tiraillé entre ses devoirs professionnels et ses liens personnels.",
  article: "Un Flic est un thriller tendu et élégant, où la tension est palpable à chaque scène. Jean-Paul Belmondo livre une performance intense, dans un film qui incarne parfaitement l'esprit du cinéma policier français des années 70."
},
{ 
  id: 23, 
  title: "La vie d'Adèle", 
  year: 2013, 
  director: "Abdellatif Kechiche", 
  poster: "images/classic1.jpg", 
  description: "L'histoire d'Adèle, une jeune fille qui découvre l'amour et la passion à travers sa rencontre avec une autre femme.",
  article: "La Vie d'Adèle est un film intense et émouvant qui explore les aspects profonds de l'amour et de l'identité. Les performances de Léa Seydoux et Adèle Exarchopoulos sont saisissantes, et la caméra capte chaque émotion de façon intime."
},
{ 
  id: 24, 
  title: "Wesh Wesh Qu'est-ce qui se passe", 
  year: 2001, 
  director: "Rabah Ameur-Zaïmeche", 
  poster: "images/classic2.jpg", 
  description: "Dans les banlieues parisiennes, un jeune homme se trouve pris dans un tourbillon de violence et de rébellion.",
  article: "Ce film offre un regard cru et réaliste sur la jeunesse en difficulté dans les quartiers populaires de Paris. Avec une direction brillante, Wesh Wesh Qu'est-ce qui se passe apporte une réflexion poignante sur la violence et l'isolement social."
},
{ 
  id: 25, 
  title: "Trois ponts sous la rivière", 
  year: 1999, 
  director: " Jean-Claude Biette", 
  poster: "images/classic3.jpg", 
  description: "Un homme se lance dans une quête de rédemption alors qu'il se bat contre ses démons personnels et tente de comprendre sa place dans la société.",
  article: "Trois Ponts sous la Rivière est un film contemplatif qui traite des thèmes de la rédemption, du doute et de la solitude. La réalisation de Jean-Claude Brisseau, sobre et réfléchie, permet de plonger dans la psychologie complexe de ses personnages."
},
{ 
  id: 26, 
  title: "Le Mirage", 
  year: 1992, 
  director: "Jean-Claude Guiguet ", 
  poster: "images/classic4.jpg", 
  description: "Un homme se retrouve confronté à la réalité de son propre mirage lorsqu'il poursuit un rêve qui ne se réalise pas.",
  article: "Le Mirage est un film mélancolique sur l'illusion du bonheur et la quête de sens. La mise en scène poétique et l'atmosphère envoûtante ajoutent une dimension unique à cette réflexion sur la fragilité des aspirations humaines."
},
{ 
  id: 27, 
  title: "Les Maitres du temps", 
  year: 1982, 
  director: "René Laloux", 
  poster: "images/classic5.jpg", 
  description: "Dans un futur lointain, un groupe d'individus se bat pour préserver l'équilibre de l'univers contre une force menaçante.",
  article: "Les Maitres du Temps est un film d'animation de science-fiction avec un univers visuel unique et un scénario captivant. Cette œuvre culte explore les thèmes du temps et de l'espace d'une manière fascinante et profondément originale."
},
{ 
  id: 28, 
  title: "Adieu au langage", 
  year: 2014, 
  director: "Jean-Luc Godard", 
  poster: "images/classic6.jpg", 
  description: "Un homme et une femme se retrouvent dans un amour tumultueux, alors que le film explore la communication, les images et le langage.",
  article: "Adieu au Langage est un film radicalement expérimental de Jean-Luc Godard, qui déstabilise le spectateur par sa construction narrative non linéaire et sa manipulation de l'image. Un cinéma avant-gardiste qui pousse les limites du langage cinématographique."
},
{ 
  id: 29, 
  title: "Les Demoiselles de Rochefort", 
  year: 1967, 
  director: "Jacques Demy", 
  poster: "images/classic7.jpg", 
  description: "Les sœurs Solange et Delphine vivent à Rochefort, mais rêvent de partir à Paris pour réaliser leurs ambitions artistiques et rencontrer l'amour.",
  article: "Les Demoiselles de Rochefort est une comédie musicale éclatante, un hommage à la légèreté et à la joie de vivre, avec une direction musicale irréprochable et des numéros de danse mémorables. Catherine Deneuve et Françoise Dorléac y sont éblouissantes."
},
{ 
  id: 30, 
  title: "Le salaire de la peur", 
  year: 1953, 
  director: "Henri-Georges Clouzot", 
  poster: "images/classic8.jpg", 
  description: "Quatre hommes acceptent de transporter une cargaison de nitroglycérine à travers une région isolée, risquant leurs vies à chaque instant.",
  article: "Le Salaire de la Peur est un thriller psychologique qui incarne la tension à son apogée. Clouzot orchestre un suspense insoutenable, et le film explore les thèmes de la peur, du courage et de la survie dans des conditions extrêmes."
},
{ 
  id: 31, 
  title: "Les Savates du bon Dieu", 
  year: 2000, 
  director: "Jean-Claude Brisseau", 
  poster: "images/classic9.jpg", 
  description: "L'histoire d'un homme qui, après avoir reçu des pouvoirs surnaturels, doit naviguer dans une société qui ne le comprend pas.",
  article: "Les Savates du Bon Dieu est une comédie absurde et satirique qui critique la société contemporaine. Avec un humour noir et une satire acerbe, le film fait une analyse critique des valeurs sociales et politiques du moment."
},
{ 
  id: 32, 
  title: "Fantômas - À l'ombre de la guillotine", 
  year: 1913, 
  director: "Louis Feuillade", 
  poster: "images/classic10.jpg", 
  description: "Le super-vilain Fantômas, un maître du déguisement et du crime, sème la terreur à Paris, tandis que l'inspecteur Juve tente de le capturer.",
  article: "Fantomas est une série de films d'aventure palpitants et remplis de mystère, avec un super-vilain charismatique incarné par Jean Marais. La mise en scène dynamique et les cascades spectaculaires rendent ce film un incontournable du cinéma français."
},
{ 
  id: 33, 
  title: "L'humanité", 
  year: 1999, 
  director: "Bruno Dumont", 
  poster: "images/classic11.jpg", 
  description: "Un enquêteur sur une affaire de meurtre se trouve confronté à ses propres dilemmes moraux et à sa vision du monde.",
  article: "L'Humanité est un film qui déstabilise par sa lenteur et sa profondeur. Bruno Dumont explore des thèmes comme la souffrance, la solitude et la rédemption dans une œuvre saisissante, où les personnages sont au centre d'une recherche existentielle."
},
{ 
  id: 34, 
  title: "Le Trou", 
  year: 1960, 
  director: "Jacques Becker", 
  poster: "images/classic12.jpg", 
  description: "Quatre hommes préparent une évasion d'une prison parisienne, mais la tension monte à mesure que l'évasion se rapproche.",
  article: "Le Trou est un film de prison intense, avec une direction d'acteurs parfaite et une mise en scène d'une précision redoutable. Le film est une réflexion sur la liberté, la solidarité et la lutte pour l'évasion, marquée par une tension permanente."
},
{ 
  id: 35, 
  title: "PLAYTIME", 
  year: 1967, 
  director: "Jacques Tati", 
  poster: "images/classic13.jpg", 
  description: "Monsieur Hulot navigue dans un Paris futuriste où la modernité et la technologie créent des situations absurdes et comiques.",
  article: "Playtime est une comédie avant-gardiste qui déconstruit la société moderne avec un sens unique du détail et une réflexion sur le progrès technologique. Jacques Tati utilise des visuels spectaculaires pour créer une expérience cinématographique inédite."
},
{ 
  id: 36, 
  title: "HIROSHIMA Mon Amour", 
  year: 1959, 
  director: "Alain Resnais", 
  poster: "images/classic14.jpg", 
  description: "Un architecte japonais et une actrice française, chacun marqué par la guerre, se rencontrent et échangent leurs souvenirs d'horreur et de passion.",
  article: "Hiroshima Mon Amour est un film profondément émouvant et poétique, une exploration de la mémoire, du deuil et des relations humaines à travers une rencontre amoureuse fragile et intense entre deux cultures."
},
{ 
  id: 37, 
  title: "Bande à part", 
  year: 1964, 
  director: "Jean-Luc Godard", 
  poster: "images/classic15.jpg", 
  description: "Trois jeunes gens s'embarquent dans une aventure criminelle, cherchant à échapper à l'ennui et à trouver un sens à leurs vies.",
  article: "Bande à part est une œuvre révolutionnaire qui brise les codes du cinéma classique. Godard mêle le genre policier à une vision de la jeunesse rebelle et désenchantée, tout en jouant avec les conventions du film noir."
},
{ 
  id: 38, 
  title: "Les Tontons Flingueurs", 
  year: 1963, 
  director: "Georges Lautner", 
  poster: "images/classic16.jpg", 
  description: "Un gangster retraité est contraint de revenir dans le milieu criminel pour régler un conflit entre anciens associés.",
  article: "Les Tontons Flingueurs est une comédie noire et un film culte du cinéma français. Les dialogues, riches en répliques mémorables, et la direction d'acteurs font de ce film un incontournable du genre."
},
{ 
  id: 39, 
  title: "À bout de souffle", 
  year: 1960, 
  director: "Jean-Luc Godard", 
  poster: "images/classic17.jpg", 
  description: "Un jeune voleur de voiture est poursuivi par la police, tandis qu'il développe une relation amoureuse avec une jeune Américaine.",
  article: "À Bout de Souffle incarne l'esprit de la Nouvelle Vague, avec sa mise en scène audacieuse et ses personnages à la fois attachants et anti-héros. Godard mélange parfaitement l'aventure et la réflexion sur la liberté et l'amour."
},
{ 
  id: 40, 
  title: "Substitute", 
  year: 2007, 
  director: "Fred Poulet, Vikash Dhorasoo", 
  poster: "images/classic18.jpg", 
  description: "Un professeur remplaçant dans un lycée doit faire face à des élèves turbulents, mais un événement mystérieux va changer le cours des choses.",
  article: "The Substitute est un thriller psychologique qui explore la dynamique entre pouvoir, autorité et rébellion au sein d'une institution scolaire. La tension monte crescendo, captivant le spectateur dans une intrigue de plus en plus complexe."
},
{ 
  id: 41, 
  title: "Un été brûlant", 
  year: 2011, 
  director: "Philippe Garrel", 
  poster: "images/classic19.jpg", 
  description: "Dans un été ensoleillé, une jeune femme et un homme plus âgé se retrouvent au centre d'une relation passionnée, mais complexe.",
  article: "Un Été Brûlant est un film introspectif qui plonge dans les relations amoureuses compliquées et le poids des non-dits. Avec des performances subtiles et une direction intime, Garrel explore la passion et la douleur de l'amour."
},
{ 
  id: 42, 
  title: "Cleo from 5 to 7", 
  year: 1962, 
  director: "Agnès Varda", 
  poster: "images/classic20.jpg", 
  description: "Une chanteuse de 25 ans attend les résultats d'un test médical qui pourrait changer sa vie, et la journée s'étend alors qu'elle s'interroge sur son avenir.",
  article: "Cleo from 5 to 7 est un chef-d'œuvre de la Nouvelle Vague, une exploration du temps, de l'anxiété et de la beauté de l'instant présent. Agnès Varda captive avec un portrait intime et puissant d'une femme confrontée à la fragilité de la vie."
},
{ 
  id: 43, 
  title: "L'amour à la mer", 
  year: 1965, 
  director: "Guy Gilles", 
  poster: "images/classic21.jpg", 
  description: "Un homme et une femme vivent une liaison tumultueuse, alors qu'ils cherchent à comprendre la nature de leur relation.",
  article: "L'Amour à la Mer est un film poétique sur la douleur de l'amour et la complexité des relations humaines. Avec une mise en scène minimaliste, Garrel offre un voyage émotionnel intense."
},
{ 
  id: 44, 
  title: "Le Magnifique", 
  year: 1973, 
  director: "Philippe de Broca", 
  poster: "images/classic22.jpg", 
  description: "Un écrivain de romans d'espionnage vit une aventure à la fois dans la réalité et dans son imaginaire, où il devient le héros de ses propres récits.",
  article: "Le Magnifique est une parodie du genre d'espionnage, remplie d'humour et d'action. Avec Jean-Paul Belmondo dans un rôle charismatique, ce film est une satire légère et divertissante des films d'action des années 70."
},
{ 
  id: 45, 
  title: "Pierre et Djemila", 
  year: 1987, 
  director: "Gérard Blain", 
  poster: "images/classic23.jpg", 
  description: "Un couple de jeunes gens issus de milieux sociaux opposés lutte pour vivre leur amour dans une société qui leur est hostile.",
  article: "Pierre et Djemila est un film poignant qui aborde les questions de classe sociale, d'amour et de résistance face aux préjugés. Un regard touchant et réaliste sur la société des années 70."
},
{ 
  id: 46, 
  title: "Sous le soleil de Satan", 
  year: 1987, 
  director: "Maurice Pialat", 
  poster: "images/classic24.jpg", 
  description: "Un prêtre confronté à une crise spirituelle rencontre une femme possédée par le démon, ce qui va bouleverser sa vie et sa foi.",
  article: "Sous le soleil de Satan est un drame psychologique qui interroge la foi, la tentation et le doute. Maurice Pialat livre un film à la fois austère et profond, où les personnages sont confrontés à leur propre fragilité et leur quête de rédemption."
},
{ 
  id: 47, 
  title: "Sans soleil", 
  year: 1983, 
  director: "Chris Marker", 
  poster: "images/classic25.jpg", 
  description: "À travers un film-essai, le réalisateur explore ses voyages en Afrique et au Japon, tout en réfléchissant sur la mémoire, le temps et la condition humaine.",
  article: "Sans Soleil est une œuvre cinématographique fascinante qui mêle documentaire et réflexion philosophique. Chris Marker, avec sa narration poétique et ses images superbes, invite le spectateur à une méditation sur le temps et la mémoire collective."
},
{ 
  id: 48, 
  title: "Les naufragés de la D17", 
  year: 2002, 
  director: "Luc Moullet", 
  poster: "images/classic26.jpg", 
  description: "Des enfants vivant dans une société isolée commencent à découvrir la vérité sur leur existence et leur environnement.",
  article: "Les naufragés de la D17 est un film de science-fiction et de suspense qui explore les thèmes de l'innocence, de la manipulation et de l'éveil à la réalité. Avec une atmosphère tendue et une mise en scène audacieuse, ce film plonge le spectateur dans une expérience sensorielle."
},
{ 
  id: 49, 
  title: "Aggro Drift", 
  year: 2023, 
  director: "Harmony Korine", 
  poster: "images/new1.jpg", 
  description: "Dans une banlieue de Paris, un groupe de jeunes en quête de pouvoir et de reconnaissance sombre dans la violence et la délinquance.",
  article: "Aggro Drift est un film brut et réaliste sur la jeunesse des banlieues, l'injustice sociale et les conséquences de l'engrenage criminel. Olivier Abbou livre un regard sans concession sur la violence urbaine et la quête de soi."
},
{ 
  id: 50, 
  title: "La bête", 
  year: 2023, 
  director: "Bertrand Bonello", 
  poster: "images/new2.jpg", 
  description: "Lors d'un voyage en province, un homme et une femme se retrouvent confrontés à un étrange phénomène qui bouscule leur quotidien.",
  article: "La Bête est un film surréaliste et mystérieux qui mélange éléments fantastiques et psychologiques. Avec une approche unique et une atmosphère angoissante, Serge Bozon propose un voyage dans l'absurde et le non-dit."
},
{ 
  id: 51, 
  title: "Le gang des bois du temple", 
  year: 2022, 
  director: "Rabah Ameur-Zaïmeche", 
  poster: "images/new3.jpg", 
  description: "Un gang se forme dans une petite ville en marge de la société, dans un univers de violence et de règlements de comptes.",
  article: "Le Gang du Bois des Temples est un film qui dépeint la montée en puissance d'une bande criminelle, avec une tension palpable et des personnages fascinants. Jean-Claude Guedj explore l'univers sombre du crime avec un regard brut et réaliste."
},
{ 
  id: 52, 
  title: "Pacifiction", 
  year: 2022, 
  director: "Albert Serra", 
  poster: "images/new4.jpg", 
  description: "Un haut fonctionnaire français en Polynésie est confronté à une crise politique et à une série d'événements mystérieux qui vont perturber son quotidien.",
  article: "Pacifiction est un film étrange et complexe qui mêle politique et mystère. Avec une mise en scène lente et méditative, Albert Serra interroge les pouvoirs en place, tout en créant une atmosphère insidieuse et presque onirique."
},
{ 
  id: 53, 
  title: "City of darkness", 
  year: 2024, 
  director: "Soi Cheang", 
  poster: "images/new5.jpg", 
  description: "Un détective privé enquête sur une série de disparitions mystérieuses dans une ville en proie à une atmosphère de plus en plus inquiétante.",
  article: "City of Darkness est un thriller noir et psychologique qui fait appel à l'esthétique du cinéma d'horreur japonais. Kiyoshi Kurosawa crée une tension constante, où la frontière entre le réel et l'irréel se brouille à chaque instant."
},
{ 
  id: 54, 
  title: "Vampire humaniste cherche suicidaire consentant", 
  year: 2024, 
  director: "Ariane Louis-Seize", 
  poster: "images/new6.jpg", 
  description: "Un vampire en quête de sens dans une société moderne cherche une âme perdue, qui pourrait mettre fin à sa longue existence.",
  article: "Vampire humaniste cherche suicidaire consentant est une satire de la société contemporaine, avec un ton décalé et absurde. Benoît Delépine aborde la condition humaine sous un angle humoristique et noir, tout en offrant une réflexion profonde sur l'isolement et la quête de sens."
},
{ 
  id: 55, 
  title: "Evangelion: Thrice Upon a Time", 
  year: 2021, 
  director: "Hideaki Anno", 
  poster: "images/new7.jpg", 
  description: "Les jeunes pilotes d'Evangelion continuent de lutter contre des forces extraterrestres menaçant l'humanité, tout en faisant face à des dilemmes personnels et existentiels.",
  article: "Evangelion: Thrice Upon a Time est un film d'animation de science-fiction intense et philosophique, qui conclut la saga de manière poétique et ambiguë. Hideaki Anno propose une réflexion sur l'humanité, la souffrance et la rédemption à travers des visuels saisissants."
},
{ 
  id: 56, 
  title: "FRANCE", 
  year: 2021, 
  director: "Bruno Dumont", 
  poster: "images/new8.jpg", 
  description: "Une journaliste de télévision, star du petit écran, se trouve confrontée à une crise existentielle qui la pousse à réévaluer sa vie et ses priorités.",
  article: "FRANCE est une satire acerbe de la société moderne et des médias, où Bruno Dumont interroge la célébrité, l'image et la réalité derrière les écrans. Le film, à la fois drôle et inquiétant, dépeint une héroïne en quête de sens dans un monde saturé d'images et de superficialité."
},
{ 
  id: 57, 
  title: "Challengers", 
  year: 2024, 
  director: "Luca Guadagnino", 
  poster: "images/new9.jpg", 
  description: "Trois amis d'enfance se retrouvent après plusieurs années, confrontés à des tensions et à des rivalités qui remontent à leur passé.",
  article: "Challengers est un drame émotionnel intense qui explore les liens complexes de l'amitié et de l'amour. Luca Guadagnino livre une œuvre poignante sur les relations humaines et les dilemmes moraux qui façonnent nos vies."
},
{ 
  id: 58, 
  title: "À son image", 
  year: 2024, 
  director: "Thierry de Peretti", 
  poster: "images/new10.jpg", 
  description: "Une jeune femme perd sa mère et doit se réconcilier avec son passé, tout en faisant face à une série d'événements qui vont changer sa vision du monde.",
  article: "A son image est un film émouvant sur le deuil, la réconciliation et la transformation personnelle. Arnaud Desplechin explore avec délicatesse les émotions humaines les plus profondes à travers des personnages complexes et nuancés."
},
{ 
  id: 59, 
  title: "In Water", 
  year: 2023, 
  director: "Hong Sang-soo", 
  poster: "images/new11.jpg", 
  description: "Dans un village reculé, un jeune homme plonge dans un univers aquatique mystique, où il doit lutter pour sa survie et comprendre sa place dans un monde en mutation.",
  article: "In Water est un film poétique et surréaliste qui mêle drame et fantastique. Julio Hernández Cordón offre une expérience cinématographique captivante qui questionne la nature de l'existence et l'interconnexion entre l'homme et son environnement."
},
{ 
  id: 60, 
  title: "Le ravissement", 
  year: 2023, 
  director: "Iris Kaltenbäck", 
  poster: "images/new12.jpg", 
  description: "Une jeune femme, prise dans un tourbillon de passion, se trouve confrontée à un drame qui la plonge dans une réalité inquiétante et sans retour.",
  article: "Le ravissement est un thriller psychologique qui explore les recoins sombres de la passion et de la folie. Patricia Mazuy manipule les émotions et l'angoisse de façon subtile pour offrir un film intense et perturbant."
},
{ 
  id: 61, 
  title: "The First Slam Dunk", 
  year: 2022, 
  director: "Takehiko Inoue", 
  poster: "images/new13.jpg", 
  description: "Un jeune basketteur, issu d'un quartier difficile, lutte pour prouver sa valeur dans un sport qui semble inaccessible, tout en affrontant ses démons intérieurs.",
  article: "The First Slam Dunk est un film d'animation énergique et inspirant qui explore la détermination, l'amitié et la lutte pour se faire une place. Takehiko Inoue adapte son propre manga dans une œuvre visuellement impressionnante et émotive."
},
{ 
  id: 62, 
  title: "Presence", 
  year: 2025, 
  director: "Steven Soderbergh", 
  poster: "images/new14.jpg", 
  description: "Dans un hôtel de luxe, une mystérieuse présence semble influencer le destin des invités, entre amour, secrets et révélations inattendues.",
  article: "Presence est un drame intimiste qui mêle suspense et exploration des relations humaines. Hirokazu Kore-eda, maître dans l'art du film de famille, nous livre une réflexion sur les liens invisibles qui unissent les êtres."
},
{ 
  id: 63, 
  title: "Furiosa", 
  year: 2024, 
  director: "George Miller", 
  poster: "images/new15.jpg", 
  description: "Prise dans un monde de guerre et de chaos, Furiosa se bat pour sa survie dans un univers post-apocalyptique où l'humanité a été réduite à sa plus simple expression.",
  article: "Furiosa est un prequel du célèbre Mad Max. George Miller signe un film explosif, magnifiquement mis en scène, où il explore la quête de pouvoir et de liberté dans un monde où tout semble perdu."
},
{ 
  id: 64, 
  title: "Miséricorde", 
  year: 2024, 
  director: "Alain Guiraudie", 
  poster: "images/new16.jpg", 
  description: "Dans un monde en proie à la guerre, une mère et son fils tentent de survivre tout en cherchant à préserver leur humanité face à l'horreur qui les entoure.",
  article: "Misericorde est un film de guerre poignant qui plonge dans l'intensité de la souffrance humaine. Brillante Mendoza explore la violence avec une mise en scène réaliste, créant une expérience cinématographique dévastatrice."
},
{ 
  id: 65, 
  title: "Matrix Resurrections", 
  year: 2021, 
  director: "Lana Wachowski", 
  poster: "images/new17.jpg", 
  description: "Neo, toujours à la recherche de la vérité, revient dans un monde familier mais altéré, où il doit confronter de nouvelles réalités et des ennemis inconnus.",
  article: "Matrix Resurrections est le retour tant attendu de la saga Matrix, avec une réflexion sur la mémoire, la réalité et l'identité. Lana Wachowski revisite l'univers de la franchise avec une approche contemporaine et réfléchie."
},
{ 
  id: 66, 
  title: "Anatomie d'une chute", 
  year: 2023, 
  director: "Justine Triet", 
  poster: "images/new18.jpg", 
  description: "Après la mort mystérieuse de son mari, une femme se retrouve accusée de meurtre, mais ses actes sont-ils réellement responsables de sa chute ? Un thriller psychologique captivant.",
  article: "Anatomie d'une chute est un drame judiciaire où Justine Triet explore la vérité et la culpabilité dans un cadre intime et tendu. Le film met en scène une performance remarquable de l'actrice principale et aborde des questions profondes sur la justice et la perception."
},
{ 
  id: 67, 
  title: "Made in Hong Kong", 
  year: 1997, 
  director: "Fruit Chan", 
  poster: "images/hk1.jpg", 
  description: "Un jeune homme qui lutte pour s'en sortir à Hong Kong devient témoin de l'effondrement de son monde personnel et de la ville autour de lui.",
  article: "Made in Hong Kong est un film culte du cinéma hongkongais qui explore la vie urbaine, la pauvreté et l'aliénation dans une société en mutation. Fruit Chan offre une vision brutale et réaliste de l'adolescence et de la survie dans une ville en pleine transition."
},
{ 
  id: 68, 
  title: "Throw Down", 
  year: 2004, 
  director: "Johnnie To", 
  poster: "images/hk2.jpg", 
  description: "Un ancien champion de judo, déprimé et solitaire, se voit confronté à un défi qui ravive son passé et le pousse à se battre à nouveau.",
  article: "Throw Down est un film noir inspiré par les classiques du cinéma de Hong Kong. Johnnie To mêle action, drame et réflexion sur le destin et la rédemption dans une histoire poignante qui met en lumière la lutte intérieure de son protagoniste."
},
{ 
  id: 69, 
  title: "A Better Tomorrow", 
  year: 1986, 
  director: "John Woo", 
  poster: "images/hk3.jpg", 
  description: "Deux frères, séparés par le crime et le destin, tentent de se réconcilier et de se racheter dans un monde de violence et de trahison.",
  article: "A Better Tomorrow est un film d'action emblématique du cinéma hongkongais qui a marqué l'histoire du genre. John Woo y crée un univers intense de loyauté et de sacrifice, où l'honneur et la rédemption se croisent dans un tourbillon d'émotions et de violence."
},
{ 
  id: 70, 
  title: "Election", 
  year: 2005, 
  director: "Johnnie To", 
  poster: "images/hk4.jpg", 
  description: "Dans un Hong Kong rongé par le crime organisé, deux factions rivales se battent pour le contrôle d'une société secrète. Le pouvoir et la politique sont au cœur de ce thriller tendu.",
  article: "Elections est un film policier où Johnnie To se penche sur la lutte pour le pouvoir dans les milieux criminels. Un film dense et captivant qui met en lumière la corruption et les dynamiques de pouvoir dans un contexte impitoyable."
},
{ 
  id: 71, 
  title: "A Moment of Romance", 
  year: 1990, 
  director: "Benny Chan", 
  poster: "images/hk5.jpg", 
  description: "Un gangsta et une jeune femme, venant de mondes complètement différents, tombent amoureux, mais leur relation est marquée par la violence et les conflits intérieurs.",
  article: "A Moment of Romance est une romance tragique et poignante qui se déroule dans les rues de Hong Kong. Benny Chan réalise un film émouvant, où les thèmes de l'amour, de la violence et du sacrifice se croisent avec une grande intensité émotionnelle."
},
{ 
  id: 72, 
  title: "My Left Eye Sees Ghosts", 
  year: 2002, 
  director: "Johnnie To", 
  poster: "images/hk6.jpg", 
  description: "Une jeune femme se retrouve hantée par des visions de fantômes et une mystérieuse mort. Elle tente de percer les secrets de son passé tout en affrontant ses peurs.",
  article: "My Left Eye Sees Ghosts est une comédie dramatique où l'humour et le surnaturel s'entrelacent. Johnnie To explore des thèmes de l'après-vie et de la réconciliation avec le passé, tout en offrant un regard unique sur les esprits et les superstitions."
},
{ 
  id: 73, 
  title: "The Spooky Bunch", 
  year: 1980, 
  director: "Ann Hui", 
  poster: "images/hk7.jpg", 
  description: "Un groupe de détectives se lance dans une enquête mystérieuse sur une série de phénomènes paranormaux dans la ville de Hong Kong.",
  article: "The Spooky Bunch est un mélange de comédie noire et de thriller surnaturel. Johnnie To parvient à mélanger des éléments comiques et horrifiques, créant une atmosphère intrigante et un film unique dans son genre."
},
{ 
  id: 74, 
  title: "Breaking News", 
  year: 2004, 
  director: "Johnnie To", 
  poster: "images/hk8.jpg", 
  description: "Un braquage de banque devient un événement public en direct, et un groupe de policiers se retrouve pris dans une confrontation avec les criminels qui filme tout pour les médias.",
  article: "Breaking News est un thriller haletant qui commente la société médiatique et la culture de l'information. Johnnie To crée une réflexion sur la relation entre le crime, les médias et la société avec une mise en scène explosive."
},
{ 
  id: 75, 
  title: "Vengeance", 
  year: 2009, 
  director: "Johnnie To", 
  poster: "images/hk9.jpg", 
  description: "Un père part en quête de vengeance après que sa fille et sa famille ont été assassinées. L'enquête le mène dans les bas-fonds de la criminalité à Hong Kong.",
  article: "Vengeance est un film sombre et intense sur le thème de la vengeance et de la rédemption. Johnnie To signe un thriller implacable où l'honneur et la justice sont au centre du récit, avec une mise en scène magistrale."
},
{ 
  id: 76, 
  title: "PTU", 
  year: 2003, 
  director: "Johnnie To", 
  poster: "images/hk10.jpg", 
  description: "Un groupe de policiers de l'unité PTU (Police Tactical Unit) est confronté à une situation tendue où des vies sont en jeu et où la loyauté et l'honneur sont mis à l'épreuve.",
  article: "PTU est un film policier magistral où Johnnie To explore les dilemmes moraux des policiers et des criminels. Avec une mise en scène nerveuse et tendue, il livre une œuvre brillante sur le sens de l'honneur et de la justice dans un univers impitoyable."
},
{ 
  id: 77, 
  title: "Exiled", 
  year: 2006, 
  director: "Johnnie To", 
  poster: "images/hk11.jpg", 
  description: "Dans le Hong Kong des années 90, un groupe de tueurs à gages est chargé d'éliminer un ancien collègue, mais ils se retrouvent plongés dans une situation où loyauté et trahison se confondent.",
  article: "Exiled est un chef-d'œuvre du cinéma hongkongais. Johnnie To explore les thèmes de l'amitié, de la loyauté et de la trahison dans un style visuel remarquable, avec des scènes d'action poignantes et une profondeur émotionnelle inattendue."
},
{ 
  id: 78, 
  title: "2046", 
  year: 2004, 
  director: "Wong Kar-wai", 
  poster: "images/hk12.jpg", 
  description: "Un écrivain voyage dans le futur à travers ses souvenirs et ses amours passées. Le film mêle science-fiction, romance et introspection, avec une esthétique unique.",
  article: "2046 est un film poétique et visuellement saisissant de Wong Kar-wai, qui fusionne mémoire, amour et futur dans une exploration de la solitude et des relations humaines. C'est une œuvre magistrale sur le temps, la perte et l'attente."
},
{ 
  id: 79, 
  title: "Peking Opera Blues", 
  year: 1986, 
  director: "Tsui Hark", 
  poster: "images/hk13.jpg", 
  description: "Dans la Chine des années 1920, trois femmes se retrouvent mêlées à une conspiration politique, tout en étant liées par leur passion commune pour l'opéra de Pékin.",
  article: "Peking Opera Blues est un film époustouflant de Tsui Hark qui combine comédie, drame et action dans un cadre historique fascinant. Le film est un hommage à la culture chinoise tout en étant un thriller audacieux sur le pouvoir, la trahison et l'amour."
},
{ 
  id: 80, 
  title: "God of Gamblers", 
  year: 1989, 
  director: "Wong Jing", 
  poster: "images/hk14.jpg", 
  description: "Un homme connu comme le 'Dieu des joueurs' devient amnésique après un accident et doit se réadapter à sa vie dans un monde de jeux et de tricherie.",
  article: "God of Gamblers est un film culte de Hong Kong qui mélange action et comédie avec un jeu de hasard comme toile de fond. Le film est devenu un classique du genre et a inspiré de nombreuses suites et adaptations."
}
];

// Affiche les détails du film
function loadMovieDetails() {
    const movie = movies[movieId-1]; // movieId récupéré depuis l'URL

    if (!movie) {
        document.getElementById('movie-details').innerHTML = "<h1>Film non trouvé</h1>";
        return;
    }

    // Met à jour le poster
    document.getElementById('poster').src = movie.poster;

    // Met à jour les informations du film
    document.getElementById('movie-title').textContent = `${movie.title} (${movie.year})`;
    document.getElementById('movie-meta').textContent = `De ${movie.director}`;
    document.getElementById('movie-description').textContent = movie.description;

    // Met à jour la vidéo (assurez-vous d'avoir le bon chemin vers la vidéo)
    document.getElementById('movie-video').src = `videos/movie_${movieId}.mp4`;

    // Met à jour l'article
    document.getElementById('movie-article').textContent = movie.article;
}

  


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

window.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadMovieDetails();
});