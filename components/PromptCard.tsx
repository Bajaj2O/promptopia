'use client'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Post } from "@/types"
import { usePathname } from "next/navigation"
import pullSessionId from "@/utils/session"

const PromptCard = ({ post, handleTagClick, handleDelete, handleEdit }: {
  post: Post,
  handleTagClick: (tag: string) => void,
  handleDelete: (post: Post) => void,
  handleEdit: (post: Post) => void,


}) => {
  const sessionId = pullSessionId()
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [copied, setCopied] = useState('')
  const handleCopy = () => {
    navigator.clipboard.writeText(post.prompt)
    setCopied(post.prompt)

    setTimeout(() => {
      setCopied('');
    }, 3000);

  }
  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === sessionId) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  return (
    <div className=' glassmorphism  prompt_card'>
      <div className='flex flex-col justify-between items-start gap-5'>
        <div className='flex gap-3 p-3'>
          <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer ' onClick={handleProfileClick}>
            <Image
              src={post.creator.image}
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
            />

            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username}
              </h3>
              <p className='font-inter text-sm text-gray-500'>
                {post.creator.email}
              </p>
            </div>

            <div className='copy_btn' onClick={handleCopy}>
              <Image
                src={
                  copied === post.prompt
                    ? "/assets/icons/tick.svg"
                    : "/assets/icons/copy.svg"
                }
                alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                width={16}
                height={16}
              />
            </div>


          </div>


        </div>

        <div >
          <div className="text-slate-800 p-3">
            <p>{post.prompt}</p>
            <p className="mt-2 blue_gradient cursor-pointer" onClick={() => {
              handleTagClick(post.tag)
            }}>{post.tag}</p>
          </div>
        </div>




        {
          (post.creator._id === sessionId && pathname == '/profile') && (
            <div className="flex gap-2 px-3 justify-between">
              <button className="btn text-green-600 w-1/3" onClick={() => { handleEdit(post) }}>Edit</button>
              <button className="btn text-red-500 w-1/3" onClick={() => { handleDelete(post) }}>Delete</button>
            </div>
          )

        }

      </div>
    </div>
  )
}

export default PromptCard