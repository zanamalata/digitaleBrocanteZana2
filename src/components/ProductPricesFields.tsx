// // import React from 'react'
// // import { useState } from 'react'
// // import { TextInput, useField, useFieldType, Form } from 'payload/components/forms'

// // // import 'payload/scss';

// // type Props = {path: string}

// // const ProductPricesFields: React.FC<Props> = ({path}) => {
// //     const [price1, setPrice] = useState(0)
// //     const [reducedPrice, setReducedPrice] = useState(0)
// //     const [warning, setWarning] = useState('')
// //     // here to change commission rate
// //     const commissionPercentage = 10

// //     const { value, setValue } = useField<string>({path})

// //     const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //         setPrice(Number(event.target.value))
// //     }

// //     const handleReducedPriceChange = (
// //         event: React.ChangeEvent<HTMLInputElement>
// //     ) => {
// //         const newReducedPrice1 = Number(event.target.value)
// //         setReducedPrice(newReducedPrice1)

// //         if (newReducedPrice1 > price1) {
// //             setWarning('Le prix réduit ne peut pas être supérieur au prix')
// //         } else {
// //             setWarning('')
// //         }
// //     }

// //     return (
// //         <div id="productPricesFields">
// //             <TextInput name='price3' label="customInput" path='price3'/>

// //             <label htmlFor="price">Prix de l&apos;article en €</label>
// //             <input
// //                 type="number"
// //                 id="price"
// //                 value={value.path}
// //                 onChange={(event) => setValue(event.target.value)}
// //                 min={0}
// //                 max={15000}
// //                 maxLength={5}
// //                 step={'0.01'}
// //                 required
// //                 name='price1'

// //             />
// //             <label htmlFor="reducedPrice">
// //                 Prix de l&apos;article aprés réduction
// //             </label>
// //             <input
// //                 type="number"
// //                 id="reducedPrice"
// //                 value={reducedPrice}
// //                 onChange={handleReducedPriceChange}
// //                 min={0}
// //                 max={15000}
// //                 maxLength={5}
// //                 step={'0.01'}
// //                 name='reducedPrice1'
// //             />
// //             {warning && <p>{warning}</p>}
// //             <span>
// //                 {commissionPercentage}% de comissions. Soit{' '}
// //                 {reducedPrice
// //                     ? (Number(reducedPrice) * commissionPercentage) / 100
// //                     : price1
// //                     ? (Number(price1) * commissionPercentage) / 100
// //                     : '0'}{' '}
// //                 €
// //             </span>
// //         </div>
// //     )
// // }

// // export default ProductPricesFields

// // import { useField } from 'payload/components/forms'
// // import React from 'react'

// // type Props = { path: string; productPricesFields: string }

// // const ProductPricesFields: React.FC<Props> = ({ path: productPricesFields }) => {
// //     const { value, setValue } = useField<string>({ path: productPricesFields })

// //     return (
// //         <input
// //             type="number"
// //             onChange={(e) => setValue(e.target.value)}
// //             value={value.path}
// //         />
// //     )
// // }

// // export default ProductPricesFields

// import React, { ChangeEvent } from 'react'

// // this is how we'll interface with Payload itself
// import { useFieldType } from 'payload/components/forms'

// // we'll re-use the built in Label component directly from Payload
// import { Label } from 'payload/components/forms'

// // we can use existing Payload types easily
// import { Props } from 'payload/components/fields/Text'

// // we'll import and reuse our existing validator function on the frontend, too
// // import { validateHexColor } from './config';

// // Import the SCSS stylesheet
// import '../css/style.scss'

// // keep a list of default colors to choose from
// const defaultColors = [
//     '#0F0F0F',
//     '#9A9A9A',
//     '#F3F3F3',
//     '#FF6F76',
//     '#FDFFA4',
//     '#B2FFD6',
//     '#F3DDF3',
// ]

// const baseClass = 'custom-color-picker'

// const ProductPricesFields: React.FC<Props> = (props) => {
//     const { path, label, required } = props

//     const { value = '', setValue } = useFieldType<Array<number>>({
//         // @ts-expect-error
//         path,
//         // validate: validateHexColor,
//     })

//     const PriceField: React.FC<Props> = (props) => {
//         const { path, label, required } = props

        

//         const { value = '', setValue } = useFieldType<number>({
//            // // @ts-expect-error
//             path,
//             // validate: validateHexColor,
//         })

//         return (
//             <div className={baseClass}>
//                 <Label htmlFor={path} label={label} required={required} />

//                 <input
//                     type="number"
//                     name="priceField"
//                     onChange={(e) => setValue(e.target.value)}
//                     value={value}
//                 />
//             </div>
//         )
//     }

//     const ReducedPriceField: React.FC<Props> = (props) => {
//         const { path, label, required } = props

//         // const { value = '', setValue } = useFieldType<number>({
//         //     path,
//         //     // validate: validateHexColor,
//         // })

//         return (
//             <div className={baseClass}>
//                 <Label htmlFor={path} label={label} required={required} />

//                 <input type="number" name="ReducedpriceField" />
//             </div>
//         )
//     }

//     return (
//         <>
//             <PriceField
//                 label="Prix"
//                 path="priceField"
//                 required
//                 name="priceField"
//             />
//             <ReducedPriceField
//                 label="Prix réduit"
//                 path="ReducedpriceField"
//                 name="ReducedpriceField"
//             />
//         </>
//     )
// }


//  export default ProductPricesFields
