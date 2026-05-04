import './style.css';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/switch/switch.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities/icon-library.js';

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
        <sl-icon name="camera2" library="bootstrap"></sl-icon>
        <sl-switch checked>Checked</sl-switch>
      </div>
    </div>
  </div>
`;