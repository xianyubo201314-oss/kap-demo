import React, { useEffect, useState } from 'react'
import './BottomBar.css'

const BottomBar = ({ onMark, activeTags = [] }) => {
  const [activeKey, setActiveKey] = useState(null)
  const [submitting, setSubmitting] = useState(false)

  // 快捷键列表数据 (提取自 376:4864 / 367:2560)
  const shortcuts = [
    { key: 'A', label: '政治相关',         color: '#F22D1F', bg: '#F22D1F1A' },
    { key: 'S', label: '未成年相关',       color: '#E2006C', bg: '#E2006C1A' },
    { key: 'R', label: '色情低俗',         color: '#E47600', bg: '#E476001A' },
    { key: 'G', label: '违法违规',         color: '#326BFB', bg: '#E5F1FF' },
    { key: 'D', label: '辱骂引战',         color: '#FF5539', bg: '#FF55391A' },
    { key: 'W', label: '不实信息',         color: '#757779', bg: '#5758591A' },
    { key: 'Q', label: '高热聚集问题-严重', color: '#9857FF', bg: '#9857FF1A' },
    { key: 'T', label: '应急临时标签',     color: '#2A711A', bg: '#28541E1A' },
    { key: 'P', label: '允许通过',         color: '#1E9E40', bg: '#DFF5DF' },
  ]

  const actionShortcuts = [
    { key: 'C', label: '提交',         color: '#326BFB', bg: '#E8F7FF' },
    { key: 'X', label: '提交并结束',   color: '#326BFB', bg: '#E8F7FF' },
  ]

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      const k = e.key.toUpperCase()
      const all = [...shortcuts, ...actionShortcuts]
      if (all.find(s => s.key === k)) {
        e.preventDefault()
        setActiveKey(k)
        if (k === 'C') handleSubmit(false)
        if (k === 'X') handleSubmit(true)
        setTimeout(() => setActiveKey(null), 150)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleSubmit = (andEnd) => {
    if (submitting) return
    setSubmitting(true)
    setTimeout(() => setSubmitting(false), 1200)
  }

  const triggerKey = (key) => {
    setActiveKey(key)
    setTimeout(() => setActiveKey(null), 150)
  }

  const renderShortcut = (s, index) => {
    const isPressing = activeKey === s.key
    const isMarked = activeTags && activeTags.some(t => t.key === s.key)
    
    // 如果该键是打标的键 (isMarked) 或 正在按下 (isPressing)，启用 active 样式
    const isActive = isPressing || isMarked
    const styleObj = {
      '--s-color': s.color,
      '--s-bg': s.bg
    }

    return (
      <div 
        key={`${s.key}-${index}`} 
        className={`bb-shortcut-item ${isActive ? 'active' : ''}`}
        style={styleObj}
        onClick={() => {
          triggerKey(s.key)
          if (s.key === 'C') handleSubmit(false)
          else if (s.key === 'X') handleSubmit(true)
          else if (onMark) onMark(s)
        }}
        title={`按下 ${s.key} 键`}
      >
        <div className="bb-key-badge">{s.key}</div>
        <span className="bb-shortcut-label">{s.label}</span>
      </div>
    )
  }

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-inner">
        {/* 左侧：快捷键区域 */}
        <div className="bb-left-section">
          <span className="bb-label">快捷键位</span>
          <div className="bb-shortcut-list">
            {shortcuts.map((s, idx) => renderShortcut(s, idx))}
          </div>
        </div>

        {/* 右侧：按钮区域 (合并了提交等功能按键为统一标签样式，外加图钉和真实的提交按钮) */}
        <div className="bb-right-section">
          {/* 图钉图标 */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="bb-pin-icon" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.5 2C8.5 1.72386 8.27614 1.5 8 1.5C7.72386 1.5 7.5 1.72386 7.5 2V5.51817C6.54124 5.72758 5.76019 6.37688 5.34005 7.21715L4.17062 9.55601C4.05584 9.78558 4 10.0381 4 10.2932V11C4 11.2761 4.22386 11.5 4.5 11.5H7.5V14.5C7.5 14.7761 7.72386 15 8 15C8.27614 15 8.5 14.7761 8.5 14.5V11.5H11.5C11.7761 11.5 12 11.2761 12 11V10.2932C12 10.0381 11.9442 9.78558 11.8294 9.55601L10.6599 7.21715C10.2398 6.37688 9.45876 5.72758 8.5 5.51817V2ZM8.5 6.53696C9.15585 6.72624 9.68962 7.17036 9.97677 7.74465L11 9.79111V10.5H5V9.79111L6.02323 7.74465C6.31038 7.17036 6.84415 6.72624 7.5 6.53696V6.5C7.5 6.22386 7.72386 6 8 6C8.27614 6 8.5 6.22386 8.5 6.5V6.53696Z" fill="#898A8C"/>
          </svg>

          {/* 提交并结束 */}
          <div 
            className={`bb-shortcut-item ${activeKey === 'X' ? 'active' : ''}`}
            onClick={() => { triggerKey('X'); handleSubmit(true) }}
            style={{
              '--s-color': '#326BFB',
              '--s-bg': '#FFFFFF',
              border: '1px solid #326BFB',
              paddingRight: '6px',
              borderRadius: '4px',
              height: '28px',
              opacity: submitting ? 0.6 : 1,
              pointerEvents: submitting ? 'none' : 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer'
            }}
          >
            <div className="bb-key-badge" style={{ background: 'transparent' }}>X</div>
            <span className="bb-shortcut-label" style={{ color: '#326BFB' }}>
              {submitting && activeKey === 'X' ? '提交中...' : '提交并结束'}
            </span>
          </div>

          {/* 提交 */}
          <div 
            className={`bb-shortcut-item ${activeKey === 'C' ? 'active' : ''}`}
            onClick={() => { triggerKey('C'); handleSubmit(false) }}
            style={{
              '--s-color': '#FFFFFF',
              '--s-bg': '#326BFB',
              background: '#326BFB',
              paddingRight: '6px',
              borderRadius: '4px',
              height: '28px',
              opacity: submitting ? 0.6 : 1,
              pointerEvents: submitting ? 'none' : 'auto'
            }}
          >
            <div className="bb-key-badge" style={{ color: '#FFFFFF', background: 'transparent' }}>C</div>
            <span className="bb-shortcut-label" style={{ color: '#FFFFFF' }}>
              {submitting && activeKey === 'C' ? '...' : '提交'}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar