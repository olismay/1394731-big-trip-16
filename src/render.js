export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

export const render = (container, component, place) => {
  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(component.element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(component.element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(component.element);
      break;
    case RenderPosition.AFTEREND:
      container.after(component.element);
      break;
  }
};

export const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};
