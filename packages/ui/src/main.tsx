import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@tldraw/tldraw/tldraw.css'
import './index.css'

import { getAssetUrlsByMetaUrl } from '@tldraw/assets/urls'
import {
	setDefaultEditorAssetUrls,
	setDefaultUiAssetUrls,
} from '@tldraw/tldraw'

const assetUrls = getAssetUrlsByMetaUrl()
setDefaultEditorAssetUrls(assetUrls)
setDefaultUiAssetUrls(assetUrls)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
