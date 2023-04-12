## setup Redux

```bash
npm init --yes
npm install redux
```

## when to use redux with react?

- when there are a lot of states to manage in the application.
- the app state is updated frequently over time.
- the logic to update that state is complex.
- the app may have large or medium codebase and many people work on same project.

### store

> holds the state of an application

### action

> describe what happens in the application

### reducer

> handles action and describe how to update state

## Principles of Redux:

- the global state of an application is stored in an object tree inside a single store
- the only way to change the state is to dispatch an action, an object that describes what happened
- to specify how the state tree is transformed based on an action, we write pure reducer(pure function that takes prevState and action as paramenters and return a newState.)

## selector

> a seperate file that takes the state from the redux store
