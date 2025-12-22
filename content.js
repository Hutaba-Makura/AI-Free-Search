  function replaceElement() {
    // 既に処理済みの場合は早期リターン
    if (window.isAIFreeDisplayed) {
      return true;
    }
    
    const targetAbstract = document.querySelector('.YzCcne');
    const targetTab = document.querySelector('.olrp5b');
    if (targetAbstract && targetTab) {
      targetAbstract.style.display = 'none';
      targetTab.style.display = 'none';

      window.isAIFreeDisplayed = true;
      return true; // 成功したことを返す
    }
    return false; // 要素が見つからなかった
  }
  
  function checkAndReplaceElement() {
    // 既に処理済みの場合は実行しない
    if (window.isAIFreeDisplayed) {
      return;
    }
    
    const timeouts = [];
    for (let i = 0; i < 5; i++) {
      const timeoutId = setTimeout(() => {
        // 成功したら残りのタイマーをキャンセル
        if (replaceElement()) {
          timeouts.forEach(id => clearTimeout(id));
        }
      }, 50 * (i + 1));
      timeouts.push(timeoutId);
    }
  }
  
  // ページが読み込まれたら実行
  if (!window.isAIFreeDisplayed) checkAndReplaceElement();

  // "document_end"のタイミングでも実行
  document.addEventListener('DOMContentLoaded', () => {
    if (!window.isAIFreeDisplayed) checkAndReplaceElement();
  });
  