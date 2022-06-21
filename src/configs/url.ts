import { Map } from 'immutable';

const ROUTE_URL_OBJ = {
  HOME: '',
  LOGIN: 'login',
  INTRO: 'intro',
  MEMBER: 'member',
  WAY: 'way',
  BOARD: 'board',
};

const PAGE_URL_OBJ = {
  HOME: '/',
};

export const ROUTE_URL = Map(ROUTE_URL_OBJ).toObject();
export const PAGE_URL = Map(PAGE_URL_OBJ).toObject();
