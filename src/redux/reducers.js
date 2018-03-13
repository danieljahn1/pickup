import uniqid from 'uniqid'

const initialState = {
    testRedux: [
        {
            name: "Test content",
            copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ],
    events: [
        {
            id: 10000,
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
            id: 10001,
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
            id: 10002,
            event: "Golf money game",
            date: "3/31/2018",
            address: "Oak Creek Golf Club",
            zip: "92618",
            category: "Golf",
            minPlayersNeeded: 1,
            maxPlayersNeeded: 2,
            message: "Let's play skins for some minor money. Low to mid level handicaps."
        }
    ]
}

const rootReducer = (state = initialState, action) => {
    if (action.type == "EVENT_CREATE") {
        state = {
        }

    }
    return state;
}

export default rootReducer