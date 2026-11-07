import { useState } from 'react'
import VotePanel from './components/VotePanel.jsx'
import LoginScreen from './components/LoginScreen.jsx'

export default function App() {
  const [platform, setPlatform] = useState(null)

  return (
    <>
      <main className="app-shell">
        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }

          .app-shell {
            height: 100dvh;
            max-height: 100dvh;
            width: 100%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #ffffff;
            box-sizing: border-box;
          }
        `}</style>
        <VotePanel onOpenLogin={setPlatform} />
      </main>

      {platform && (
        <LoginScreen platform={platform} onBack={() => setPlatform(null)} />
      )}
    </>
  )
}
