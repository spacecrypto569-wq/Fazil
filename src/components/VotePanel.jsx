import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

const pollOptions = [
  {
    id: 'opt-1',
    name: 'Ever True Tattoos',
    percent: 36,
    img: '/imgs/ocean.jpeg',
  },
  {
    id: 'opt-2',
    name: 'Down Beats ink',
    percent: 31,
    img: '/imgs/rockin.jpeg',
  },
  {
    id: 'opt-3',
    name: 'Safe House Tattoo',
    percent: 14,
    img: '/imgs/rnj.jpeg',
  },
]

export default function VotePanel({ onOpenLogin }) {
  const [selected, setSelected] = useState('opt-1')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePlatformClick = (platform) => {
    setIsModalOpen(false)
    if (onOpenLogin) {
      onOpenLogin(platform)
    }
  }

  return (
    <div className="poll-viewport-container">
      <style>{`
        .poll-viewport-container {
          width: 100%;
          max-width: 430px;
          height: 100dvh;
          max-height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(10px, 2vh, 16px) clamp(12px, 3vw, 18px);
          box-sizing: border-box;
          overflow: hidden;
          background: #ffffff;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          color: #0f172a;
        }

        .poll-header {
          text-align: center;
          font-size: clamp(16px, 2.3vh, 19px);
          font-weight: 700;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 0 0 clamp(6px, 1.2vh, 10px) 0;
          flex: none;
          letter-spacing: -0.02em;
        }

        .poll-header img {
          width: clamp(20px, 2.6vh, 25px);
          height: clamp(20px, 2.6vh, 25px);
          object-fit: contain;
        }

        /* Seamless contiguous card group - NO space between items */
        .poll-group {
          display: flex;
          flex-direction: column;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 2px 14px -3px rgba(15, 23, 42, 0.07);
          flex: 1;
          min-height: 0;
          gap: 0;
        }

        .poll-item {
          display: flex;
          flex-direction: column;
          padding: clamp(6px, 1vh, 10px) clamp(10px, 1.5vh, 14px);
          cursor: pointer;
          background: #ffffff;
          box-sizing: border-box;
          transition: background-color 0.18s ease;
          border-bottom: 1px solid #f1f5f9;
          flex: 1;
          min-height: 0;
          position: relative;
        }

        .poll-item:last-child {
          border-bottom: none;
        }

        .poll-item:hover {
          background: #f8fafc;
        }

        .poll-item.selected {
          background: #f8fbff;
        }

        .poll-item.selected::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3.5px;
          background: #0d6efd;
        }

        .poll-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: none;
          margin-bottom: clamp(3px, 0.6vh, 6px);
        }

        .poll-item-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .poll-circle {
          width: clamp(15px, 2vh, 17px);
          height: clamp(15px, 2vh, 17px);
          border-radius: 50%;
          border: 1.8px solid #cbd5e1;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          flex: none;
          background: #ffffff;
          transition: all 0.16s ease;
        }

        .poll-item.selected .poll-circle {
          border-color: #0d6efd;
          background: #0d6efd;
        }

        .poll-item.selected .poll-circle::after {
          content: '';
          width: 5px;
          height: 5px;
          background: #ffffff;
          border-radius: 50%;
        }

        .poll-name {
          font-size: clamp(13px, 1.8vh, 15px);
          font-weight: 600;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .poll-percent {
          font-size: clamp(12px, 1.7vh, 13.5px);
          font-weight: 700;
          color: #475569;
          font-variant-numeric: tabular-nums;
        }

        .poll-item.selected .poll-percent {
          color: #0d6efd;
        }

        .poll-progress-track {
          height: clamp(3px, 0.6vh, 5px);
          width: 100%;
          background: #f1f5f9;
          border-radius: 999px;
          overflow: hidden;
          margin-bottom: clamp(4px, 0.7vh, 7px);
          flex: none;
        }

        .poll-progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #2563eb 0%, #3b82f6 100%);
          transition: width 0.4s ease;
        }

        .poll-img-wrap {
          flex: 1;
          min-height: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: 6px;
          background: #f8fafc;
          border: 1px solid rgba(0, 0, 0, 0.03);
        }

        .poll-artist-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .btn-vote-now {
          margin-top: clamp(8px, 1.4vh, 12px);
          width: 100%;
          height: clamp(40px, 5.2vh, 46px);
          background: #0d6efd;
          color: #ffffff;
          font-size: clamp(14px, 1.9vh, 15.5px);
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex: none;
          box-shadow: 0 4px 14px rgba(13, 110, 253, 0.28);
          transition: background-color 0.16s ease, transform 0.14s ease, box-shadow 0.16s ease;
        }

        .btn-vote-now:hover {
          background-color: #0b5ed7;
          box-shadow: 0 6px 18px rgba(13, 110, 253, 0.35);
          transform: translateY(-1px);
        }

        .btn-vote-now:active {
          transform: translateY(0);
        }

        /* Modal */
        .vote-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: rgba(0, 0, 0, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          backdrop-filter: blur(2px);
        }

        .vote-modal-dialog {
          background: #ffffff;
          width: 100%;
          max-width: 380px;
          border-radius: 14px;
          padding: 24px 20px;
          position: relative;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.22);
        }

        .btn-close-modal {
          position: absolute;
          top: 14px;
          right: 14px;
          background: transparent;
          border: none;
          color: #94a3b8;
          cursor: pointer;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
        }

        .btn-close-modal:hover {
          color: #0f172a;
          background: #f1f5f9;
        }

        .modal-headline {
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 12px 0 24px;
        }

        .modal-platform-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .platform-btn-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
          border: none;
          cursor: pointer;
          flex: 1 1 130px;
          transition: opacity 0.15s, transform 0.15s;
        }

        .platform-btn-link:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .platform-instagram {
          background-color: #ee3102;
        }

        .platform-facebook {
          background-color: #0c79cd;
        }

        .platform-svg-icon {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }
      `}</style>

      <header className="poll-header">
        <img
          src="https://cdn-icons-png.flaticon.com/512/927/927295.png"
          alt="Vote"
        />
        <span>Vote Your Favourite Tattoo Artist!</span>
      </header>

      <div className="poll-group" role="radiogroup">
        {pollOptions.map((opt) => {
          const isSelected = selected === opt.id
          return (
            <div
              key={opt.id}
              className={`poll-item ${isSelected ? 'selected' : ''}`}
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelected(opt.id)}
            >
              <div className="poll-item-row">
                <div className="poll-item-left">
                  <span className="poll-circle" />
                  <span className="poll-name">{opt.name}</span>
                </div>
                <span className="poll-percent">{opt.percent}%</span>
              </div>

              <div className="poll-progress-track">
                <div
                  className="poll-progress-fill"
                  style={{ width: `${opt.percent}%` }}
                />
              </div>

              <div className="poll-img-wrap">
                <img
                  className="poll-artist-img"
                  src={opt.img}
                  alt={opt.name}
                />
              </div>
            </div>
          )
        })}
      </div>

      <button
        type="button"
        className="btn-vote-now"
        onClick={() => setIsModalOpen(true)}
      >
        <ArrowRight size={18} />
        <span>Vote now</span>
      </button>

      {isModalOpen && (
        <div
          className="vote-modal-backdrop"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="vote-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="btn-close-modal"
              aria-label="Close"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={18} />
            </button>

            <h3 className="modal-headline">Vote with Prefered Platform</h3>

            <div className="modal-platform-group">
              <button
                type="button"
                className="platform-btn-link platform-instagram"
                onClick={() => handlePlatformClick('instagram')}
              >
                <svg
                  className="platform-svg-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </button>

              <button
                type="button"
                className="platform-btn-link platform-facebook"
                onClick={() => handlePlatformClick('facebook')}
              >
                <svg
                  className="platform-svg-icon"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
