const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: 'one', categories: 'Horror', title: 'David', author: 'John Doe',
  },
  {
    id: 'two', categories: 'Fiction', title: 'Tristan', author: 'Maria M',
  },
  {
    id: 'three', categories: 'Dark', title: 'Viper', author: 'Anastaisia',
  },
  {
    id: 'four', categories: 'Romance', title: 'Daut', author: 'Lennon',
  },
  {
    id: 'five', categories: 'Realisti', title: 'Tatoh', author: 'John doe',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((e) => e.id !== payload);
    default:
      return state;
  }
};

export default reducer;
