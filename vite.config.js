import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 开发/预览：尽量兼容本机浏览器、Cursor 内置预览、局域网访问
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 0.0.0.0，避免仅用 localhost 时部分预览工具连不上
    port: 3000,
    strictPort: false, // 3000 被占用时自动换端口（终端会打印实际地址）
    open: false, // 无图形界面时避免因自动打开浏览器报错
  },
  preview: {
    host: true,
    port: 4173,
    strictPort: false,
    open: false,
  },
})
