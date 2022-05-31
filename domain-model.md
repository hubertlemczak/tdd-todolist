// Add your domain model below

class toDoList
PROPERTIES:
nextId (Number),
itemList (Array toDoItem),
completeStatus (false)
METHODS:
create (description: String) => toDoItem,
delete (id) => removes toDoItem,
sortByStatus (completeStatus) => desired status toDoList,
getAll () => itemList,
toggleStatus (id) => completeStatus changes from false to true and vice versa,
searchToDoItem (id) => toDoItem or error message

toDoItem
PROPERTIES: ID (Number), description (String), completeStatus (Boolean)
