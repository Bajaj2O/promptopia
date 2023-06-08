'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Navbar = () => {
  const logo = '/assets/images/logo.svg'

  const { data: session } = useSession()
  const [providers, setProviders] = useState<any>(null)
  const [toggleDropdown, setToggleDropdown] = useState<boolean>(false)
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
      {console.log(res)}
    })();

  }, [])
  

  return (

    <nav className='w-full mb-6 flex justify-between pt-3'>
      <Link href='/' className='gap-2 flex justify-between items-center left-0'>
        <Image src={logo} alt='logo' width={50} height={50} />
        <h1 className='text-2xl font-bold'>Promptopia</h1>
      </Link>

      {/* desktop view*/}


      {session?.user ?
        (<div className='sm:flex hidden  gap-10'>
          <Link href='/create-prompt' className='outline_btn'>
            <p className='btn-txt'>create</p>
          </Link>

          <button className='outline_btn' onClick={() => {signOut() }}>
            <p className='btn-txt'>logout</p>
          </button>

          <Link href='/profile' className='gap-2 flex justify-between items-center profile'>
            <Image
              src={session?.user?.image as string}
              alt='Profile-photo'
              width={37}
              height={37}

            />
          </Link>

        </div>)
        : (
          <>
            <div className='sm:flex hidden  gap-10'>
              {providers && Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)} className='black_btn'>
                    Sign in
                  </button>
                </div>
              ))}
            </div>
          </>
        )}


      {/* mobile view */}


      {session?.user ?
        (<div className='sm:hidden flex gap-10 relative '>
          <Image src={session?.user?.image as string}
            alt='profile-photo'
            width={37}
            height={37}
            onClick={() => setToggleDropdown((prev) => !prev)}

          />

          {toggleDropdown &&
            <div className='dropdown'>
              <Link
                href='/profile'
                className='dropdown_link'
                onClick={() => {
                  setToggleDropdown(false)
                }}
              >
                my profile
              </Link>

              <Link href='/create-prompt' className='dropdown_link'>
                create prompt
              </Link>

              <button className='mt-5 w-full outline_btn' onClick={() => {signOut() }}>
            <p className='btn-txt'>logout</p>
          </button>
            </div>

          }
        </div>

        )
        : (
          <>
            <div className='sm:hidden flex '>
              {providers && Object.values(providers).map((provider: any) => (
                <div key={provider.name}>
                  <button onClick={() => signIn(provider.id)} className='black_btn'>
                    Sign in
                  </button>
                </div>
              ))}
            </div>

          </>
        )
      }




    </nav>

  )
}

export default Navbar