'use client'
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'

const Feed = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [posts, setPosts] = useState<any>([])

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
      <form className='w-full'>
        <input type="text" placeholder='search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}  className='
        '/>
      </form>
      <div>
        <AllPost posts={posts} handleTagClick={handleTagClick}/>
      </div>

    </section>
  )
}

const AllPost = ({posts,handleTagClick}:{
  posts: any[],
  handleTagClick: (tag: string) => void,
})=>{
  return(
    <div className='flex gap-4'>
      {posts.map((post:any)=>(
        <div>
          <PromptCard key= {post._id as string} post={post}  handleTagClick = {handleTagClick} />
        </div>
      ))}
    </div>
  )

}

export default Feed