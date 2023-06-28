import React, { SetStateAction } from 'react'
import Link from 'next/link'
import {FormPost, FormProps} from '@/types/index'

const Form = ({ type, post, setPost, submitting, handleSubmit }: FormProps) => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold blue_gradient flex items-center justify-center'>{type}  Post</h1>
      <p className='text-xl font-satoshi mt-2 text-slate-500'>Write a prompt and add tag to help others find it</p>
      <div id='form'>
        <form className='flex flex-col gap-8 glassmorphism mt-10' onSubmit={handleSubmit}>

          <label className='flex flex-col gap-2' >
            <span className='font-bold font-satoshi flex flex-col text-gray-600'>Your Prompt</span>
            <textarea name="Prompt" id="Prompt" cols={50} rows={10} placeholder='  write your prompt here ' value={post.prompt} onChange={(e) => { setPost({ ...post, prompt: e.target.value }) }} required  className='bg-stone-50 rounded-lg p-2'/>
          </label>
          <label className=' gap-2' >
            <span className='font-bold font-satoshi flex flex-col text-gray-600'>Add Your Tag
            </span>
            <input type="text" name="tag" id="tag" className='w-full bg-stone-50 rounded-lg mt-2 p-2' placeholder=' #promptopia' value={post.tag} onChange={(e) => { setPost({ ...post, tag: e.target.value }) }} />
          </label>
          <div className='flex justify-around '>

            <button type="submit" disabled={submitting} className='outline_btn glassmorphism w-1/3'>
              <div className='text-gray-500'> 
                {submitting ? `${type}ing...` : type}
              </div>
            </button>
            <Link href='/' className='outline_btn glassmorphism w-1/3' >
             <div className='text-gray-500 '>Cancel</div>
            </Link>
          </div>
        </form>
      </div>
    </section>
  )

}

export default Form