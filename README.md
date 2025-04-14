# xlogs - 增强型控制台日志工具

![npm version](https://img.shields.io/npm/v/xlogs)
![license](https://img.shields.io/npm/l/xlogs)
![size](https://img.shields.io/bundlephobia/minzip/xlogs)

## ✨ 特性亮点

### 丰富的日志样式
- 🎨 **多彩气泡** - 支持左右气泡对话样式
- 🌦️ **天气主题** - 晴天/雨天/多云三种天气图标
- 🖼️ **ASCII艺术** - 提供方框/云朵/波浪三种边框
- 🏷️ **3D文字** - 支持阴影/霓虹/轮廓三种特效


## 🚀 快速开始

### 安装
```bash
npm install xlogs
# 或
yarn add xlogs

```javascript
import { xlogs } from 'xlogs';

// 气泡对话
xlogs.bubble('Hello!', 'bot');
xlogs.bubble('Hi there!', 'user');

// 天气主题
xlogs.weather('sunny', 'Nice weather today!');
xlogs.weather('rainy', 'Remember your umbrella');

// ASCII艺术
xlogs.ascii('Important', 'box');
xlogs.ascii('Warning', 'cloud');

// 3D文字
xlogs.banner('XLOGS', 'neon');
```

## 📚 API文档
### 主要方法 
bubble(message: string, type: 'user' | 'bot') 显示聊天气泡样式
weather(type: 'sunny' | 'rainy' | 'cloudy', message: string) 显示带天气图标的日志
ascii(message: string, art: 'box' | 'cloud' | 'wave') 显示ASCII艺术边框
banner(text: string, style: '3d' | 'neon' | 'outline') 显示3D效果文字横幅# xlogs
