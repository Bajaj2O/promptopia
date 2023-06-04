'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/images/logo.svg'
import { useState, useEffect, use } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {

  const [userLogin, setUserLogin] = useState<boolean>(true)
  const [providers, setProviders] = useState<any>(null)
  useEffect(() => {
    const initProviders = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    initProviders()

  }, [])





  return (

    <nav className='w-full mb-6 flex justify-between pt-3'>
      <Link href='/' className='gap-2 flex justify-between items-center left-0'>
        <Image src={logo} alt='logo' width={50} height={50} />
        <h1 className='text-2xl font-bold'>Promptopia</h1>
      </Link>

      {/* desktop view*/}

      {userLogin ?
        (<div className='sm:flex hidden  gap-10'>
          <Link href='/create-post' className='outline_btn'>
            <p className='btn-txt'>create</p>
          </Link>

          <button className='outline_btn' onClick={() => { }}>
            <p className='btn-txt'>logout</p>
          </button>

          <Link href='/profile' className='gap-2 flex justify-between items-center profile'>
            <Image src={logo} alt='Profile-photo' width={50} height={50} />
          </Link>

        </div>)
        : (
          <>
            {providers && Object.values(providers).map((provider: any) => (
              <div key={provider.name}>
                <button onClick={() => signIn(provider.id)} className='black_btn'>
                  Sign in with {provider.name}
                </button>
              </div>
            ))}

          </>


        )}


      {/* mobile view */}

      <div className='sm:hidden flex gap-10'>
        <Image src={logo} alt='profile-photo' width={50} height={50} />

      </div>



    </nav>

  )
}

export default Navbar