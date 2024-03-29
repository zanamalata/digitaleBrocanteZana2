'use client'

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

import {
    AuthCredentialsValidator,
    TAuthCredentialsValidator,
} from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'
import { toast } from 'sonner'
import { ZodError } from 'zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const Page = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const isSeller = searchParams.get('as') === 'seller'
    const origin = searchParams.get('origin')

    const continueAsSeller = () => {
        router.push('?as=seller')
    }

    const continuAsBuyer = () => {
        router.replace('/sign-in', undefined)
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
        onSuccess: () => {
            toast.success('connecté avec succés!')

            router.refresh()

            if (origin) {
                router.push(`/${origin}`)
                return
            }

            if (isSeller) {
                router.push('/sell/account')
                return
            }

            router.push('/')
        },

        onError: (err) => {
            if (err.data?.code === 'UNAUTHORIZED') {
                toast.error('Mot de passe ou Email invalide')
            }
        },
    })

    const onSubmit = ({ email,  password }: TAuthCredentialsValidator) => {
        signIn({ email, password })
    }

    return (
        <>
            <Suspense>
                <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col items-center space-y-2 text-center">
                            <Link href={'/'}>
                            <Icons.logo className="h-20 w-20" />
                            </Link>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Connectez-vous à votre compte{' '}
                                {isSeller ? 'vendeur' : ''}
                            </h1>

                            <Link
                                className={buttonVariants({
                                    variant: 'link',
                                    className: 'gap-1.5',
                                })}
                                href="/sign-up"
                            >
                                Vous n&apos;avez pas de compte ? créer un compte
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>

                        <div className="grid gap-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid gap-2">
                                    <div className="grid gap-1 py-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            {...register('email')}
                                            className={cn({
                                                'focus-visible:ring-red-500':
                                                    errors.email,
                                            })}
                                            placeholder="Votre email"
                                        />
                                        {errors?.email && (
                                            <p className="text-sm text-red-500">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="grid gap-1 py-2">
                                        <Label htmlFor="password">
                                            Mot de passe
                                        </Label>
                                        <Input
                                            {...register('password')}
                                            type="password"
                                            className={cn({
                                                'focus-visible:ring-red-500':
                                                    errors.password,
                                            })}
                                            placeholder="Votre mot de passe"
                                        />
                                        {errors?.password && (
                                            <p className="text-sm text-red-500">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                    <Button>Se connecter</Button>
                                </div>
                            </form>
                            <div className="relative">
                                <div
                                    className="absolute inset-0 flex items-center"
                                    aria-hidden="true"
                                >
                                    <span className="w-full border-t" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-background px-2 text-muted-foreground">
                                        ou
                                    </span>
                                </div>
                            </div>

                            {isSeller ? (
                                <Button
                                    onClick={continuAsBuyer}
                                    variant="secondary"
                                    disabled={isLoading}
                                >
                                    Continuez en tant que client
                                </Button>
                            ) : (
                                <Button
                                    onClick={continueAsSeller}
                                    variant="secondary"
                                    disabled={isLoading}
                                >
                                    Continuez en tant que vendeur
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default Page


