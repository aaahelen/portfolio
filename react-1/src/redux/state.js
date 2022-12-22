let state = {
    profilePage: {
        posts: [
            {id:1,  message: 'Hi, how are you', likesCount: 12},
            {id:2,  message: 'it`s my first post', likesCount: 11},
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'yo'},
            {id: 3, message: 'yes'},
            {id: 4, message: 'no'},
            {id: 5, message: 'hallo'},
        ],
        dialogs: [
            {id: 1, name: 'Helen'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Papa'},
            {id: 5, name: 'Kris'},
            {id: 6, name: 'Boss'}
        ]
    },
    sidebar: {}
}

export default state;
