import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from './Card.jsx'

function App() {

  const [infos, setInfos] = useState([])
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)


  const fetchInfos = async () => {
    try{
      const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${search}&page=${page}`)
      setInfos(response.data.hits)
    } 
     
    catch(err){
      setError(err)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchInfos()
  }

  useEffect(() => {
    fetchInfos()
  }, [])

  function handlePrevClick() {

      if(page > 1) {
        setPage(page => page-1)
        
        fetchInfos()
      }
  }

  function handleNextClick() {
      setPage(page => page+1)
      fetchInfos()
  }
  
  const sort = []
  const sortedInfos = infos.reduce((acc, cur) => {
    if(sort.includes(cur.story_id)) {
    } else {
      sort.push(cur.story_id)
      acc.push(cur)
    }
    return acc
  },[])
  
  if(error){
    return <h1>{error.message}</h1>
  }

  return (
  
    <div className='app'>
      <form id='search' onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" >Submit</button>
      </form>

      <nav>
        <button onClick={handlePrevClick} >précédent</button>
        <button onClick={handleNextClick} >suivant</button>
      </nav>

      { error && <h1>{error.message}</h1> }

      { sortedInfos.map((info, index) => <Card {...info} key={index} />) }
      
      <nav>
       <a className="bottom-btn" href="#search"> <button onClick={handlePrevClick} >précédent</button>
        <button onClick={handleNextClick} >suivant</button>
        </a>
      </nav>
    </div>
   
  )
}

export default App
