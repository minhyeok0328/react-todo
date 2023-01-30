import { _render } from '@/core/Render.js';

function Hooks(callback) {
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

const { useState } = Hooks(_render);

export { useState };