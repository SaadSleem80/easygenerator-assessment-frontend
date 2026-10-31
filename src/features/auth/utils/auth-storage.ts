import type { User } from "@/features/auth/types/auth.types";

const USER_KEY = "user";

export const authStorage = {
  getUser: (): User | null => {
    const user = localStorage.getItem(USER_KEY);

    return user ? JSON.parse(user) : null;
  },

  setUser: (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  clear: () => {
    localStorage.removeItem(USER_KEY);
  },
};
