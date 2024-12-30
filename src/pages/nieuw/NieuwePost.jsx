import './NieuwePost.css';
import {useState} from 'react';
import calculateReadTime from '../../helpers/calculateReadTime.js';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function NewPost() {
    const [formState, setFormState] = useState({
        title: '',
        subtitle: '',
        author: '',
        content: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [newPostId, setNewPostId] = useState(null)
    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);

        const newPost = {
            ...formState,
            shares: 0,
            comments: 0,
            created: new Date().toISOString(),
            readTime: calculateReadTime(formState.content),
        };

        try {
            const response = await axios.post('http://localhost:3000/posts', newPost);
            if (response.status === 201) {
                setSuccess(true);
                setNewPostId(response.data.id);

                setTimeout(() => navigate(`/posts/${newPostId}`), 3000);
            }
        } catch (error) {
            setError('Er is iets mis gegaan met het plaatsen van de nieuwe blogpost, probeer het later opnieuw.');

        }
        if (success) {
            return (
                <section className="new-post-section outer-content-container">
                    <div className="inner-content-container__text-restriction">
                        <h1>Gelukt!</h1>
                        <p>De blogpost is succesvol toegevoegd. Je kunt deze <a href={`/posts/${newPostId}`}>hier</a> bekijken.</p>
                    </div>
                </section>
            );
        }

    }



    return (
        <section className="new-post-section outer-content-container">
            <div className="inner-content-container__text-restriction">
                <form className="new-post-form" onSubmit={handleSubmit}>
                    <h1>Post toevoegen</h1>
                    {error && <p className="error-message">{error}</p>}

                    <label htmlFor="post-title">Titel</label>
                    <input
                        type="text"
                        id="post-title"
                        name="title"
                        required
                        value={formState.title}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-subtitle">Subtitle</label>
                    <input
                        type="text"
                        id="post-subtitle"
                        name="subtitle"
                        required
                        value={formState.subtitle}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-author">Naam en achternaam</label>
                    <input
                        type="text"
                        id="post-author"
                        name="author"
                        required
                        value={formState.author}
                        onChange={handleChange}
                    />
                    <label htmlFor="post-content">Blogpost</label>
                    <textarea
                        name="content"
                        id="post-content"
                        cols="30"
                        rows="10"
                        required
                        minLength={300}
                        maxLength={2000}
                        value={formState.content}
                        onChange={handleChange}></textarea>
                    <button type="submit">
                        Toevoegen
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewPost;