import { useStore } from '@nanostores/solid'
import { currentConversationId } from '@/stores/conversation'
import { scrollController } from '@/stores/ui'
import { clearMessagesByConversationId } from '@/stores/messages'

export default () => {
  const $currentConversationId = useStore(currentConversationId)

  const handleClearMessage = () => {
    clearMessagesByConversationId($currentConversationId())
    scrollController().scrollToBottom()
  }

  return (
    <>
      { $currentConversationId() && (
        <div
          class="fcc p-2 rounded-md text-xl hv-foreground"
          onClick={handleClearMessage}
        >  <ul class="mobile-nav mobile-nav-bottom" style="text-align:center;margin-top:20px;padding-left:0;">
  <li style="display:inline-block;margin:0 10px;vertical-align:middle;"><a href="https://www.u8ai.com">AI工具</a></li>
  <li style="display:inline-block;margin:0 10px;vertical-align:middle;"><a href="https://ai.u8ai.com/">AI绘画</a></li>
  <li style="display:inline-block;margin:0 10px;vertical-align:middle;"><a href="https://www.u8ai.com/?cat=20">内容</a></li>
</ul>
          <div i-carbon-clean />
        </div>
      )}
    </>
  )
}
