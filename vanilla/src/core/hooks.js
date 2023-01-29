import Observe from '@/core/observe';
import { _render } from '@/core/render';

function hooks(callback) {
  function useState(value) {
    let state = value;

    const setState = (newState) => {
      state = newState;
      callback();
    };

    return [state, setState];
  }

  return {
    useState,
  };
}

const { useState } = hooks(_render);

export { useState };