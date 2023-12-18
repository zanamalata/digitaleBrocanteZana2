export const PRODUCT_CATEGORIES = [
    {
        label: 'Art',
        value: 'art' as const,
        featured: [
            {
                name: 'Tableaux anciens et dessins',
                value: 'tableaux-anciens-dessins',
                href: '/products?category=tableaux-anciens-dessins',
                imageSrc: '/nav/arts/cartespostales.jpg',
            },
            {
                name: 'Gravures et estampes',
                value: 'gravures-et-estampes',
                href: '/products?category=gravures-et-estampes',
                imageSrc: '/nav/arts/affiches.jpg',
            },
            {
                name: 'Affiches et pubs',
                value: 'affiches-et-pubs',
                href: '/products?category=affiches-et-pubs',
                imageSrc: '/nav/arts/bd.jpg',
            },
            {
                name: 'Photographies anciennes',
                value: 'photographie-anciennes',
                href: '/products?category=photographie-anciennes',
                imageSrc: '/nav/arts/gravures.jpg',
            },
            {
                name: 'Sculptures anciennes',
                value: 'sculptures-anciennes',
                href: '/products?category=sculptures-anciennes',
                imageSrc: '/nav/arts/vinyl.jpg',
            },
        ],
    },
    {
        label: 'Culture',
        value: 'culture' as const,
        featured: [
            {
                name: 'Livres anciens et vieux papiers',
                value: 'livres-anciens-et-vieux-papiers',
                href: '/products?category=livres-anciens-et-vieux-papiers',
                imageSrc: '/nav/arts/affiches.jpg',
            },
            {
                name: 'Cartes postales',
                value: 'cartes-postales',
                href: '/products?category=cartes-postales',
                imageSrc: '/nav/arts/cartespostales.jpg',
            },
            {
                name: 'BD',
                value: 'bd',
                href: '/products?category=bd',
                imageSrc: '/nav/arts/bd.jpg',
            },
            {
                name: 'Revues',
                value: 'revues',
                href: '/products?category=revues',
                imageSrc: '/nav/arts/bd.jpg',
            },
            {
                name: 'Vinyles, musique',
                value: 'vinyles-musique',
                href: '/products?category=vinyles-musique',
                imageSrc: '/nav/arts/vinyl.jpg',
            },
        ],
    },
    {
        label: 'Créations',
        value: 'creations' as const,
        featured: [
            {
                name: 'Peintures',
                value: 'peintures',
                href: '/products?category=peintures',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Sculptures',
                value: 'sculptures',
                href: '/products?category=sculptures',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Photographies',
                value: 'photographie',
                href: '/products?category=photographie',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Bijoux',
                value: 'bijoux',
                href: '/products?category=bijoux',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Poteries',
                value: 'poteries',
                href: '/products?category=poteries',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
            {
                name: 'Autres',
                value: 'autres',
                href: '/products?category=autres',
                imageSrc: '/nav/ui-kits/blue.jpg',
            },
        ],
    },
    {
        label: 'La déco',
        value: 'deco' as const,
        featured: [
            {
                name: 'Miroirs, bougeoirs, globe de mariée',
                value: 'miroirs-etc',
                href: '/products?category=miroirs-etc',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Dame-Jeanne, vases et pots',
                value: 'vases-et-pots',
                href: '/products?category=vases-et-pots',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Coffres, valises, paniers et boîtes',
                value: 'coffres-etc',
                href: '/products?category=coffres-etc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Objets ethniques',
                value: 'objets-ethniques',
                href: '/products?category=objets-ethniques',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: "L'indus",
                value: 'indus',
                href: '/products?category=indus',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets religieux',
                value: 'objets-religieux',
                href: '/products?category=objets-religieux',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Cabinet de curiosité',
                value: 'cabinet-de-curiosite',
                href: '/products?category=cabinet-de-curiosite',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Côté jardin',
                value: 'cote-jardin',
                href: '/products?category=cote-jardin',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Militaria',
                value: 'militaria',
                href: '/products?category=militaria',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
    {
        label: 'Luminaires',
        value: 'luminaires' as const,
        featured: [
            {
                name: 'Suspensions',
                value: 'suspensions',
                href: '/products?category=suspensions',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Appliques',
                value: 'appliques',
                href: '/products?category=appliques',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Lampadaires',
                value: 'lampadaires',
                href: '/products?category=lampadaires',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Accessoires',
                value: 'accessoires',
                href: '/products?category=accessoires',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
        ],
    },
    {
        label: 'Arts de la table',
        value: 'artsdelatable' as const,
        featured: [
            {
                name: 'Asiettes et plats',
                value: 'assiettes-et-plats',
                href: '/products?category=assiettes-et-plats',
                imageSrc: '/nav/cuisine/assiettes.jpg',
            },
            {
                name: 'Verres bouteilles et carafes',
                value: 'verres-etc',
                href: '/products?category=verres-etc',
                imageSrc: '/nav/cuisine/verres.jpg',
            },
            {
                name: 'Pour le petit déjeuner',
                value: 'petit-dejeuner',
                href: '/products?category=petit-dejeuner',
                imageSrc: '/nav/cuisine/tasses.jpg',
            },
            {
                name: 'Petite vaisselle',
                value: 'petite-vaisselle',
                href: '/products?category=petite-vaiselles',
                imageSrc: '/nav/cuisine/vaisselle.jpg',
            },
            {
                name: 'Ustensils et accessoires',
                value: 'ustensils-et-accessoires',
                href: '/products?category=ustensils-et-accessoires',
                imageSrc: '/nav/cuisine/ustensils.jpg',
            },
        ],
    },
    {
        label: 'Textiles et bijoux',
        value: 'textiles-et-bijoux' as const,
        featured: [
            {
                name: 'Linge de maison',
                value: 'linge-de-maison',
                href: '/products?category=linge-de-maison',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Vêtements',
                value: 'vetements',
                href: '/products?category=vetements',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Mode vintage',
                value: 'mode-vintage',
                href: '/products?category=mode-vintage',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Accessoires de mode',
                value: 'accessoires',
                href: '/products?category=accessoires',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Bijoux anciens',
                value: 'bijoux-anciens',
                href: '/products?category=bijoux-anciens',
                imageSrc: '/nav/icons/new.jpg',
            },
        ],
    },
    {
        label: 'Kids',
        value: 'kids' as const,
        featured: [
            {
                name: 'Pour la chambre',
                value: 'pour-la-chambre',
                href: '/products?category=pour-la-chambre',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: "Les joujoux et l'école",
                value: 'joujoux-et-ecole',
                href: '/products?category=joujoux-et-ecole',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'La mode',
                value: 'mode',
                href: '/products?category=mode',
                imageSrc: '/nav/icons/picks.jpg',
            },
        ],
    },
]
