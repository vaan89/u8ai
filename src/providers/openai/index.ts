import {
  handleContinuousPrompt,
  handleImagePrompt,
  handleRapidPrompt,
  handleSinglePrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
  const provider: Provider = {
    id: 'provider-openai',
    name: 'AI聊天key',
    globalSettings: [
      {
        key: 'apiKey',
        name: '填写Key',
        type: 'api-key',
      },
      {
        key: 'baseUrl',
        name: '接口地址',
        description: '接口地址（勿动）',
        type: 'input',
        default: 'https://api.openai.com',
      },
      {
        key: 'model',
        name: '选择模型',
        description: '选择聊天模型',
        type: 'select',
        options: [
          { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
          { value: 'gpt-4', label: 'gpt-4' },
        ],
        default: 'gpt-3.5-turbo',
      },
      {
        key: 'maxTokens',
        name: '最大对话字节',
        description: '对话的最大字节限制.',
        type: 'slider',
        min: 0,
        max: 4096,
        default: 2048,
        step: 1,
      },
      {
        key: 'temperature',
        name: '随机程度',
        type: 'slider',
        description: '0-2 越大回复越随机',
        min: 0,
        max: 2,
        default: 0.7,
        step: 0.01,
      },
      {
        key: 'top_p',
        name: '回复质量',
        description: '回复质量0-1(勿动).',
        type: 'slider',
        min: 0,
        max: 1,
        default: 1,
        step: 0.01,
      },
    ],
    conversationSettings: [],
    supportConversationType: ['continuous', 'single', 'image'],
    handleSinglePrompt,
    handleContinuousPrompt,
    handleImagePrompt,
    handleRapidPrompt,
  }
  return provider
}

export default providerOpenAI
