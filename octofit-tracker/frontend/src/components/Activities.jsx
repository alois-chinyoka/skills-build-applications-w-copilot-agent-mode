import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('activities').then(setActivities).catch((reason) => setError(reason.message))
  }, [])

  return <section className="page-section"><PageIntro eyebrow="LIVE FEED" title="Recent activity" detail="Every effort counts. Keep the team moving." />
    {error ? <ErrorState message={error} /> : <div className="activity-grid">{activities.map((activity) => <article className="activity-card" key={activity._id || `${activity.user}-${activity.date}`}><div className="activity-glyph">{activity.type?.slice(0, 1) || 'A'}</div><div><span className="card-kicker">{activity.type}</span><h2>{activity.user}</h2><p>{activity.durationMinutes} min <span>/</span> {activity.caloriesBurned} kcal</p></div><time>{formatDate(activity.date)}</time></article>)}</div>}
  </section>
}

export default Activities

function PageIntro({ eyebrow, title, detail }) { return <div className="page-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{detail}</p></div><span className="record-count">SYNCED</span></div> }
function ErrorState({ message }) { return <div className="empty-state">{message}. Check the API connection and try again.</div> }
function formatDate(value) { return value ? new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric' }).format(new Date(value)) : 'Today' }