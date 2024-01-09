import React from 'react'
import { PRODUCT_CATEGORIES } from '../config'
import { useField, useFormFields } from 'payload/components/forms'
import { unknown } from 'zod'

type Props = {
    path: string
    item: {
        name: string
        value: string
        href: string
        imageSrc: string
    }
    value: string
}

export const CustomSubcategory: React.FC<Props> = ({ path }) => {
    const { category } = useFormFields(([fields, dispatch]) => fields)
    const { subcategory } = useFormFields(([fields, dispatch]) => fields)

    const { value, setValue } = useField<Props>({ path })

    const [feature] = PRODUCT_CATEGORIES.filter(
        (featured) => featured.value === category.value
    )
    
    return (
        <>
            <div className="field-type radio-group radio-group--layout-horizontal">
                <div className="radio-group__error-wrap"></div>
                <label htmlFor="field-subcategory" className="field-label">
                    Sous-catégories
                </label>
                {feature && (
                    <ul className="radio-group--group">
                        {feature.featured.map((item, i) => (
                            <li key={i}>
                                <label>
                                    <div
                                        className={`radio-input ${
                                            item.name === subcategory.value
                                                ? 'radio-input--is-selected'
                                                : ''
                                        }`}
                                    >
                                        <input
                                            type="radio"
                                            onChange={(e) =>
                                                setValue(e.target.value)
                                            }
                                            value={item.name}
                                            checked={item.name === subcategory.value}
                                        />
                                        <span className="radio-input__styled-radio"></span>
                                        <span className="radio-input__label">
                                            {item.name}
                                        </span>
                                    </div>
                                </label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

