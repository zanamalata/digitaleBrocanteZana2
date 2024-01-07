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
        <ul id="field-category" className="radio-group--group">
            {items.map((item) => (
                <>
                    <li>
                        <label>
                            <div className="radio-input">
                                <input
                                    type="radio"
                                    value={item.value}
                                    checked={selectedItem?.value === item.value}
                                    onChange={() => onSelect(item)}
                                    key={item.value}
                                />
                            <span className="radio-input__styled-radio"></span>
                            <span className="radio-input__label">{item.label}</span>
                            </div>
                                {/* {item.label} */}
                        </label>
                        {/* <div className="radio-input">
                            <input 
                            value={item.value}
                            checked={selectedItem?.value === item.value}
                            onChange={() => onSelect(item)}
                            key={item.value}
                            id={`field-category-${item.value}`} type="radio" />
                        </div> */}
                    </li>
                </>
            ))}
        </ul>
    )
}

export const CustomCategories: React.FC = () => {
    const [selectedCategory, setSelectedCategory] =
        React.useState<ProductCategory | null>(null)

    return (
        <div className="field-type radio-group radio-group--layout-horizontal">
            <label className="field-label">Catégories</label>
            <div className="radio-group__error-wrap"></div>
            <RadioButtonGroup
                items={PRODUCT_CATEGORIES}
                selectedItem={selectedCategory}
                onSelect={setSelectedCategory}
            />
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
    )
}
