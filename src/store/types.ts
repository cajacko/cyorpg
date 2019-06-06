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

type Position = | {
      x: number;
      y: number;
    }
  | {
      x?: undefined;
      y?: undefined;
    };

export interface IStoryPart {
  id: string;
  label: string;
  headline?: string;
  content: string;
  actions: IAction[];
  tree: {
    position: Position;
  };
}

export interface IMap<V> {
  [key: string]: V | undefined;
}

export type IStoryParts = IMap<IStoryPart>;

type Bounds = | {
      left: number;
      right: number;
      top: number;
      bottom: number;
    }
  | {
      left?: undefined;
      right?: undefined;
      top?: undefined;
      bottom?: undefined;
    };
export interface IStory {
  id: string;
  title: string;
  description: string;
  startingStoryPart: string;
  storyParts: IStoryParts;
  bounds: Bounds;
}

export const SAVE_STORY_PROP = 'SAVE_STORY_PROP';
export const SAVE_STORY_PART_PROP = 'SAVE_STORY_PART_PROP';
export const SAVE_STORY = 'SAVE_STORY';
export const DELETE_STORY = 'DELETE_STORY';
export const DELETE_STORY_PART = 'DELETE_STORY_PART';
export const SET_STORY_PART_POSITION = 'SET_STORY_PART_POSITION';

export type IStoryProp = 'title' | 'description';
export type IStoryPartProp = 'label' | 'headline' | 'content';

export interface ISaveStoryPropAction<P extends IStoryProp> {
  type: typeof SAVE_STORY_PROP;
  payload: {
    storyId: string;
    key: P;
    value: IStory[P];
    story?: IStory;
  };
}

export interface ISaveStoryPartPropAction<P extends IStoryPartProp> {
  type: typeof SAVE_STORY_PART_PROP;
  payload: {
    storyId: string;
    partId: string;
    key: P;
    value: IStoryPart[P];
    storyPart?: IStoryPart;
    story?: IStory;
  };
}

export interface ISaveStoryAction {
  type: typeof SAVE_STORY;
  payload: IStory;
}

export interface IDeleteStoryAction {
  type: typeof DELETE_STORY;
  payload: {
    storyId: string;
  };
}

export interface IDeleteStoryPartAction {
  type: typeof DELETE_STORY_PART;
  payload: {
    storyId: string;
    partId: string;
    story?: IStory;
  };
}

export interface ISetStoryPartPositionAction {
  type: typeof SET_STORY_PART_POSITION;
  payload: {
    storyId: string;
    partId: string;
    x: number;
    y: number;
    story?: IStory;
    storyPart?: IStoryPart;
  };
}

export type Actions = | ISaveStoryPropAction<IStoryProp>
  | ISaveStoryAction
  | IDeleteStoryAction
  | ISaveStoryPartPropAction<IStoryPartProp>
  | IDeleteStoryPartAction
  | ISetStoryPartPositionAction;

export type Dispatch = RDispatch<Actions>;
