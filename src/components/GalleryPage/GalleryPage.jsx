import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ImagePreview from '../ImagePreview/ImagePreview'
import { GALLERY_ITEMS, GALLERY_IMAGE_URLS } from '../../data/galleryImages'
import './GalleryPage.css'
import './responsive.css' // 引入自适应样式

/**
 * GalleryPage - 全屏蒙层图集：高清 9:16 远程图，部分选中红框
 */

// 行优先网格：第 0 格带「视频」播放角标
const GALLERY_SLOTS = GALLERY_ITEMS.map((item, idx) => ({
  key: item.id,
  lightboxIndex: idx,
  src: item.url,
  alt: item.alt,
  showPlay: idx === 0,
}))

// 仅部分缩略图显示统一红框（行优先下标）
const SELECTED_SLOT_INDEXES = new Set([3, 4, 8, 9])

const GalleryPage = ({ onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  return createPortal(
    <div className="gp-root">
      {lightboxIndex !== null && (
        <ImagePreview images={GALLERY_IMAGE_URLS} initialIndex={lightboxIndex} onClose={closeLightbox} />
      )}

      <div className="gp-modal">
        <header className="gp-header">
          <span className="gp-count">2/8</span>
          <button type="button" className="gp-close-btn" onClick={onBack} aria-label="关闭">
            <span className="gp-close-icon" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </header>

        <div className="gp-grid">
          {GALLERY_SLOTS.map((item, slotIndex) => (
            <div
              key={item.key}
              className={`gp-thumb${SELECTED_SLOT_INDEXES.has(slotIndex) ? ' gp-thumb--selected' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => openLightbox(item.lightboxIndex)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(item.lightboxIndex)
                }
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="gp-thumb-img"
                draggable={false}
                loading="lazy"
                decoding="async"
              />
              {item.showPlay && (
                <span className="gp-play-overlay" aria-hidden="true">
                  <span className="gp-play-triangle" />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  )
}

export default GalleryPage
