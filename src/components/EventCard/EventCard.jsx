import './EventCard.css'
import { eventObjects } from '../../data'


export default function EventCard({props}) {

    const eventsData = eventObjects.map(eventObject => {
        return (
            <div className="event-card">
                <h2>still working</h2>
            </div>
        )
    })

    return (
        <>
            {eventsData}
        </>
    )
  }
  
  