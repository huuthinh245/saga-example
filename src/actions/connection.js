const connectionTypes = {
  CHANGE_CONNECTION_STATUS: 'CHANGE_CONNECTION_STATUS'
};

const changeConnectionStatus = status => ({
  type: connectionTypes.CHANGE_CONNECTION_STATUS,
  payload: status
});
export { connectionTypes, changeConnectionStatus };
