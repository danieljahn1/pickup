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
            imageurl: 'http://nflshop.frgimages.com/FFImage/thumb.aspx?i=/productImages%2F_633000%2Fff_633362_full.jpg&w=600'
        },
        {
            id: 11,
            name: 'Lewis Aguilar',
            dob: '',
            gender: 'Male',
            zip: '92868',
            email: 'laguilar@email.com',
            password: 'abc123',
            imageurl: 'https://i.pinimg.com/736x/5e/60/0e/5e600e5c89a24460ad6b70cfe7e96564.jpg'
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
            dob: '2/28/1990',
            gender: 'Male',
            zip: '92804',
            email: 'dahn@email.com',
            password: 'abc123',
            imageurl: 'https://cdn.bleacherreport.net/images/team_logos/328x328/detroit_lions.png'
        }
    ],
    organizers: [
        {
            userId: 10,
            eventID: 1
        },
        {
            userId: 13,
            eventID: 2
        },
        {
            userId: 12,
            eventID: 3
        },
        {
            userId: 1002,
            eventID: 90000
        },
        {
            userId: 1003,
            eventID: 90001
        },
        {
            userId: 1004,
            eventID: 90002
        },
        {
            userId: 1004,
            eventID: 90003
        },
        {
            userId: 1003,
            eventID: 90004
        },
        {
            userId: 11,
            eventID: 90005
        }
    ],
    participants: [
        // {
        //     userId: 10,
        //     eventID: 1
        // },
        {
            userId: 11,
            eventID: 1
        },
        {
            userId: 12,
            eventID: 90002
        },
        {
            userId: 11,
            eventID: 90002
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
            date: "2018-03-19",
            venue: "Quail Hill Community Park",
            address: "35 Shady Canyon Dr",
            zip: "92603",
            category: "Basketball",
            minPlayersNeeded: 4,
            maxPlayersNeeded: 6,
            message: "Come out to play ball. Any levels"
        },
        {
            id: 2,
            event: "Flag football tournament",
            date: "2018-03-18",
            venue: "Orange County Great Park",
            address: "6950 Marine Way",
            zip: "92618",
            category: "Flag Football",
            minPlayersNeeded: 20,
            maxPlayersNeeded: 76,
            message: "All individuals and teams welcome to play and enter into a tournament. All skill levels. Individual signups will be placed onto a team."
        },
        {
            id: 3,
            event: "Golf money game",
            date: "2018-03-31",
            venue: "Oak Creek Golf Club",
            address: "1 Golf Club Dr",
            zip: "92618",
            category: "Golf",
            minPlayersNeeded: 1,
            maxPlayersNeeded: 0,
            message: "Let's play skins for some minor money. Low to mid level handicaps."
        },
    ],
    eventLastViewed: [],
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
    if (action.type == "USER_LOG_IN") {
        state = {
            ...state,
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
    if (action.type == "USER_UPDATE") {
        state = {
            ...state,
            usersArr: action.payload
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
    if (action.type == "JOIN_EVENT_ANON") {
        state = {
            ... state,
            eventLastViewed: action.payload
        }
    }
    return state;
}

export default rootReducer
