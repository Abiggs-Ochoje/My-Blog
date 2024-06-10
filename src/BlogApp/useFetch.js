import {useState, useEffect} from 'react'

function useFetch(url) {

 const [data, setData] = useState(null);  // "data" is used because this is custom Hook and we are trying to make the code very reuseble
  const [isPending, setIsPending] = useState(true);
 const [error, setError] = useState(null)
  

  //Note that the timer is totally not necessary in real jobs
  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
    //   fetch('http://localhost:8000/blogs')
    fetch(url, {signal: abortCont.signal})
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource')
        }
        return res.json();
      })
      .then(data => {          //note: "data" used here is a local data, it is not same as "data" used in the useState Hook above. "
        setIsPending(false);
        setData(data);
        setError(null)
      })
      .catch(err => {
        if (err.name === 'AbortError'){
            console.log('fetch aborted')
        } else {
            setIsPending(false)
            setError(err.message);
        }     
      })
    }, 1000);

    return () => abortCont.abort();
  }, [url])

  return  { data, isPending, error };
   

}

export default useFetch;