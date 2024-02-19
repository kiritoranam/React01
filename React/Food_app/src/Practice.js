// **

// A component must be pure, meaning:
// It minds its own business. It should not change any objects or variables that existed before rendering.
// Same inputs, same output. Given the same inputs, a component should always return the same JSX.
// Rendering can happen at any time, so components should not depend on each others’ rendering sequence.
// You should not mutate any of the inputs that your components use for rendering. That includes props, state, and context. To update the screen, “set” state instead of mutating preexisting objects.

// eg:- for Pure Component
// function Cup({ guest }) {
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup guest={1} />
//             <Cup guest={2} />
//             <Cup guest={3} />
//         </>
//     );
// }

// // not pure component
// let guest = 0;

// function Cup() {
//     // Bad: changing a preexisting variable!
//     guest = guest + 1;
//     return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//     return (
//         <>
//             <Cup />
//             <Cup />
//             <Cup />
//         </>
//     );
// }

// Functions passed to event handlers must be passed, not called. For example:

// passing a function (correct)	calling a function (incorrect)
// <button onClick={handleClick}>	<button onClick={handleClick()}></button>

// A state variable to retain the data between renders.
// A state setter function to update the variable and trigger React to render the component again.

// Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks.
// You can’t call Hooks inside conditions, loops, or other nested functions.
// Hooks are functions, but it’s helpful to think of them as unconditional declarations about your component’s needs. You “use” React features at the top of your component similar to how you “import” modules at the top of your file.
// Use a state variable when a component needs to “remember” some information between renders.
// State variables are declared by calling the useState Hook.
// Hooks are special functions that start with use. They let you “hook into” React features like state.
// Hooks might remind you of imports: they need to be called unconditionally. Calling Hooks, including useState, is only valid at the top level of a component or another Hook.
// The useState Hook returns a pair of values: the current state and the function to update it.
// You can have more than one state variable. Internally, React matches them up by their order.
// State is private to the component. If you render it in two places, each copy gets its own state.

// Any screen update in a React app happens in three steps:
// Triggering a render (delivering the guest’s order to the kitchen)
// Rendering the component (preparing the order in the kitchen)
// Committing to the DOM (placing the order on the table)
// React does not touch the DOM if the rendering result is the same as last time

// Rendering takes a snapshot in time
// “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render.
// Unlike a photograph or a movie frame, the UI “snapshot” you return is interactive. It includes logic like event handlers that specify what happens in response to inputs. React updates the screen to match this snapshot and connects the event handlers. As a result, pressing a button will trigger the click handler from your JSX.
// When React re-renders a component:
// React calls your function again.
// Your function returns a new JSX snapshot.
// React then updates the screen to match the snapshot your function returned.

// Treat all state in React as immutable.
// When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
// Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
// You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
// Spread syntax is shallow: it only copies one level deep.
// To update a nested object, you need to create copies all the way up from the place you’re updating.
// To reduce repetitive copying code, use Immer.

// You can put arrays into state, but you can’t change them.
// Instead of mutating an array, create a new version of it, and update the state to it.
// You can use the [...arr, newItem] array spread syntax to create arrays with new items.
// You can use filter() and map() to create new arrays with filtered or transformed items.
// You can use Immer to keep your code concise.

// Reducer & Context
// Reducers let you consolidate a component’s state update logic. Context lets you pass information deep down to other components.
// You can combine reducers and context together to manage state of a complex screen.

// With this approach, a parent component with complex state manages it with a reducer.
// Other components anywhere deep in the tree can read its state via context. They can also dispatch actions to update that state.

// Declarative programming means describing the UI for each visual state rather than micromanaging the UI (imperative).
// When developing a component:
// Identify all its visual states.
// Determine the human and computer triggers for state changes.
// Model the state with useState.
// Remove non-essential state to avoid bugs and paradoxes.
// Connect the event handlers to set state.

// If two state variables always update together, consider merging them into one.
// Choose your state variables carefully to avoid creating “impossible” states.
// Structure your state in a way that reduces the chances that you’ll make a mistake updating it.
// Avoid redundant and duplicate state so that you don’t need to keep it in sync.
// Don’t put props into state unless you specifically want to prevent updates.
// For UI patterns like selection, keep ID or index in state instead of the object itself.
// If updating deeply nested state is complicated, try flattening it.

// When you want to coordinate two components, move their state to their common parent.
// Then pass the information down through props from their common parent.
// Finally, pass the event handlers down so that the children can change the parent’s state.
// It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

// Reducer :-
// To convert from useState to useReducer:
// Dispatch actions from event handlers.
// Write a reducer function that returns the next state for a given state and action.
// Replace useState with useReducer.
// Reducers require you to write a bit more code, but they help with debugging and testing.
// Reducers must be pure.
// Each action describes a single user interaction.
// Use Immer if you want to write reducers in a mutating style.

// Context :-
// Context lets a component provide some information to the entire tree below it.
// To pass context:
// Create and export it with export const MyContext = createContext(defaultValue).
// Pass it to the useContext(MyContext) Hook to read it in any child component, no matter how deep.
// Wrap children into <MyContext.Provider value={...}> to provide it from a parent.
// Context passes through any components in the middle.
// Context lets you write components that “adapt to their surroundings”.
// Before you use context, try passing props or passing JSX as children.

// Refs are an escape hatch to hold onto values that aren’t used for rendering. You won’t need them often.
// A ref is a plain JavaScript object with a single property called current, which you can read or set.
// You can ask React to give you a ref by calling the useRef Hook.
// Like state, refs let you retain information between re-renders of a component.
// Unlike state, setting the ref’s current value does not trigger a re-render.
// Don’t read or write ref.current during rendering. This makes your component hard to predict.

// useRef Hook
// Refs are a generic concept, but most often you’ll use them to hold DOM elements.
// You instruct React to put a DOM node into myRef.current by passing <div ref={myRef}>.
// Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
// A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node.
// Avoid changing DOM nodes managed by React.
// If you do modify DOM nodes managed by React, modify parts that React has no reason to update.

// useEffect Hook
// Unlike events, Effects are caused by rendering itself rather than a particular interaction.
// Effects let you synchronize a component with some external system (third-party API, network, etc).
// By default, Effects run after every render (including the initial one).
// React will skip the Effect if all of its dependencies have the same values as during the last render.
// You can’t “choose” your dependencies. They are determined by the code inside the Effect.
// Empty dependency array ([]) corresponds to the component “mounting”, i.e. being added to the screen.
// In Strict Mode, React mounts components twice (in development only!) to stress-test your Effects.
// If your Effect breaks because of remounting, you need to implement a cleanup function.
// React will call your cleanup function before the Effect runs next time, and during the unmount.

// If you can calculate something during render, you don’t need an Effect.
// To cache expensive calculations, add useMemo instead of useEffect.
// To reset the state of an entire component tree, pass a different key to it.
// To reset a particular bit of state in response to a prop change, set it during rendering.
// Code that runs because a component was displayed should be in Effects, the rest should be in events.
// If you need to update the state of several components, it’s better to do it during a single event.
// Whenever you try to synchronize state variables in different components, consider lifting state up.
// You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.

// Components can mount, update, and unmount.
// Each Effect has a separate lifecycle from the surrounding component.
// Each Effect describes a separate synchronization process that can start and stop.
// When you write and read Effects, think from each individual Effect’s perspective (how to start and stop synchronization) rather than from the component’s perspective (how it mounts, updates, or unmounts).
// Values declared inside the component body are “reactive”.
// Reactive values should re-synchronize the Effect because they can change over time.
// The linter verifies that all reactive values used inside the Effect are specified as dependencies.
// All errors flagged by the linter are legitimate. There’s always a way to fix the code to not break the rules.


// useCallback
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// const cachedFn = useCallback(fn, dependencies)
// On the initial render, useCallback returns the fn function you have passed.
// During subsequent renders, it will either return an already stored fn  function from the last render (if the dependencies haven’t changed), 
// or return the fn function you have passed during this render.
// Eg :
// function ProductPage({ productId, referrer, theme }) {
//     // Tell React to cache your function between re-renders...
//     const handleSubmit = useCallback((orderDetails) => {
//         post('/product/' + productId + '/buy', {
//             referrer,
//             orderDetails,
//         });
//     }, [productId, referrer]); // ...so as long as these dependencies don't change...

//     return (
//         <div className={theme}>
//             {/* ...ShippingForm will receive the same props and can skip re-rendering */}
//             <ShippingForm onSubmit={handleSubmit} />
//         </div>
//     );
// }


// useDeferredValue
// Showing stale content while fresh content is loading 
// During the initial render, the returned deferred value will be the same as the value you provided. During updates, 
// React will first attempt a re-render with the old value (so it will return the old value), 
// and then try another re-render in background with the new value (so it will return the updated value).

// UseContext 
// useContext is a React Hook that lets you read and subscribe to context from your component.
// const value = useContext(SomeContext)
// useContext returns the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context.
// To pass context to a Button, wrap it or one of its parent components into the corresponding context provider

// useEffect
// useEffect is a React Hook that lets you synchronize a component with an external system.
// useEffect(setup, dependencies?)
// You need to pass two arguments to useEffect:

// A setup function with setup code that connects to that system.
// It should return a cleanup function with cleanup code that disconnects from that system.
// A list of dependencies including every value from your component used inside of those functions.
// React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:

// Your setup code runs when your component is added to the page (mounts).
// After every re-render of your component where the dependencies have changed:
// First, your cleanup code runs with the old props and state.
// Then, your setup code runs with the new props and state.
// Your cleanup code runs one final time after your component is removed from the page (unmounts).

// useImperativeHandle
// useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
// Exposing a custom ref handle to the parent component 
// By default, components don’t expose their DOM nodes to parent components. For example, if you want the parent component of MyInput to have access to the <input> DOM node, you have to opt in with forwardRef:
// With the code above, a ref to MyInput will receive the <input> DOM node. However, you can expose a custom value instead. To customize the exposed handle, call useImperativeHandle at the top level of your component:

// useMemo
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// const cachedValue = useMemo(calculateValue, dependencies)
// On the initial render, useMemo returns the result of calling calculateValue with no arguments.
// During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.
// Memoizing functions is common enough that React has a built-in Hook specifically for that. Wrap your functions into useCallback instead of useMemo to avoid having to write an extra nested function

// useReducer
// useReducer is a React Hook that lets you add a reducer to your component.
// const [state, dispatch] = useReducer(reducer, initialArg, init?)
// useReducer returns an array with exactly two values:
// The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
// The dispatch function that lets you update the state to a different value and trigger a re-render.

// useRef
// useRef is a React Hook that lets you reference a value that’s not needed for rendering.
// const ref = useRef(initialValue)
// useRef returns a ref object with a single current property initially set to the initial value you provided.
// On the next renders, useRef will return the same object. You can change its current property to store information and read it later. This might remind you of state, but there is an important difference.
// Changing a ref does not trigger a re-render. This means refs are perfect for storing information that doesn’t affect the visual output of your component. For example, if you need to store an interval ID and retrieve it later, you can put it in a ref. To update the value inside the ref, you need to manually change its current property

// useState
// useState is a React Hook that lets you add a state variable to your component.
// const [state, setState] = useState(initialState)
// The current state. During the first render, it will match the initialState you have passed.
// The set function that lets you update the state to a different value and trigger a re-render.

// **
