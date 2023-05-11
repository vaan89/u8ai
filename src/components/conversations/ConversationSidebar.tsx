import { For } from 'solid-js'
import { useStore } from '@nanostores/solid'
import { conversationMapSortList } from '@/stores/conversation'
import ConversationSidebarItem from './ConversationSidebarItem'
import ConversationSidebarAdd from './ConversationSidebarAdd'

export default () => {
  const $conversationMapSortList = useStore(conversationMapSortList)

  return (
    <div class="h-full flex flex-col bg-sidebar">
      <div class="h-14 fi border-b border-base px-4 text-xs uppercase pl-6">
        <a href="#" target="_blank">U8AI社区</a>
        <ul class="mobile-nav mobile-nav-bottom">
  <li><a href="https://www.u8ai.com">AI工具</a></li>
  <li><a href="https://ai.u8ai.com/">AI绘画</a>
</li>
  <li><a href="https://www.u8ai.com/?cat=20">内容</a></li>
</ul>
      </div>
      <div class="flex-1 overflow-auto">
        <For each={$conversationMapSortList()}>
          {instance => (
            <ConversationSidebarItem instance={instance} />
          )}
        </For>
        <ConversationSidebarAdd />
      </div>
    </div>
  )
}
