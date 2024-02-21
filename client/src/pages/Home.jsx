import React from 'react'
import Post from '../components/Post/Post'
import { useOutletContext,Link, useParams } from 'react-router-dom'
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { FaComments } from "react-icons/fa";
import Header from '../components/Header/Header'

// const signOutUserWithFirebase = async () => {
//     try {
//         const userCredential = await signOut(auth)
//         const user = userCredential.user
//         return user
//     } 
    
//     catch (error) {
//         console.log(error)
//     }
// }


const Home = () => {

    const {state} = useOutletContext()


    return (
        <div>
            <Header>
                <Header.Title>Trending</Header.Title>
                <Link to="/user"><Header.Profile/></Link>
            </Header>
            <Link to="/login"><h2>LOGIN</h2></Link>
            <div className='flex flex-col gap-7'>
                {state.homePosts.map(post => <Link key={post.id} to={`/home/post/view/${post.id}`}>
                    <Post  key={post.id}>
                        <Post.Image img={post.image}/>
                        <Post.Title>{post.title}</Post.Title>
                        <Post.Description>{post.description}</Post.Description>
                        <Post.User>{post.user}</Post.User>
                        <Post.Date>{post.date}</Post.Date>
                        <Post.Tags>
                            {post.tags.map(tag=> <h3 key={tag} className='text-xs dark:text-zinc-500'>{tag}</h3>)}
                        </Post.Tags>
                        <Post.Reactions>
                            {Object.entries(post.reactions).map(([key, value]) => 
                                <div key={key} className='flex gap-2 place-items-center'>
                                    {key === 'likes' && <FaHandHoldingHeart  className='dark:text-zinc-500'/>}
                                    {key === 'views' && <FaEye className='dark:text-zinc-500'/>}
                                    {key === 'comments' && <FaComments className='dark:text-zinc-500'/>}
                                    <p className='text-xs font-semibold dark:text-zinc-500'>{value} {key}</p>
                                </div>
                            )}
                        </Post.Reactions>
                    </Post>
                </Link>)}
            </div>
        </div>
    )
}

    export default Home
