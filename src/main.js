import { CreateTripInfoTemplate } from './view/trip-info-view';
import { CreateTripControlsTemplate } from './view/trip-controls-view';
import { CreateControlsFiltersTemplate } from './view/trip-controls-filter-view';
import { CreateTripEventsTemplate } from './view/trip-events-view';
import { CreateTripEventsItemTemplate } from './view/trip-events-item-view';
import { CreateFormTemplate } from './view/form-add-new-point-view';
import { CreateListTemplate } from './view/trip-events-list-view';
import { generateTripPoint } from './mocks/trip-events-point';
import { renderTemplate, RenderPosition } from './render';

const TRIP_POINTS_COUNT = 20;
const points = Array.from({ length: TRIP_POINTS_COUNT}, generateTripPoint);

const tabsMainElement = document.querySelector('.page-header');
const tabsElement = tabsMainElement.querySelector('.trip-main');
const controlsMainElement = document.querySelector('.trip-main__trip-controls');
const controlsElement = controlsMainElement.querySelector('.trip-controls__navigation');
const filtersElement = tabsMainElement.querySelector('.trip-controls__filters');
const tripEventsMainElement = document.querySelector('.page-body__page-main');
const tripEventsElement = tripEventsMainElement.querySelector('.trip-events');

renderTemplate(tabsElement, CreateTripInfoTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(controlsElement, CreateTripControlsTemplate(), RenderPosition.BEFOREEND);
renderTemplate(filtersElement, CreateControlsFiltersTemplate(), RenderPosition.BEFOREEND);
renderTemplate(tripEventsElement, CreateTripEventsTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(tripEventsElement, CreateListTemplate(), RenderPosition.BEFOREEND);

const tripList = document.querySelector('.trip-events__list');

for (let i = 1; i < 2; i++) {
  renderTemplate(tripList, CreateFormTemplate(points[i]), RenderPosition.AFTERBEGIN);
}

for (let i = 1; i < points.length; i++) {
  renderTemplate(tripList, CreateTripEventsItemTemplate(points[i]), RenderPosition.BEFOREEND);
}

