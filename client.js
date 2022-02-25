// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const homePanel = new Surface(
    500,
    700, 
    Surface.SurfaceShape.Flat
    )
    homePanel.setAngle(0,0)

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('home', { /* initial props */ }),
    homePanel
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360.png'));
}

window.React360 = {init};
