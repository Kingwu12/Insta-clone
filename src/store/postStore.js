import { create } from 'zustand';

const usePostStore = create((set) => ({
  posts: [],
  createPosts: (post) => set((state) => ({ posts: [post, ...state.posts] })),
  deletePost: (id) => set((state) => ({ posts: state.posts.filter((p) => p.id !== id) })),
  // addComment
  setPosts: (posts) => set({ posts }),
}));

export default usePostStore;
