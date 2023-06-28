'use client'
import Profile from '@/components/Profile'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation'
import {Post as PostType} from '@/types'

const ProfilePage = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState<PostType[]>([])
    useEffect(() => {   
        const fetchPost  = async () => {
            const res = await fetch(`/api/users/${session?.user?.id}/posts`)
            const data:PostType[] = await res.json()
            setPosts(data);
        }
        if(session?.user?.id)
        fetchPost()
    }, [])

    const handleEdit = (post:PostType) => {
      router.push(`/update-prompt?id=${post._id}`);
    };
  
    const handleDelete = async (post:PostType) => {
      const hasConfirmed = confirm(
        "Are you sure you want to delete this prompt?"
      );
  
      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE",
          });
  
          const filteredPosts = posts.filter((item:PostType) => item._id !== post._id);
  
          setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }
    };
    
  return (
    <Profile 
    name = {"Your Personal "}
    image = {session?.user?.image as string}
    post = {posts} 
    handleEdit = {handleEdit}
    handleDelete = {handleDelete}
    />
  )
}

export default ProfilePage