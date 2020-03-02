export const createProject = (project) => {
    return (dispatch, getState) => {
        //assync call db
        dispatch({
            type: 'CREATE_PROJECT', project
        });
    }
};