import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

// API endpoint: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('leaderboard').then(setEntries).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><div className="page-intro"><div><span className="eyebrow">THE RACE IS ON</span><h2>Leaderboard</h2><p>Small wins become a shared momentum.</p></div><span className="record-count">{entries.length} ATHLETES</span></div>{error ? <div className="empty-state">{error}</div> : <div className="leaderboard-list">{entries.map((entry, index) => <div className={`leader-row ${index === 0 ? 'leader-row-top' : ''}`} key={entry._id || entry.user}><span className="rank">{String(entry.rank || index + 1).padStart(2, '0')}</span><div className="avatar">{entry.user?.slice(0, 2).toUpperCase()}</div><strong>{entry.user}</strong><span className="team-name">{entry.team}</span><b>{entry.points} <small>PTS</small></b></div>)}</div>}</section>
}
export default Leaderboard