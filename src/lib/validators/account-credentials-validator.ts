import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Le mot de passe doit comporter au moins 8 caractères.',
  }),
  // adress1: z.string().max(120, {
  //   message: 'votre adresse semble trop longue pour être réelle',
  // }),
  // adress2: z.string().optional(),
  // city: z.string().max(120, {
  //   message: 'votre ville semble trop longue pour être réelle'
  // }),
  // postcode: z.string().max(8, {
  //   message: 'trop long pour un code postal'
  // }),
  // country: z.string().max(22, {
  //   message: 'trop long pour un pays',
  // }),
})

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>