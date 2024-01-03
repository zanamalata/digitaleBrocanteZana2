export const PRODUCT_CATEGORIES = [
    {
        label: 'Art',
        value: 'art' as const,
        featured: [
            {
                name: 'Tableaux anciens et dessins',
                value: 'tableaux_anciens_dessins',
                href: '/products?category=tableaux_anciens_dessins',
                imageSrc: '/nav/icons/new.jpg',           },
            {
                name: 'Gravures et estampes',
                value: 'gravures_et_estampes',
                href: '/products?category=gravures_et_estampes',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Affiches et pubs',
                value: 'affiches_et_pubs',
                href: '/products?category=affiches_et_pubs',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Photographies anciennes',
                value: 'photographie_anciennes',
                href: '/products?category=photographie_anciennes',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Sculptures anciennes',
                value: 'sculptures_anciennes',
                href: '/products?category=sculptures_anciennes',
                imageSrc: '/nav/icons/new.jpg',
            },
        ],
    },
    {
        label: 'Culture',
        value: 'culture' as const,
        featured: [
            {
                name: 'Livres anciens et vieux papiers',
                value: 'livres_anciens_et_vieux_papiers',
                href: '/products?category=livres_anciens_et_vieux_papiers',
                imageSrc: '/nav/arts/affiches.jpg',
            },
            {
                name: 'Cartes postales',
                value: 'cartes_postales',
                href: '/products?category=cartes_postales',
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
                value: 'vinyles_musique',
                href: '/products?category=vinyles_musique',
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
                value: 'miroirs_etc',
                href: '/products?category=miroirs_etc',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Dame-Jeanne, vases et pots',
                value: 'vases_et_pots',
                href: '/products?category=vases_et_pots',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Coffres, valises, paniers et boîtes',
                value: 'coffres_etc',
                href: '/products?category=coffres_etc',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Objets ethniques',
                value: 'objets_ethniques',
                href: '/products?category=objets_ethniques',
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
                value: 'objets_religieux',
                href: '/products?category=objets_religieux',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Cabinet de curiosité',
                value: 'cabinet_de_curiosite',
                href: '/products?category=cabinet_de_curiosite',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Côté jardin',
                value: 'cote_jardin',
                href: '/products?category=cote_jardin',
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
                value: 'assiettes_et_plats',
                href: '/products?category=assiettes_et_plats',
                imageSrc: '/nav/cuisine/assiettes.jpg',
            },
            {
                name: 'Verres bouteilles et carafes',
                value: 'verres_etc',
                href: '/products?category=verres_etc',
                imageSrc: '/nav/cuisine/verres.jpg',
            },
            {
                name: 'Pour le petit déjeuner',
                value: 'petit_dejeuner',
                href: '/products?category=petit_dejeuner',
                imageSrc: '/nav/cuisine/tasses.jpg',
            },
            {
                name: 'Petite vaisselle',
                value: 'petite_vaisselle',
                href: '/products?category=petite_vaiselles',
                imageSrc: '/nav/cuisine/vaisselle.jpg',
            },
            {
                name: 'Ustensils et accessoires',
                value: 'ustensils_et_accessoires',
                href: '/products?category=ustensils_et_accessoires',
                imageSrc: '/nav/cuisine/ustensils.jpg',
            },
        ],
    },
    {
        label: 'Textiles et bijoux',
        value: 'textiles_et_bijoux' as const,
        featured: [
            {
                name: 'Linge de maison',
                value: 'linge_de_maison',
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
                value: 'mode_vintage',
                href: '/products?category=mode_vintage',
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
                value: 'bijoux_anciens',
                href: '/products?category=bijoux_anciens',
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
                value: 'pour_la_chambre',
                href: '/products?category=pour_la_chambre',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: "Les joujoux et l'école",
                value: 'joujoux_et_ecole',
                href: '/products?category=joujoux_et_ecole',
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
