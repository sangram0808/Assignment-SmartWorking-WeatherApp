import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  theme: 'light' | 'dark';
}

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<'light' | 'dark' | undefined>) => {
      if (action.payload) {
        state.theme = action.payload; // Explicitly set theme
      } else {
        state.theme = state.theme === 'light' ? 'dark' : 'light'; // Toggle theme if no payload
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
