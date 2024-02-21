import React, {useState,useEffect} from 'react'
import { FaEye } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";  
import { useParams, useOutletContext,Link } from 'react-router-dom';
import Post from '../components/Post/Post';
import Button from '../components/Button/Button';

const ViewPostUser = () => {

    const {state} = useOutletContext()
    const {postID} = useParams()
    const [post, setPost] = useState({})

    useEffect(()=>{
        const filteredPostByID = state.userPosts.filter(obj => obj.id == postID)
        setPost(filteredPostByID.length > 0 ? filteredPostByID[0] : {})
    },[postID])



    return (
        <>
            <Link to="/user">
                <Button style={{paddingTop:"9px", paddingBottom: "9px",paddingRight:"15px",paddingLeft:"15px",textAlign:"left"}}>{"<"}</Button>
            </Link>
            {Object.keys(post).length > 0 && <Post>
            <Post.Image img={post.image}/>
            <Post.Title>{post.title}</Post.Title>
            <Post.Tags>
                    {post.tags.map(tag=> <h3 key={tag} className='text-xs'>{tag}</h3>)}
            </Post.Tags>
            <Post.Description isExpanded >{post.description}</Post.Description>
            <Post.Reactions>
                {Object.entries(post.reactions).map(([key, value]) => 
                    <div key={key} className='flex gap-2 place-items-center'>
                        {key === 'likes' && <FaHandHoldingHeart />}
                        {key === 'views' && <FaEye />}
                        {key !== 'comments' ? <p className='text-xs font-semibold'>{value} {key}</p> : "" }
                    </div>
                )}
            </Post.Reactions>
            <p className='text-left text-sm font-semibold mb-2'>Comments</p>
        </Post>}
        </>

    )
}

export default ViewPostUser