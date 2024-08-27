import './App.css'
import Card from './components/Card'
import EventCard from './components/EventCard/EventCard'

function App() {

  return (
    <>
      <h1 id="main-title">Nature Adventures CR!</h1>
      <div id="event-cards-container">
        <EventCard/>
      </div>
    </>
  )
}

export default App
