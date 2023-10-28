import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import LeadArticle from './components/LeadArticle'
import NewStories from './components/NewStories'
import Featured from './components/Featured'

function App() {

  return (
    <>
      <NavBar />
      <main>
        <section className="section--hero">
          <LeadArticle />
          <NewStories />
        </section>
        <section className="section--featured">
          <Featured />
        </section>
      </main>
    </>
  )
}

export default App
