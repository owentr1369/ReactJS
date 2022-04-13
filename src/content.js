import React from 'react'
import {useEffect, useState } from 'react'

const tabs=['posts', 'comments', 'albums', 'todos', 'users', 'photos']

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=> res.json())
        .then(posts => {
            setPosts(posts)
        })
    }, [type])
  return (
  <div>
      {tabs.map(tab =>(
          <button 
          key={tab}
          style={type===tab?
            {
              color:'#fff',
              backgroundColor:'#333'
            }:
            {}}
          onClick={()=> setType(tab)}
          >

              {tab}
          </button>
      ))}
    <input
    value = {title}
    onChange = {e=> setTitle(e.target.value)}
    />
    <ul>
        {posts.map(post => (
            <li
            style={
                {
                    display:'block',
                    width: '100%',
                    fontSize: '15px',
                    color: '#333'
                }
            }
            key={post.id}>{post.title || post.name}
                <img key={post.id} src={post.url}></img>
            </li>
        ))}
    </ul>
  </div>
  )
}

export default Content