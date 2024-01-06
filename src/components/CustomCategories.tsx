import { PRODUCT_CATEGORIES } from '../config'
import React from 'react'

type ProductCategory = {
    label: string
    value: string
    featured: {
        name: string
        value: string
        href: string
        imageSrc: string
    }[]
}

type RadioButtonGroupProps = {
    items: ProductCategory[]
    selectedItem: ProductCategory | null
    onSelect: (item: ProductCategory) => void
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
    items,
    selectedItem,
    onSelect,
}) => {
    return (
        <div>
            {items.map((item) => (
                <div key={item.value}>
                    <input
                        type="radio"
                        value={item.value}
                        checked={selectedItem?.value === item.value}
                        onChange={() => onSelect(item)}
                    />
                    <label>{item.label}</label>
                </div>
            ))}
        </div>
    )
}

export const CustomCategories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] =
        React.useState<ProductCategory | null>(null)

    return (
        <div className="flex justify-center align-middle">
            <div className="flex">
                <RadioButtonGroup
                    items={PRODUCT_CATEGORIES}
                    selectedItem={selectedCategory}
                    onSelect={setSelectedCategory}
                />
                <div className='relative flex bg-red-200'>
                    {selectedCategory && (
                        <RadioButtonGroup
                            items={selectedCategory.featured.map((item) => ({
                                label: item.name,
                                value: item.value,
                                featured: [],
                            }))}
                            selectedItem={null}
                            onSelect={(item) => console.log(item)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}
