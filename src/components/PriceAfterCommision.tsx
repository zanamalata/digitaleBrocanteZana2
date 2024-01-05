import { useFormFields } from 'payload/components/forms'
import React from 'react'
import '../css/style.scss'

interface CustomSelectProps {
    path: string
    options: {
        label: string
        value: string
    }[]
}

const PriceAfterCommission: React.FC<CustomSelectProps> = ({
    path,
    options,
}) => {
    const { price } = useFormFields(([fields, dispatch]) => fields)

    // here to change comission rate in %
    const commissionPercentage = 10

    const { reducedPrice } = useFormFields(([fields, dispatch]) => fields)

    return (
        <>
            <div id='priceWarning'>
                {typeof reducedPrice.value === 'number' &&
                typeof price.value === 'number' &&
                reducedPrice.value > price.value
                    ? 'Le prix réduit ne peut pas être supérieur au prix actuel'
                    : null}
            </div>
            <div id='commission'>
                {commissionPercentage}% de comissions. Soit{' '}
                {reducedPrice.value
                    ? (Number(reducedPrice.value) * commissionPercentage) / 100
                    : price && typeof price.value === 'number'
                    ? (Number(price.value) * commissionPercentage) / 100
                    : '0'}{' '}
                €
            </div>
        </>
    )
}

export default PriceAfterCommission
