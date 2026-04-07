import React, { useState } from 'react'
import ImagePreview from '../ImagePreview/ImagePreview'
import './GalleryPage.css'
import './responsive.css' // 引入自适应样式

/**
 * GalleryPage - 对照设计稿：顶栏「2/8」+ 关闭、浅灰底、5×2 网格、选中红框
 */

// 图集顺序（与 lightbox 翻页一致）
const ALL_IMAGES = [
  '/figma-372-3989.png',
  '/figma-394-5908.png',
  '/figma-372-4000.png',
  '/figma-394-5917.png',
  '/figma-394-5882.png',
  '/figma-394-5921.png',
  '/figma-394-5873.png',
  '/figma-394-5925.png',
  '/figma-394-5900.png',
  '/figma-394-5929.png',
]

// 行优先排布（首行：山/海鹦/温室…），lightboxIndex 对应 ALL_IMAGES 下标
const GALLERY_SLOTS = [
  { lightboxIndex: 0, src: '/figma-372-3989.png', showPlay: true },
  { lightboxIndex: 1, src: '/figma-394-5908.png', showHand: true },
  { lightboxIndex: 2, src: '/figma-372-4000.png' },
  { lightboxIndex: 4, src: '/figma-394-5882.png' },
  { lightboxIndex: 5, src: '/figma-394-5921.png' },
  { lightboxIndex: 3, src: '/figma-394-5917.png' },
  { lightboxIndex: 7, src: '/figma-394-5925.png' },
  { lightboxIndex: 6, src: '/figma-394-5873.png' },
  { lightboxIndex: 8, src: '/figma-394-5900.png' },
  { lightboxIndex: 9, src: '/figma-394-5929.png' },
]

const GalleryPage = ({ onBack }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (idx) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)

  return (
    <div className="gp-root">
      {lightboxIndex !== null && (
        <ImagePreview images={ALL_IMAGES} initialIndex={lightboxIndex} onClose={closeLightbox} />
      )}

      <header className="gp-header">
        <span className="gp-count">2/8</span>
        <button type="button" className="gp-close-btn" onClick={onBack} aria-label="关闭">
          <img src="/figma-504-23102.png" alt="" className="gp-close-icon" />
        </button>
      </header>

      <div className="gp-grid">
        {GALLERY_SLOTS.map((item, slotIndex) => {
          return (
          <div
            key={item.src + slotIndex}
            className="gp-thumb"
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
              alt=""
              className="gp-thumb-img"
              draggable={false}
            />
            {item.showPlay && (
              <img src="/figma-372-3990.png" alt="" className="gp-play-overlay" draggable={false} />
            )}
            {item.showHand && (
              <img src="/figma-372-4031.png" alt="" className="gp-hand-overlay" draggable={false} />
            )}
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default GalleryPage
