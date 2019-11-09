export default function admin(
  state = {
    loggedIn: false
  },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedIn: true,
        ...action.payload
      };
  }
  return state;
}
