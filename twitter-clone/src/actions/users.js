export const RECEIVED_USERS = "RECEIVED_USERS";

const receiveUser = (users) => {
  return {
    type: RECEIVED_USERS,
    users,
  };
};

export default receiveUser;
