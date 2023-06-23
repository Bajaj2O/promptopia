import { SetStateAction } from "react"
export interface creator {
    _id: string,
    username: string,
    email: string,
    image: string
}
export interface Post {
    _id: string,
    prompt: string,
    tag: string,
    creator: creator
}

export interface FormPost {
    prompt: string,
    tags: string
  }
export interface FormProps {
    post: FormPost,
    type: string,
    setPost: SetStateAction<any>,
    submitting: boolean,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
