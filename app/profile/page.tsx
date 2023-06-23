'use client'
import Profile from '@/components/Profile'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'


const ProfilePage = () => {
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

  return (
    <Profile 
    name = {session?.user?.name as string}
    image = {session?.user?.image as string}
    post = {posts} 
    />
  )
}

export default ProfilePage