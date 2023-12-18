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
                name: 'Dessins et affiches',
                value: 'dessinsetaffiches',
                href: '/products?category=dessinsetaffiches',
                imageSrc: '/nav/arts/affiches.jpg',
            },
            {
                name: 'Livres, BD et revues',
                value: 'livresbdetrevues',
                href: '/products?category=livresbdetrevues',
                imageSrc: '/nav/arts/bd.jpg',
            },
            {
                name: 'Tableaux et gravures',
                value: 'tableauxetgravures',
                href: '/products?category=tableauxetgravures',
                imageSrc: '/nav/arts/gravures.jpg',
            },
            {
                name: 'Vinyles et hifi',
                value: 'vinylesethifi',
                href: '/products?category=vinylesethifi',
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
                value: 'assiettesetplats',
                href: '/products?category=assiettesetplats',
                imageSrc: '/nav/cuisine/assiettes.jpg',
            },
            {
                name: 'Petites vaisselles',
                value: 'petitesvaisselle',
                href: '/products?category=petitesvaiselles',
                imageSrc: '/nav/cuisine/vaisselle.jpg',
            },
            {
                name: 'Tasses et mugs',
                value: 'tassesetmugs',
                href: '/products?category=tassesetmugs',
                imageSrc: '/nav/cuisine/tasses.jpg',
            },
            {
                name: 'Ustensils de cuisine',
                value: 'ustensilsdecuisine',
                href: '/products?category=ustensilesdecuisine',
                imageSrc: '/nav/cuisine/ustensils.jpg',
            },
            {
                name: 'Verres et carafes',
                value: 'verresetcarafes',
                href: '/products?category=verresetcarafes',
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
                value: 'outils',
                href: '/products?category=outils',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Pour le jardin',
                value: 'pourlejardin',
                href: '/products?category=pourlejardin',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Pour les animaux',
                value: 'pourlesanimaux',
                href: '/products?category=pourlesanimaux',
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
                value: 'bibelots',
                href: '/products?category=bibelots',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Miroiterie',
                value: 'miroiterie',
                href: '/products?category=miroiterie',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Vases et pots',
                value: 'vasesetpots',
                href: '/products?category=vasesetpots',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets religieux',
                value: 'objetsreligieux',
                href: '/products?category=objetsreligieux',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets ethniques',
                value: 'objetsethniques',
                href: '/products?category=objetsethniques',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets indus',
                value: 'objetsindus',
                href: '/products?category=objetsindus',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets militaires',
                value: 'objetsmilitaires',
                href: '/products?category=objetsmilitaires',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Objets de curiosité',
                value: 'objetsdecuriosite',
                href: '/products?category=objetsdecuriosite',
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
                value: 'lampes',
                href: '/products?category=lampes',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Lampadaires',
                value: 'lampadaires',
                href: '/products?category=lampadaires',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Lustres et suspensions',
                value: 'lustresetsuspensions',
                href: '/products?category=lustresetsuspensions',
                imageSrc: '/nav/icons/bestsellers.jpg',
            },
            {
                name: 'Abats-jours',
                value: 'abatsjours',
                href: '/products?category=abatsjours',
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
                value: 'vetements',
                href: '/products?category=vetements',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Bijoux',
                value: 'bijoux',
                href: '/products?category=bijoux',
                imageSrc: '/nav/icons/new.jpg',
            },
            {
                name: 'Linge de maison',
                value: 'lingedemaison',
                href: '/products?category=lingedemaison',
                imageSrc: '/nav/icons/bestsellers.jpg',
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
        label: 'Pour les enfants',
        value: 'enfants' as const,
        featured: [
            {
                name: 'Jouets',
                value: 'jouets',
                href: '/products?category=jouets',
                imageSrc: '/nav/icons/picks.jpg',
            },
            {
                name: 'Pour la chambre',
                value: 'pourlachambre',
                href: '/products?category=pourlachambre',
                imageSrc: '/nav/icons/new.jpg',
            },
        ],
    },
]
