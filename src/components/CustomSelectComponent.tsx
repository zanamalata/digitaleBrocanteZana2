import * as React from 'react';
import { SelectInput, useField } from 'payload/components/forms';
import { useAuth } from 'payload/components/utilities';
import { PRODUCT_CATEGORIES } from '@/config';

interface CustomSelectProps  {
  path: string;
  options: {
    label: string;
    value: string;
  }[];
}

export const CustomSelectComponent: React.FC<CustomSelectProps> = ({ path, options }) => {
  const { value, setValue } = useField<string>({ path })
  const { user } = useAuth()

  const adjustedOptions = options.filter((option) => {
    /*
      A common use case for a custom select
      is to show different options based on
      the current user's role.
    */
   PRODUCT_CATEGORIES.forEach((category) => {
    label: category.featured.map((item) => item.name),
    value: category.featured.map((item) => item.name),

    return option;
   })
  });

  return (
    <div>
      <label className="field-label">
        Custom Select
      </label>
      <SelectInput
        path={path}
        name={path}
        options={adjustedOptions}
        value={value}
        onChange={() => setValue(e.value)}
      />
    </div>
  )
}