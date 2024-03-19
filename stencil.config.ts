import { Config} from '@stencil/core';


export const config: Config = {
  bundles:[
    {components:['my-app-root']},
    {components:['my-home-page','my-about-page','my-categories-page','my-whats-new-page']}
  ],
  namespace: 'e-commerce-stencil',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
