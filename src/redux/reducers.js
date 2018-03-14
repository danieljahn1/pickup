import uniqid from 'uniqid'

const initialState = {
    loggedInUser: [],
    usersArr: [{
        id: 10,
        name: 'Andrew Anderson',
        dob: '',
        gender: 'Male',
        zip: '92689',
        email: 'aanderson@email.com',
        password: 'abc123',
    },{
        id: 11,
        name: 'Lewis Aguilar',
        dob: '',
        gender: 'Male',
        zip: '92868',
        email: 'laguilar@email.com',
        password: 'abc123',
    },{
        id: 12,
        name: 'Eric Masinas',
        dob: '',
        gender: 'Male',
        zip: '91505',
        email: 'emasinas@email.com',
        password: 'abc123',
    },{
        id: 13,
        name: 'Daniel Ahn',
        dob: '',
        gender: 'Male',
        zip: '92804',
        email: 'djahn.shop@outlook.com',
        password: 'abc123',
    }],
    participants: [
        {
            userId: 10,
            eventID: 1
        },
        {
            userId: 11,
            eventID: 1
        },
        {
            userId: 12,
            eventID: 3
        },
        {
            userId: 12,
            eventID: 90002
        },
        {
            userId: 11,
            eventID: 90002
        },
        {
            userId: 13,
            eventID: 2
        }
    ],
    // testRedux: [
    //     {
    //         name: "Test content",
    //         copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //     }
    // ],
    loadedEventsJsonFile: false,
    events: [
        {
            id: 1,
            event: "Pickup basketball",
            date: "3/19/2018",
            address: "Quail Hill Community Park",
            zip: "92603",
            category: "Basketball",
            minPlayersNeeded: 4,
            maxPlayersNeeded: 10,
            message: "Come out to play ball. Any levels"
        },
        {
            id: 2,
            event: "Flag football tournament",
            date: "3/18/2018",
            address: "Orange County Great Park",
            zip: "92618",
            category: "Football",
            minPlayersNeeded: 20,
            maxPlayersNeeded: 80,
            message: "All individuals and teams welcome to play and enter into a tournament. All skill levels. Individual signups will be placed onto a team."
        },
        {
            id: 3,
            event: "Golf money game",
            date: "3/31/2018",
            address: "Oak Creek Golf Club",
            zip: "92618",
            category: "Golf",
            minPlayersNeeded: 1,
            maxPlayersNeeded: 1,
            message: "Let's play skins for some minor money. Low to mid level handicaps."
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    if (action.type == "EVENT_CREATE") {
        state = {
            ...state,
            events: state.events.concat(action.payload)
        }
    }
    if (action.type == "USER_CREATE") {
        state = {
            ...state,
            usersArr: state.usersArr.concat(action.payload)
        }
    }
    if (action.type == "USER_AUTH") {
        state = {
            ...state,
            // loggedInUser: state.loggedInUser.splice(0,1,action.payload)
            loggedInUser: action.payload
        }
    }
    if (action.type == "LOAD_EVENTS") {
        // Load the events from the JSON file
        state = {
            ... state,
            events: action.payload
        }
    }
    if (action.type == "LOAD_EVENTS_FLAG") {
        state = {
            ... state,
            loadedEventsJsonFile: action.payload
        }
    }
    return state;
}

export default rootReducer
