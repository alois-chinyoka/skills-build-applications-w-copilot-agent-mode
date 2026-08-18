import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities'
import Leaderboard from './components/Leaderboard'
import Teams from './components/Teams'
import Users from './components/Users'
import Workouts from './components/Workouts'
import './App.css'

const navigation = [
  { to: '/activities', label: 'Activities', icon: '↗' },
  { to: '/leaderboard', label: 'Leaderboard', icon: '№' },
  { to: '/teams', label: 'Teams', icon: '◈' },
  { to: '/users', label: 'Members', icon: '◌' },
  { to: '/workouts', label: 'Workouts', icon: '✦' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-mark">O<span>•</span></div>
        <div className="brand-copy"><strong>Octofit</strong><small>Tracker / 01</small></div>
        <nav aria-label="Primary navigation">
          {navigation.map((item) => <NavLink className="nav-link" key={item.to} to={item.to}><span className="nav-icon" aria-hidden="true">{item.icon}</span>{item.label}</NavLink>)}
        </nav>
        <div className="sidebar-footer"><span className="status-dot" /> API connected<small>Build your strongest week.</small></div>
      </aside>
      <main className="main-content">
        <header className="topbar"><div><span className="eyebrow">TEAM PERFORMANCE SYSTEM</span><h1>Make your move.</h1></div><div className="today-label">Tuesday <strong>18 Aug 2026</strong></div></header>
        <Routes>
          <Route path="/" element={<Navigate replace to="/activities" />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
