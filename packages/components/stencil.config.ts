import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'components',
  taskQueue: 'async',
  sourceMap: true,
  extras: {
    experimentalImportInjection: true,
  },
  plugins: [sass()],
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    { type: 'dist-custom-elements' },
    { type: 'docs-readme' },
    { type: 'www', serviceWorker: null } /* disable service workers */,
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'bundle',
      includeGlobalScripts: false,
    },
  ],
};
