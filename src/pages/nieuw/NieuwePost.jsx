
import React, {useState} from "react";

function NieuwePost  ({ onPostSubmit })  {
    const [postContent, setPostContent] = useState('');

    function handleChange  (event)  {
        setPostContent(event.target.value);
    };

    function handleSubmit  (event)  {
        event.preventDefault();

        onPostSubmit();
    }

    return (
        <div>
            <h1>Nieuwe Post</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Inhoud van de post:
                    <textarea
                        value={postContent}
                        onChange={handleChange}
                        placeholder="Schrijf je blogpost hier..."
                    />
                </label>
                <button type="submit">Post Aanmaken</button>
            </form>
        </div>
    );
}

export default NieuwePost;