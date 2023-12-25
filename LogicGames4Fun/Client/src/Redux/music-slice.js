import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const storedState = JSON.parse(localStorage.getItem("musicState"));

const initialMusicState = {
  song: storedState?.song,
  audioRef: storedState?.ref,
  enabled: storedState?.enabled || false,
  loading: false,
};

export const playMusic = createAsyncThunk(
  "music/playMusic",
  async ({ song, enabled }, { dispatch, getState }) => {
    const state = getState().music;

    if (enabled) {
      console.log(enabled);
      const audio = new Audio(`/Songs/${song}.m4a`);

      audio.play().catch((e) => console.error("Error with playing audio:", e));
      audio.loop = true;

      if (state.audioRef) {
        state.audioRef.pause();
      }

      dispatch(setAudioRef(audio));

      localStorage.setItem("musicState", JSON.stringify({ song, enabled }));
      console.log({ song, enabled });
      return { song, enabled };
    }
  }
);

export const muteMusic = createAsyncThunk(
  "music/muteMusic",
  async (_, { getState }) => {
    const state = getState().music;
    state.audioRef.pause();
    localStorage.removeItem("musicState");
  }
);

export const initializeMusic = createAsyncThunk(
  "music/initializeMusic",
  async (_, { dispatch }) => {
    const savedSong = JSON.parse(localStorage.getItem("musicState"));
    if (savedSong) {
      const { song, enabled } = savedSong;
      console.log(savedSong);
      console.log();
      return dispatch(playMusic({ song, enabled }));
    } else {
      return { song: null, enabled: false };
    }
  }
);

export const musicSlice = createSlice({
  name: "music",
  initialState: initialMusicState,
  reducers: {
    setAudioRef: (state, action) => {
      state.audioRef = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(muteMusic.fulfilled, (state, action) => {
      state.song = null;
      state.enabled = false;
      state.songRef = null;
      state.loading = false;
    });

    builder.addCase(playMusic.fulfilled, (state, action) => {
      state.song = action.payload.song;
      state.enabled = action.payload.enabled;
      state.songRef = action.payload.songRef;
      state.loading = false;
    });
  },
});

export const { setAudioRef } = musicSlice.actions;
export default musicSlice.reducer;
