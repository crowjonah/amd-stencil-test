'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const {
  Funnel
} = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    amd: {
      loader: 'https://js.arcgis.com/4.16/',
      packages: ['esri', 'dojo'],
    }
  });

  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  const trees = [];
  trees.push(new Funnel('./node_modules/@esri/calcite-components/dist', {
    srcDir: '/',
    include: ['calcite/assets/*.json'],
    destDir: '/assets'
  }));

  return app.toTree(trees);
};
