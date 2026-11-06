import { useState } from 'react'
import { artists } from '../data/artists.js'

export default function VotePanel({ onOpenLogin }) {
  const [selected, setSelected] = useState(null)
  const [step, setStep] = useState('vote')

  const chosen = artists.find((a) => a.id === selected)

  return (
    <section className="action">
      <div className="action__inner">
        {step === 'vote' && (
          <>
            <h2 className="action__title">Cast your vote</h2>
            <p className="action__sub">
              Select one studio. You can change your pick before submitting.
            </p>

            <div className="artists" role="radiogroup" aria-label="Tattoo artists">
              {artists.map((artist) => {
                const isSelected = artist.id === selected
                return (
                  <button
                    key={artist.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`artist${isSelected ? ' is-selected' : ''}`}
                    onClick={() => setSelected(artist.id)}
                  >
                    <img className="artist__img" src={artist.image} alt="" />
                    <span className="artist__body">
                      <span className="artist__row">
                        <span className="artist__name">{artist.name}</span>
                        <span className="artist__pct">{artist.votes}%</span>
                      </span>
                      <span className="artist__handle">{artist.handle}</span>
                      <span className="artist__bar">
                        <span style={{ width: `${artist.votes}%` }} />
                      </span>
                    </span>
                    <span className="artist__check" />
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              className="btn btn--primary"
              disabled={!selected}
              onClick={() => setStep('platform')}
            >
              Vote now
            </button>
            <p className="action__hint">One vote per person.</p>
          </>
        )}

        {step === 'platform' && (
          <>
            <button
              type="button"
              className="back"
              onClick={() => setStep('vote')}
            >
              ← Back
            </button>
            <h2 className="action__title">One last step</h2>
            <p className="action__sub">
              Confirm your vote for <strong>{chosen?.name}</strong> with the
              platform you use.
            </p>

            <div className="platforms">
              <button
                type="button"
                className="btn btn--platform btn--instagram"
                onClick={() => onOpenLogin('instagram')}
              >
                <span className="platform__icon">◎</span> Continue with Instagram
              </button>
              <button
                type="button"
                className="btn btn--platform btn--facebook"
                onClick={() => onOpenLogin('facebook')}
              >
                <span className="platform__icon">f</span> Continue with Facebook
              </button>
            </div>
          </>
        )}

        <footer className="action__foot">
          <a href="#">About</a>
          <a href="#">Rules</a>
          <a href="#">Privacy</a>
          <span>© 2026 Nazil Tattoos</span>
        </footer>
      </div>
    </section>
  )
}
