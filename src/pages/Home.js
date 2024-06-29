import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home() {
  const [posts, setPosts] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data.slice(0, 15)); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-mode');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="home">
      <button className="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
