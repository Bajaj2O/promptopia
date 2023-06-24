'use client'
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'
import {Post,creator} from '@/types'

const Feed = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPost = async()=>{
      const res = await fetch('/api/prompt')
      const data = await res.json()
      setPosts(data)

    }
    fetchPost()
  }, [])

  const  handleTagClick = (tag:string) => {
    setSearchText(tag)
  }

  return (
    <section >
      <form className='w-full relative flex-center mt-3'>
        <input type="text" placeholder='search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}  className='search_input peer'/>
      </form>
        <AllPost posts={posts} handleTagClick={handleTagClick}/>

    </section>
  )
}

const AllPost = ({posts,handleTagClick}:{
  posts: Post[],
  handleTagClick: (tag: string) => void,
})=>{
  return(
    <div className='mt-16 prompt_layout'>
      {posts.map((post:Post)=>(
        <div key= {post._id as string}>
          <PromptCard  post={post}  handleTagClick = {handleTagClick} handleDelete={()=>{}} handleEdit={()=>{}} />
        </div>
      ))}
    </div>
  )

}

export default Feed