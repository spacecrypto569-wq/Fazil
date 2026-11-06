import { useState } from 'react'
import { artists } from '../data/artists.js'
import { Check, ArrowLeft, Sparkles, ShieldCheck } from 'lucide-react'

export default function VotePanel({ onOpenLogin }) {
  const [selected, setSelected] = useState(null)
  const [step, setStep] = useState('vote')

  const chosen = artists.find((a) => a.id === selected)

  return (
    <section className="vote-panel-light">
      <style>{`
        .vote-panel-light {
          --vp-bg: #ffffff;
          --vp-surface: #f8fafc;
          --vp-surface-hover: #f1f5f9;
          --vp-card-selected: #fff1f2;
          --vp-border: #e2e8f0;
          --vp-border-hover: #cbd5e1;
          --vp-border-selected: #f43f5e;
          --vp-text-primary: #0f172a;
          --vp-text-secondary: #475569;
          --vp-text-muted: #94a3b8;
          --vp-accent: #f43f5e;
          --vp-accent-hover: #e11d48;
          --vp-accent-gradient: linear-gradient(135deg, #f43f5e 0%, #fb7185 50%, #f97316 100%);
          --vp-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
          --vp-shadow-md: 0 4px 16px -2px rgba(15, 23, 42, 0.08);
          --vp-shadow-selected: 0 8px 24px -4px rgba(244, 63, 94, 0.18);

          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          background: var(--vp-bg);
          color: var(--vp-text-primary);
          font-family: inherit;
          box-sizing: border-box;
          min-height: 100%;
        }

        .vp-inner {
          width: 100%;
          max-width: 440px;
          min-width: 0;
          display: flex;
          flex-direction: column;
        }

        /* Pill Badge */
        .vp-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          padding: 5px 11px;
          border-radius: 999px;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #334155;
          margin-bottom: 14px;
        }

        .vp-badge-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.25);
          animation: vpPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes vpPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        .vp-title {
          margin: 0;
          font-size: 28px;
          font-weight: 700;
          color: var(--vp-text-primary);
          letter-spacing: -0.025em;
          line-height: 1.2;
        }

        .vp-desc {
          margin: 8px 0 0;
          font-size: 14px;
          line-height: 1.55;
          color: var(--vp-text-secondary);
        }

        /* Artist Cards */
        .vp-artists {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 24px 0 22px;
        }

        .vp-card {
          display: flex;
          align-items: center;
          gap: 14px;
          width: 100%;
          padding: 12px 14px;
          background: var(--vp-surface);
          border: 1.5px solid var(--vp-border);
          border-radius: 16px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: var(--vp-shadow-sm);
        }

        .vp-card:hover {
          background: var(--vp-surface-hover);
          border-color: var(--vp-border-hover);
          transform: translateY(-1px);
          box-shadow: var(--vp-shadow-md);
        }

        .vp-card.is-active {
          background: var(--vp-card-selected);
          border-color: var(--vp-border-selected);
          box-shadow: var(--vp-shadow-selected);
          transform: translateY(-1px);
        }

        .vp-avatar-wrap {
          position: relative;
          width: 52px;
          height: 52px;
          flex: none;
        }

        .vp-avatar {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(0, 0, 0, 0.06);
          background: #e2e8f0;
        }

        .vp-content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .vp-row-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
        }

        .vp-name {
          font-size: 15px;
          font-weight: 700;
          color: var(--vp-text-primary);
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .vp-pct {
          font-size: 13px;
          font-weight: 700;
          color: var(--vp-text-primary);
          font-variant-numeric: tabular-nums;
        }

        .vp-handle {
          font-size: 12px;
          color: var(--vp-text-muted);
          font-weight: 500;
        }

        .vp-track {
          width: 100%;
          height: 5px;
          border-radius: 999px;
          background: #e2e8f0;
          overflow: hidden;
          margin-top: 4px;
        }

        .vp-fill {
          height: 100%;
          border-radius: inherit;
          background: var(--vp-accent-gradient);
          transition: width 0.5s ease;
        }

        /* Checkbox Indicator */
        .vp-indicator {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 1.5px solid #cbd5e1;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: none;
          transition: all 0.2s ease;
        }

        .vp-card:hover .vp-indicator {
          border-color: #94a3b8;
        }

        .vp-card.is-active .vp-indicator {
          border-color: var(--vp-border-selected);
          background: var(--vp-accent);
          color: #ffffff;
        }

        /* Primary Button */
        .vp-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          height: 50px;
          border-radius: 14px;
          border: none;
          background: var(--vp-accent-gradient);
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(244, 63, 94, 0.35);
        }

        .vp-submit-btn:hover:not(:disabled) {
          filter: brightness(1.05);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(244, 63, 94, 0.42);
        }

        .vp-submit-btn:active:not(:disabled) {
          transform: translateY(0);
        }

        .vp-submit-btn:disabled {
          background: #f1f5f9;
          color: #94a3b8;
          border: 1px solid #e2e8f0;
          box-shadow: none;
          cursor: not-allowed;
        }

        /* Notice / Footer */
        .vp-security-note {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 14px 0 0;
          font-size: 12px;
          color: var(--vp-text-secondary);
        }

        .vp-security-note svg {
          color: #10b981;
        }

        /* Platform Step */
        .vp-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid var(--vp-border);
          background: var(--vp-surface);
          color: var(--vp-text-secondary);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 20px;
          transition: all 0.15s ease;
        }

        .vp-back-btn:hover {
          background: var(--vp-surface-hover);
          color: var(--vp-text-primary);
          border-color: var(--vp-border-hover);
        }

        .vp-selection-recap {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: #fff;
          border: 1.5px solid #fed7aa;
          background: linear-gradient(to right, #fff7ed, #fff);
          border-radius: 14px;
          margin: 18px 0 24px;
        }

        .vp-selection-avatar {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          object-fit: cover;
        }

        .vp-platform-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 10px 0;
        }

        .vp-platform-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          height: 48px;
          padding: 0 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          border: 1px solid var(--vp-border);
          background: #ffffff;
          color: var(--vp-text-primary);
          cursor: pointer;
          transition: all 0.18s ease;
          box-shadow: var(--vp-shadow-sm);
        }

        .vp-platform-btn:hover {
          background: var(--vp-surface);
          border-color: var(--vp-border-hover);
          transform: translateY(-1px);
          box-shadow: var(--vp-shadow-md);
        }

        .vp-platform-icon {
          display: grid;
          place-items: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          flex: none;
        }

        .vp-icon-instagram {
          background: linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%);
        }

        .vp-icon-facebook {
          background: #1877f2;
        }

        /* Footer */
        .vp-footer {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
          margin-top: 36px;
          padding-top: 20px;
          border-top: 1px solid var(--vp-border);
          font-size: 12px;
          color: var(--vp-text-muted);
        }

        .vp-footer a {
          color: var(--vp-text-secondary);
          transition: color 0.15s ease;
        }

        .vp-footer a:hover {
          color: var(--vp-text-primary);
        }

        .vp-copyright {
          margin-left: auto;
          font-size: 11px;
        }

        @media (max-width: 960px) {
          .vote-panel-light {
            padding: 36px 20px 48px;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="vp-inner">
        {step === 'vote' && (
          <>
            <div className="vp-badge">
              <span className="vp-badge-dot" />
              <span>Official Ballot · Season 2026</span>
            </div>

            <h2 className="vp-title">Cast your vote</h2>
            <p className="vp-desc">
              Select one studio from the lineup below. Your support counts directly toward this season's recognition.
            </p>

            <div className="vp-artists" role="radiogroup" aria-label="Tattoo artists">
              {artists.map((artist) => {
                const isSelected = artist.id === selected
                return (
                  <button
                    key={artist.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`vp-card${isSelected ? ' is-active' : ''}`}
                    onClick={() => setSelected(artist.id)}
                  >
                    <div className="vp-avatar-wrap">
                      <img className="vp-avatar" src={artist.image} alt={artist.name} />
                    </div>

                    <div className="vp-content">
                      <div className="vp-row-top">
                        <span className="vp-name">{artist.name}</span>
                        <span className="vp-pct">{artist.votes}%</span>
                      </div>
                      <span className="vp-handle">{artist.handle}</span>
                      <div className="vp-track">
                        <div
                          className="vp-fill"
                          style={{ width: `${artist.votes}%` }}
                        />
                      </div>
                    </div>

                    <div className="vp-indicator">
                      {isSelected && <Check size={14} strokeWidth={3} />}
                    </div>
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              className="vp-submit-btn"
              disabled={!selected}
              onClick={() => setStep('platform')}
            >
              <Sparkles size={16} />
              <span>Vote for {chosen ? chosen.name : 'Selected Artist'}</span>
            </button>

            <div className="vp-security-note">
              <ShieldCheck size={14} />
              <span>One verified ballot per voter • Free & transparent</span>
            </div>
          </>
        )}

        {step === 'platform' && (
          <>
            <button
              type="button"
              className="vp-back-btn"
              onClick={() => setStep('vote')}
            >
              <ArrowLeft size={14} />
              <span>Back to studios</span>
            </button>

            <h2 className="vp-title">One last step</h2>
            <p className="vp-desc">
              Confirm your vote to help prevent duplicate entries and keep the poll fair.
            </p>

            {chosen && (
              <div className="vp-selection-recap">
                <img className="vp-selection-avatar" src={chosen.image} alt={chosen.name} />
                <div>
                  <div style={{ fontSize: 11, color: '#c2410c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Voting for
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: '#0f172a' }}>
                    {chosen.name}
                  </div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>
                    {chosen.handle}
                  </div>
                </div>
              </div>
            )}

            <div className="vp-platform-list">
              <button
                type="button"
                className="vp-platform-btn"
                onClick={() => onOpenLogin('instagram')}
              >
                <span className="vp-platform-icon vp-icon-instagram">◎</span>
                <span>Continue with Instagram</span>
              </button>

              <button
                type="button"
                className="vp-platform-btn"
                onClick={() => onOpenLogin('facebook')}
              >
                <span className="vp-platform-icon vp-icon-facebook">f</span>
                <span>Continue with Facebook</span>
              </button>
            </div>
          </>
        )}

        <footer className="vp-footer">
          <a href="#">About</a>
          <a href="#">Rules</a>
          <a href="#">Privacy</a>
          <span className="vp-copyright">© 2026 Nazil Tattoos</span>
        </footer>
      </div>
    </section>
  )
}
