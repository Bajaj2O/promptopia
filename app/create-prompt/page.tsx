'use client'
import Form from '@/components/Form'
import { FormEvent, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import pullSessionId from '@/utils/session'

const Page = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const sesssionId = pullSessionId()

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    })


    const createPost = async (e: FormEvent) => {
        e.preventDefault()
        setSubmitting(true)
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag,
                    creator: sesssionId
                })
            })
            if (response.ok) {
                router.push('/')
            }
            
        }
        catch (error) {
            console.error(error)
        }
        finally {
            setSubmitting(false)
        }
    }
    const formProps = {
            type: 'Create',
            post: post,
            setPost: setPost,
            submitting: submitting,
            handleSubmit: createPost
        }

        return (
            <div>
                <Form {...formProps} />
            </div>
        )
    }

    export default Page