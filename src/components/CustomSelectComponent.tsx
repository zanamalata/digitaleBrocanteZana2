import * as React from 'react'
import { SelectInput, useField } from 'payload/components/forms'
import { useAuth } from 'payload/components/utilities'

interface CustomSelectProps {
    path: string
    options: {
        label: string
        value: string
    }[]
}

export const CustomSelectComponent: React.FC<CustomSelectProps> = ({
    path,
    options,
}) => {
    const { value, setValue } = useField<string>({ path })
    const { user } = useAuth()

    const adjustedOptions = [
        {
            label: 'librairie',
            value: 'librairie',
            type: 'select',
            options: [
                {
                    label: 'Cartes postales',
                    value: 'cartespostales',
                },
                {
                    label: 'Dessins et affiches',
                    value: 'dessinsetaffiches',
                },
                {
                    label: 'Livres, BD et revues',
                    value: 'livresbdetrevues',
                },
                {
                    label: 'Tableaux et gravures',
                    value: 'tableauxetgravures',
                },
                {
                    label: 'Vinyles et hifi',
                    value: 'vinylesethifi',
                },
            ],
        },
        {
            label: 'Arts de la table',
            value: 'artsdelatable',
            type: 'select',
            options: [
                {
                    label: 'Asiettes et plats',
                    value: 'assiettesetplats',
                },
                {
                    label: 'Petites vaisselles',
                    value: 'Petitesvaisselle',
                },
                {
                    label: 'Tasses et mugs',
                    value: 'Tassesetmugs',
                },
                {
                    label: 'Ustensils de cuisine',
                    value: 'Ustensilsdecuisine',
                },
                {
                    label: 'Verres et carafes',
                    value: 'Verresetcarafes',
                },
            ],
        },
        {
            label: 'Coté jardin',
            value: 'cotejardin',
            type: 'select',
            options: [
                {
                    label: 'Outils',
                    value: 'Outils',
                },
                {
                    label: 'Pour le jardin',
                    value: 'Pourlejardin',
                },
                {
                    label: 'Pour les animaux',
                    value: 'Pourlesanimaux',
                },
            ],
        },
        {
            label: 'Déco',
            value: 'deco',
            type: 'select',
            options: [
                {
                    label: 'Bibelots',
                    value: 'Bibelots',
                },
                {
                    label: 'Miroiterie',
                    value: 'Miroiterie',
                },
                {
                    label: 'Vases et pots',
                    value: 'vasesetpots',
                },
                {
                    label: 'Objets religieux',
                    value: 'Objetsreligieux',
                },
                {
                    label: 'Objets ethniques',
                    value: 'Objetsethniques',
                },
                {
                    label: 'Objets indus',
                    value: 'objetsindus',
                },
                {
                    label: 'Objets militaires',
                    value: 'objetsmilitaires',
                },
                {
                    label: 'Objets de curiosité',
                    value: 'objetsdecuriosite',
                },
            ],
        },
        {
            label: 'Luminaires',
            value: 'luminaires',
            type: 'select',
            options: [
                {
                    label: 'Lampes',
                    value: 'lampes',
                },
                {
                    label: 'Lampadaires',
                    value: 'lampadaires',
                },
                {
                    label: 'Lustres et suspensions',
                    value: 'lustresetsuspensions',
                },
                {
                    label: 'Abats-jours',
                    value: 'abatsjours',
                },
            ],
        },
        {
            label: 'Textiles et bijoux',
            value: 'textilesetbijoux',
            type: 'select',
            options: [
                {
                    label: 'Vêtements',
                    value: 'vetements',
                },
                {
                    label: 'Bijoux',
                    value: 'bijoux',
                },
                {
                    label: 'Linge de maison',
                    value: 'lingedemaison',
                },
                {
                    label: 'Accessoires',
                    value: 'accessoires',
                },
            ],
        },
        {
            label: 'Pour les enfants',
            value: 'enfants',
            type: 'select',
            options: [
                {
                    label: 'Jouets',
                    value: 'jouets',
                },
                {
                    label: 'Pour la chambre',
                    value: 'pourlachambre',
                },
            ],
        },
    ]
    return (
        <div>
            <label className="field-label">Catégories</label>
            <SelectInput
                path={path}
                name={path}
                options={adjustedOptions}
                value={value}
                onChange={(e) => setValue(e.value)}
            />
        </div>
    )
}
