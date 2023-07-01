import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '@tldraw/tldraw/tldraw.css'
import './index.css'

// import { getBundlerAssetUrls } from '@tldraw/assets'
// import {
// 	setDefaultEditorAssetUrls,
// 	setDefaultUiAssetUrls,
// } from '@tldraw/tldraw'

// const assetUrls = getBundlerAssetUrls()
// setDefaultEditorAssetUrls(assetUrls)
// setDefaultUiAssetUrls(assetUrls)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
