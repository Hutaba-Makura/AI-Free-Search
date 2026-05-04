import { checkAndReplaceElement } from "#imports";

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  runAt: 'document_start',
  main() {
    // ページが読み込まれたら実行
    if (!window.isAIFreeDisplayed) {
      checkAndReplaceElement();
    }

    // "document_end"のタイミングでも実行
    document.addEventListener('DOMContentLoaded', () => {
      checkAndReplaceElement();
    });
  }
});
