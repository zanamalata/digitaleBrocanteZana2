import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import path from 'path'
import { Users } from './collections/Users'
import dotenv from 'dotenv'
import { Products } from './collections/Products/products'
import { Media } from './collections/Media'
import { Orders } from './collections/Orders'
import { Photo } from './collections/Photo'
// import Dashboard from './components/dashboard/Dashboard'
// import FormBuilder from '@payloadcms/plugin-form-builder'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users, Products, Media, Orders, Photo],
    routes: {
        admin: '/sell',
    },
    admin: {
        user: 'users',
        bundler: webpackBundler(),
        meta: {
            titleSuffix: '- DigitaleBrocante',
            favicon: '/favicon.ico',
            ogImage: '/thumbnail.jpg',
        },
        // components: {
        //     views: {
        //         Dashboard: Dashboard,
        //     },
        // },
        // css: path.resolve(__dirname, './css/style.scss'),
    },
    // cors: [
    //     'https://digitalebrocantezana2-production.up.railway.app/**/*',
    //     'https://digitalebrocantezana2-production.up.railway.app/api/trpc/*',
    //     'http://localhost:3000',
    //     'https://digitalebrocantezana2-production.up.railway.app/_next/image?url=https://digitalebrocantezana2-production.up.railway.app/media/gravure-1.webp&w=1920&q=75ad'
    // ],
    // plugins: [
    //     FormBuilder({
    //         fields: {
    //             text: true,
    //             textarea: true,
    //             select: true,
    //             email: true,
    //             state: true,
    //             country: true,
    //             checkbox: true,
    //             number: true,
    //             message: true,
    //             payment: false,
    //         },
    //     }),
    // ],
    i18n: {
        fallbackLng: 'fr',
        debug: false,
        resources: {
            en: {
                errors: {
                    validation: {
                        reducedPrice:
                            'reduced price should be inferior to the original price',
                    },
                },
            },
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname, 'payload-types.ts'),
    },
})
