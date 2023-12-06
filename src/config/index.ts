export const PRODUCT_CATEGORIES = [
  {
    label: 'Arts',
    value: 'arts' as const,
    featured: [
      {
        name: 'Cartes postales',
        href: '/products?category=cartes_postales',
        imageSrc: '/nav/arts/cartespostales.jpg',
      },
      {
        name: 'Dessins et affiches',
        href: '/products?category=dessins_et_affiches',
        imageSrc: '/nav/arts/affiches.jpg',
      },
      {
        name: 'Livres, BD et revues',
        href: '/products?category=livres_bd_et_revues',
        imageSrc: '/nav/arts/bd.jpg',
      },
      {
        name: 'Tableaux et gravures',
        href: '/products?category=tableaux_et_gravures',
        imageSrc: '/nav/arts/gravures.jpg',
      },
      {
        name: 'Vinyles et hifi',
        href: '/products?category=vinyles_et_hifi',
        imageSrc: '/nav/arts/vinyl.jpg',
      },
    ],
  },
  {
    label: 'Arts de la table',
    value: 'artsdelatable' as const,
    featured: [
      {
        name: 'Asiettes et plats',
        href: '/products?category=assiettes_et_plats',                                  
        imageSrc: '/nav/cuisine/assiettes.jpg',
      },
      {
        name: 'Petites vaiselles',
        href: '/products?category=petites_vaiselles',
        imageSrc: '/nav/cuisine/vaisselle.jpg',
      },
      {
        name: 'Tasses et mugs',
        href: '/products?category=tasses_et_mugs',
        imageSrc: '/nav/cuisine/tasses.jpg',
      },
      {
        name: 'Ustensiles de cuisine',
        href: '/products?category=ustensiles_de_cuisine',
        imageSrc: '/nav/cuisine/ustensils.jpg',
      },
      {
        name: 'Verres et carafes',
        href: '/products?category=verres_et_carafes',
        imageSrc: '/nav/cuisine/verres.jpg',
      },
    ],
  },
  {
    label: 'Coté jardin',
    value: 'cotejardin' as const,
    featured: [
      {
        name: 'Outils',
        href: '/products?category=outils',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Pour le jardin',
        href: '/products?category=pour_le_jardin',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Pour les animaux',
        href: '/products?category=pour_les_animaux',  
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Déco',
    value: 'deco' as const,
    featured: [
      {
        name: 'Bibelots',
        href: '/products?category=bibelots',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Miroiterie',
        href: '/products?category=miroiterie',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Vases et pots',
        href: '/products?category=vases_et_pots',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Objets religieux',
        href: '/products?category=objets_religieux',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Objets ethniques',
        href: '/products?category=objets_ethniques',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Objets indus',
        href: '/products?category=objets_indus',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },{
        name: 'Objets militaires',
        href: '/products?category=objets_militaires',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },{
        name: 'Objets de curiosité',
        href: '/products?category=objets_de_curiosite',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Luminaires',
    value: 'luminaires' as const,
    featured: [
      {
        name: 'Lampes',
        href: '/products?category=lampes',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Lampadaires',
        href: '/products?category=lampadaires',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Lustres et suspensions',
        href: '/products?category=lustres_et_suspensions',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Abats-jours',
        href: '/products?category=abats-jours',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  }, 
  {
    label: 'Textiles et bijoux',
    value: 'textilesetbijoux' as const,
    featured: [
      {
        name: 'Vêtements',
        href: '/products?category=vetements',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Bijoux',
        href: '/products?category=bijoux',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Vases et pots',
        href: '/products?category=vases_et_pots',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Linge de maison',
        href: '/products?category=linge_de_maison',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
      {
        name: 'Accessoires',
        href: '/products?category=accessoires',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Pour les enfants',
    value: 'enfants' as const,
    featured: [
      {
        name: 'Jouets',
        href: '/products?category=jouets',
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'Pour la chambre',
        href: '/products?category=pour_la_chambre',
        imageSrc: '/nav/icons/new.jpg',
      },
    ],
  },
]