import React from 'react'
import Post from '../components/Post/Post'
import { Link, useOutletContext } from 'react-router-dom'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import Header from '../components/Header/Header';
import Button from '../components/Button/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/FirebaseAuth';





const User = () => {

    const {state,dispatch} = useOutletContext()

    const signOutUserWithFirebase = async () => {
        await signOut(auth)
        dispatch({type:"SET_USER",payload:{currentUser:null}})
        
    }

    return (
        <div>
            <Header>
                <Header.Title>Your Posts</Header.Title>
                <Header.Profile/>
            </Header>
            <div className='flex gap-3 justify-end mb-4 '>
                <Link to="/user/post/add">
                    <Button style={{ paddingTop: '5px', paddingRight: '10px', paddingBottom: '5px', paddingLeft: '10px' }}>+ Publish new post</Button>
                </Link>
                <div onClick={signOutUserWithFirebase}>
                    <Button style={{ paddingTop: '5px', paddingRight: '10px', paddingBottom: '5px', paddingLeft: '10px' }}>Log out</Button>

                </div>
            
            </div>
            <div className='flex flex-col gap-7'>
                {state.userPosts.map(post=> <Link key={post.id} to={`/user/post/view/${post.id}`}>
                    <Post  >
                        <Post.Image img={post.image}/>
                        <Post.Title>{post.title}</Post.Title>
                        <Post.Description>{post.description}</Post.Description>
                        <Post.Date>{post.date}</Post.Date>
                        <Post.Tags>
                            {post.tags.map(tag=> <h3 key={tag} className='text-xs dark:text-zinc-500'>{tag}</h3>)}
                        </Post.Tags>
                        <Post.Reactions>
                            {Object.entries(post.reactions).map(([key, value]) => 
                                <div key={key} className='flex gap-2 place-items-center'>
                                    {key === 'likes' && <FaHandHoldingHeart className='dark:text-zinc-500' />}
                                    {key === 'views' && <FaEye className='dark:text-zinc-500'/>}
                                    {key === 'comments' && <FaComments className='dark:text-zinc-500'/>}
                                    <p className='text-xs font-semibold dark:text-zinc-500'>{value} {key}</p>
                                </div>
                            )}
                        </Post.Reactions>
                    </Post>
                </Link> )}
            </div>
        </div>
    )
}

export default User
