import { create } from 'zustand';

type State = {
  search: string;
};

type Action = {
  updateFirstName: (firstName: State['search']) => void;
};

// Create your store, which includes both state and (optionally) actions
const useStore = create<State & Action>(set => ({
  search: '',
  updateFirstName: search => set(() => ({ search: search }))
}));

export default useStore;
