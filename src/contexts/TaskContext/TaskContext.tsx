import { createContext } from 'react';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';

type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
  state: {} as TaskStateModel,
  dispatch: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
