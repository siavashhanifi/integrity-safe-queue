export const  updateQueue = (queueState) => {
    return {
    type: "UPDATE_QUEUE",
    payload: {
      queueState
    }}  
};