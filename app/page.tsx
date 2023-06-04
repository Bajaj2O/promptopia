import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full  flex justify-center items-center flex-col'>
      <h1 className='head_text text-center'>
        Discover and share 
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'> Ai powered writing prompts</span>
      </h1>

      <p className='text-center mt-6 text-lg text-gray-600 sm:text-xl max-w-2xl'>
        Promptopia is an Ai powered tool to generate creative writing prompts.
        <br className='max-md:hidden'/>
        create and share your own prompts with the world.
      </p>
    </section>
  )
}
