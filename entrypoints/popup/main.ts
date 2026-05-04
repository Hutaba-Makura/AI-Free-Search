import './style.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';
import { storage } from '#imports';

const hideAbstEnabled = storage.defineItem<boolean>('local:hideAbstEnabled', {
  defaultValue: true,
});

setBasePath(chrome.runtime.getURL(''));
registerIconLibrary('bootstrap', {
  resolver: (name) => `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}.svg`,
  mutator: (svg) => svg.setAttribute('fill', 'currentColor'),
});

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="title">
      <img src="icon/icon32.png" alt="No AI Search Icon" class="icon">
      <span class="title-text">NO AI Search</span>
    </div>
    <div class="content">
      <div class="search">
        <div class="search-icon">
          <sl-icon name="google" library="bootstrap"></sl-icon>
        </div>
        <div class="search-title">Google Search</div>
        <div class="search-switch">
          <sl-switch></sl-switch>
        </div>
      </div>
    </div>
  </div>
`;

const toggle = document.querySelector('sl-switch');
if (toggle) {
  const applyValue = (value: boolean) => {
    toggle.checked = value;
  };

  hideAbstEnabled.getValue().then(applyValue);
  hideAbstEnabled.watch(applyValue);

  toggle.addEventListener('sl-change', async () => {
    await hideAbstEnabled.setValue(toggle.checked);
  });
}