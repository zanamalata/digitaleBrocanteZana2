import { AuthCredentialsValidator } from '../lib/validators/account-credentials-validator'
import { publicProcedure, router } from './trpc'
import { getPayloadClient } from '../get-payload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            const { email, username, password } = input

            const payload = await getPayloadClient()

            // check if user already exists
            const { docs: usersByEmail } = await payload.find({
                collection: 'users',
                where: {
                    email: {
                        equals: email,
                    },
                },
            })

            if (usersByEmail.length !== 0)
                throw new TRPCError({ code: 'CONFLICT' })

            // check if username already exist
            const { docs: usersByUsername } = await payload.find({
                collection: 'users',
                where: {
                    username: {
                        equals: username,
                    },
                },
            })

            if (usersByUsername.length !== 0)
                throw new TRPCError({ code: 'PRECONDITION_FAILED' })

            await payload.create({
                collection: 'users',
                data: {
                    email,
                    username,
                    password,
                    role: ['user'],
                },
            })

            return { success: true, sentToEmail: email }
        }),

    verifyEmail: publicProcedure
        .input(z.object({ token: z.string() }))
        .query(async ({ input }) => {
            const { token } = input

            const payload = await getPayloadClient()

            const isVerified = await payload.verifyEmail({
                collection: 'users',
                token,
            })

            if (!isVerified) throw new TRPCError({ code: 'UNAUTHORIZED' })

            return { success: true }
        }),

    signIn: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input, ctx }) => {
            const { email, username, password } = input
            const { res } = ctx

            const payload = await getPayloadClient()

            try {
                await payload.login({
                    collection: 'users',
                    data: {
                        email,
                        username,
                        password,
                    },
                    res,
                })

                return { success: true }
            } catch (err) {
                throw new TRPCError({ code: 'UNAUTHORIZED' })
            }
        }),
})
