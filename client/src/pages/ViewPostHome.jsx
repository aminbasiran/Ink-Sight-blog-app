import React, {useState,useEffect} from 'react'
import { FaEye } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { useOutletContext, useParams,Link } from 'react-router-dom'
import Post from '../components/Post/Post'
import Button from '../components/Button/Button';

const ViewPostHome = () => {

    const {postID} = useParams()
    const {state} = useOutletContext()
    const [post,setPost] = useState({})

    useEffect(()=>{
        const filteredPostByID = state.homePosts.filter(obj => obj.id == postID)
        setPost(filteredPostByID.length > 0 ? filteredPostByID[0] : {})
    },[postID])



    return (
        <>
            <Link to="/home">
                <Button style={{marginBottom:"15px", paddingTop:"5px", paddingBottom: "5px",paddingRight:"10px",paddingLeft:"10px",textAlign:"left"}}>{"<"}</Button>
            </Link>
            {Object.keys(post).length > 0 && <Post>
                <Post.User>{post.user}</Post.User>
                <Post.Image img={post.image}/>
                <Post.Tags>
                        {post.tags.map(tag=> <h3 key={tag} className='text-xs dark:text-zinc-500'>{tag}</h3>)}
                </Post.Tags>
                <Post.Title>{post.title}</Post.Title>
                <Post.Description isExpanded>{post.description}</Post.Description>
                <Post.Reactions >
                    {Object.entries(post.reactions).map(([key, value]) => 
                        <div key={key} className='flex gap-2 place-items-center'>
                            {key === 'likes' && <FaHandHoldingHeart className='dark:text-zinc-500' />}
                            {key === 'views' && <FaEye  className='dark:text-zinc-500'/>}
                            {key !== 'comments'? <p className='text-xs font-semibold dark:text-zinc-500'>{value} {key}</p>:""}
                        </div>
                    )}
                </Post.Reactions>
                <p className='text-left text-sm font-semibold mb-2 dark:text-zinc-500'>Comments</p>
            </Post>}
        </>
    )
}

export default ViewPostHome
