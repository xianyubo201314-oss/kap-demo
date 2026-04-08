/**
 * 图集页专用高清图：统一竖版 1080×1920（9:16），Unsplash 官方 CDN
 * 换图：只改本文件中的列表即可，无需动组件
 */

const u = (photoPath) =>
  `https://images.unsplash.com/${photoPath}?auto=format&w=1080&h=1920&fit=crop&q=88&ixlib=rb-4.0.3`

/** @type {{ id: string, url: string, alt: string }[]} */
export const GALLERY_ITEMS = [
  { id: 'mountain', url: u('photo-1506905925346-21bda4d32df4'), alt: '山湖' },
  { id: 'forest', url: u('photo-1441974231531-c6227db76b6e'), alt: '森林' },
  { id: 'beach', url: '/figma-372-4035.png', alt: '海岸' },
  { id: 'sunrise', url: u('photo-1469474968028-56623f02e42e'), alt: '晨光' },
  { id: 'city', url: u('photo-1514565131-fce0801e5785'), alt: '城市夜景' },
  { id: 'coffee', url: u('photo-1495474472287-4d71bcdd2085'), alt: '咖啡' },
  { id: 'portrait', url: u('photo-1534528741775-53994a69daeb'), alt: '人像' },
  { id: 'desert', url: u('photo-1509316785289-025f5b846b35'), alt: '公路' },
  { id: 'yam-broken', url: '/figma-394-5900.png', alt: '山药掰断特写' },
  { id: 'yam-slices', url: '/figma-394-5929.png', alt: '山药片' },
]

/** 与 lightbox 翻页顺序一致 */
export const GALLERY_IMAGE_URLS = GALLERY_ITEMS.map((item) => item.url)
