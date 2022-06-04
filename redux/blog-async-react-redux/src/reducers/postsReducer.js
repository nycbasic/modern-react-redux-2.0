export default (state = [], action) => {
  const { type, payload } = action;
  console.log("FROM POSTREDUCER: " + type);
  switch (type) {
    case "FETCH_POSTS":
      return payload;
    default:
      return state;
  }
};
