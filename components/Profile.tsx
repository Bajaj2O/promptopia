import React from 'react'
import { Post } from '@/types/index'
import Image from 'next/image'
import PromptCard from '@/components/PromptCard'
const Profile = ({ name, image, post, handleDelete, handleEdit }: {
  name: string,
  image: string,
  post: Post[]
  handleDelete: (post: Post) => void,
  handleEdit: (post: Post) => void,
}) => {
  return (
    <div>

      {post.length === 0 ?
        <div className='flex justify-center items-center mt-16'>
          <Image src='/assets/icons/empty.svg' alt="empty" width={400} height={400} />
          <div className='ml-4'>
            <p className='text-2xl font-bold'>No Posts</p>
            <p className='text-gray-500'>No Post created yet.</p>
            {/* <p className='text-gray-500'>create a Prompt by clicking on Create button</p> */}
          </div>
        </div>

        :
        <div className='flex flex-col justify-start  mt-16'>
          <h1 className='blue_gradient head_text text-left'>{name} Profile</h1>
          <p className='desc text-left px-5'>
            Use the copy button to copy the prompt and use them to generate best results from ChatGPT, Dall-E 2, CLIP and other AI models.

          </p>
        </div>}




      <div className='mt-16 prompt_layout'>
        {post.map((post: Post) => (
          <div key={post._id as string}>
            <PromptCard post={post} handleTagClick={() => { }} handleDelete={() => handleDelete && handleDelete(post)} handleEdit={() => handleEdit && handleEdit(post)} />
          </div>
        ))}
      </div>


    </div>
  )
}

export default Profile