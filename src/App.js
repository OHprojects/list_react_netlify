import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import {useState, useEffect} from 'react';

function App() {
  
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

/*
items: It retrieves the shopping list from the local storage (if it exists) and sets it as the initial state. If there's no shopping list in the local storage, it initializes items as null. This is done using JSON.parse(localStorage.getItem('shoppinglist')). The state variable items holds the current shopping list.

newItem: It initializes an empty string as the initial state. This state variable holds the value of a new item being added to the shopping list.

search: It initializes an empty string as the initial state. This state variable holds the value of the search query entered by the user for filtering items.
*/

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem ('shoppinglist')))
  }, [])

  //The above means that at load time we setItems (the state of our application) to the 'shoppinglist' that we have
  //The shhoppinglist refers to the list of items that we store to local storage
  //Note that we initialise the useState associated with setItems with an empty array, if we dont provide the empty array to initialise the items list / shoppinglist, it means that upon first load of the application, there is no array for our code to work with and we cannot filter NULL, therefore we initialise the items state with an empty array to take act as the baseline for a shoppinglist if one is not already saved to localstorage

  //The above is an ideal way to load data in, and would be especially so if we were working with an API

const setAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems));
}

const addItem = (item) => {
  // Calculate the id for the new item
  const id = items.length ? items[items.length - 1].id + 1 : 1;

  // Create a new object for the new item with default values
  const myNewItem = { id, checked: false, item };

  // Create a new array with the new item added to the end
  const listItems = [...items, myNewItem];

  // Update the state of items with the new array
  setItems(listItems);

  // Call another function, presumably to save the updated items
  setAndSaveItems(listItems);
}


  const handleCheck = (id) => {
    // Using map to create a new array
    const listItems = items.map((item) =>
      // If the item's id matches the id passed to the function
      item.id === id
        ? {
            // Spread operator to copy the item's properties
            ...item,
            // Toggle the checked property
            checked: !item.checked
          }
        // If the id doesn't match, just return the original item
        : item
    );
  
    // Set the state of items to the new array
    setItems(listItems);
  
    // Call another function, perhaps to save the items somewhere
    setAndSaveItems(listItems);
  }

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  setAndSaveItems(listItems)}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  addItem(newItem)
  setNewItem('');
}

/*handleSubmit is a function that takes an event (e) as its argument.

e.preventDefault() prevents the form from being submitted in the default way, which would cause a page reload.

The if statement checks if newItem is falsy (empty or null). If it is, the function returns early, ensuring that an empty item isn't added to the list.

If newItem is not empty, the addItem function is called with newItem as its argument, which adds the new item to the list.

After the item is added, setNewItem('') clears the value of newItem, presumably to reset the input field for the next item entry. */

  return (
    <div className="App">
      <Header title = "Grocery List"/>
      <AddItem 
       newItem = {newItem}
       setNewItem = {setNewItem}
       handleSubmit = {handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <Content 
       items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
       setItems = {setItems}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
      />
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
