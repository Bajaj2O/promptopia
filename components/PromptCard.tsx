'use client'
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Image from "next/image"

const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }: {
  post: any,
  handleTagClick: (tag: string) => void,
  handleDelete: (id: string) => void,
  handleEdit: (id: string) => void,


}) => {
  const { data: session } = useSession()
  const [copied, setCopied] = useState('')
  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt)
    setCopied(post.prompt)

    setTimeout(() => {
      setCopied('');
    }, 3000);

  }
  return (
    <div className=' glassmorphism flex prompt_card'>
      <div className="p-2">
        <div className='flex gap-3 p-3'>
          <div className='flex flex-col gap-1 w-20'>
            <Image src={post.creator.image} alt="user Image" height={35} width={55} className=" border rounded-full " />
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-bold font-satoshi text-gray-600 '>{post.creator.username}</span>
            <span className='font-bold font-satoshi text-gray-600 '>{post.creator.email}</span>
          </div>
          <div className=" h-fit w-fit " onClick={handleCopy}>
            <Image src={
              (copied === post.prompt) ?
                'assets/icons/tick.svg' :
                'assets/icons/copy.svg'
            }
              className=""
              alt="copy-icon"
              width={50}
              height={50}
            />
          </div>
        </div>

        <div className="text-slate-800 p-3">
          <p>{post.prompt}</p>
          <p className="mt-2 blue_gradient" onClick={() => { handleTagClick }}>{post.tag}</p>
        </div>


        {
          post.creator._id === session?.user?.id && (
            <div className="flex gap-2 px-3 justify-between">
              <button className="btn text-green-600 w-1/3" onClick={() => { handleEdit(post._id) }}>Edit</button>
              <button className="btn text-red-500 w-1/3" onClick={() => { handleDelete(post._id) }}>Delete</button>
            </div>
          )

        }

      </div>
    </div>
  )
}

export default PromptCard