export default function(state=[], action){
	switch(action.type){
		case 'CREATE_COURSE':
			// return state.push(action.course);
			return[
				...state,
				Object.assign({}, action.course)
			];
		default:
			return state;
	}

}
