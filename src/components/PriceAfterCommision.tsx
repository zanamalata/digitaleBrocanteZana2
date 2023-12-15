import { useFormFields } from 'payload/components/forms'
import React from 'react'

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
            <span>
                {commissionPercentage}% de comissions. Soit{' '}
                {reducedPrice.value
                    ? (Number(reducedPrice.value) * commissionPercentage) / 100
                    : price.value
                    ? (Number(price.value) * commissionPercentage) / 100
                    : '0'}{' '}
                €
            </span>
        </>
    )
}

export default PriceAfterCommission
