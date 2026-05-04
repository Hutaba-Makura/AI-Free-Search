import { hideAbst, storage } from "#imports";

const hideAbstEnabled = storage.defineItem<boolean>('local:hideAbstEnabled', {
  defaultValue: true,
});

export default defineContentScript({
  matches: ['*://*.google.com/*'],
  runAt: 'document_start',
  async main(ctx) {
    let enabled = await hideAbstEnabled.getValue();

    const runHide = () => {
      if (!enabled) return;
      window.isAIFreeDisplayed = false;
      hideAbst();
    };

    // ページが読み込まれたら実行
    runHide();

    // "document_end"のタイミングでも実行
    document.addEventListener('DOMContentLoaded', runHide);

    const unwatch = hideAbstEnabled.watch((value) => {
      enabled = value;
      if (enabled) runHide();
    });
    ctx.onInvalidated(unwatch);
  }
});
