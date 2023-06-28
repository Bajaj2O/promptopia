import {useSession} from 'next-auth/react'

export default function pullSessionId() {
    const {data: session} = useSession()
    return session?.user?.id
    }

