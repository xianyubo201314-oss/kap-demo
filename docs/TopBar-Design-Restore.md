# 顶部导航 - 100%设计还原文档

## 📐 Figma设计数据完整映射

### 整体布局 (layout_A2EGNN)
```css
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 928px;
padding: 0 16px;
width: 1728px;
height: 52px;
```

### 样式精确还原
- **背景色**: `#FFFFFF` (fill_Y5U4MK)
- **阴影**: `0px 1px 8px 0px rgba(12, 18, 31, 0.08)` (effect_K97A8F)

---

## 🎨 颜色系统映射

| Figma变量名 | 颜色值 | CSS变量名 | 使用场景 |
|------------|--------|----------|---------|
| 文字色/text_primary | #252626 | - | 标题文本、统计数值 |
| 文字色/text_secondary | #575859 | - | 未激活标签 |
| 文字色/text_tertiary | #898A8C | - | 标签文本 |
| 文字色/text_brand | #326BFB | - | 品牌蓝、激活状态 |
| 文字色/text_white | #FFFFFF | - | 激活标签文字 |
| 填充色/fill_tertiary | #D5D6D9 | - | 分隔线 |
| fill_LJ7ZQ0 | #F5F7FA | - | 统计面板背景、标签组背景 |
| fill_Y5U4MK | #FFFFFF | - | 未激活标签背景 |
| fill_JZRF43 | #F22D1F | - | 通知徽章 |

---

## 📝 字体系统映射

### 1. 标题文本 (style_X7WYNK)
```css
font-family: PingFang SC;
font-weight: 500;
font-size: 14px;
line-height: 1.5714285714285714em; /* 22px */
```

### 2. 说明文字 (font_caption)
```css
font-family: PingFang SC;
font-weight: 400;
font-size: 12px;
line-height: 1.5em; /* 18px */
```

### 3. 数字显示 (style_2KE8AO)
```css
font-family: DIN Alternate;
font-weight: 700;
font-size: 16px;
line-height: 1.125em; /* 18px */
```

### 4. 正文文字 (font_body)
```css
font-family: PingFang SC;
font-weight: 400;
font-size: 14px;
line-height: 1.5714285714285714em; /* 22px */
```

### 5. 粗体正文 (font_body_bold)
```css
font-family: PingFang SC;
font-weight: 500;
font-size: 14px;
line-height: 1.5714285714285714em; /* 22px */
```

---

## 📦 组件层级结构

```
顶部导航 (367:2439)
├─ 左侧区域 (Frame 2147228719)
│  ├─ 标题区域 (Frame 2147228718)
│  │  ├─ 返回图标 (16px/大箭头/返回 - 26:8290)
│  │  ├─ 标题文字 "高举报视频专审"
│  │  └─ 复制图标 (16px/操作/复制 - 27:8311)
│  │
│  └─ 队列统计 (Frame 2090053436)
│     ├─ 待审量区域 (Frame 2090053440)
│     │  ├─ "待审量" 标签
│     │  └─ "3877" 数值
│     ├─ 分隔线 (矩形备份 11)
│     └─ 待领取区域 (Frame 427318992)
│        ├─ "待领取" 标签
│        └─ "3023" 数值
│
└─ 右侧区域 (Frame 2147228803)
   ├─ 统计面板 (Frame 2147228803)
   │  ├─ 审核时长
   │  │  ├─ "审核时长" 标签
   │  │  └─ "01:23:46" 时间
   │  ├─ 时钟图标分隔
   │  ├─ 分隔线
   │  ├─ 审核量
   │  │  ├─ "审核量" 标签
   │  │  └─ "9999" 数值
   │  ├─ 分隔线
   │  └─ AHT
   │     ├─ "AHT" 标签
   │     └─ "49.9" 数值
   │
   └─ 状态切换区域 (Frame 2147228728)
      ├─ 状态标签组 (Frame 2147228721)
      │  └─ 标签容器 (Frame 2147228728)
      │     ├─ 审核 (激活) - Frame 2147228723
      │     ├─ 用餐 - Frame 2147228724
      │     ├─ 小休 - Frame 2147228725
      │     └─ 其他 (带下拉) - Frame 2147228726
      │
      └─ 通知图标 (Group 2036093095)
         ├─ 头像圆形 (Ellipse 12)
         └─ 通知徽章 (消息提醒X - 60:6718)
```

---

## 🔧 布局参数详解

### 左侧区域布局 (layout_WGXLVN)
```css
mode: row
alignItems: center
gap: 16px
```

### 标题区域布局 (layout_ADXE2Z)
```css
mode: row
alignItems: center
gap: 4px
```

### 队列统计布局 (layout_R837MH)
```css
mode: row
alignItems: center
gap: 6px
```

### 单个统计项布局 (layout_7C4UR6)
```css
mode: row
alignItems: center
gap: 3px
```

### 右侧区域布局 (layout_IQIG3I)
```css
mode: row
alignItems: center
gap: 24px
```

### 统计面板布局 (layout_YNYTQE)
```css
mode: row
justifyContent: center
alignItems: center
gap: 8px
padding: 8px 12px
background: #F5F7FA
border-radius: 100px
```

### 状态标签组布局 (layout_4LEY2Q)
```css
mode: row
alignItems: center
gap: 2px
padding: 3px
background: #F5F7FA
border-radius: 100px
```

### 激活标签布局 (layout_VWJFNJ)
```css
mode: row
justifyContent: center
alignItems: center
gap: 10px
padding: 8px 10px
height: 28px
background: #326BFB
border-radius: 100px
```

### 未激活标签布局 (layout_8KBT7W)
```css
mode: row
justifyContent: center
alignItems: center
gap: 10px
padding: 10px 8px
width: 48px
height: 28px
background: #FFFFFF
border-radius: 4px
```

---

## 🎯 关键设计细节

### 1. 图标规格
- **尺寸**: 16px × 16px (layout_KST4T5)
- **使用的组件ID**:
  - 返回图标: 26:8290
  - 复制图标: 27:8311
  - 下拉箭头: 80:9877
  - 通知图标: 60:6718

### 2. 分隔线规格 (layout_GIMY02)
- **尺寸**: 1px × 12px
- **颜色**: #D5D6D9

### 3. 圆角规格
- **统计面板**: 100px
- **激活标签**: 100px
- **未激活标签**: 4px

### 4. 通知徽章规格 (layout_N57RUP)
- **尺寸**: 8px × 8px
- **位置**: 右上角 (x: 20, y: 0)
- **颜色**: #F22D1F
- **边框**: 2px solid #FFFFFF

---

## ✅ 精确度验证清单

- [x] 整体尺寸: 1728px × 52px
- [x] 左右间距: 928px gap
- [x] 内边距: 0 16px
- [x] 背景色: #FFFFFF
- [x] 阴影: 0px 1px 8px 0px rgba(12, 18, 31, 0.08)
- [x] 左侧标题区域 gap: 16px
- [x] 标题组件 gap: 4px
- [x] 队列统计 gap: 6px
- [x] 单个统计项 gap: 3px
- [x] 右侧区域 gap: 24px
- [x] 统计面板 gap: 8px, padding: 8px 12px
- [x] 标签组 gap: 2px, padding: 3px
- [x] 所有字体精确匹配 Figma textStyle
- [x] 所有颜色精确匹配 Figma 变量
- [x] 所有圆角精确匹配 Figma borderRadius
- [x] 图标尺寸统一 16px × 16px
- [x] 分隔线统一 1px × 12px
- [x] 通知徽章位置和样式完全匹配

---

## 📊 性能优化

1. **使用内联SVG**: 减少HTTP请求
2. **CSS变量**: 便于主题切换
3. **过渡动画**: 提升交互体验
4. **响应式设计**: 支持不同屏幕尺寸

---

## 🚀 使用说明

```jsx
import TopBar from './components/TopBar/TopBar'

function App() {
  return (
    <div className="app">
      <TopBar />
      {/* 其他内容 */}
    </div>
  )
}
```

---

## 📝 备注

- 所有尺寸单位严格遵循Figma设计
- 所有颜色值直接从Figma变量提取
- 所有间距使用Figma AutoLayout数据
- 字体line-height保留小数精度以确保像素级对齐
- 使用DIN Alternate字体显示数字以保持设计一致性
