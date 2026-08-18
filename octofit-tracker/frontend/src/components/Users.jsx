import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')
  useEffect(() => { fetchCollection('users').then(setUsers).catch((reason) => setError(reason.message)) }, [])
  return <section className="page-section"><PageIntro eyebrow="ROSTER" title="Members" detail="Know the people behind the progress." />{error ? <div className="empty-state">{error}</div> : <div className="member-table"><div className="table-head"><span>Member</span><span>Team</span><span>Age</span></div>{users.map((user) => <div className="member-row" key={user._id || user.email}><div className="member-name"><span className="avatar">{user.name?.slice(0, 2).toUpperCase()}</span><div><strong>{user.name}</strong><small>{user.email}</small></div></div><span>{user.team || 'Unassigned'}</span><span>{user.age || '—'}</span></div>)}</div>}</section>
}
export default Users
function PageIntro({ eyebrow, title, detail }) { return <div className="page-intro"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2><p>{detail}</p></div><span className="record-count">{usersLabel()}</span></div> }
function usersLabel() { return 'ALL ACCESS' }