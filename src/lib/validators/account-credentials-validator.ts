import { z } from "zod"

export const AuthCredentialsValidator = z.object({
  email: z.string().email(),
  username: z.string().min(1).max(20),
  password: z.string().min(8, {
    message: 'Le mot de passe doit comporter au moins 8 caractères.',
  }),
})

export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
>