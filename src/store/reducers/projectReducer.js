const initState = {
    projects : [
        { id:1, title: 'Go to Prague', contents: 'Going to Prague in Czech Republic. Drink beer'},
        { id:2, title: 'Go to Japan', contents: 'Going to Prague in Japan. Drink Sapporo beer'},
        { id:3, title: 'Go to Canada', contents: 'Going to Prague in Canada. Drink Canadian beer'}
    ]

}


const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created', action.payload);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log('create project err', action.err);
            return state;
        default:
        return state;
    }
};

export default projectReducer
