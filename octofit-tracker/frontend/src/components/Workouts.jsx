import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts/

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('workouts').then(setWorkouts).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><PageIntro eyebrow="YOUR NEXT SESSION" title="Workouts" detail="A focused plan for wherever you are today." />{error ? <div className="empty-state">{error}</div> : <div className="workout-grid">{workouts.map((workout) => <article className="workout-card" key={workout._id || workout.name}><div className="workout-top"><span className="difficulty">{workout.difficulty}</span><span>{workout.durationMinutes} MIN</span></div><h2>{workout.name}</h2><p>{workout.description}</p><button type="button">View session <span aria-hidden="true">↗</span></button></article>)}</div>}</section>
}
export default Workouts
function PageIntro({ eyebrow, title, detail }) { return <div className="page-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{detail}</p></div><span className="record-count">CURATED</span></div> }