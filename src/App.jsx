import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import LeadArticle from './components/LeadArticle'
import NewStories from './components/NewStories'

function App() {

  return (
    <>
      <NavBar />
      <main>
        {/* <section className="hero"> */}
          <LeadArticle />
          <NewStories />
        {/* </section> */}
      </main>
    </>
  )
}

export default App
