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
                    value: 'cartes_postales',
                    label: 'Cartes postales',
                },
                {
                    value: 'dessins_et_affiches',
                    label: 'Dessins et affiches',
                },
                {
                    value: 'livres_bd_et_revues',
                    label: 'Livres, BD et revues',
                },
                {
                    value: 'tableaux_et_gravures',
                    label: 'Tableaux et gravures',
                },
                {
                    value: 'vinyles_et_hifi',
                    label: 'Vinyles et hifi',
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
                    value: 'assiettes_et_plats',
                },
                {
                    label: 'Petites vaisselles',
                    value: 'Petites vaisselle',
                },
                {
                    label: 'Tasses et mugs',
                    value: 'Tasses et mugs',
                },
                {
                    label: 'Ustensils de cuisine',
                    value: 'Ustensils de cuisine',
                },
                {
                    label: 'Verres et carafes',
                    value: 'Verres et carafes',
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
                    value: 'Pour le jardin',
                },
                {
                    label: 'Pour les animaux',
                    value: 'Pour les animaux',
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
                    value: 'vases_et_pots',
                    name: 'Vases et Pots',
                },
                {
                    label: 'Objets religieux',
                    value: 'Objets religieux',
                },
                {
                    label: 'Objets ethniques',
                    value: 'Objets ethniques',
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
                    label: 'Vases et pots',
                    value: 'vasesetpots',
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
