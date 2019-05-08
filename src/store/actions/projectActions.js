export const createProject = project => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //make asyc call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            firstName: 'Daniel',
            lastName: 'Gentleman',
            authorId : 12344,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', payload: project});
        }).catch((err)=> {
            dispatch({ type: 'CREATE_PROJECT_ERR', err})
        });
    }
}