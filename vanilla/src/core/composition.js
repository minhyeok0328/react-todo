import Observe from '@/core/observe';
import { _render } from '@/core/render';

function Composition(callback) {
  const ref = (value) => {
    return new Observe({ value }, callback);
  }
  const reactive = (obj) => {
    return new Observe(obj, callback);
  }

  return {
    ref,
    reactive,
  };
}

const { ref, reactive } = Composition(_render);

export { ref, reactive };