// ... 保留原有颜色定义 ...

// 新增3D效果样式
// 修复1: 为effects添加类型定义
const effects: Record<string, string> = {
    shadow: 'text-shadow: 1px 1px 2px rgba(0,0,0,0.5)',
    neon: 'text-shadow: 0 0 5px currentColor',
    emboss: 'text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000',
    outline: '-webkit-text-stroke: 1px black'
};

// 修复2: 为styles添加完整类型定义
interface WeatherStyle {
    color: string;
    bg: string;
    icon: string;
    css?: string;
}

interface Styles {
    weather: {
        sunny: WeatherStyle;
        rainy: WeatherStyle;
        cloudy: WeatherStyle;
    };
}

// 扩展样式组
const styles: Styles = {
    // ... 保留原有样式 ...
    weather: {
        sunny: { 
            color: '\x1b[38;5;226m',
            bg: '\x1b[48;5;230m',
            icon: '☀️',
            css: 'background: linear-gradient(to right, #FFD700, #FFFACD); color: #DAA520;'
        },
        rainy: {
            color: '\x1b[38;5;33m',
            bg: '\x1b[48;5;195m',
            icon: '🌧️',
            css: 'background: linear-gradient(to right, #4682B4, #E6F2FF); color: #1E90FF;'
        },
        cloudy: {
            color: '\x1b[38;5;250m',
            bg: '\x1b[48;5;255m',
            icon: '☁️',
            css: 'background: linear-gradient(to right, #778899, #F5F5F5); color: #696969;'
        }
    }
};

// 新增气泡样式生成器
function bubbleStyle(color: string, position: 'left' | 'right' = 'left'): string {
    return `
        background: ${color};
        color: white;
        padding: 8px 12px;
        border-radius: ${position === 'left' ? '0 12px 12px 12px' : '12px 0 12px 12px'};
        margin: 4px;
        max-width: 80%;
        ${position === 'left' ? 'margin-right: auto' : 'margin-left: auto'};
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    `;
}

// 扩展Xlogs类型
type Xlogs = {
    // ... 保留原有方法 ...
    bubble: (message: string, type: 'user' | 'bot') => void;
    weather: (type: keyof typeof styles.weather, message: string) => void;
    ascii: (message: string, art: 'box' | 'cloud' | 'wave') => void;
    banner: (text: string, style: '3d' | 'neon' | 'outline') => void;
};

function ansiToCSS(ansiCode: string): string {
    const map: Record<string, string> = {
        '38;5;203': 'color: #ff6961',
        '38;5;118': 'color: #77dd77',
        '38;5;220': 'color: #fdfd96',
        '38;5;68': 'color: #73a6ff',
        '38;5;171': 'color: #c2a2ff',
        '38;5;38': 'color: #00cccc',
        '48;5;234': 'background: #1e1e1e',
        '48;5;124': 'background: #d63031',
        '48;5;22': 'background: #00b894',
        '48;5;136': 'background: #fdcb6e',
        '48;5;18': 'background: #0984e3',
        '48;5;90': 'background: #a29bfe',
        '48;5;23': 'background: #00cec9',
        '1': 'font-weight: bold',
        '2': 'opacity: 0.7',
        '4': 'text-decoration: underline'
    };
    const code = ansiCode.replace(/\x1b\[(\d+(;\d+)*)m/, '$1');
    return map[code] || '';
}

// 实现新方法
export const xlogs: Xlogs = {
    // ... 保留原有方法实现 ...

    /**
     * 聊天气泡样式
     * @param message 消息内容
     * @param type 气泡类型 user(用户)|bot(机器人)
     */
    bubble(message: string, type: 'user' | 'bot') {
        const style = bubbleStyle(
            type === 'user' ? '#4285F4' : '#34A853',
            type === 'user' ? 'right' : 'left'
        );
        console.log(`%c${message}`, style);
    },

    /**
     * 天气主题日志
     * @param type 天气类型
     * @param message 消息内容
     */
    weather(type: keyof typeof styles.weather, message: string) {
        const style = styles.weather[type];
        const gradientStyle = style.css || `${ansiToCSS(style.color)}${ansiToCSS(style.bg)}`;
        
        console.log(
            `%c${style.icon} ${message}`,
            `${gradientStyle}; 
             font-size: 14px; 
             padding: 6px 12px;
             border-radius: 8px;
             margin: 4px 0;
             box-shadow: 0 2px 4px rgba(0,0,0,0.1);`
        );
    },
    
    /**
     * ASCII艺术边框
     * @param message 消息内容
     * @param art 艺术类型
     */
    ascii(message: string, art: 'box' | 'cloud' | 'wave') {
        const arts = {
            box: `
┌───────────────────────┐
│                       │
│   ${message.padEnd(18).toUpperCase()}   │
│                       │
└───────────────────────┘
`,
            cloud: `
   ╭───────────╮
  /  ${message.padEnd(12)}  \\
 ╰───────────╯
    ╰─┬───┬─╯
      ╰───╯
`,
            wave: `
  ~~~^~~~^~~~^~~~^~~~
      ${message}
  ~~~^~~~^~~~^~~~^~~~
`
        };
        
        const styles = {
            box: 'color: #4CAF50; font-weight: bold; text-shadow: 0 0 2px rgba(76,175,80,0.5);',
            cloud: 'color: #03A9F4; text-shadow: 0 0 2px rgba(3,169,244,0.3);',
            wave: 'color: #00BCD4; font-style: italic;'
        };
        
        console.log(`%c${arts[art]}`, `
            ${styles[art]}
            font-family: 'Courier New', monospace;
            line-height: 1.4;
            white-space: pre;
            letter-spacing: 1px;
        `);
    },

    /** 
     * 3D文字横幅
     * @param text 横幅文字
     * @param style 3d|neon|outline
     */
    banner(text: string, style: '3d' | 'neon' | 'outline') {
        console.log(
            `%c${text}`,
            `font-size: 24px; font-weight: bold; ${effects[style]}; padding: 8px;`
        );
    },
};