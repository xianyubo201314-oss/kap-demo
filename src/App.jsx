import React, { useState, useEffect, useRef } from 'react'
import TopBar from './components/TopBar/TopBar'
import VideoCard from './components/VideoCard/VideoCard'
import GalleryPage from './components/GalleryPage/GalleryPage'
import BottomBar from './components/BottomBar/BottomBar'
import { MOCK_CASES } from './data/mockCases'
import './App.css'

function App() {
  const [page, setPage] = useState('review') // 'review' | 'gallery'
  const [activeIndex, setActiveIndex] = useState(0)
  // 保存每个case的打标标签
  const [caseTags, setCaseTags] = useState({})
  
  // 初始化每个 case 绑定的数据源，防止热更新导致的重置并允许独立变化
  const [caseDataList] = useState([...MOCK_CASES])
  const observerRef = useRef(null)

  useEffect(() => {
    if (page !== 'review') return;
    
    const options = {
      root: document.querySelector('.main-content'),
      rootMargin: '0px',
      threshold: 0.6 // Trigger when 60% of the case is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveIndex(Number(entry.target.dataset.index))
        }
      })
    }, options)
    
    observerRef.current = observer

    const elements = document.querySelectorAll('.case-item')
    elements.forEach(el => observer.observe(el))

    return () => {
      if (observerRef.current) observerRef.current.disconnect()
    }
  }, [page])

  // 处理快捷键打标
  const handleMark = (shortcut) => {
    setCaseTags(prev => {
      const currentTags = prev[activeIndex] || []
      // 如果标签已经存在，则将其移除；否则添加到末尾
      const newTags = currentTags.some(t => t.key === shortcut.key)
        ? currentTags.filter(t => t.key !== shortcut.key)
        : [...currentTags, shortcut]
      return { ...prev, [activeIndex]: newTags }
    })
  }

  if (page === 'gallery') {
    return (
      <div className="app">
        <TopBar />
        <main className="main-content">
          <GalleryPage onBack={() => setPage('review')} />
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <TopBar />
      <main className="main-content">
        <div className="case-list">
          {MOCK_CASES.map((caseItem, index) => (
            <div 
              key={caseItem.id} 
              data-index={index}
              className={`case-item ${index !== activeIndex ? 'blurred' : ''}`}
            >
              <VideoCard 
                onGalleryClick={() => setPage('gallery')} 
                tags={caseTags[index] || []}
                caseData={caseItem}
              />
              <div className={`case-blur-mask ${index === activeIndex ? 'hidden' : ''}`}></div>
            </div>
          ))}
        </div>
      </main>
      <BottomBar onMark={handleMark} activeTags={caseTags[activeIndex] || []} />
    </div>
  )
}

export default App
