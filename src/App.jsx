import React, { useState, useEffect, useRef } from 'react'
import TopBar from './components/TopBar/TopBar'
import VideoCard from './components/VideoCard/VideoCard'
import GalleryPage from './components/GalleryPage/GalleryPage'
import BottomBar from './components/BottomBar/BottomBar'
import { MOCK_CASES } from './data/mockCases'
import { SHORTCUTS, ACTION_SHORTCUTS } from './data/shortcuts'
import './App.css'

function App() {
  const [page, setPage] = useState('review') // 'review' | 'gallery'
  const [activeIndex, setActiveIndex] = useState(0)
  // 保存每个case的打标标签
  const [caseTags, setCaseTags] = useState({})
  
  // 暴露给 BottomBar 的键盘按下动效状态
  const [globalActiveKey, setGlobalActiveKey] = useState(null)

  // 初始化每个 case 绑定的数据源，防止热更新导致的重置并允许独立变化
  const [caseDataList] = useState([...MOCK_CASES])
  const observerRef = useRef(null)

  // 我们移除或者降级 IntersectionObserver 对 activeIndex 的支配权
  // 将 IntersectionObserver 作为滚动时的默认兜底（如果鼠标没悬停任何卡片时）
  useEffect(() => {
    if (page !== 'review') return;
    
    const options = {
      root: document.querySelector('.main-content'),
      rootMargin: '0px',
      threshold: 0.6
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // 仅当没有更强烈的鼠标交互意图时才依赖这个滚动判定
          // 简单起见，目前保留它但允许被鼠标 Hover 覆盖
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

  // 全局键盘监听：当用户按下字母时，针对此时活跃的 activeIndex 视频进行打标
  useEffect(() => {
    if (page !== 'review') return

    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      
      const k = e.key.toUpperCase()
      const matchedMark = SHORTCUTS.find(s => s.key === k)
      const matchedAction = ACTION_SHORTCUTS.find(s => s.key === k)

      if (matchedMark || matchedAction) {
        e.preventDefault()
        setGlobalActiveKey(k)
        setTimeout(() => setGlobalActiveKey(null), 150)
        
        if (matchedMark) {
          handleMark(matchedMark, activeIndex)
        }
        // 如果是C/X等操作键，可以补充其相关逻辑
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [page, activeIndex]) // 依赖 activeIndex 来确保键盘操作作用在当前被悬停的视频上

  // 处理快捷键打标逻辑 (抽离传入的 index 从而不依赖外层闭包变量也可复用)
  const handleMark = (shortcut, targetIndex = activeIndex) => {
    setCaseTags(prev => {
      const currentTags = prev[targetIndex] || []
      // 如果标签已经存在，则将其移除；否则添加到末尾
      const newTags = currentTags.some(t => t.key === shortcut.key)
        ? currentTags.filter(t => t.key !== shortcut.key)
        : [...currentTags, shortcut]
      return { ...prev, [targetIndex]: newTags }
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
              onMouseEnter={() => setActiveIndex(index)}
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
      <BottomBar 
        onMark={(shortcut) => handleMark(shortcut, activeIndex)} 
        activeTags={caseTags[activeIndex] || []} 
        currentActiveKey={globalActiveKey}
      />
    </div>
  )
}

export default App
