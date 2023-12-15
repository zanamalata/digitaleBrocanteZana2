import { useFormFields } from "payload/components/forms";
import { Field } from "payload/types";
import React from "react";

interface CustomSelectProps {
  path: string
    options: {
        label: string
        value: string
    }[]
}

const ReducedPrice = ({path, options}: CustomSelectProps) => {
  const { price } = useFormFields(([fields, dispatch]) => fields)
  console.log(price, price.value)



return Number(price.value)}

export default ReducedPrice;