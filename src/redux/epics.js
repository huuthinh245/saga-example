import { combineEpics } from 'redux-observable';

import { authenticationEpic } from './authentication/epics';

export const epics = combineEpics(
  authenticationEpic,
);