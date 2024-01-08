import React from 'react'
import { PRODUCT_CATEGORIES } from '../config'
import { useField, useFormFields } from 'payload/components/forms'
import { unknown } from 'zod'

type Props = {
    path: string
    item: {
        name: string;
        value: string;
        href: string;
        imageSrc: string;
    }
    value: string
}

export const CustomSubcategory: React.FC<Props> = ({ path }) => {
    const { category } = useFormFields(([fields, dispatch]) => fields)
    const { value, setValue } = useField<Props>({ path })

    const [feature] = PRODUCT_CATEGORIES.filter(
        (featured) => featured.value === category.value
    )

    // const [selected, setSelected] = React.useState(null)

    // const handleChange = (e) => {
        
    //         // setSelected(e.target.value)
        
    //     setValue(e.target.value)
    // }

    return (
        <>
            <div className="field-type radio-group radio-group--layout-horizontal">
                <div className="radio-group__error-wrap"></div>
                <label htmlFor="field-subcategory" className="field-label">
                    Sous-catégories
                </label>
                {feature && (
                    <ul id="field-category" className="radio-group--group">
                        {feature.featured.map((item, i) => {
                            console.log('item:::', item.value , 'path:::', path,'value:::', value)
                            return (
                                <li key={i}>
                                    <label
                                    htmlFor={`field-subcategory-${item.value}`}
                                    >
                                        <div className={`radio-input ${ item.value === value ? 'radio-input--is-selected' : '' }`} style={{opacity: value ? 1 : 0}}>
                                            <input
                                                id={`field-subcategory-${item.value}`}
                                                type="radio"
                                                onChange={(e) => setValue(e.target.value)}
                                                value={item.value} 
                                                checked            
                                            />
                                            <span className="radio-input__styled-radio"></span>
                                            <span className="radio-input__label">
                                                {item.name}
                                            </span>
                                        </div>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </>
    )
}

// import React from 'react';
// import { PRODUCT_CATEGORIES } from '../config';
// import { useForm, useField } from 'payload/components/forms';

// type Props = {
//    path: string;
// };

// export const CustomSubcategory: React.FC<Props> = ({ path }) => {
//    const { register, setValue } = useForm();
//    const { ref, ...inputProps } = useField('category');

//    const [feature] = PRODUCT_CATEGORIES.filter(
//        (featured) => featured.value === inputProps.value
//    );

//    return (
//        <div className="field-type radio-group radio-group--layout-horizontal">
//            <div className="radio-group__error-wrap"></div>
//            <label htmlFor="field-subcategory" className="field-label">
//                Sous-catégories
//            </label>
//            {feature && (
//                <ul id="field-category" className="radio-group--group">
//                   {feature.featured.map((item, i) => {
//                       return (
//                           <li key={i}>
//                               <label>
//                                  <div className="radio-input">
//                                      <input
//                                          type="radio"
//                                          onChange={(e) => setValue('category', e.target.value)}
//                                          value={item.value}
//                                          ref={register}
//                                      />
//                                      <span className="radio-input__styled-radio" style={{opacity: inputProps.value === item.value ? 1 : 0}}></span>
//                                      <span className="radio-input__label">
//                                          {item.name}
//                                      </span>
//                                  </div>
//                               </label>
//                           </li>
//                       )
//                   })}
//                </ul>
//            )}
//        </div>
//    )
// }


