import { hideAbstOnSearch } from "#imports";

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  runAt: 'document_start',
  main(ctx) {
    // ページが読み込まれたら実行
    window.isAIFreeDisplayed = false;
    hideAbstOnSearch();

    // 2. 監視の開始
    const observer = new MutationObserver(() => {
      hideAbstOnSearch();
      if (window.isAIFreeDisplayed) {
        observer.disconnect();
      }
    });
    // body要素が作られたら、その中身の変化を監視する
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    // 3. クリーンアップ
    // 拡張機能がリロードされたり無効になったりしたときに、監視を止める
    ctx.onInvalidated(() => {
      observer.disconnect();
    });
  }
});
