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
import { Account } from './collections/Account'
import { Photo } from './collections/Photo'
import { Banner } from './collections/Banner'
// import Dashboard from './components/dashboard/Dashboard'
// import FormBuilder from '@payloadcms/plugin-form-builder'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
    collections: [Users, Products, Media, Orders, Photo, Banner],
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
         css: path.resolve(__dirname, './css/style.scss'),
    },
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
