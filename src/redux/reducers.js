import uniqid from 'uniqid'

const initialState = {
    loggedInUser: [],
    usersArr: [
        {
            id: 10,
            name: 'Andrew Anderson',
            dob: '',
            gender: 'Male',
            zip: '92689',
            email: 'aanderson@email.com',
            password: 'abc123',
            imageurl: 'http://www.findthatlogo.com/wp-content/gallery/nfl-san-francisco-49ers-logos/san-francisco-49ers-logo.gif'
        },
        {
            id: 11,
            name: 'Lewis Aguilar',
            dob: '',
            gender: 'Male',
            zip: '92868',
            email: 'laguilar@email.com',
            password: 'abc123',
            imageurl: 'https://www.cycleworld.com/sites/cycleworld.com/files/styles/325_4x3/public/images/2018/03/2.-cal_crutchlow_teaser.jpg?itok=rUP3co2T&fc=50,50'
        },
        {
            id: 12,
            name: 'Eric Masinas',
            dob: '',
            gender: 'Male',
            zip: '91505',
            email: 'emasinas@email.com',
            password: 'abc123',
            imageurl: 'https://cconnect.s3.amazonaws.com/wp-content/uploads/2014/10/Los-Angeles-Kings-2014-Stanley-Cup-Ring.jpg'
        },
        {
            id: 13,
            name: 'Daniel Ahn',
            dob: '',
            gender: 'Male',
            zip: '92804',
            email: 'djahn.shop@outlook.com',
            password: 'abc123',
            imageurl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png'
        }
    ],
    organizers: [
        {
            userId: 13,
            eventID: 2
        }
    ],
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
            maxPlayersNeeded: 6,
            message: "Come out to play ball. Any levels"
        },
        {
            id: 2,
            event: "Flag football tournament",
            date: "3/18/2018",
            address: "Orange County Great Park",
            zip: "92618",
            category: "Flag Football",
            minPlayersNeeded: 20,
            maxPlayersNeeded: 76,
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
            maxPlayersNeeded: 0,
            message: "Let's play skins for some minor money. Low to mid level handicaps."
        },
        {
            eventLastViewed: [],
        },
    ]
}

const rootReducer = (state = initialState, action) => {
    if (action.type == "EVENT_CREATE") {
        state = {
            ...state,
            events: action.payload,
        }
    }
    if (action.type == "ORGANIZER_CREATE") {
        state = {
            ...state,
            organizers: action.payload,
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
    if (action.type == "USER_LOG_OUT") {
        state = {
            ...state,
            // loggedInUser: state.loggedInUser.splice(0,1,action.payload)
            loggedInUser: action.payload
        }
    }
    if (action.type == "LOAD_EVENTS") {
        // Load the events from the JSON file
        state = {
            ...state,
            events: action.payload
        }
    }
    if (action.type == "LOAD_EVENTS_FLAG") {
        state = {
            ...state,
            loadedEventsJsonFile: action.payload
        }
    }
    if (action.type == "ADD_ATTENDEE") {
        state = {
            ... state,
            participants: action.payload
        }
    }
    if (action.type == "LOAD_OTHER_USERS") {
        // Load users from JSON file
        state = {
            ... state,
            usersArr: action.payload
        }
    }
    if (action.type == "LOAD_OTHER_PARTICIPANTS") {
        // Load participants from JSON file
        state = {
            ... state,
            participants: action.payload
        }
    }
    return state;
}

export default rootReducer
