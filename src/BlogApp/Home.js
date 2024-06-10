// import {useState, useEffect} from 'react'
import BlogList from '../BlogList'
import useFetch from './useFetch';

function Home() {

  //"data: blogs" used here simply says that, grab 'data' but let it be called 'blogs' here
  //Alternatively, you could just use "data" in the return statement
 const {data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')



  return (
    <div className='home'>
        {error && <div> {error} </div>}
        {blogs && <BlogList myBlogs={blogs} />}
        { isPending && <div>Loading...</div> }
    </div>
  )
}

export default Home;