import { useState } from 'react'
import BrandPanel from './components/BrandPanel.jsx'
import VotePanel from './components/VotePanel.jsx'
import LoginScreen from './components/LoginScreen.jsx'

export default function App() {
  const [platform, setPlatform] = useState(null)

  return (
    <>
      <div className="shell">
        <BrandPanel />
        <VotePanel onOpenLogin={setPlatform} />
      </div>
      {platform && (
        <LoginScreen platform={platform} onBack={() => setPlatform(null)} />
      )}
    </>
  )
}
