import {
  handleImagePrompt,
} from './handler'
import type { Provider } from '@/types/provider'

const providerOpenAI = () => {
  const provider: Provider = {
    id: 'provider-stable-diffusion',
    icon: 'i-carbon-paint-brush', // @unocss-include
    name: 'Stable Diffusion',
    globalSettings: [
      {
        key: 'token',
        name: '联系站长购买微信vaan89',
        type: 'api-key',
      },
      {
        key: 'version',
        name: '模型号',
        description: '模型哈希值',
        type: 'input',
        default: '601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f',
      },
    ],
    conversationSettings: [],
    supportConversationType: ['image'],
    supportCallMethod: 'backend',
    handleImagePrompt,
  }
  return provider
}

export default providerOpenAI
