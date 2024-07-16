import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: localStorage.getItem('user-info') ? JSON.parse(localStorage.getItem('user-info')) : null,
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}));

export default useAuthStore;
