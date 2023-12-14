import { Products } from '@/collections/Products/products'
import { useField, useFormFields } from 'payload/components/forms'
import React from 'react'

interface CustomSelectProps {
    path: string
    options: {
        label: string
        value: string
    }[]
}

const Prices: React.FC<CustomSelectProps> = ({ path, options }) => {
    const { price } = useFormFields(([fields, dispatch]) => fields)

    // here to change comission rate in %
    const commissionPercentage = 10

    const { reducedPrice } = useFormFields(([fields, dispatch]) => fields)

    const Prices = () => {
        const [priceValue, setValue] = React.useState('')
        const [reducedValue, setReducedValue] = React.useState('')

        const handleChange = (event: {
            target: { value: React.SetStateAction<string> }
        }) => {
            setValue(event.target.value)
        }

        const filterPrice = (event: {
          target: { value: React.SetStateAction<string> }
        }) => {
            setReducedValue(event.target.value)
            setValue(event.target.value)
            if (priceValue > reducedValue) {
              throw new Error('Price is greater than reduced price')
            }
        }
        return (
            <>
                <input
                    name="price"
                    type="number"
                    value={priceValue}
                    onChange={handleChange}
                />
                <input
                    name="priceReduced"
                    type="number"
                    value={reducedValue}
                    max={typeof price?.value === 'number' ? price.value : 0}
                    onChange={filterPrice}
                />
            </>
        )
    }

    return (
        <>
            <Prices />
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


export default Prices
