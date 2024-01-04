import { useField } from 'payload/components/forms'


type Props = { path: string }

export const CustomCategory: React.FC<Props> = ({ path }) => {
  const { value, setValue } = useField<Props>({ path })

  return <input onChange={(e) => setValue(e.target.value)} value={value.path} />
}
