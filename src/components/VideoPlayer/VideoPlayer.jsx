import React, { useState, useRef, useEffect } from 'react'
import './VideoPlayer.css'

/**
 * VideoPlayer - 100% 还原 Figma 376:4116
 *
 * 结构：
 * 376:4116 (466×614, flex row, gap:2px)
 *   └── 376:4117 主视频列 (flex:0 0 325px, flex-direction:column)
 *         ├── 376:4118 视频图片 (325×578, borderRadius: 9.14 0 0 0)
 *         ├── 376:4119 控制栏 (325×37, bg:#000, 底部圆角6.85)
 *         │     ├── 376:4153 白色进度段 (57px, opacity:0.8)
 *         │     ├── 376:4154 红色段 (15px, left:73.1, rotate -180)
 *         │     ├── 376:4155 红色段 (5px, left:101.65, rotate -180)
 *         │     ├── 376:4156 红色段 (11px, left:118.78, rotate -180)
 *         │     ├── 376:4157 红色段 (18px, right:152.53, rotate -180)
 *         │     ├── 376:4158 红色段 (67px, right:55.45, rotate -180)
 *         │     ├── 376:4122 白色全轨 (325px, opacity:0.32)
 *         │     └── 376:4123 控制行 (时间 + 速度 + 音量 + 全屏)
 *         └── 376:4159 播放图标 (60×60, absolute top:259 right:132)
 *   └── 394:5444 右侧帧面板 (flex-grow:1, 139px, flex row, gap:2px)
 *         ├── 376:4162 左帧条 (69×614, overflow:hidden, flex-col, gap:2px)
 *         │     ├── 376:4163 帧1 (69×121)
 *         │     ├── 376:4164 "封面" 标签 (absolute top:4 right:4)
 *         │     ├── 376:4165 帧2 (69×121, 红框 4px)
 *         │     ├── 376:4166 帧3 (69×121, 红框 4px)
 *         │     ├── 376:4167 帧4 (69×121)
 *         │     └── 376:4168 帧5 (69×121)
 *         └── 376:4170 右帧条 (68×614, borderRadius: 0 9.14 9.14 0)
 */
const VideoPlayer = ({ onGalleryClick }) => {
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState('1x')
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const fmt = s => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(Math.floor(s % 60)).padStart(2, '0')}`

  // Toggle play/pause
  useEffect(() => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.play().catch(() => setIsPlaying(false))
    } else {
      videoRef.current.pause()
    }
  }, [isPlaying])

  // Update playback speed
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.playbackRate = parseFloat(speed)
  }, [speed])

  // Update mute state
  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.muted = isMuted
  }, [isMuted])

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const current = videoRef.current.currentTime
    const total = videoRef.current.duration || 1
    setCurrentTime(current)
    setProgress((current / total) * 100)
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const handleProgressClick = (e) => {
    if (!progressRef.current || !videoRef.current) return
    const rect = progressRef.current.getBoundingClientRect()
    const pct = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100))
    setProgress(pct)
    videoRef.current.currentTime = (pct / 100) * (videoRef.current.duration || 1)
  }

  const totalSec = duration || 227

  // 白色进度段：动态宽度
  const playedWidth = `${(progress / 100 * 325).toFixed(1)}px`

  return (
    <div className="vp-root">
      {/* 376:4117 主视频列 */}
      <div className="vp-main-col" onClick={() => setIsPlaying(p => !p)}>
        {/* 真实视频播放器 */}
        <video 
          ref={videoRef}
          src="/test-video.mp4" 
          poster="/figma-376-4118.png"
          className="vp-video-img"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          playsInline
        />

        {/* 376:4119 控制栏 */}
        <div className="vp-ctrl" onClick={e => e.stopPropagation()}>
          {/* ===== 进度条层 ===== */}
          <div className="vp-progress-area" ref={progressRef} onClick={handleProgressClick}>
            {/* 376:4122 白色全轨道 opacity:0.32 */}
            <div className="vp-track-full" />

            {/* 白色已播放段 (动态) */}
            <div className="vp-track-played" style={{ width: playedWidth }} />

            {/* 376:4154 红色段 15px, left:73.1 */}
            <div className="vp-red" style={{ width: 15, left: 73.1 }} />
            {/* 376:4155 红色段 5px, left:101.65 */}
            <div className="vp-red" style={{ width: 5, left: 101.65 }} />
            {/* 376:4156 红色段 11px, left:118.78 */}
            <div className="vp-red" style={{ width: 11, left: 118.78 }} />
            {/* 376:4157 红色段 18px, right:152.53 */}
            <div className="vp-red" style={{ width: 18, right: 152.53 }} />
            {/* 376:4158 红色段 67px, right:55.45 */}
            <div className="vp-red" style={{ width: 67, right: 55.45 }} />
          </div>

          {/* 376:4123 控制行 */}
          <div className="vp-ctrl-row">
            {/* 左侧：376:4124 播放图标 + 时间 */}
            <div className="vp-ctrl-left">
              <img
                src={isPlaying ? "/figma-376-4148.png" : "/figma-376-4126.png"} 
                alt="play/pause"
                className="vp-play-icon"
                onClick={() => setIsPlaying(p => !p)}
                style={isPlaying ? { width: 12, height: 12, marginLeft: 4 } : {}}
              />
              <div className="vp-time">
                <span className="vp-time-cur">{fmt(currentTime)}</span>
                <span className="vp-time-sep">/</span>
                <span className="vp-time-tot">{duration ? fmt(duration) : '03:47'}</span>
              </div>
            </div>

            {/* 右侧：376:4131 速度 + 音量 + 全屏 */}
            <div className="vp-ctrl-right">
              {/* 速度：1x(白) 1.5x(蓝-当前选中) 2x(白) 3x(白) */}
              <div className="vp-speeds">
                {['1x', '1.5x', '2x', '3x'].map(s => (
                  <span
                    key={s}
                    className={`vp-sp${speed === s ? ' vp-sp-active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); setSpeed(s) }}
                  >{s}</span>
                ))}
              </div>
              {/* 376:4137 音量图标 */}
              <div className="vp-icon-wrap" onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted) }}>
                {isMuted ? (
                  <img src="/figma-376-4148.png" alt="muted" style={{ width: 10, height: 10 }} />
                ) : (
                  <div className="vp-vol-inner">
                    <img src="/figma-376-4140.png" alt="vol" style={{ width: 8, height: 11 }} />
                    <img src="/figma-376-4144.png" alt="" style={{ width: 1, height: 3 }} />
                    <img src="/figma-376-4145.png" alt="" style={{ width: 2, height: 7 }} />
                  </div>
                )}
              </div>
              {/* 376:4146 全屏图标 */}
              <div className="vp-icon-wrap">
                <img src="/figma-376-4148.png" alt="fullscreen" style={{ width: 9, height: 9 }} />
              </div>
            </div>
          </div>
        </div>

        {/* 376:4159 中心播放图标 absolute top:259 right:132 */}
        <img
          src="/figma-376-4159.png"
          alt="play"
          className={`vp-center-play${isPlaying ? ' hidden' : ''}`}
        />
      </div>

      {/* 394:5444 右侧帧面板 (139px = 69 + 2 + 68) */}
      <div className="vp-frames" onClick={() => onGalleryClick && onGalleryClick()}>
        {/* 376:4162 左帧条 69px */}
        <div className="vp-thumb-col">
          <img src="/figma-376-4163.png" alt="帧1" className="vp-thumb" style={{ height: 121 }} />
          {/* 376:4164 封面标签 absolute */}
          <div className="vp-cover-tag">封面</div>
          <img src="/figma-376-4165.png" alt="帧2" className="vp-thumb vp-thumb-sel" style={{ height: 121 }} />
          <img src="/figma-376-4166.png" alt="帧3" className="vp-thumb vp-thumb-sel" style={{ height: 121 }} />
          <img src="/figma-376-4167.png" alt="帧4" className="vp-thumb" style={{ height: 121 }} />
          <img src="/figma-376-4168.png" alt="帧5" className="vp-thumb" style={{ height: 121 }} />
        </div>

        {/* 376:4170 右帧条 68px */}
        <img
          src="/figma-376-4170.png"
          alt="frames"
          className="vp-right-col"
          title="点击查看图集"
        />
      </div>
    </div>
  )
}

export default VideoPlayer
