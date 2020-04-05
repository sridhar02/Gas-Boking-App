const bookings = (state = [], action) => {
  switch (action.type) {
    case "ADD_To_Bookings":
      return [
        ...state,
        {
          id: action.id,
          gasConnectionNumber: action.payload.gasConnectionNumber,
          gasConnectionName: action.payload.gasConnectionName,
          mobileNumber: action.payload.mobileNumber,
          connectionType: action.payload.connectionType,
        },
      ];
    default:
      return state;
  }
};

export default bookings;
