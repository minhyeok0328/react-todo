import { _render } from '@/core/render';

function hooks(callback) {
  const stateContext = {
    current: 0,
    states: [],
  };
  function useState(initialValue) {
    const { current, states } = stateContext;
    const currentValue = states[current];

    let state = currentValue ?? initialValue;

    const setState = (newState) => {
      if (state === newState) return;

      stateContext.current += 1;
      stateContext.states[stateContext.current] = newState;
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