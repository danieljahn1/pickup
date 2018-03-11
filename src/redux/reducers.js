import uniqid from 'uniqid'

const initialState = {
    testRedux: [
        {
            name: "Test content",
            copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ]
}

const rootReducer = (state=initialState, action) => {

    return state;
}

export default rootReducer