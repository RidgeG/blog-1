import './AllePost.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Overview() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                setError('Kan blogposts niet ophalen.');
                console.error('Fout bij ophalen posts:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Blog Overzicht</h1>
                <p>Posts worden geladen...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Blog Overzicht</h1>
                <p>{error}</p>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div>
                <h1>Blog Overzicht</h1>
                <p>Er zijn nog geen blogposts beschikbaar.</p>
            </div>
        );
    }

    return (
        <div>
            <h1>Blog Overzicht</h1>
            <p>Totaal aantal posts: {posts.length}</p>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/posts/${post.id}`} className="post-link">
                            {post.title}
                        </Link> ({post.author})
                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
