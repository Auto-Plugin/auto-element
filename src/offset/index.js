import { isDefined, isString } from 'auto-element/src/utils/types';

const use = (o) => {
  console.log('offset used');
  if (!isDefined(o)) return;
  if (isString(o)) {
    window.offsetEl = document.querySelector(o);
    return;
  }
  console.error('offset -- the input is a non string parameter!');
};

export default { use };
