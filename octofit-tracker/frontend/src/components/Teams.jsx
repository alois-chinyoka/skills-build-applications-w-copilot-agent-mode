import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('teams').then(setTeams).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><PageIntro eyebrow="YOUR CREW" title="Teams" detail="Train together, push further." />{error ? <div className="empty-state">{error}</div> : <div className="team-grid">{teams.map((team, index) => <article className={`team-card team-${index % 2}`} key={team._id || team.name}><span className="team-number">0{index + 1}</span><h2>{team.name}</h2><p>{team.members?.length || 0} members</p><div className="member-stack">{(team.members || []).map((member) => <span key={member} title={member}>{member.slice(0, 1)}</span>)}</div></article>)}</div>}</section>
}
export default Teams
function PageIntro({ eyebrow, title, detail }) { return <div className="page-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{detail}</p></div><span className="record-count">{new Date().getFullYear()} SEASON</span></div> }