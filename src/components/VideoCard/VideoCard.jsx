import React, { useState, useRef, useEffect } from 'react'
import VideoPlayer from '../VideoPlayer/VideoPlayer'
import ImagePreview from '../ImagePreview/ImagePreview'
import './VideoCard.css'
import './scrollbar.css' // 引入滚动条样式
import './responsive.css' // 引入自适应样式

const VideoCard = ({ onGalleryClick, tags = [], caseData = {} }) => {
  const [previewData, setPreviewData] = useState(null) // { images: [], index: 0 }
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!wrapperRef.current) return
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect
        // Calculate scale to fit 1750x760 content (with small safe padding)
        const scaleW = width / 1750
        const scaleH = height / 760
        const scale = Math.min(scaleW, scaleH)
        entry.target.style.setProperty('--scale', scale)
      }
    })
    observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="vc-scale-wrapper" ref={wrapperRef}>
      {previewData && (
        <ImagePreview 
          images={previewData.images} 
          initialIndex={previewData.index} 
          onClose={() => setPreviewData(null)} 
        />
      )}
      <div className={`vc-root ${tags.length > 0 ? 'marked' : ''}`}>
        {/* 打标状态顶部展示栏 367:2687 */}
        {tags.length > 0 && (
          <div 
            className="vc-mark-header"
            style={{ backgroundColor: tags[0].color || '#9857FF' }}
          >
            <span className="vc-mark-text">
              {tags.map((t, index) => {
                const label = t.key === 'Q' && index === tags.length - 1 ? '高热聚集问题-严重' : t.label;
                return index === 0 ? label : `/${label}`;
              }).join('')}
            </span>
          </div>
        )}
        <div className="vc-main">

        {/* 左列：视频区 466px - 使用精确还原的VideoPlayer */}
        <div className="vc-left">
          {/* VideoPlayer 精确还原 376:4116 */}
          <VideoPlayer onGalleryClick={onGalleryClick} thumbFrames={caseData.thumbFrames || []} />

          {/* 视频描述 */}
          <div className="vc-meta">
            <div className="vc-desc">
              {caseData.desc || '暂无描述'}
              <span className="vc-expand" onClick={() => {}}>展开</span>
            </div>
            <div className="vc-stats">
              <div className="vc-stat-item" onClick={() => {}}>
                <img src="/figma-376-4183.png" alt="" width="14" height="14" />
                <span>{caseData.stats?.like || '0'}</span>
              </div>
              <div className="vc-stat-item" onClick={() => {}}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 3C2 2.448 2.448 2 3 2H11C11.552 2 12 2.448 12 3V9C12 9.552 11.552 10 11 10H4L2 12V3Z" stroke="#575859" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                <span>{caseData.stats?.comment || '0'}</span>
              </div>
              <div className="vc-stat-item" onClick={() => {}}>
                <img src="/figma-376-4209.png" alt="" width="14" height="14" />
                <span>{caseData.stats?.share || '0'}</span>
              </div>
            </div>
          </div>

          {/* 挑战标签 */}
          <div className="vc-challenge-row" onClick={() => {}}>
            <div className="vc-challenge-icon">
              <img src="/figma-376-4220.png" alt="" style={{ width: 13, height: 12 }} />
            </div>
            <span className="vc-challenge-name">挑战</span>
            <span className="vc-challenge-text">写下你发起的挑战挑战写下你发起 <span className="vc-challenge-sensitive">敏感词</span></span>
          </div>
        </div>

        {/* 中列：举报信息+ASR+OCR 873px */}
        <div className="vc-center">
          {/* 举报信息卡片 */}
          <div className="vc-report-card">
            {/* 红色顶条 */}
            <div className="vc-report-topbar"></div>

            {/* 卡片头部：标签+敏感词+历史进审 */}
            <div className="vc-report-head">
              <div className="vc-report-head-left">
                <span className="vc-tag-red">虚假宣传</span>
                <div className="vc-sensitive-line">
                  <span className="vc-sl-label">标题敏感词:</span>
                  {['#一如既往', '#药*', '#对赌', '#筹码', '#对赌', '#筹码', '#对赌', '#筹码', '#对赌', '#筹码'].map((w, i) => (
                    <span key={i} className="vc-sw-red" onClick={() => {}}>{w}</span>
                  ))}
                </div>
              </div>
              <span className="vc-hist-tag" onClick={() => {}}>历史进审:{caseData.reportCount || 0}次</span>
            </div>

            {/* 卡片底部：举报分布+违规提示+举报内容 */}
            <div className="vc-report-body">
              {/* 两行信息 */}
              <div className="vc-report-info-rows">
                <div className="vc-info-row">
                  <span className="vc-info-label">举报分布:</span>
                  <div className="vc-info-tags">
                    {[['不实信息 21', 'gray'], ['摆拍造假/虚假演绎 3', 'gray'], ['虚假科普 6', 'gray']].map(([t, c], i) => (
                      <span key={i} className="vc-tag-gray" onClick={() => {}}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="vc-info-row">
                  <span className="vc-info-label">违规提示:</span>
                  <div className="vc-info-tags">
                    {['涉及医疗夸大宣传', '夸大宣传', '夸大宣传'].map((t, i) => (
                      <span key={i} className="vc-tag-orange" onClick={() => {}}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 举报内容三栏 */}
              <div className="vc-report-items">
                {caseData.reports && caseData.reports.map((report, idx) => (
                  <div className="vc-report-item" key={idx} onClick={() => {}}>
                    <div className="vc-ri-text">{report.title.slice(0, 45)}{report.title.length > 45 ? '...' : ''}</div>
                    <div className="vc-ri-tooltip">
                      {report.title}
                    </div>
                    {report.images && report.images.length > 0 && (
                      <div className="vc-ri-thumb" onClick={(e) => {
                        e.stopPropagation();
                        setPreviewData({
                          images: report.images,
                          index: 0
                        });
                      }}>
                        <img src={report.images[0]} alt="" className="vc-ri-img" />
                        {report.images.length > 1 && <span className="vc-ri-more">+{report.images.length - 1}</span>}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ASR + OCR 并排（随 case 变化） */}
          <AsrOcrRow caseData={caseData} />
        </div>

        {/* 右列：评论区 + AI辅助 325px */}
        <div className="vc-right">
          <CommentSection
            comments={caseData.comments}
            onImageClick={(images, idx) => setPreviewData({ images, index: idx })}
          />
          <AiSection caseData={caseData} />
        </div>
      </div>
    </div>
    </div>
  )
}

/* ===== ASR / OCR ===== */
const AsrOcrRow = ({ caseData = {} }) => {
  const asrData = caseData.asrData || {}
  const ocrData = caseData.ocrData || {}

  const asrTags = {
    red: asrData.redTags || [],
    green: asrData.greenTags || [],
    orange: asrData.orangeTags || [],
  }
  const ocrTags = {
    red: ocrData.redTags || [],
    green: ocrData.greenTags || [],
    orange: ocrData.orangeTags || [],
  }
  const asrHtml = asrData.text || '暂无语音识别结果。'
  const ocrHtml = ocrData.text || '暂无 OCR 结果。'

  return (
    <div className="vc-asr-ocr-row">
      {/* ASR */}
      <div className="vc-analysis-block">
        <div className="vc-ab-header">
          <div className="vc-ab-title-row">
            <img src="/figma-394-8357.png" alt="" width="16" height="16" />
            <span className="vc-ab-title">语音识别ASR</span>
          </div>
        </div>
        <div className="vc-ab-body">
          <div className="vc-sw-tags">
            {(asrTags.red || []).map((w, i) => (
              <span key={`asr-r-${i}`} className="vc-tag-sw-red" onClick={() => {}}>{w}</span>
            ))}
            {(asrTags.green || []).map((w, i) => (
              <span key={`asr-g-${i}`} className="vc-tag-sw-green" onClick={() => {}}>{w}</span>
            ))}
            {(asrTags.orange || []).map((w, i) => (
              <span key={`asr-o-${i}`} className="vc-tag-sw-orange" onClick={() => {}}>{w}</span>
            ))}
          </div>
          <div className="vc-ab-text">
            <span dangerouslySetInnerHTML={{ __html: asrHtml }} />
          </div>
        </div>
      </div>

      {/* OCR */}
      <div className="vc-analysis-block">
        <div className="vc-ab-header">
          <div className="vc-ab-title-row">
            <img src="/figma-376-4321.png" alt="" width="16" height="16" />
            <span className="vc-ab-title">视频OCR</span>
          </div>
        </div>
        <div className="vc-ab-body">
          <div className="vc-sw-tags">
            {(ocrTags.red || []).map((w, i) => (
              <span key={`ocr-r-${i}`} className="vc-tag-sw-red" onClick={() => {}}>{w}</span>
            ))}
            {(ocrTags.green || []).map((w, i) => (
              <span key={`ocr-g-${i}`} className="vc-tag-sw-green" onClick={() => {}}>{w}</span>
            ))}
            {(ocrTags.orange || []).map((w, i) => (
              <span key={`ocr-o-${i}`} className="vc-tag-sw-orange" onClick={() => {}}>{w}</span>
            ))}
          </div>
          <div className="vc-ab-text">
            <span dangerouslySetInnerHTML={{ __html: ocrHtml }} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===== 评论区 ===== */
const CommentSection = ({ onImageClick }) => {
  const comments = [
    { type: 'hot', badge: '热门', badgeClass: 'vc-badge-hot', text: '离了婚还要给赡养费🤦‍♂️，在香港一男的都不敢离啊🤦‍♂️，看来香港确实有钱人多啊。' },
    { 
      type: 'top', 
      badge: '置顶', 
      badgeClass: 'vc-badge-top', 
      text: '谁把这个视频放我视频里点赞我去找你\n前20名的不要会费，愿瑾俱乐部招人啦～',
      images: [
        '/figma-376-4170.png',
        '/figma-376-4364.png',
      ]
    },
    { type: 'normal', text: '太乱了不会放整理箱里面都摆在外面靓女👍' },
    { 
      type: 'normal', 
      text: '这山药看上去就不正宗，哪里有这么大的野生山药😡',
      images: [
        '/figma-372-3989.png',
        '/figma-394-5908.png',
        '/figma-372-4000.png',
        '/figma-394-5917.png',
        '/figma-394-5882.png',
        '/figma-394-5921.png',
        '/figma-394-5873.png',
        '/figma-394-5925.png',
        '/figma-394-5900.png'
      ]
    },
    { type: 'normal', text: '长期在一起的两个人还育有孩子，离婚了做了很好的朋友这话真虚伪' },
    { type: 'normal', text: '这山药看上去就不正宗，哪里有起么大的野山山药' },
    { type: 'normal', text: '2万8千5，那你每月不挣十万怎么在香港活\n这是人才🤦‍♂️' },
    { type: 'normal', text: '口袋里只有5000…银行卡里面还有个几千万没说' },
    { type: 'normal', text: '离了婚还要给赡养费🤦‍♂️，在香港一般男的都不敢离啊🤦‍♂️，看来香港确实有钱人多啊' },
  ]

  return (
    <div className="vc-comment-section">
      <div className="vc-section-header">
        <div className="vc-section-header-left">
          <img src="/figma-376-4346.png" alt="" width="16" height="16" />
          <span className="vc-section-title">评论区</span>
        </div>
      </div>
      <div className="vc-comment-body">
        {comments.map((c, i) => (
          <div key={i} className="vc-comment-item" onClick={() => {}}>
            <div className="vc-comment-text-wrapper">
              {(c.type === 'hot' || c.type === 'top') && (
                <span className={`vc-comment-badge ${c.badgeClass}`}>{c.badge}</span>
              )}
              <span className="vc-comment-text">{c.text}</span>
            </div>
            {c.images && c.images.length > 0 && (
              <div className="vc-comment-images">
                {c.images.slice(0, 9).map((img, imgIdx) => (
                  <img 
                    key={imgIdx} 
                    src={img} 
                    alt={`评论图片 ${imgIdx + 1}`} 
                    className="vc-comment-image" 
                    onClick={(e) => { e.stopPropagation(); onImageClick && onImageClick(c.images, imgIdx) }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== AI智能辅助 ===== */
const AiSection = () => {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="vc-ai-section">
      <div className="vc-ai-body">
        {/* AI标题行 */}
        <div className="vc-ai-header">
          <div className="vc-ai-title-row">
            <img src="/figma-376-4389.png" alt="" width="18" height="18" />
            <span className="vc-ai-title">AI智能辅助</span>
          </div>
          <button className="vc-ai-expand-btn" onClick={() => setExpanded(e => !e)}>
            <img src="/figma-376-4391.png" alt="" width="16" height="16" />
          </button>
        </div>

        {/* 推荐标签 */}
        <div className="vc-ai-recommend-badge" onClick={() => {}}>
          现任首长 88%
        </div>

        {/* 智能诊断 */}
        <div className="vc-ai-section-block">
          <div className="vc-ai-block-header">
            <div className="vc-ai-block-title">
              <img src="/figma-376-4398.png" alt="" width="16" height="16" />
              <span>智能诊断</span>
            </div>
            <div className="vc-ai-timecode" onClick={() => {}}>
              <img src="/figma-376-4406.png" alt="" width="9" height="9" />
              <span>00:12</span>
            </div>
          </div>
          <div className="vc-ai-diagnosis">
            <div className="vc-ai-diag-item" onClick={() => {}}>
              <span className="vc-diag-label">画面描述：</span>
              <span className="vc-diag-text">标题为乡村助农标签#安平助农专场，未发明显的违规内容。</span>
            </div>
            <div className="vc-ai-diag-item" onClick={() => {}}>
              <span className="vc-diag-label">标题与语音：</span>
              <span className="vc-diag-text">佛教用语与哲学内容未涉及迷信活动。</span>
            </div>
          </div>
        </div>

        {/* 规则库匹配 */}
        <div className="vc-ai-section-block">
          <div className="vc-ai-block-header">
            <div className="vc-ai-block-title">
              <img src="/figma-376-4421.png" alt="" width="15" height="16" />
              <span>规则库匹配</span>
            </div>
            <div className="vc-ai-timecode" onClick={() => {}}>
              <img src="/figma-376-4430.png" alt="" width="9" height="9" />
              <span>01:29</span>
            </div>
          </div>
          <div className="vc-ai-rules">
            <div className="vc-ai-rule-card" onClick={() => {}}>
              <div className="vc-rule-title">《广告法》第九条</div>
              <div className="vc-rule-text">禁止使用国家级、最高级、最佳等绝对话用语。</div>
            </div>
            <div className="vc-ai-rule-card" onClick={() => {}}>
              <div className="vc-rule-title">平台医疗规范</div>
              <div className="vc-rule-text">非专业医疗账号，禁止宣传治疗功效。</div>
            </div>
          </div>
        </div>

        {/* 底部：免责 + 反馈 */}
        <div className="vc-ai-footer">
          <span className="vc-ai-disclaimer">AI 生成信息请谨慎使用</span>
          <div className="vc-ai-feedback">
            <img src="/figma-376-4452.png" alt="赞" width="14" height="14" onClick={() => {}} style={{ cursor: 'pointer' }} />
            <img src="/figma-376-4454.png" alt="踩" width="14" height="14" onClick={() => {}} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
