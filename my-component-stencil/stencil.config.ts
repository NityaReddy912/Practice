import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'my-component-stencil',
  outputTargets: [
    {
      type: 'dist',//dist means comp can be shared
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
