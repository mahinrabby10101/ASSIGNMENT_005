getElementById → single element by ID (fast, unique).


getElementsByClassName → all elements by class (live collection).


querySelector → first match by any CSS selector.


querySelectorAll → all matches by any CSS selector (static list).





Use document.createElement() to make a new element, then insert it using appendChild() or insertBefore().



Event bubbling is when an event starts at the target element and then propagates upward through its parent elements in the DOM tree.


Event delegation is attaching a single event listener to a parent element to handle events on its child elements using event bubbling.
Useful because: fewer listeners, better performance, works for dynamically added elements.
