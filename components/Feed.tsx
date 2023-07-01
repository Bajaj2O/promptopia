'use client'
import {useState,useEffect} from 'react'
import PromptCard from './PromptCard'
import {Post,creator} from '@/types'

const Feed = () => {
  const [searchText, setSearchText] = useState<string>('')
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchPost = async()=>{
      const res = await fetch('/api/prompt',{cache:'no-store'})
      const data = await res.json()
      setPosts(data)

    }
    fetchPost()
  }, [])

  const  handleTagClick = (tag:string) => {
    setSearchText(tag)
   
    
  }
  const filterPrompts = (searchtext:string) => {
    var regex = new RegExp( searchText, 'i'); // 'i' flag for case-insensitive search
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };
  useEffect(() => {
    if (searchText === "") setFilteredPosts(posts);

    const filteredPosts = filterPrompts(searchText);
    setFilteredPosts(filteredPosts);
  }, [searchText]);

  return (
    <section >
      <form className='w-full relative flex-center mt-3'>
        <input type="text" placeholder='search' value={searchText} onChange={(e) => { setSearchText(e.target.value) }}  className='search_input peer'/>
      </form>
      {searchText.length > 0 ? (
        <div className='mt-3'>
          <h3 className='text-2xl mb-3'>Search results for "{searchText}"</h3>
          <AllPost posts={filteredPosts} handleTagClick={handleTagClick}/>
        </div>
      ):
      
      <div className='mt-3'>
        {/* <h3 className='text-2xl mb-3'>All Prompts</h3> */}
        <AllPost posts={posts} handleTagClick={handleTagClick}/>
      </div>
      }
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