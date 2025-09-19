import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../reducer/postSlice.jsx";

const HomePage = () => {
    const {isLoading, posts, error} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts())
    }, []);
    return (
        <div>
            <h1>homepage</h1>
            <h2>posts</h2>
            {isLoading && ("Loading...")}
            {error && (error)}
            {posts && posts.length > 0 && (
                posts.map(post => (
                    <div key={post.id}>
                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default HomePage;