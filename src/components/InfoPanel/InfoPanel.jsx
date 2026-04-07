import React, { useState } from 'react'
import './InfoPanel.css'
import AiPanel from '../AiPanel/AiPanel'
import CommentPanel from '../CommentPanel/CommentPanel'

const InfoPanel = () => {
  const [asrOnly, setAsrOnly] = useState(false)
  const [ocrOnly, setOcrOnly] = useState(false)

  return (
    <div className="info-panel">

      {/* 举报信息卡片 */}
      <div className="report-card">
        {/* 顶部红色条 */}
        <div className="report-card-topbar"></div>

        {/* 卡片内容 */}
        <div className="report-card-body">
          {/* 上部：标签+敏感词 */}
          <div className="report-card-head">
            <div className="report-card-head-left">
              <span className="tag-primary-red">虚假宣传</span>
              <div className="sensitive-words-line">
                <span className="sw-label">标题敏感词:</span>
                {['#一如既往', '#药*', '#对赌', '#筹码', '#养生新贵', '#药食同源'].map((w, i) => (
                  <span key={i} className="sw-item sw-red">{w}</span>
                ))}
              </div>
            </div>
            <span className="hist-tag">历史进审:3次</span>
          </div>

          {/* 下部：举报分布+违规提示 */}
          <div className="report-card-foot">
            {/* 举报分布 */}
            <div className="info-row">
              <span className="info-label">举报分布:</span>
              <div className="tags-line">
                {['不实信息 21', '摆拍造假/虚假演绎 3', '虚假科普 6'].map((t, i) => (
                  <span key={i} className="tag-gray-sm">{t}</span>
                ))}
              </div>
            </div>

            <div className="divider-h"></div>

            {/* 违规提示 */}
            <div className="info-row">
              <span className="info-label">违规提示:</span>
              <div className="tags-line">
                {['涉及医疗夸大宣传', '夸大宣传', '夸大宣传'].map((t, i) => (
                  <span key={i} className="tag-orange-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ASR + OCR 并排 */}
      <div className="asr-ocr-row">

        {/* 语音识别ASR */}
        <div className="analysis-block">
          <div className="ab-header">
            <div className="ab-header-left">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 6V10M4.5 4V12M7 2V14M9.5 4V12M12 6V10" stroke="#575859" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              <span className="ab-title">语音识别ASR</span>
            </div>
            <div className="ab-toggle" onClick={() => setAsrOnly(v => !v)}>
              <span className="toggle-label">仅展示命中风险</span>
              <div className={`mini-sw ${asrOnly ? 'on' : ''}`}>
                <div className="sw-dot"></div>
              </div>
            </div>
          </div>
          <div className="ab-body">
            <div className="sw-tags-row">
              {['#药食同源', '#养生新贵', '#健康养胃'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-red">{w}</span>
              ))}
              {['#孕', '#窥'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-green">{w}</span>
              ))}
              {['#筹码', '#对赌', '#镀金'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-orange">{w}</span>
              ))}
            </div>
            {!asrOnly && (
              <div className="ab-fulltext">
                生于山野向阳而生。它是山药湖泊河畔，沃土生金。这里是安平。这里是河北安平国家地理标志保护产品，安平小白嘴山药的核心原产地。北纬38度黄金种植在和厅厚的水土光热，<span className="hl-green">孕</span>育出了山药界的真皮。
                皮毛色白，肉质如玉，细糯甜香，易煮易烂，<span className="hl-red">药食同源</span>。<span className="hl-red">健康养胃</span>，历经千年种植，传承，从古时滋补圣品，到如今百姓日常健康食材。然而，就在这看似寻常的滋补背后，却藏着一条外人难以<span className="hl-green">窥</span>见的、错综复杂的利益暗流。一根根白如玉、糯如蜜的小白嘴山药，从安平的沃土中被挖出，更是市场上博弈的<span className="hl-orange">筹码</span>。
              </div>
            )}
          </div>
        </div>

        {/* 视频OCR */}
        <div className="analysis-block">
          <div className="ab-header">
            <div className="ab-header-left">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="#575859" strokeWidth="1.3"/>
                <path d="M5 6H11M5 8.5H9M5 11H7" stroke="#575859" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span className="ab-title">视频OCR</span>
            </div>
            <div className="ab-toggle" onClick={() => setOcrOnly(v => !v)}>
              <span className="toggle-label">仅展示命中风险</span>
              <div className={`mini-sw ${ocrOnly ? 'on' : ''}`}>
                <div className="sw-dot"></div>
              </div>
            </div>
          </div>
          <div className="ab-body">
            <div className="sw-tags-row">
              {['#小白嘴', '#药食同源', '#养生新贵'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-red">{w}</span>
              ))}
              {['#孕', '#窥'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-green">{w}</span>
              ))}
              {['#筹码', '#色'].map((w, i) => (
                <span key={i} className="sw-tag sw-tag-orange">{w}</span>
              ))}
            </div>
            {!ocrOnly && (
              <div className="ab-fulltext">
                北纬38度黄金种植在和厅厚的水土光热，<span className="hl-green">孕</span>育出了山药界的真皮。
                皮毛色白，肉质如玉，细糯甜香，易煮易烂，<span className="hl-red">药食同源</span>。<span className="hl-red">健康养胃</span>，历经千年种植，传承，从古时滋补圣品，到如今百姓日常健康食材。然而，就在这看似寻常的滋补背后，却藏着一条外人难以<span className="hl-green">窥</span>见的、错综复杂的利益暗流。更是市场上博弈的<span className="hl-orange">筹码</span>。这些年，随着"<span className="hl-red">药食同源</span>"理念的爆火，安平小白嘴这个千年品种，被炒成了"<span className="hl-red">养生新贵</span>"。
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 评论区 + AI辅助 并排 */}
      <div className="bottom-panels-row">
        <div className="comment-wrap">
          <CommentPanel />
        </div>
        <div className="ai-wrap">
          <AiPanel />
        </div>
      </div>
    </div>
  )
}

export default InfoPanel
