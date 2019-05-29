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

export interface IStory {
  id: string;
  title: string;
  description: string;
  startingStoryPart: string;
}

export interface IMap<V> {
  [key: string]: V | undefined;
}
