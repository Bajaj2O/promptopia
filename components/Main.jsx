import Provider from '@/components/Provider'
import Navbar from '@/components/Navbar'



const Main = ({children}) => {
  return (
    <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar />
            {children}
          </main>
    </Provider>
  )
}

export default Main