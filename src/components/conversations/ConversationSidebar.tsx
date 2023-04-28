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
      </div>
      <script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?107208c0ad48aa0f50b3161403f19e9e";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

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
