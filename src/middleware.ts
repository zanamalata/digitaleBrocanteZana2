
import { NextRequest, NextResponse } from 'next/server'
import { getServerSideUser } from './lib/paylaod-utils'

export async function middleware(req: NextRequest) {

const { nextUrl, cookies } = req
const { user } = await getServerSideUser(cookies)

if (
  user &&
  ['/sign-in', '/sign-up'].includes(nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/`
      )
    }
    
    // retrieve the current response
   const res = NextResponse.next()

   // add the CORS headers to the response
   // TODO change cors when in production
   res.headers.append('Access-Control-Allow-Credentials', "true")
   res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
   res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
   res.headers.append(
       'Access-Control-Allow-Headers',
       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
   )

   return res

  }

       