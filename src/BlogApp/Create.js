import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Create() {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {title, body, author};

    setIsPending(true)
    
    fetch('http://localhost:8000/blogs',{
       method: 'POST',
       headers: {"Content-Type": "application/json"},
       body: JSON.stringify(newBlog)
    }    
    ).then(() => {
      console.log('new blog added')
      setIsPending(false)
      history('/');
    })
  }

  return (
    <div className='create'>
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mariam">Mariam</option>
          <option value="Jane">Jane</option>
        </select>
       {!isPending && <button>Add Blog</button>}
       {isPending && <button disabled>Adding Blog...</button>}
      </form>

      
    </div>
  )
}



export default Create;