  function checkAndReplaceElement() {
    setTimeout(() => {
      const targetAbstract = document.querySelector('.YzCcne');
      const targetTab = document.querySelector('.olrp5b');
      if (targetAbstract || targetTab) {
        if(targetAbstract) targetAbstract.style.display = 'none';
        if(targetTab) targetTab.style.display = 'none';
  
        window.isAIFreeDisplayed = true;
      }
    },10);
  }
  
  // ページが読み込まれたら実行
  if (!window.isAIFreeDisplayed) {
    checkAndReplaceElement();
  }
  