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
```

### 使用示例

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

#### `bubble(message: string, type: 'user' | 'bot')`
**功能**：显示聊天气泡样式  
**参数**：
- `message`: 要显示的消息内容
- `type`: 气泡类型，`user`(用户)或`bot`(机器人)  
**示例**：
```javascript
xlogs.bubble('你好！', 'bot');
xlogs.bubble('我收到了', 'user');
```
#### `weather(weather: 'sunny' | 'rainy' | 'cloudy', message: string)`
**功能**：显示天气主题样式
**参数**：
- `weather`: 天气类型，`sunny`(晴天)、`rainy`(雨天)或`cloudy`(多云)
- `message`: 要显示的消息内容
**示例**：
```javascript
xlogs.weather('sunny', '今天天气很好！');
xlogs.weather('rainy', '记得带伞'); 
```
#### `ascii(message: string, type: 'box' | 'cloud' | 'wave')`
**功能**：显示ASCII艺术样式
**参数**：
- `message`: 要显示的消息内容
- `type`: 边框类型，`box`(方框)、`cloud`(云朵)或`wave`(波浪)
**示例**：
```javascript
xlogs.ascii('重要', 'box');
xlogs.ascii('警告', 'cloud');
```
#### `banner(message: string, type: 'shadow' | 'neon' | 'outline')`
**功能**：显示3D文字样式
**参数**：
- `message`: 要显示的消息内容
- `type`: 特效类型，`shadow`(阴影)、`neon`(霓虹)或`outline`(轮廓)
**示例**：
```javascript
xlogs.banner('XLOGS', 'neon');  
```
