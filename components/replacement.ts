declare global {
  interface Window {
    isAIFreeDisplayed?: boolean;
  }
}

export function hideAbstOnSearch() {
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