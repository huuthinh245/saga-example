export const connectTypes = {
  CHANGE_CONNECTION_STATUS: 'CHANGE_CONNECTION_STATUS',
  DEVICE_IS_OFFLINE: 'DEVICE_IS_OFFLINE'
};
export const connectActions = {
  changeConnectionAction: (status: Boolean = true) => ({
    type: connectTypes.CHANGE_CONNECTION_STATUS,
    payload: status
  })
};
