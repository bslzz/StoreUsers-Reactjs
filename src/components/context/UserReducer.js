export default (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case 'ADD_USER':
      return {
        users: [action.payload, ...state.users],
      };
    case 'EDIT_USER':
      const updateUser = action.payload;
      const updateUsers = state.users.map((user) => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      });
      return {
        users: updateUsers,
      };
    default:
      return state;
  }
};
