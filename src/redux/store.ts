import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
