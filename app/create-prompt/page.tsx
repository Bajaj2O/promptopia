'use client'
import Form from '@/components/Form'
import { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const Page = () => {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [post,setPost] = useState({
        prompt:"",
        tags:""
    })
    const createPost = async (e:FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
    }

    const formProps = {
        type : 'Create',
        post : post,
        setPost : setPost,
        submitting : submitting,
        handleSubmit : createPost
    }
   
    return (
        <div>   
            <Form {...formProps}/>
        </div>
    )
}

export default Page