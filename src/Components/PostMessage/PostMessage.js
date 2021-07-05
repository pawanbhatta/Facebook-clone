import React, {useState} from 'react';
import './PostMessage.css';
import {Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from '../../StateProvider';
import db from '../../firebase';
import firebase from 'firebase';

function PostMessage({profile, username}) {
  const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState('');
  const [imageUrl, setimageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here');
    console.log(
      'data',
      input,
      user.photoURL,
      user.displayName,
      imageUrl,
      firebase.firestore.FieldValue.serverTimestamp()
    );
    db.collection('posts').add({
      message: input,
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
    setimageUrl('');
  };
  return (
    <div className="postMessage">
      <div className="postMessage__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="postMessage__input"
            placeholder={`What's on your mind. ${user.displayName}?`}
            value={input}
          />
          <input
            value={imageUrl}
            onChange={(e) => setimageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button onClick={handleSubmit} type="submit">
            Hidden Button
          </button>
        </form>
      </div>
      <div className="postMessage__bottom">
        <div className="postMessage__action">
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className="postMessage__action">
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postMessage__action">
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default PostMessage;
