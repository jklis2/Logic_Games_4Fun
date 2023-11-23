import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const playMusic = createAsyncThunk(
  "music/playMusic",
  async ({ song, enabled }, { dispatch, getState }) => {
    const state = getState();
    if (state.music.audioRef) {
      state.music.audioRef.pause();
      state.music.audioRef = null;
    }

    if (enabled) {
      const audio = new Audio(`/Songs/${song}.m4a`);
      audio.play();
      audio.loop = true;
      dispatch(setAudioRef(audio));
    }
  }
);

export const initializeMusic = createAsyncThunk(
  "music/initializeMusic",
  async (_, { dispatch }) => {
    const savedSong = localStorage.getItem("selectedSong");
    const savedMusicEnabled = localStorage.getItem("isMusicEnabled") === "true";

    if (savedSong && savedMusicEnabled) {
      dispatch(playMusic({ song: savedSong, enabled: savedMusicEnabled }));
    }
  }
);

export const musicSlice = createSlice({
  name: "music",
  initialState: {
    song: "AsianEthnicJapaneseWorldSweetMedia",
    enabled: false,
    audioRef: null,
  },
  reducers: {
    updateMusicSettings: (state, action) => {
      state.song = action.payload.song;
      state.enabled = action.payload.enabled;
    },
    setAudioRef: (state, action) => {
      state.audioRef = action.payload;
    },
  },
  extraReducers: {
    [playMusic.fulfilled]: (state, action) => {},
  },
});

export const { updateMusicSettings, setAudioRef } = musicSlice.actions;

export default musicSlice.reducer;