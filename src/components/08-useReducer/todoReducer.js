


export const todoReducer = ( state = [], action ) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload ];
        
        case 'delete' :
            return state.filter( todo => todo.id !== action.payload ); // payload = id = 123123132
    
        case 'toggle' :
            return state.map( item =>  
                (item.id === action.payload ) 
                    ? { ...item, done:!item.done }
                    : item
            );

        case 'toggle-old' :
            return state.map( item => { 
                if (item.id === action.payload ) {
                    return {
                        ...item,
                        done:!item.done
                    };
                }
                return item;
             });

        default:
            return state;
    }


}