import React, { useState, useEffect } from 'react'
import './TopBar.css'

const TopBar = () => {
  const [activeTab, setActiveTab] = useState('审核')
  const [reviewTime, setReviewTime] = useState({ h: 1, m: 24, s: 17 })
  const [isTiming, setIsTiming] = useState(true)

  useEffect(() => {
    if (!isTiming) return
    const timer = setInterval(() => {
      setReviewTime(prev => {
        let { h, m, s } = prev
        s++
        if (s >= 60) { s = 0; m++ }
        if (m >= 60) { m = 0; h++ }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [isTiming])

  const formatTime = ({ h, m, s }) =>
    `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`

  const tabs = ['审核', '用餐', '小休', '其他']

  return (
    <div className="top-bar">
      <div className="top-bar-inner">
        {/* 左侧 */}
        <div className="top-bar-left">
          <div className="title-area">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="nav-icon" onClick={() => window.history.back()}>
              <path d="M10 3L5 8L10 13" stroke="#252626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="title-text">高举报视频专审</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="nav-icon" onClick={() => navigator.clipboard?.writeText('高举报视频专审')}>
              <rect x="1.5" y="4.5" width="8.5" height="9.5" rx="1" stroke="#898A8C" strokeWidth="1.3" fill="none"/>
              <path d="M4.5 4.5V3C4.5 2.448 4.948 2 5.5 2H12.5C13.052 2 13.5 2.448 13.5 3V10C13.5 10.552 13.052 11 12.5 11H11" stroke="#898A8C" strokeWidth="1.3" fill="none"/>
            </svg>
          </div>

          <div className="queue-stats">
            <span className="stat-label">待审量</span>
            <span className="stat-number">3877</span>
            <div className="vline"></div>
            <span className="stat-label">待领取</span>
            <span className="stat-number">3023</span>
          </div>
        </div>

        {/* 右侧 */}
        <div className="top-bar-right">
          <div className="metrics-pill">
            <span className="metric-label">审核时长</span>
            <div className="metric-time-wrapper">
              <span className="metric-value time">{formatTime(reviewTime)}</span>
              <div className="time-controls">
                <button 
                  className={`time-btn ${!isTiming ? 'active' : ''}`} 
                  onClick={() => setIsTiming(true)} 
                  title="开始"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M4 2.5L10 6L4 9.5V2.5Z" fill="currentColor"/>
                  </svg>
                </button>
                <button 
                  className={`time-btn ${isTiming ? 'active' : ''}`} 
                  onClick={() => setIsTiming(false)} 
                  title="暂停"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="3.5" y="3" width="2" height="6" rx="0.5" fill="currentColor"/>
                    <rect x="6.5" y="3" width="2" height="6" rx="0.5" fill="currentColor"/>
                  </svg>
                </button>
              </div>
            </div>
            <div className="pill-divider"></div>
            <span className="metric-label">审核量</span>
            <span className="metric-value">9999</span>
            <div className="pill-divider"></div>
            <span className="metric-label">AHT</span>
            <span className="metric-value">49.9</span>
          </div>

          <div className="tab-group">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === '其他' && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div className="avatar-wrap">
            <div className="avatar-circle"></div>
            <div className="avatar-dot"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
