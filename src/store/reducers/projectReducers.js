

const initState ={

    projects:[
        {id:'1', title: 'help me find peach', content: 'blah blah blah'},
        {id:'2', title: 'Hey, How can I help you', content: 'blah blah blah'},
        {id:'3', title: 'What to do when?', content: 'blah blah blah'}
    ]
}
const projectReducers = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
return state
}

export default projectReducers;