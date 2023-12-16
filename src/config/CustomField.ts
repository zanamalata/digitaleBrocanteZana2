import { Field } from 'payload/types';

// export const validateHexColor = (
//     value: string | null
// ): boolean | string | null => {
//     if (value && value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) {
//         return value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/).length === 1
//     } else {
//         return `${value} is not a valid hex color`
//     }
// }

const productPricesFields: Field = {
  name: 'price1',
  type: 'number',
  // validate: validateHexColor,
  required: true,
};

export default productPricesFields;


