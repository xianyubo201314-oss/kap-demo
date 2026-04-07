import React, { useState, useEffect } from 'react'
import './ImagePreview.css'

export default function ImagePreview({ images, initialIndex = 0, onClose }) {
  const [cur, setCur] = useState(initialIndex)
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)

  const total = images.length
  
  const handlePrev = (e) => { e.stopPropagation(); setCur(c => Math.max(0, c - 1)); setScale(1); setRotate(0); }
  const handleNext = (e) => { e.stopPropagation(); setCur(c => Math.min(total - 1, c + 1)); setScale(1); setRotate(0); }

  const handleZoomIn = (e) => { e.stopPropagation(); setScale(s => s + 0.2) }
  const handleZoomOut = (e) => { e.stopPropagation(); setScale(s => Math.max(0.2, s - 0.2)) }
  const handleRotateLeft = (e) => { e.stopPropagation(); setRotate(r => r - 90) }
  const handleRotateRight = (e) => { e.stopPropagation(); setRotate(r => r + 90) }

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') setCur(c => Math.max(0, c - 1))
      if (e.key === 'ArrowRight') setCur(c => Math.min(total - 1, c + 1))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [total, onClose])

  return (
    <div className="ip-overlay" onClick={onClose}>
      {/* 顶部工具栏 (504:23075) */}
      <div className="ip-topbar" onClick={e => e.stopPropagation()}>
        {/* 左侧页码胶囊 */}
        <div className="ip-badge">{cur + 1}/{total}</div>
        
        {/* 右侧工具组 */}
        <div className="ip-tools">
          <div className="ip-tool-group">
            <img src="/figma-504-23084.png" alt="zoom-in" className="ip-icon" onClick={handleZoomIn} />
            <img src="/figma-504-23081.png" alt="zoom-out" className="ip-icon" onClick={handleZoomOut} />
          </div>
          <div className="ip-divider" />
          <div className="ip-tool-group">
            <img src="/figma-504-23089.png" alt="rotate-left" className="ip-icon" onClick={handleRotateLeft} />
            <img src="/figma-504-23091.png" alt="rotate-right" className="ip-icon" onClick={handleRotateRight} />
          </div>
          <div className="ip-divider" />
          <img src="/figma-504-23094.png" alt="close" className="ip-close" onClick={onClose} />
        </div>
      </div>

      {/* 中间主图区 */}
      <div className="ip-main">
        {/* 左箭头 */}
        {cur > 0 ? (
          <div className="ip-arrow-wrap ip-arrow-left" onClick={handlePrev}>
            <img src="/figma-372-4048.png" alt="prev" className="ip-arrow" />
          </div>
        ) : <div className="ip-arrow-wrap ip-arrow-left ip-disabled" />}
        
        {/* 居中图片 */}
        <div className="ip-img-container" onClick={e => e.stopPropagation()}>
          <img 
            src={images[cur]} 
            alt="preview" 
            className="ip-image" 
            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
          />
        </div>
        
        {/* 右箭头 */}
        {cur < total - 1 ? (
          <div className="ip-arrow-wrap ip-arrow-right" onClick={handleNext}>
            <img src="/figma-372-4049.png" alt="next" className="ip-arrow" />
          </div>
        ) : <div className="ip-arrow-wrap ip-arrow-right ip-disabled" />}
      </div>

      {/* 底部略缩图区 */}
      <div className="ip-bottom" onClick={e => e.stopPropagation()}>
        <div className="ip-thumbnails">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`ip-thumb-item ${idx === cur ? 'active' : ''}`}
              onClick={() => {
                setCur(idx)
                setScale(1)
                setRotate(0)
              }}
            >
              <img src={img} alt={`thumb-${idx}`} className="ip-thumb-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
