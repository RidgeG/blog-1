import {Link, useParams} from 'react-router-dom';
import formatDateString from '../../helpers/formatDataString.js';
import axios from "axios";
import './PostDetail.css';
import {useEffect, useState} from "react";

function PostDetail() {
    const {id} = useParams();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);



    useEffect(() => {
        axios.get('http://localhost:3000/posts',)
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
    }, [id]);

    if (loading) {
        return (
            <div>
                <h1>Blogpost</h1>
                <p>De blogpost wordt geladen...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Blogpost</h1>
                <p>{error}</p>
            </div>
        );
    }

    const post = posts.find((post) => post.id.toString() === id);

    if (!post) {
        return (
            <div>
                <h1>Blogpost</h1>
                <p>Deze blogpost bestaat niet of is verwijderd.</p>
                <Link to="/overview">Terug naar overzicht</Link>
            </div>
        );
    }

    const {title, readTime, subtitle, author, created, content, comments, shares} = posts.find((post) => {
        return post.id.toString() === id;
    });

    return (
        <section className="post-detail-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p className="post-detail-author">Geschreven door <em>{author}</em> op {formatDateString(created)}</p>
                <span className="post-detail-read-time">
                    <p> {readTime} minuten lezen</p>
                </span>
                <p>{content}</p>
                <p>{comments} reacties - {shares} keer gedeeld</p>

                <Link to="/posts" className="back-link">
                    <p>Terug naar de overzichtspagina</p>
                </Link>

            </div>
        </section>
    );
}

export default PostDetail;