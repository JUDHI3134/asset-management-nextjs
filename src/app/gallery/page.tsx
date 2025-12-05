import { auth } from '@/lib/auth'
import { getSession } from '@/lib/auth-client'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'

const GalleryPage = async () => {
  
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if(session && session?.user?.role === "admin") redirect("/")

  return (
    <div>
      Gallery page
    </div>
  )
}

export default GalleryPage
