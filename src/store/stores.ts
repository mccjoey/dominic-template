import create from "zustand";

type UseMenuStoreProps = {
  searchMenu: boolean;
  cart: boolean;
  toggleCart: () => void;
  toggleSearchMenu: () => void;
};

export const useMenuStore = create<UseMenuStoreProps>((set) => ({
  searchMenu: false,
  cart: false,
  toggleCart: () => set((state) => ({ cart: !state.cart })),
  toggleSearchMenu: () => set((state) => ({ searchMenu: !state.searchMenu })),
}));
