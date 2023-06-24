export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log("prevstate: ", prevState);
        console.log("arguments: ", args);
        const nextState = reducer(prevState, action, args)
        console.log("nextstate: ", nextState);
        console.groupEnd()
        return nextState
    }
}