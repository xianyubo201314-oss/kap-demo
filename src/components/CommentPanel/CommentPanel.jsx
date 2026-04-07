import React from 'react'
import './CommentPanel.css'

const CommentPanel = () => {
  const comments = [
    { type: 'hot', main: '离了婚还要给赡养费[捂脸]，在香港一般男的都不敢离啊', reply: '男的都不敢离啊[捂脸]，看来香港确实有钱人多啊。' },
    { type: 'top', main: '谁把这个视频放我视频里点赞我去找你', reply: '前20名的不要会费，愿瑾俱乐部招人啦～' },
    { type: 'normal', main: '这山药看上去就不正宗，哪里有起么大的野生山药' },
    { type: 'normal', main: '长期在一起的两个人还育有孩子，离婚了做了很好的朋友这话真虚伪' },
    { type: 'img', imgs: ['#c8b89a','#8ab4d4','#a8c4a0','#d4a88a','#b8c8d4','#d4c4a8','#a8b4c8','#c4a8b8','#b4c8a8'] },
    { type: 'normal', main: '这山药看上去就不正宗，哪里有起么大的野山山药' },
    { type: 'normal', main: '2万8千5，那你每月不挣十万怎么在香港活  这是人才[捂脸]' },
    { type: 'normal', main: '口袋里只有5000…银行卡里面还有个几千万没说' },
    { type: 'normal', main: '太乱了不会放整理箱里面都摆在外面靓女[赞]' },
  ]

  return (
    <div className="comment-panel">
      <div className="comment-header">
        <div className="comment-header-left">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 3C2 2.448 2.448 2 3 2H11C11.552 2 12 2.448 12 3V9C12 9.552 11.552 10 11 10H5L2 13V3Z" stroke="#252626" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M4 5.5H10M4 7.5H8" stroke="#252626" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <span className="comment-title">评论区</span>
        </div>
      </div>
      <div className="comment-list">
        {comments.map((c, idx) => (
          <div key={idx}>
            {idx > 0 && <div className="comment-sep"></div>}
            {c.type === 'hot' && (
              <div className="comment-item">
                <div className="comment-first-line">
                  <span className="badge-hot">热门</span>
                  <span className="comment-text">{c.main}</span>
                </div>
                {c.reply && <div className="comment-reply-text">{c.reply}</div>}
              </div>
            )}
            {c.type === 'top' && (
              <div className="comment-item">
                <div className="comment-first-line">
                  <span className="badge-top">置顶</span>
                  <span className="comment-text">{c.main}</span>
                </div>
                {c.reply && <div className="comment-reply-text">{c.reply}</div>}
              </div>
            )}
            {c.type === 'normal' && (
              <div className="comment-item">
                <span className="comment-text">{c.main}</span>
              </div>
            )}
            {c.type === 'img' && (
              <div className="comment-imgs">
                {c.imgs.map((bg, i) => (
                  <div key={i} className="comment-img-thumb" style={{ background: bg }}></div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommentPanel
