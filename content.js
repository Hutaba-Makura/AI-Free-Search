  function replaceElement() {
    const targetAbstract = document.querySelector('.YzCcne');
    const targetTab = document.querySelector('.olrp5b');
    if (targetAbstract || targetTab) {
      if(targetAbstract) targetAbstract.style.display = 'none';
      if(targetTab) targetTab.style.display = 'none';

      window.isAIFreeDisplayed = true;
    }
  }
  
  function checkAndReplaceElement() {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        replaceElement();
      }, 50 * (i + 1));
    }
  }
  
  // ページが読み込まれたら実行
  if (!window.isAIFreeDisplayed) {
    checkAndReplaceElement();
  }

  // "document_end"のタイミングでも実行
  document.addEventListener('DOMContentLoaded', () => {
    checkAndReplaceElement();
  });
  