// Remember to relax and ask for help when you need it (only from staff)
// YOU CAN ONLY USE MDN AS A RESOURCE for JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// you can use W3 school for HTML-CSS
// for the jquery you can only use jquery documentaion.
// https://api.jquery.com
// NOTE: you are accountable for your styling, so make sure your styling is good.
// ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.

// Use the following helper functions in your solution

function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function(element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  }
  
  function map(array, func) {
    var acc = [];
    each(array, function(element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
  
  //=============================================================================
  /*                              Q1                                           */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //containing the length of each word in that string.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  //wordLengths("hello its me") // [5,3,2]
  
  function wordLengths(str) {
      // TODO: your code here
      // first we need to split the str by words
      var splitedStr = str.split(' ');

      // loop over it 
      // then cumpuet the length and push it in array
     var strLength = splitedStr.map(function(element){
        return element.length;
      })

     return strLength;
  }
  
  //=============================================================================
  /*                                  Q2                                    */
  //=============================================================================
  //Write a function countOccurrences that accepts two parameters: a string, 
  // and a character (e.g. "a"), and returns number of times that character occured.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // countOccurrences("hello", "l"); // 2
  // countOccurrences("hello, world!", "l"); // 3
  
  function countOccurrences(string, character) {
      // your code is here
      // also we need to break the Str by characters
      var splitedStr = string.split('');
      // loop throw it and cheek for the char
      // incrument the counter if we find the char
      var char = splitedStr.filter(function(element){
        return element === character;
      })

      return char.length;

  }
  
  //=============================================================================
  /*                                  Q3                                    */
  //=============================================================================
  //write a function that takes a string as an input and returns an array
  //with only the words of length that are longer than 3.
  //solve it using the most appropriate helper functions(reduce,each,map,filter).
  // wordsLongerThanThree("Hello Mad World") //["Hello", "World"]
  
  function wordsLongerThanThree(str) {
      // TODO: your code here 
      //first we need to split it word by word
      var splitedStr = str.split(' ');
      // we need to filter it and returen the wanted words
      return filter(splitedStr, function(element){
        return element.length > 3
      })

  }
  
  //=============================================================================
  /*                                  Q4                                        */
  //=============================================================================
  //Using recursion, write a function called repeatString that takes two parameters: a string str, 
  //which is the string to be repeated, and count, a number 
  //representing how many times the string str should be repeated.
  //repeatString('dog', 0); // => '' 
  //repeatString('dog', 1); // => 'dog' 
  //repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
  //repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'
  
  function repeatString(str, count) { 
   // TODO: your code here 
   if (count === 0) {
    return ""
   }
   return str + repeatString(str , count - 1)
  } 

   
  
  //=============================================================================
  /*                                  Q5                                       */
  //=============================================================================
  /*
   using closures create a function called makePizza that has the following properties and methods
   crust a property represented by a string. ex "thin","thick". 
   size a property represented by a string. ex "M","L".
   numberOfSlice a property that hold the number of slice, ex: 8
   ** the values of all properties will be provided as arguments in the function invocation. 
   addIngredients a function that add a new ingredient to the ingredients property.
   displayIngredients a function that displays a comma separated string of all ingredients. ex: The ingredients are:tomato,mushroom,meat
   bakePizza a function that display a string with your pizza description after 2 seconds. ex "Your thin M 8 slice pizza is done" 
   eatSlice a function that let you eat from the pizza as long as the numberOfSlice is greater than zero and decrease the total number of slices by one.
   */
  //Example:
  // var pizza = makePizza("thin", "M", 2);
  // pizza.addIngredients("tomato");
  // pizza.addIngredients("meshroom");
  // pizza.addIngredients("meat");
  // console.log(pizza.displayIngredaints());
  // pizza.bakePizza();
  // pizza.eatSlice();
  // pizza.eatSlice();
  // pizza.eatSlice();
  
  // Write your code here .....
  // okey we will make the funcution that has the property declared insideit 
  // and the other mithods will be in an object inside the function 
 function makePizza (crust ,size ,numberOfSlice ) {
   // body...
   var crustProp = crust;
   var sizeProp = size;
   var numberOfSliceProp = numberOfSlice;
   var ingredient = []

   return {
    addIngredients : function (argument) {
      // body...
     ingredient.push(argument)
     return ingredient
    }
    ,

    displayIngredaints : function () {
      // body...
      return "The ingredients are: " + ingredient +" "
    },

    bakePizza : function () {
      // body...
      // set time interval or time out shoul solve this but it looks like i'm missing something with sentax
    var interval = setInterval (function(){
        return 'Your ' + crustProp +" " + sizeProp + ' ' + numberOfSliceProp + ' slice pizza is done'
      }, 2000)
    return interval;
    },

    eatSlice : function(){

      if (numberOfSliceProp > 0) {
        return "you can eat " + numberOfSliceProp + ' slices';
        numberOfSliceProp - 1;

      }else {
        return "sorry no more pizza order another one";
      }

    }
   }
  }
  
  //=============================================================================
  /*                                  Q6                                      */
  //=============================================================================
  /*
  Create a ReadingList class by using OOP concept, where:
  Your class should has:
  "read" for the number of books that finish reading
  "unRead" for the number of books that still not read
  "toRead" array for the books names that want to read in the future
  "currentRead" for the name of the book that is reading currently
  "readBooks" Array of the names of books that finish read
  "AddBook" function that:
  a- Accept the book name as parameter
  b- Add the new book to "toRead" array
  c- Increment the number of the unread books.
  "finishCurrentBook" function that:
  a- Add the "currentRead" to the "readBooks" array
  b- Increment the "read" books
  c- Change the "currentRead" to be the first book from "toRead" array
  d- Decrement the number of "unread" books
  */
  
  // Now, to make sure that you are actually reading, make a comment below this and type: Yes I am
  // yes I'm
  // Write your code here .....
  var complitedBooks = 0
  var toReadArray = [];
  var unreadBook = 0;
  var finishedBooks = [];
  var currentReadBooks = [];

  function ReadingList (){
    
   

    var readingList = {

      read : read,
      toRead : toRead,
      AddBook: AddBook,
      unRead : unRead,
      readBooks : readBooks,
      currentRead : currentRead,
      finishCurrentBook : finishCurrentBook
    }

    return readingList
  }

  function toRead() {
    
    return this.toReadArray
  }

  function AddBook(argument) {
    // body...
    this.toReadArray.push(argument);
    this.unreadBook + 1;

  }

  function unRead () {
    // body...
  
    return this.unreadBook;
  }
  function read() {
    // body...
    return this.complitedBooks;
  }

  function readBooks() {
    // body...
    return this.finishedBooks;
  }

  function currentRead() {
    // body...
    return this.currentReadBooks[0];
  }

  function finishCurrentBook() {
    // body...
    this.finishedBooks.push(this.currentReadBooks[0]);
    return "finishedBooks: " + this.finishedBooks
    return this.unreadBook - 1;
    this.currentReadBooks.push(this.toReadArray[0]);
    return "currentReadBooks " + this.currentReadBooks
    return this.complitedBooks + 1
  }


  //=============================================================================
  /*                                  Q7                                       */
  //=============================================================================
  //Using closures create makeSafe Function that accepts an initial integer value to specify the storage size limit
  //makeSafe should contain addItem function that accepts two parameters the item and the itemSize as Strings
  //itemSize should be either "big", "medium" and "small"
  //big sized items will hold 3 slots in the storage
  //medium sized items will hold 2 slots in the storage
  //small sized items  will hold 1 slot in the storage
  //return "Can't fit" if you try to add an item that exceeds the storage size limit
  //when the safe is full return a string representing all the items that are in the safe
  //Example:
  //  var safe = makeSafe(5)
  //  safe('watch','small')
  //  safe('gold-bar','big')
  //  safe('silver-bar','big') => "Can't fit"
  //  safe('money','small') => "watch gold-bar money"
  
  // Write your code here .....

  function makeSafe(storage) {
    // body...
    var storageSize = storage;
    var itemInTheStorage = []

    return function addItem(item, itemSize) {
      // body...
      if (itemSize === "big") {

          if (storageSize >= 3) {
            itemInTheStorage.push(item);
            storageSize - 3;
          }

        }else if (itemSize === "medium") {

          if (storageSize >= 2) {
            itemInTheStorage.push(item);
            storageSize - 2;
          }

        }else if (itemSize === "small") {

          if (storageSize >= 1) {
            itemInTheStorage.push(item);
            storageSize - 1;
          }

        }else {
        return "the itemSize should be either Big medium or small"
        }

        if (storageSize === 0) {
          return itemInTheStorage.join(' ')
        }
    }

  }
  
  //=============================================================================
  /*                                  Q8                                       */
  //=============================================================================
  
  //Create HTML, CSS & JS files and connect them together
  //Add Two text input fields, one with a placeholder input, and another with color
  //Add a button below them and an empty unordered list below the button
  //Create 3 CSS classes (red, yellow, blue)
  //Create a javascript function that adds an item list to the unordered list
  //If the color value is red, yellow or blue
  //Add the CSS class to the item accordingly
  //Do not add a list item if the color value is non of the colors
  
  //DO NOT USE JQUERY
  
  //================================================================================
  /*                              Q9                                            */
  //================================================================================
  
  //Create HTML, CSS & JS files
  //Link jQuery
  //Create an empty unordered list
  //Create three input elements of type checkbox
  //Create two buttons "create" & "remove"
  //Create 7 classes in CSS each with the appropriete color (black, purple, green, orange, red, yellow, blue)
  //Using jQuery run a function that gets called using the button's id (#create)
  //The function takes see if the checkboxes are checked or not (true or false), use $("#id").prop('checked')
  //If all 3 checkboxes are checked add an list item with the word black in it and add the "black" class to it
  //If 2 of the checkboxes are checked add (purple = blue + red), (green = blue + yellow), (orange = red + yellow)
  //If 1 of the checkboxes is checked add (yellow, blue or red) as li and the class to it
  
  //Using jQuery call a function from the button's id (#delete)
  //The function removes all the elements from the unordered list based on the checkboxes as the previous function
  //Use jQuery as much as you can in selecting elements and other tasks
  // i can do it put there is no time lift 
  // it is similer to number 8 
  // also we take the first input and checkes the socend input wither it is from the list or not.
  // we check the checkboxes 
  // and with if statment we evalueat the counditions
  
  //================================================================================
  /*                              Q10                                           */
  //================================================================================
  // Theoretical questions.
  // 1- In your own words,Why do we use Closures ?
  // closures is good for protecting data and functions 
  // also we use it as best practes in not using globel varibals wich they are bad
  
  // 2- In OOP, what does "this" refer to ?
  // actually refers to the keys value inside an objects
  // and some times values outside that function
  
  // 3- What is jQuery?
  // for me i think it is Library of function and short handed code for js 
  
  // 4- what is the diffrence between Closure's methods and The OOP's methods?

  // in simple way closures you have your varibals and function inside the function
  