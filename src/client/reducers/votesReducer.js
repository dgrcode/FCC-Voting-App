'use strict';

const defaultVoteState = { pending: { length: 0 }, temp: [] };

export default function votesReducer (state = defaultVoteState, action) {
  switch (action.type) {
  case 'COMM_TEMP_VOTE':
    //TODO following scenario should be polished:
    //  - user A votes for option `x`
    //  - user B connects, but didn't receive the `temp`
    //  - user A unvotes option `x`
    //  - user B receives a downvote from A. This shouldn't count on B
    console.log('intenta procesar el COMM_TEMP_VOTE');
    console.log(state.temp);
    const pollTempVotes = {};
    pollTempVotes[action.payload.pollId] = [
      {
        userWs: action.payload.userWs,
        choiceId: action.payload.choiceId,
        amount: action.payload.amount
      },
      ...(state.temp[action.payload.pollId] || [])
    ];
    return ({
      pending: state.pending,
      temp: Object.assign({}, state.temp, pollTempVotes)
    });

  case 'PENDING_VOTE':
    const pollId = action.payload.pollId;
    const choiceId = action.payload.choiceId;
    const obj = Object.assign({}, state.pending);
    if (choiceId === -1) {
      if (obj.hasOwnProperty(pollId)) {
        obj.length--;
      }
      Reflect.deleteProperty(obj, pollId);
      return { pending: obj, temp: state.temp };
    }
    if (!obj.hasOwnProperty(pollId)) {
      obj.length++;
    }
    obj[pollId] = choiceId;
    return { pending: obj, temp: state.temp };
/*
  case 'COMM_VOTE':
    const pollId = action.payload.pollId;
    const updatedPollState = [...state.visible, ...state.hold]
      .filter(poll => poll._id === pollId)[0];
    if (!updatedPollState) {
      return state;
    }
    const choice = action.payload.choiceId;
    updatedPollState.choices[choice].votes += action.payload.amount;
    console.log('current state got updated');
    return ({
      visible: state.visible.map(poll => poll._id === pollId ? updatedPollState : poll),
      hold: state.hold.map(poll => poll._id === pollId ? updatedPollState : poll),
      temp: state.temp
    });
*/


  default:
    return state;
  }
}
