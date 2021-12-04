import { CreateTripInfoTemplate } from './view/trip-info-view';
import { CreateTripControlsTemplate } from './view/trip-controls-view';
import { CreateControlsFiltersTemplate } from './view/trip-controls-filter-view';
import { renderTemplate, RenderPosition } from './render';

const tabsMainElement = document.querySelector('.page-header');
const tabsElement = tabsMainElement.querySelector('.trip-main');
const controlsMainElement = document.querySelector('.trip-main__trip-controls');
const controlsElement = controlsMainElement.querySelector('.trip-controls__navigation');
const filtersElement = tabsMainElement.querySelector('.trip-controls__filters');


renderTemplate(tabsElement, CreateTripInfoTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(controlsElement, CreateTripControlsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filtersElement, CreateControlsFiltersTemplate(), RenderPosition.BEFOREEND);
