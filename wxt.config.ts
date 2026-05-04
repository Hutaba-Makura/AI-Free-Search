import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "NO AI Search",
    version: "1.2",
    description: "Google検索の AI要約とAIモードタブを非表示にします。",
    icons: {
      "16": "icon/icon16.png",
      "32": "icon/icon32.png",
      "48": "icon/icon48.png",
      "128": "icon/icon128.png"
    }
  },
});