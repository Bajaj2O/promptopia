import React from 'react'
import {Post} from '@/types/index'
import PromptCard from '@/components/PromptCard'
const Profile = ({name,image,post,handleDelete,handleEdit}:{
  name:string,
  image:string,
  post:Post[]
  handleDelete: (post:Post)=>void,
  handleEdit: (post:Post)=>void,
}) => {
  return (
    <div>
      <div className='blue_gradient head_text'>My Profile</div>
      

      
      <div className='mt-16 prompt_layout'>
      {post.map((post:Post)=>(
        <div key= {post._id as string}>
          <PromptCard  post={post}  handleTagClick = {()=>{}} handleDelete={()=>handleDelete && handleDelete(post)} handleEdit={()=>handleEdit && handleEdit(post)} />
        </div>
      ))}
    </div>
      
      
      </div>
  )
}

export default Profile