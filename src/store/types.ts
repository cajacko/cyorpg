import { Dispatch as RDispatch } from 'redux';

interface IAction1 {
  goToStoryPart: string;
  text: string;
  willFinish?: undefined;
}

interface IAction2 {
  goToStoryPart?: undefined;
  willFinish: true;
  text: string;
}

export type IAction = IAction1 | IAction2;

export interface IStoryPart {
  id: string;
  headline?: string;
  content: string;
  actions: IAction[];
}

export interface IMap<V> {
  [key: string]: V | undefined;
}

export interface IStory {
  id: string;
  title: string;
  description: string;
  startingStoryPart: string;
  storyParts: IMap<IStoryPart>;
}

export const SAVE_STORY_PROP = 'SAVE_STORY_PROP';
export const SAVE_DRAFT_STORY = 'SAVE_DRAFT_STORY';
export const DELETE_STORY = 'DELETE_STORY';

export type IStoryProp = 'title' | 'description';

export interface ISaveStoryPropAction<P extends IStoryProp> {
  type: typeof SAVE_STORY_PROP;
  payload: {
    storyId: string;
    key: P;
    value: IStory[P];
  };
}

export interface ISaveDraftStoryAction {
  type: typeof SAVE_DRAFT_STORY;
  payload: {
    storyId: string;
  };
}

export interface IDeleteStoryAction {
  type: typeof DELETE_STORY;
  payload: {
    storyId: string;
  };
}

export type Actions = ISaveStoryPropAction<IStoryProp> | ISaveDraftStoryAction | IDeleteStoryAction;

export type Dispatch = RDispatch<Actions>;
