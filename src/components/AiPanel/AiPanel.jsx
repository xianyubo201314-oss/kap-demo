import React, { useState } from 'react'
import './AiPanel.css'

const AiPanel = () => {
  const [selected, setSelected] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  if (collapsed) {
    return (
      <div className="ai-panel collapsed" onClick={() => setCollapsed(false)}>
        <div className="ai-header">
          <div className="ai-header-left">
            <AiIcon />
            <span className="ai-title">AI智能辅助</span>
          </div>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 9L7 5L11 9" stroke="#575859" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="ai-panel">
      {/* 头部 */}
      <div className="ai-header">
        <div className="ai-header-left">
          <AiIcon />
          <span className="ai-title">AI智能辅助</span>
        </div>
        <div className="ai-close" onClick={() => setCollapsed(true)}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 3L11 11M11 3L3 11" stroke="#898A8C" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>

      {/* 打标 badge */}
      <div
        className={`ai-badge ${selected ? 'ai-badge-selected' : ''}`}
        onClick={() => setSelected(v => !v)}
      >
        <span className="ai-badge-text">虚假宣传 80%</span>
      </div>

      <div className="ai-hint-row">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#898A8C" strokeWidth="1"/>
          <path d="M6 4.5V7M6 8V8.5" stroke="#898A8C" strokeWidth="1" strokeLinecap="round"/>
        </svg>
        <span className="ai-hint-text">推荐标签，单击可快速打标</span>
      </div>

      <div className="ai-divider"></div>

      {/* 举报信息 */}
      <div className="ai-section">
        <div className="ai-section-title">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 3C2 2.448 2.448 2 3 2H11C11.552 2 12 2.448 12 3V9C12 9.552 11.552 10 11 10H5L2 13V3Z" stroke="#252626" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
          <span className="ai-section-name">举报信息</span>
        </div>
        <div className="ai-items-box">
          <div className="ai-item">
            <span className="ai-item-tag">举报项</span>
            <span className="ai-item-text">抄袭、搬运、盗用他人作品：一比一抄袭我的原创视频，举报材料是本人主页截图。</span>
          </div>
          <div className="ai-item">
            <span className="ai-item-tag">数据关联</span>
            <span className="ai-item-text">未验证的销售数据与用户举报形成关联。</span>
          </div>
          <div className="ai-item">
            <span className="ai-item-tag">举报维度</span>
            <span className="ai-item-text">不实信息/过渡宣传，需验证数据真实性。</span>
          </div>
        </div>
      </div>

      <div className="ai-divider"></div>

      {/* 智能诊断 */}
      <div className="ai-section">
        <div className="ai-section-row">
          <div className="ai-section-title">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 4.5L1 7L2.5 9.5M11.5 4.5L13 7L11.5 9.5M8 2L6 12" stroke="#252626" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="ai-section-name">智能诊断</span>
          </div>
          <span className="ai-time-badge">
            <span className="ai-time-dots">
              <span className="tdt"></span><span className="tdt"></span><span className="tdt tall"></span>
            </span>
            00:12
          </span>
        </div>
        <div className="ai-items-box">
          <div className="ai-diag-item">
            <span className="diag-label">画面描述：</span>
            <span className="diag-val">标题为乡村助农标签 #安平助农专场</span>
          </div>
          <div className="ai-diag-item">
            <span className="diag-label">标题与语音：</span>
            <span className="diag-val">佛教用语与哲学内容未涉及迷信活动。</span>
          </div>
        </div>
      </div>

      <div className="ai-divider"></div>

      {/* 规则库匹配 */}
      <div className="ai-section">
        <div className="ai-section-row">
          <div className="ai-section-title">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 11.5L5.5 8L8.5 11L13 6.5M13 6.5H9.5M13 6.5V10" stroke="#252626" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span className="ai-section-name">规则库匹配</span>
          </div>
          <span className="ai-time-badge blue-badge">
            <span className="ai-time-dots">
              <span className="tdt blue-dot"></span><span className="tdt blue-dot"></span><span className="tdt tall blue-dot"></span>
            </span>
            01:29
          </span>
        </div>
        <div className="rule-card orange-rule">
          <span className="rule-name orange-name">《广告法》第九条</span>
          <span className="rule-desc orange-desc">禁止使用国家级、最高级、最佳等绝对话用语。</span>
        </div>
        <div className="rule-card red-rule">
          <span className="rule-name red-name">平台医疗规范</span>
          <span className="rule-desc red-desc">非专业医疗账号，禁止宣传治疗功效。</span>
        </div>
      </div>

      {/* 底部说明 */}
      <div className="ai-footer">
        <span className="ai-footer-text">AI 生成信息请谨慎使用</span>
        <div className="ai-feedback">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{cursor:'pointer'}}>
            <path d="M4 7.5V11M2 11V7.5H4M4 7.5L5.5 2H6.5C6.9 2 7.5 2.5 7.5 3V5H10L9 7.5H4Z" stroke="#898A8C" strokeWidth="0.9" strokeLinejoin="round"/>
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{cursor:'pointer', transform:'scaleY(-1)'}}>
            <path d="M4 7.5V11M2 11V7.5H4M4 7.5L5.5 2H6.5C6.9 2 7.5 2.5 7.5 3V5H10L9 7.5H4Z" stroke="#898A8C" strokeWidth="0.9" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

const AiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M10 3L14 7M10 3L3 10L7 14L14 7M10 3L8 5M14 7L12 9" stroke="url(#grad1)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="4" cy="2" r="0.8" fill="#326BFB" opacity="0.8"/>
    <circle cx="14" cy="11" r="0.7" fill="#9C27B0" opacity="0.8"/>
    <defs>
      <linearGradient id="grad1" x1="3" y1="3" x2="14" y2="14" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#326BFB"/>
        <stop offset="100%" stopColor="#9C27B0"/>
      </linearGradient>
    </defs>
  </svg>
)

export default AiPanel
