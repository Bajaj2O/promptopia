'use client'
import Link from "next/link"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Image from "next/image"

const PromptCard = ({ post, handleTagClick }: {
  post: any,
  handleTagClick: (tag: string) => void,
  // handleDelete: (id: string) => void,
  // handleEdit: (id: string) => void,

}) => {
  const [copied, setCopied] = useState('')
  const handleCopy = ()=>{
    navigator.clipboard.writeText(post.prompt)
    setCopied(post.prompt)

    setTimeout(() => {
      setCopied('');
    }, 3000);

  }
  return (
    <div className='w-fit glassmorphism '>
      <div className="p-4"> 
      <div className='flex gap-3 p-3'>

        <Image src={post.creator.image as string} alt="user Image" height={40} width={40} className=" object-contain"/>
    
        <div className='flex flex-col gap-1'>
          <span className='font-bold font-satoshi text-gray-600 '>{post.creator.username}</span>
          <span className='font-bold font-satoshi text-gray-600 '>{post.creator.email}</span>
        </div>
        <div className="bg-white h-fit w-fit " onClick={handleCopy}>
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
        <p className="mt-2 blue_gradient" onClick={()=>{handleTagClick}}>{post.tag}</p>
      </div>



      </div>
    </div>
  )
}

export default PromptCard