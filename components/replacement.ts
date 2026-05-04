declare global {
  interface Window {
    isAIFreeDisplayed?: boolean;
  }
}

function replaceElement() {
  const targetAbstract = document.querySelector('.YzCcne');
  const targetTab = document.querySelector('.olrp5b');
  if (targetAbstract || targetTab) {
    if(targetAbstract) {
      const targetAbstract = document.querySelector('.YzCcne') as HTMLElement | null;
      if (targetAbstract) targetAbstract.style.display = 'none';
    }
    if(targetTab) {
      const targetTab = document.querySelector('.olrp5b') as HTMLElement | null;
      if (targetTab) targetTab.style.display = 'none';
    }

    window.isAIFreeDisplayed = true;
  }
}

export function checkAndReplaceElement() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      replaceElement();
    }, 50 * (i + 1));
  }
}