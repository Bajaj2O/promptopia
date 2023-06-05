'use client'
import { SessionProvider } from "next-auth/react"

const provider = ({children,session}:
  {
    children: React.ReactNode,
    session: any
  }) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default provider