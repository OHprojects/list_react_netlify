//useEffect
/*The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>) */




//Use of useEffect to log number of renders (changes to application)

/* 
useEffect(() => {
  console.log("render")
})

The above will log to the console "render" everytime there is a use or change to the application, in the case of the grocery list, any change e.g., typing one letter into the search will cause a render and a "render" log to the console
*/


//Use of useEffect to log number of loads

/* 
useEffect (() => {
  console.log("load time")
}, [])

The above will log "load time" to the console everytime the application is reloaded

here the empty array [] acts as the useEffect's dependency, useEffect looks to its dependancy and if it changes then it will run the code within its body
*/

//Use of useEffect to log in response to a specific dependancy

/*
useEffect (() => {
  console.log("item state updated")
}, [items])

Here we have useEffect and an anonymous function that does console.log "item state updated", and the useEffect has a dependancy that is the items state, items is our items list and so when changes occur to our items list (additions of deletions) then the function will be triggered and "item state updated" will be logged
*/



//When useEffect runs as far as in the order of rendering

/*
useEffect is asynchronous 

useEffect (() => {
  console.log("item state updated")
}, [items])

This means that in the case of useEffect above, the code contained within the body is ran after everything has been rendered (after the rest of the code is executed)
*/


//Using useEffect to save state of our shoppinglist after every change to state

/*
useEffect(() => {
  localStorage.setItem('shoppinglist',JSON.stringify(items));
}, [items])

The above says that by using items as a dependancy, everytime the state of items changes, useEffect will execute " localStorage.setItem('shoppinglist',JSON.stringify(items)) " which saves the state of items to the local storage, via the setItems function.

In doing so we can replace any calls for setAndSaveItems() in our code and replace these with just setItems and then delete the setAndSaveItems function, as the useEffect will ensure that any changes are saved upon state change
*/