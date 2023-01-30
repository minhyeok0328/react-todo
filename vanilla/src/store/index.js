import Store from '@/core/Store';

const initialState = {
  test: 1234,
};

const store = new Store({
  initialState,
  reducers: {
    increment: (state, count) => {
      state.test = count;
    },
  },
});

export default store;