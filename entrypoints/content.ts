import { replaceElement, checkAndReplaceElement } from '../components/replacement';

export default defineContentScript({
  matches: ['*://*.google.com/*'],
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
