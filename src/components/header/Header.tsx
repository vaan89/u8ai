import { scrollController, showConversationSidebar, showSettingsSidebar } from '@/stores/ui'
import ConversationHeaderInfo from './ConversationHeaderInfo'
import ConversationMessageClearButton from './ConversationMessageClearButton'

export default () => {
  return (
    <header onDblClick={scrollController().scrollToTop} class="shrink-0 absolute top-0 left-0 right-0 fi justify-between bg-base-100 border-b border-base h-14 px-4">
      <div class="fi overflow-hidden">
        <div
          class="fcc p-2 rounded-md text-xl hv-foreground md:hidden"
          onClick={() => showConversationSidebar.set(true)}
        >
          <div i-carbon-menu />
        </div>
        <ConversationHeaderInfo />
      </div>
     <div style="display:flex;width:30%;">
  <ul class="mobile-nav mobile-nav-bottom" style="text-align:center;margin-top:0px;padding-left:0;flex:1;">
    <li style="display:inline-block;margin:0 0px;vertical-align:middle;"><a href="https://www.u8ai.com" target="_blank">AI工具</a></li>
    <li style="display:inline-block;margin:0 0px;vertical-align:middle;"><a href="https://ai.u8ai.com/" target="_blank">AI绘画</a></li>
  </ul>
</div>

      <div class="fi gap-1 overflow-hidden">
        <ConversationMessageClearButton />
        <div
          class="fcc p-2 rounded-md text-xl hv-foreground lg:hidden"
          onClick={() => showSettingsSidebar.set(true)}
        >
          <div i-carbon-settings />
        </div>
      </div>
    </header>
  )
}
