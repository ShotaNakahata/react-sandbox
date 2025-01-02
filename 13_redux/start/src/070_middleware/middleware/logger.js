const logger = (store) => {
    return (next) => {
        return (action) => {
            console.log(store.getState())
            next(action);
            console.log(store.getState())
        };
    }
}

export default logger