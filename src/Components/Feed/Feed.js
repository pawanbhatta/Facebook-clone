import React, {useState, useEffect} from 'react';
import './Feed.css';
import {StoryReel, PostMessage, Post} from '../index';
import db from '../../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data()})))
      );
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <PostMessage
        profile="https://scontent.fktm1-2.fna.fbcdn.net/v/t1.6435-1/c37.0.320.320a/p320x320/157141539_2882436021969266_5188919261976324337_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_ohc=OKb_6IwO968AX-45ZV_&_nc_ht=scontent.fktm1-2.fna&tp=27&oh=1a31ba134027724049c401958d071336&oe=60E596B4"
        username="Pawan Bhatta"
      />

      {posts.map((post) => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          message={post.data.message}
          timestamp={post.data.timestamp}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
