import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Promptopia',
  description: 'get access to the best prompts for your next writing session',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider session={null}>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Navbar/>
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
