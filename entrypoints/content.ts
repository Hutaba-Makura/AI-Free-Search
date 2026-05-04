import { hideAbst } from "#imports";

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  runAt: 'document_start',
  main() {
    // ページが読み込まれたら実行
    window.isAIFreeDisplayed = false;
    hideAbst();

    // "document_end"のタイミングでも実行
    document.addEventListener('DOMContentLoaded', () => {
      hideAbst();
    });
  }
});
