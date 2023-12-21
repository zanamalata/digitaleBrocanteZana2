import * as React from 'react'
import { SelectInput, useField } from 'payload/components/forms'
import { PRODUCT_CATEGORIES } from '../config'

// TODO style component

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
    

    const adjustedOptions = 
    PRODUCT_CATEGORIES.map((category) => {
        return {
            label: category.label,
            value: category.value,           
            options: category.featured.map((featuredItem) => {
                return {
                    label: featuredItem.name,
                    value: featuredItem.name,
                }
            })
        }
    })

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
