import '@/styles/globals.css'
// import { Inter } from 'next/font/google'
import Main from '@/components/Main'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopia',
  description: 'get access to the best prompts for your next writing session',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Main children={children}/>
      </body>
    </html>
  )
}
