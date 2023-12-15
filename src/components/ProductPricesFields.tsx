import React from 'react'
import { useState } from 'react'

function ProductPricesFields() {
    const [price, setPrice] = useState(0)
    const [reducedPrice, setReducedPrice] = useState(0)
    const [warning, setWarning] = useState('')
    // here to change commission rate
    const commissionPercentage = 10


    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value))
    }

    const handleReducedPriceChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newReducedPrice = Number(event.target.value)
        setReducedPrice(newReducedPrice)

        if (newReducedPrice > price) {
            setWarning('The reduced price should not be bigger than price')
        } else {
            setWarning('')
        }
    }

    return (
        <div id="productPricesFields">
            <label htmlFor="price">Prix de l&apos;article en €</label>
            <input
                type="number"
                id="price"
                value={price}
                onChange={handlePriceChange}
                min={0}
                max={10000}
                step={'0.01'}
                required
            />
            <label htmlFor="reducedPrice">
                Prix de l&apos;article aprés réduction
            </label>
            <input
                type="number"
                id="reducedPrice"
                value={reducedPrice}
                onChange={handleReducedPriceChange}
                min={0}
            />
            {warning && <p>{warning}</p>}
            <span>
                {commissionPercentage}% de comissions. Soit{' '}
                {reducedPrice
                    ? (Number(reducedPrice) * commissionPercentage) / 100
                    : price
                    ? (Number(price) * commissionPercentage) / 100
                    : '0'}{' '}
                €
            </span>
        </div>
    )
}

export default ProductPricesFields
