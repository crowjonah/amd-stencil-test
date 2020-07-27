
import {
  applyPolyfills,
  defineCustomElements
} from '@esri/calcite-components/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements(window, {
    resourcesUrl: "assets/calcite/"
  });
});

export function initialize() {}

export default {
  initialize
};
