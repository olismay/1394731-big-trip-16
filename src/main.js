import TripInfo from './view/trip-info-view';
import TripControls from './view/trip-controls-view';
import ControlsFilters from './view/trip-controls-filter-view';
import TripEvents from './view/trip-events-view';
import TripEventsItem from './view/trip-events-item-view';
import Form from './view/form-add-new-point-view';
import List from './view/trip-events-list-view';
import { generateTripPoint } from './mocks/trip-events-point';
import { render, RenderPosition } from './render';

const TRIP_POINTS_COUNT = 20;
const points = Array.from({ length: TRIP_POINTS_COUNT}, generateTripPoint);

const tabsMainElement = document.querySelector('.page-header');
const tabsElement = tabsMainElement.querySelector('.trip-main');
const controlsMainElement = document.querySelector('.trip-main__trip-controls');
const controlsElement = controlsMainElement.querySelector('.trip-controls__navigation');
const filtersElement = tabsMainElement.querySelector('.trip-controls__filters');
const tripEventsMainElement = document.querySelector('.page-body__page-main');
const tripEventsElement = tripEventsMainElement.querySelector('.trip-events');


render(tabsElement, new TripInfo(), RenderPosition.AFTERBEGIN);
render(controlsElement, new TripControls(), RenderPosition.BEFOREEND);
render(filtersElement, new ControlsFilters(), RenderPosition.BEFOREEND);
render(tripEventsElement, new TripEvents(), RenderPosition.AFTERBEGIN);
render(tripEventsElement, new List(), RenderPosition.BEFOREEND);

const tripList = document.querySelector('.trip-events__list');
debugger;
for (let i = 1; i < 2; i++) {
  render(tripList, new Form(points[i]), RenderPosition.AFTERBEGIN);
}

for (let i = 1; i < points.length; i++) {
  render(tripList, new TripEventsItem(points[i]), RenderPosition.BEFOREEND);
}

