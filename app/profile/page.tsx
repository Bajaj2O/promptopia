'use client'
import Profile from '@/components/Profile'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { Post } from '@/types'
import { useRouter } from 'next/navigation'

const ProfilePage = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState([])
    useEffect(() => {   
        const fetchPost  = async () => {
            const res = await fetch(`/api/users/${session?.user?.id}/posts`)
            const data = await res.json()
            setPosts(data);
        }
        if(session?.user?.id)
        fetchPost()
    }, [])

    const handleEdit = (post:Post) => {
      router.push(`/update-prompt?id=${post._id}`);
    };
  
    const handleDelete = async (post:Post) => {
      const hasConfirmed = confirm(
        "Are you sure you want to delete this prompt?"
      );
  
      if (hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id.toString()}`, {
            method: "DELETE",
          });
  
          const filteredPosts = posts.filter((item:Post) => item._id !== post._id);
  
          setPosts(filteredPosts);
        } catch (error) {
          console.log(error);
        }
      }
    };
  return (
    <Profile 
    name = {session?.user?.name as string}
    image = {session?.user?.image as string}
    post = {posts} 
    handleEdit = {handleEdit}
    handleDelete = {handleDelete}
    />
  )
}

export default ProfilePage