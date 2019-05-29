interface IAction {
  goToStoryPart: string;
  text: string;
}

interface IAction {
  willFinish: true;
  text: string;
}

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
