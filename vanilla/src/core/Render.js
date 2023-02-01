import { selector } from '@/utils';

function Render() {
    const renderContext = {
      target: null,
      rootComponent: () => '',
      eventStack: [],
    };

    const registerEvent = () => {
      renderContext.eventStack.forEach(({ type, listener, callback }) => {
        const $target = selector(listener);

        if (!$target.length) {
          $target.addEventListener(type, callback);
          return;
        }

        $target.forEach((item) => item.addEventListener(type, callback.bind(item)));
      });
      
      renderContext.eventStack = [];
    };

    const _render = () => {
      const { target, rootComponent } = renderContext;

      target.innerHTML = rootComponent();
      registerEvent();
    };

    const render = (target, rootComponent) => {
      renderContext.target = target;
      renderContext.rootComponent = rootComponent;

      _render();
    };

    const addEvent = (type, listener, callback) => {
      renderContext.eventStack.push({
        type,
        listener,
        callback,
      });
    };

    return {
      render,
      _render,
      addEvent,
    };
}

const { render, _render, addEvent } = Render();

export { render, _render, addEvent };