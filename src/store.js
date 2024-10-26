import { create } from 'zustand';

const useStore = create((set) => ({
  searchBook: '',
  books: [],
  loading: false,
  setSearchTerm: (term) => set({ searchTerm: term }),
  setBooks: (books) => set({ books }),
  setLoading: (loading) => set({ loading }),
}));

export default useStore;
