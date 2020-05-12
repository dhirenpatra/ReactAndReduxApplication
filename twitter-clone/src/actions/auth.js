export const AUTHED_USER = "AUTHED_USER";

const getAuth = (id) => {
  return {
    type: AUTHED_USER,
    id,
  };
};

export default getAuth;
