
import { Module, PracticeProblem, Project } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Python Intro",
    lessons: [
      {
        id: "l1-1",
        title: "What is Python?",
        slug: "what-is-python",
        content: "Python is a computer language that is easy to read and write. It's like giving instructions to a robot in simple English. It is used to build websites, analyze data, and even fly spaceships!",
        example: "print('Python is my new superpower!')",
        practicePrompt: "Change the text inside the print command to say 'Hello Robot'.",
        mistakes: ["Using 'Print' with a capital P.", "Forgetting the quotes around text."],
        summary: "Python is a beginner-friendly language used for almost everything.",
        quizzes: [{ question: "Python is named after what?", options: ["A snake", "A comedy group", "A mountain", "A car"], correctIndex: 1 }]
      },
      {
        id: "l1-2",
        title: "Python Syntax",
        slug: "python-syntax",
        content: "Syntax is just a fancy word for 'rules of writing'. In Python, we don't use semicolons like other languages. We use new lines and spaces!",
        example: "print('Line 1')\nprint('Line 2')",
        practicePrompt: "Try printing three different lines of text.",
        mistakes: ["Mixing tabs and spaces.", "Writing multiple commands on one line without a semicolon."],
        summary: "Syntax is the grammar of programming.",
        quizzes: [{ question: "What does Python use to group code?", options: ["Curly braces", "Semicolons", "Indentation (spaces)", "Parentheses"], correctIndex: 2 }]
      },
      {
        id: "l1-3",
        title: "Comments",
        slug: "python-comments",
        content: "Comments are notes for yourself or other humans. Python ignores them. We use the '#' symbol.",
        example: "# This is a secret note\nprint('Visible text')",
        practicePrompt: "Add a comment above a print statement explaining what it does.",
        mistakes: ["Using '#' inside a string by mistake.", "Writing too many obvious comments."],
        summary: "Comments help explain your code to humans.",
        quizzes: [{ question: "Which symbol starts a comment?", options: ["//", "/*", "#", "--"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 2,
    title: "Variables",
    lessons: [
      {
        id: "l2-1",
        title: "Storage Boxes",
        slug: "var-boxes",
        content: "Variables are like boxes with labels. You can store a number or a name inside and use the label to get it back later.",
        example: "bag = 'Marbles'\nprint(bag)",
        practicePrompt: "Create a variable called 'hobby' and store your favorite activity.",
        mistakes: ["Using a variable before you create it.", "Using quotes around the variable name (print('bag') prints 'bag', not the contents)."],
        summary: "Variables store data for later use.",
        quizzes: [{ question: "What symbol assigns a value?", options: ["==", "=", ":", "->"], correctIndex: 1 }]
      },
      {
        id: "l2-2",
        title: "Naming Rules",
        slug: "var-names",
        content: "Variable names must start with a letter or underscore. They can't start with a number and shouldn't use spaces.",
        example: "user_score = 10\n_secret = '123'",
        practicePrompt: "Create a variable named 'high_score' and set it to 100.",
        mistakes: ["Using a space in a name: 'my score'.", "Starting with a number: '1st_place'."],
        summary: "Good variable names are clear and follow Python's rules.",
        quizzes: [{ question: "Which is a valid name?", options: ["2nd_player", "player score", "player_score", "class"], correctIndex: 2 }]
      },
      {
        id: "l2-3",
        title: "Dynamic Typing",
        slug: "var-typing",
        content: "In Python, a variable can change its 'type'. One minute it's a number, the next it's text. Python is flexible!",
        example: "thing = 5\nthing = 'now I am text'\nprint(thing)",
        practicePrompt: "Create a variable with a number, then change it to a string.",
        mistakes: ["Confusing yourself by changing types too often."],
        summary: "Python determines the data type automatically.",
        quizzes: [{ question: "Can a variable change its type?", options: ["Yes", "No", "Only if it's a number", "Only if it's a string"], correctIndex: 0 }]
      }
    ]
  },
  {
    id: 3,
    title: "Numbers",
    lessons: [
      {
        id: "l3-1",
        title: "Ints vs Floats",
        slug: "nums-types",
        content: "Integers (Ints) are whole numbers like 7. Floats are decimal numbers like 7.5. Think of coins vs a scale!",
        example: "age = 12\nprice = 9.99",
        practicePrompt: "Create one integer and one float.",
        mistakes: ["Using commas for decimals."],
        summary: "Whole numbers are ints, decimals are floats.",
        quizzes: [{ question: "What type is 5.0?", options: ["Int", "Float", "String", "Bool"], correctIndex: 1 }]
      },
      {
        id: "l3-2",
        title: "Basic Math",
        slug: "nums-math",
        content: "Python can do all standard math: add (+), subtract (-), multiply (*), and divide (/).",
        example: "result = (10 + 5) * 2 / 5",
        practicePrompt: "Calculate how many seconds are in 2 hours.",
        mistakes: ["Dividing by zero (crashes the program!)"],
        summary: "Python follows PEMDAS order of operations.",
        quizzes: [{ question: "What is 10 / 2?", options: ["5", "5.0", "2", "0.5"], correctIndex: 1 }]
      },
      {
        id: "l3-3",
        title: "Floor & Modulo",
        slug: "nums-advanced",
        content: "Floor division (//) removes the decimal. Modulo (%) gives the remainder. Great for finding even/odd!",
        example: "remain = 10 % 3 # is 1\nwhole = 10 // 3 # is 3",
        practicePrompt: "Find the remainder of 100 divided by 7.",
        mistakes: ["Confusing / with //."],
        summary: "// finds how many times, % finds what is left.",
        quizzes: [{ question: "What is 7 % 2?", options: ["3", "1", "3.5", "0"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 4,
    title: "Booleans",
    lessons: [
      {
        id: "l4-1",
        title: "True or False?",
        slug: "bool-intro",
        content: "Booleans have only two values: True and False. They are like a light switch or a YES/NO question.",
        example: "is_coding = True\nis_tired = False",
        practicePrompt: "Create a boolean variable for 'is_sunny'.",
        mistakes: ["Using 'true' or 'false' without capital letters."],
        summary: "Booleans are used to represent truth values.",
        quizzes: [{ question: "Boolean names must start with?", options: ["lowercase", "UPPERCASE", "Capital letter", "Number"], correctIndex: 2 }]
      },
      {
        id: "l4-2",
        title: "Comparisons",
        slug: "bool-compare",
        content: "We create booleans by comparing things. Use == for equal, > for greater, and < for less.",
        example: "result = (10 > 5) # is True\ncheck = (5 == 4) # is False",
        practicePrompt: "Check if 25 is greater than or equal to 30.",
        mistakes: ["Using single '=' for comparison. Use '=='!"],
        summary: "Comparison operators produce booleans.",
        quizzes: [{ question: "Which means 'not equal'?", options: ["==", "!=", "<>", "="], correctIndex: 1 }]
      },
      {
        id: "l4-3",
        title: "Logical Operators",
        slug: "bool-logic",
        content: "Combine booleans with 'and', 'or', and 'not'. 'And' needs both to be True. 'Or' needs just one.",
        example: "check = (10 > 5) and (3 < 1) # is False",
        practicePrompt: "Check if (5 > 2) or (1 > 10).",
        mistakes: ["Using & or | instead of the words 'and' and 'or'."],
        summary: "Logic helps you build complex conditions.",
        quizzes: [{ question: "True or False is?", options: ["True", "False", "None", "Error"], correctIndex: 0 }]
      }
    ]
  },
  {
    id: 5,
    title: "Conditionals",
    lessons: [
      {
        id: "l5-1",
        title: "The If Statement",
        slug: "cond-if",
        content: "An 'if' statement runs code ONLY if a condition is True. It's like a gatekeeper.",
        example: "age = 20\nif age > 18:\n    print('Enter')",
        practicePrompt: "Write an if statement that prints 'Hot' if temperature is over 30.",
        mistakes: ["Forgetting the colon at the end of the line."],
        summary: "If statements control the flow of your program.",
        quizzes: [{ question: "What must follow the if condition?", options: [".", ";", ":", ","], correctIndex: 2 }]
      },
      {
        id: "l5-2",
        title: "Else & Elif",
        slug: "cond-else",
        content: "Use 'else' for what happens if the condition is False. Use 'elif' to check another condition first.",
        example: "score = 85\nif score >= 90: print('A')\nelif score >= 80: print('B')\nelse: print('C')",
        practicePrompt: "Check if a number is positive, negative, or zero.",
        mistakes: ["Indenting incorrectly after an else."],
        summary: "Else and Elif provide alternatives.",
        quizzes: [{ question: "What is short for 'else if'?", options: ["eif", "elif", "elsif", "else_if"], correctIndex: 1 }]
      },
      {
        id: "l5-3",
        title: "Nested Conditions",
        slug: "cond-nested",
        content: "You can put an if inside another if. It's like having a box inside a box.",
        example: "if x > 10:\n    if x < 20:\n        print('Between 10 and 20')",
        practicePrompt: "Write a nested if to check if a number is even and also greater than 100.",
        mistakes: ["Deep nesting makes code hard to read (use 'and' instead if possible)."],
        summary: "Nested conditions help with very specific checks.",
        quizzes: [{ question: "Nesting uses what to show depth?", options: ["Brackets", "Quotes", "Indentation", "Comments"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 6,
    title: "Lists Basics",
    lessons: [
      {
        id: "l6-1",
        title: "Creating Lists",
        slug: "list-create",
        content: "Lists hold multiple items in order. Use square brackets [ ] and separate items with commas.",
        example: "fruits = ['Apple', 'Banana', 5, True]",
        practicePrompt: "Create a list of 3 cities.",
        mistakes: ["Mixing up brackets. Use [ ] for lists."],
        summary: "Lists are collections of items.",
        quizzes: [{ question: "What symbol defines a list?", options: ["()", "{}", "[]", "<>"], correctIndex: 2 }]
      },
      {
        id: "l6-2",
        title: "Indexing",
        slug: "list-index",
        content: "Every item in a list has a position, starting at 0. Negative numbers count from the end!",
        example: "nums = [10, 20, 30]\nprint(nums[0]) # 10\nprint(nums[-1]) # 30",
        practicePrompt: "Print the second item from your city list.",
        mistakes: ["Thinking the first item is at index 1."],
        summary: "Indices start at 0.",
        quizzes: [{ question: "What is L[1] in [5, 6, 7]?", options: ["5", "6", "7", "Error"], correctIndex: 1 }]
      },
      {
        id: "l6-3",
        title: "Slicing",
        slug: "list-slice",
        content: "Slicing lets you get a sub-section of a list. Use [start:end]. The end index is not included!",
        example: "abc = ['a', 'b', 'c', 'd']\nprint(abc[1:3]) # ['b', 'c']",
        practicePrompt: "Slice your city list to get the first two cities.",
        mistakes: ["Assuming the end index is included."],
        summary: "Slicing extracts parts of a list.",
        quizzes: [{ question: "What is L[0:2]?", options: ["First 2 items", "Indices 0, 1, 2", "Last 2 items", "Index 0 and 2"], correctIndex: 0 }]
      }
    ]
  },
  {
    id: 7,
    title: "List Methods",
    lessons: [
      {
        id: "l7-1",
        title: "Adding Items",
        slug: "list-add",
        content: "Use .append() to add to the end, or .insert() to put it in a specific spot.",
        example: "L = [1, 2]\nL.append(3)\nL.insert(0, 0)",
        practicePrompt: "Add a 4th city to your list using .append().",
        mistakes: ["Trying to append multiple items at once (use .extend())."],
        summary: "Lists can grow as needed.",
        quizzes: [{ question: "Which adds to the end?", options: ["add()", "push()", "append()", "insert()"], correctIndex: 2 }]
      },
      {
        id: "l7-2",
        title: "Removing Items",
        slug: "list-remove",
        content: "Use .pop() to remove by index, or .remove() to find a value and delete it.",
        example: "L = ['a', 'b']\nL.pop(0)\nL.remove('b')",
        practicePrompt: "Remove the first item from your list using .pop().",
        mistakes: ["Trying to remove a value that isn't in the list."],
        summary: "Lists can shrink as needed.",
        quizzes: [{ question: "Which removes by value?", options: ["delete()", "remove()", "pop()", "discard()"], correctIndex: 1 }]
      },
      {
        id: "l7-3",
        title: "Sorting & Utility",
        slug: "list-util",
        content: "Use .sort() to order items, .reverse() to flip them, and len() to count them.",
        example: "nums = [3, 1, 2]\nnums.sort()\nprint(len(nums))",
        practicePrompt: "Sort your city list alphabetically.",
        mistakes: ["Using len as a list method (it's a function: len(L))."],
        summary: "Python has many built-in list tools.",
        quizzes: [{ question: "How to get list length?", options: ["length(L)", "L.size()", "len(L)", "L.length"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 8,
    title: "Loops: For",
    lessons: [
      {
        id: "l8-1",
        title: "For Each Loop",
        slug: "loop-for",
        content: "A 'for' loop goes through every item in a list one by one. It's like a conveyor belt.",
        example: "for fruit in ['Apple', 'Pear']:\n    print(fruit)",
        practicePrompt: "Print every city in your list using a for loop.",
        mistakes: ["Using the list name instead of the item variable inside the loop."],
        summary: "For loops are great for collections.",
        quizzes: [{ question: "For loops are used for?", options: ["Recursion", "Iteration", "Selection", "Assignment"], correctIndex: 1 }]
      },
      {
        id: "l8-2",
        title: "The Range Function",
        slug: "loop-range",
        content: "range(start, stop) creates a sequence of numbers. Great for repeating code a set number of times.",
        example: "for i in range(3):\n    print('Hi')",
        practicePrompt: "Print numbers from 1 to 5.",
        mistakes: ["Forgetting that range(5) stops at 4."],
        summary: "Range creates number sequences.",
        quizzes: [{ question: "range(2, 5) gives?", options: ["2, 3, 4, 5", "2, 3, 4", "3, 4, 5", "0, 1, 2, 3, 4"], correctIndex: 1 }]
      },
      {
        id: "l8-3",
        title: "Loop Break & Continue",
        slug: "loop-control",
        content: "Use 'break' to stop a loop early. Use 'continue' to skip to the next turn.",
        example: "for i in range(10):\n    if i == 5: break",
        practicePrompt: "Write a loop that skips the number 3 while counting to 5.",
        mistakes: ["Using break/continue outside of a loop."],
        summary: "Control the loop flow with these keywords.",
        quizzes: [{ question: "Which skips to next iteration?", options: ["stop", "pass", "continue", "skip"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 9,
    title: "Loops: While",
    lessons: [
      {
        id: "l9-1",
        title: "While Condition",
        slug: "loop-while",
        content: "A 'while' loop runs as long as a condition is True. Use it when you don't know how many turns you need.",
        example: "count = 0\nwhile count < 3:\n    print(count)\n    count += 1",
        practicePrompt: "Count down from 5 to 1.",
        mistakes: ["Creating an infinite loop (forgetting to update the condition)."],
        summary: "While loops depend on a boolean check.",
        quizzes: [{ question: "What stops a while loop?", options: ["Return", "Break", "False condition", "All of these"], correctIndex: 3 }]
      },
      {
        id: "l9-2",
        title: "Infinite Loops",
        slug: "loop-infinite",
        content: "If the condition is always True, the loop never stops. This can crash your browser or computer!",
        example: "while True:\n    # print('Careful!')",
        practicePrompt: "Explain how to safely stop a 'while True' loop.",
        mistakes: ["Forgetting the update step like i += 1."],
        summary: "Always ensure your loop has an exit path.",
        quizzes: [{ question: "How to stop an infinite loop in terminal?", options: ["Ctrl+C", "Alt+F4", "Esc", "Space"], correctIndex: 0 }]
      },
      {
        id: "l9-3",
        title: "User Input Loops",
        slug: "loop-input",
        content: "While loops are perfect for asking users for data until they say 'quit'.",
        example: "user = ''\nwhile user != 'q':\n    user = input('Type q to quit: ')",
        practicePrompt: "Imagine a loop that asks for a password until it's correct.",
        mistakes: ["Input() returns a string, so compare correctly with numbers."],
        summary: "While loops handle unpredictable events well.",
        quizzes: [{ question: "input() returns which type?", options: ["Int", "Float", "String", "Depends"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 10,
    title: "Dictionaries",
    lessons: [
      {
        id: "l10-1",
        title: "Key-Value Pairs",
        slug: "dict-intro",
        content: "Dictionaries store data in labeled pairs. Like a real dictionary: 'Word': 'Meaning'. Use { }.",
        example: "user = {'name': 'Zed', 'level': 1}",
        practicePrompt: "Create a dictionary for a 'book' with 'title' and 'author'.",
        mistakes: ["Using duplicate keys (the last one wins)."],
        summary: "Dictionaries provide fast access via keys.",
        quizzes: [{ question: "Which symbol for dictionaries?", options: ["[]", "()", "{}", "<>"], correctIndex: 2 }]
      },
      {
        id: "l10-2",
        title: "Access & Update",
        slug: "dict-modify",
        content: "Access values by their key. You can update or add new keys easily.",
        example: "user['level'] = 2\nprint(user['name'])",
        practicePrompt: "Change the 'author' in your book dictionary.",
        mistakes: ["Accessing a key that doesn't exist (causes KeyError)."],
        summary: "Dictionaries are mutable (changeable).",
        quizzes: [{ question: "How to add a new key?", options: ["dict.add(k, v)", "dict[k] = v", "dict.insert(k, v)", "dict.append(k, v)"], correctIndex: 1 }]
      },
      {
        id: "l10-3",
        title: "Dict Methods",
        slug: "dict-methods",
        content: "Use .keys(), .values(), and .items() to look through a dictionary.",
        example: "for k, v in user.items():\n    print(k, v)",
        practicePrompt: "Print all the keys in your book dictionary.",
        mistakes: ["Trying to index a dictionary with a number if the keys are strings."],
        summary: "Python provides tools to iterate over dictionary data.",
        quizzes: [{ question: "Which gives pairs?", options: ["keys()", "values()", "items()", "all()"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 11,
    title: "Tuples & Sets",
    lessons: [
      {
        id: "l11-1",
        title: "Tuples (Fixed)",
        slug: "tuple-intro",
        content: "Tuples are like lists, but they CANNOT change. Use ( ). Use them for constants.",
        example: "point = (10, 20)",
        practicePrompt: "Create a tuple with your birthday (day, month, year).",
        mistakes: ["Trying to use .append() on a tuple."],
        summary: "Tuples are immutable collections.",
        quizzes: [{ question: "Can you change a tuple?", options: ["Yes", "No", "Only if it's empty", "Sometimes"], correctIndex: 1 }]
      },
      {
        id: "l11-2",
        title: "Sets (Unique)",
        slug: "set-intro",
        content: "Sets hold unique items with no order. Great for removing duplicates. Use { }.",
        example: "S = {1, 2, 2, 3} # result is {1, 2, 3}",
        practicePrompt: "Create a set from a list with duplicate numbers.",
        mistakes: ["Expecting sets to stay in the same order."],
        summary: "Sets are for unique, unordered data.",
        quizzes: [{ question: "Does a set allow duplicates?", options: ["Yes", "No", "Only strings", "Only numbers"], correctIndex: 1 }]
      },
      {
        id: "l11-3",
        title: "Set Operations",
        slug: "set-math",
        content: "Perform math-like sets operations: Union (combine), Intersection (common), and Difference.",
        example: "A = {1, 2}; B = {2, 3}\nprint(A | B) # {1, 2, 3}",
        practicePrompt: "Find common items between {1, 2, 3} and {2, 3, 4} using &.",
        mistakes: ["Confusing set brackets {} with dictionary brackets {}."],
        summary: "Sets are powerful for group logic.",
        quizzes: [{ question: "Which symbol for intersection?", options: ["|", "&", "-", "^"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 12,
    title: "String Methods",
    lessons: [
      {
        id: "l12-1",
        title: "Case & Search",
        slug: "str-case",
        content: "Change text to .upper(), .lower(), or find specific characters with .find().",
        example: "text = 'Hi'\nprint(text.upper())",
        practicePrompt: "Make the string 'python' all caps.",
        mistakes: ["Methods don't change the original string; they return a new one."],
        summary: "Strings have many built-in text tools.",
        quizzes: [{ question: "What is 'a'.upper()?", options: ["A", "a", "error", "none"], correctIndex: 0 }]
      },
      {
        id: "l12-2",
        title: "Split & Join",
        slug: "str-split",
        content: "Turn a string into a list with .split(), or a list into a string with .join().",
        example: "words = 'a b c'.split(' ')\ntext = '-'.join(words)",
        practicePrompt: "Split 'one,two,three' into a list using the comma.",
        mistakes: ["Using join on a list that contains numbers (convert to strings first!)."],
        summary: "Switch between strings and lists easily.",
        quizzes: [{ question: "Which returns a list?", options: ["join()", "split()", "strip()", "find()"], correctIndex: 1 }]
      },
      {
        id: "l12-3",
        title: "Formatting (f-strings)",
        slug: "str-format",
        content: "Insert variables into text easily using f'Hello {name}'. It's the cleanest way to build strings.",
        example: "name = 'Zed'\nprint(f'Hi {name}')",
        practicePrompt: "Use an f-string to print your name and age.",
        mistakes: ["Forgetting the 'f' before the quotes."],
        summary: "f-strings make text building simple.",
        quizzes: [{ question: "Where does the 'f' go?", options: ["Inside quotes", "After quotes", "Before quotes", "Not needed"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 13,
    title: "Functions Basics",
    lessons: [
      {
        id: "l13-1",
        title: "Defining Functions",
        slug: "func-def",
        content: "Functions are reusable blocks of code. Define them with 'def' and call them by name.",
        example: "def greet():\n    print('Hello!')\ngreet()",
        practicePrompt: "Define a function that prints your name.",
        mistakes: ["Defining a function but never calling it."],
        summary: "Functions keep your code DRY (Don't Repeat Yourself).",
        quizzes: [{ question: "Keyword for functions?", options: ["func", "def", "function", "define"], correctIndex: 1 }]
      },
      {
        id: "l13-2",
        title: "Arguments",
        slug: "func-args",
        content: "Pass data into functions using parameters. It's like giving a recipe its ingredients.",
        example: "def add(a, b):\n    print(a + b)",
        practicePrompt: "Define a function that takes a name and prints 'Welcome, [name]'.",
        mistakes: ["Calling a function with the wrong number of arguments."],
        summary: "Parameters make functions flexible.",
        quizzes: [{ question: "Data sent to a function is a?", options: ["Variable", "Argument", "Constant", "Result"], correctIndex: 1 }]
      },
      {
        id: "l13-3",
        title: "Return Values",
        slug: "func-return",
        content: "Use 'return' to send a result back from a function. Without return, a function gives back 'None'.",
        example: "def square(x):\n    return x * x\nval = square(5)",
        practicePrompt: "Define a function that returns the double of a number.",
        mistakes: ["Thinking print() and return are the same. (Return sends data to code!)"],
        summary: "Return lets you use the result of a function elsewhere.",
        quizzes: [{ question: "What is returned if 'return' is missing?", options: ["0", "None", "Error", "False"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 14,
    title: "Scope & Global",
    lessons: [
      {
        id: "l14-1",
        title: "Local Scope",
        slug: "scope-local",
        content: "Variables created inside a function stay inside. They are 'local' to that function.",
        example: "def my_func():\n    x = 10\n# x is not visible here!",
        practicePrompt: "Try creating a variable inside a function and printing it outside (see the error!).",
        mistakes: ["Trying to use a function's variable from outside."],
        summary: "Local variables are private to their function.",
        quizzes: [{ question: "Where is a local variable visible?", options: ["Everywhere", "Only in its function", "Only in the file", "Only in classes"], correctIndex: 1 }]
      },
      {
        id: "l14-2",
        title: "Global Scope",
        slug: "scope-global",
        content: "Variables created at the top level are 'global'. Everyone can see them, but changing them inside functions needs a special keyword.",
        example: "count = 0\ndef add():\n    global count\n    count += 1",
        practicePrompt: "Create a global variable and change it inside a function.",
        mistakes: ["Changing a global without the 'global' keyword creates a new local instead."],
        summary: "Global variables are shared, but use them sparingly.",
        quizzes: [{ question: "Keyword to change global variable?", options: ["use", "share", "global", "public"], correctIndex: 2 }]
      },
      {
        id: "l14-3",
        title: "Namespaces",
        slug: "scope-namespace",
        content: "Python checks Local -> Enclosing -> Global -> Built-in (LEGB). It looks for variable names in this order.",
        example: "x = 'global'\ndef f():\n    x = 'local'\n    print(x) # prints local",
        practicePrompt: "Define a global and local variable with the same name. Print inside and out.",
        mistakes: ["Naming variables the same as built-in functions (like 'list' or 'str')."],
        summary: "Python uses a search order to find variables.",
        quizzes: [{ question: "What is the first place Python looks?", options: ["Global", "Built-in", "Local", "Enclosing"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 15,
    title: "Modules",
    lessons: [
      {
        id: "l15-1",
        title: "Importing Basics",
        slug: "mod-import",
        content: "Modules are code files written by others. Use 'import' to bring them in.",
        example: "import math\nprint(math.pi)",
        practicePrompt: "Import the 'random' module.",
        mistakes: ["Importing inside a function (do it at the top!)."],
        summary: "Modules extend Python's features.",
        quizzes: [{ question: "Which keyword brings in a module?", options: ["get", "include", "import", "using"], correctIndex: 2 }]
      },
      {
        id: "l15-2",
        title: "Selective Import",
        slug: "mod-selective",
        content: "Use 'from ... import ...' to get just one piece. Use 'as' to give it a nickname.",
        example: "from math import sqrt as s\nprint(s(16))",
        practicePrompt: "Import only 'randint' from 'random' and name it 'ri'.",
        mistakes: ["Naming your own file the same as a module (e.g., math.py)."],
        summary: "Imports can be renamed for convenience.",
        quizzes: [{ question: "What gives a nickname to an import?", options: ["as", "is", "like", "name"], correctIndex: 0 }]
      },
      {
        id: "l15-3",
        title: "The Standard Library",
        slug: "mod-stdlib",
        content: "Python comes with 'Batteries Included'. Modules like 'os', 'datetime', and 'json' are already there!",
        example: "import datetime\nprint(datetime.date.today())",
        practicePrompt: "Import the 'time' module and use time.sleep(1).",
        mistakes: ["Trying to install modules that are already built-in."],
        summary: "Explore the library before writing custom tools.",
        quizzes: [{ question: "Module for current time?", options: ["clock", "time", "date", "calendar"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 16,
    title: "File Handling",
    lessons: [
      {
        id: "l16-1",
        title: "Opening Files",
        slug: "file-open",
        content: "Use open() to access a file. 'r' is for read, 'w' for write (erases old), and 'a' for append.",
        example: "f = open('test.txt', 'r')\nf.close()",
        practicePrompt: "Write a note to a file named 'hello.txt' using 'w'.",
        mistakes: ["Forgetting to close the file."],
        summary: "Always remember to close what you open.",
        quizzes: [{ question: "Which mode erases old data?", options: ["r", "w", "a", "x"], correctIndex: 1 }]
      },
      {
        id: "l16-2",
        title: "The With Statement",
        slug: "file-with",
        content: "The 'with' keyword creates a context manager. It closes the file automatically, even if things crash!",
        example: "with open('text.txt', 'r') as f:\n    data = f.read()",
        practicePrompt: "Rewrite your write-note code using 'with'.",
        mistakes: ["Indenting incorrectly inside the with block."],
        summary: "Always use 'with' for files.",
        quizzes: [{ question: "Why use 'with'?", options: ["It's faster", "Closes file automatically", "It's optional", "None"], correctIndex: 1 }]
      },
      {
        id: "l16-3",
        title: "Reading Lines",
        slug: "file-lines",
        content: "Use .read() for everything, .readline() for one line, or a for loop to read line by line.",
        example: "with open('file.txt', 'r') as f:\n    for line in f:\n        print(line)",
        practicePrompt: "Create a multi-line file and print it line by line.",
        mistakes: ["Reading a giant file all at once into memory."],
        summary: "Processing files line by line is safer for big data.",
        quizzes: [{ question: "Which method reads one line?", options: ["read()", "get()", "readline()", "next()"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 17,
    title: "Error Handling",
    lessons: [
      {
        id: "l17-1",
        title: "Try & Except",
        slug: "error-try",
        content: "Errors (exceptions) crash your code. Use 'try' and 'except' to handle them safely.",
        example: "try:\n    x = 1/0\nexcept ZeroDivisionError:\n    print('Nope!')",
        practicePrompt: "Handle an error when converting text 'abc' to an integer.",
        mistakes: ["Using a bare 'except:' without an error name (hides bugs!)."],
        summary: "Graceful error handling keeps users happy.",
        quizzes: [{ question: "Where does risky code go?", options: ["try", "except", "else", "finally"], correctIndex: 0 }]
      },
      {
        id: "l17-2",
        title: "Else & Finally",
        slug: "error-flow",
        content: "'Else' runs if no error happened. 'Finally' runs no matter what (even after errors).",
        example: "try: pass\nexcept: pass\nfinally: print('Cleaned up!')",
        practicePrompt: "Write a try/except/finally block for opening a file.",
        mistakes: ["Thinking 'finally' won't run after a 'return'."],
        summary: "Finally is perfect for cleaning up resources.",
        quizzes: [{ question: "Which block ALWAYS runs?", options: ["try", "except", "else", "finally"], correctIndex: 3 }]
      },
      {
        id: "l17-3",
        title: "Raising Errors",
        slug: "error-raise",
        content: "You can create your own errors using the 'raise' keyword. It's like sounding an alarm.",
        example: "if age < 0:\n    raise ValueError('Age is impossible!')",
        practicePrompt: "Raise an error if a user enters a negative price.",
        mistakes: ["Raising errors for normal logic flow."],
        summary: "Raise helps validate your program's state.",
        quizzes: [{ question: "Keyword to trigger an error?", options: ["error", "throw", "raise", "break"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 18,
    title: "OOP: Classes",
    lessons: [
      {
        id: "l18-1",
        title: "Objects & Classes",
        slug: "oop-intro",
        content: "A class is a blueprint. An object is the actual thing built. Class: 'Phone', Object: 'Your iPhone'.",
        example: "class User:\n    pass\nme = User()",
        practicePrompt: "Define an empty class called 'Hero'.",
        mistakes: ["Forgetting to use parentheses to create an object (me = User())."],
        summary: "OOP organizes code by modeling real things.",
        quizzes: [{ question: "What is an 'instance'?", options: ["A function", "A class", "An object", "A method"], correctIndex: 2 }]
      },
      {
        id: "l18-2",
        title: "The Constructor",
        slug: "oop-init",
        content: "The __init__ method runs when you create an object. It's used to set initial data.",
        example: "class Hero:\n    def __init__(self, name):\n        self.name = name",
        practicePrompt: "Add a 'power' level to your Hero class constructor.",
        mistakes: ["Forgetting 'self' as the first argument."],
        summary: "Constructors setup your objects.",
        quizzes: [{ question: "What is the first argument in __init__?", options: ["name", "data", "self", "this"], correctIndex: 2 }]
      },
      {
        id: "l18-3",
        title: "Class Methods",
        slug: "oop-methods",
        content: "Methods are functions inside a class. They describe what the object can DO.",
        example: "class Hero:\n    def shout(self): print('Help!')",
        practicePrompt: "Add a 'level_up' method to your Hero class.",
        mistakes: ["Trying to call a method without the object (shout() vs hero.shout())."],
        summary: "Methods are the actions of your objects.",
        quizzes: [{ question: "Methods must always have?", options: ["Return", "Self", "Args", "Class"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 19,
    title: "OOP: Inheritance",
    lessons: [
      {
        id: "l19-1",
        title: "Parent & Child",
        slug: "oop-inheritance",
        content: "Inheritance lets a new class get features from an old one. Dog inherits from Animal.",
        example: "class Animal: pass\nclass Dog(Animal): pass",
        practicePrompt: "Create a 'Warrior' class that inherits from 'Hero'.",
        mistakes: ["Not inheriting from the right base class."],
        summary: "Inheritance allows code reuse.",
        quizzes: [{ question: "Another name for Child class?", options: ["Super class", "Derived class", "Base class", "Master class"], correctIndex: 1 }]
      },
      {
        id: "l19-2",
        title: "Method Overriding",
        slug: "oop-override",
        content: "A child class can change how a parent's method works by writing a new version.",
        example: "class Robot: def talk(self): print('Bip')\nclass Human(Robot): def talk(self): print('Hi')",
        practicePrompt: "Override the 'shout' method in your Warrior class.",
        mistakes: ["Changing the method signature (arguments) accidentally."],
        summary: "Overriding lets children behave differently.",
        quizzes: [{ question: "Overriding happens in which class?", options: ["Parent", "Child", "Both", "Global"], correctIndex: 1 }]
      },
      {
        id: "l19-3",
        title: "The Super Function",
        slug: "oop-super",
        content: "Use super() to call the parent's version of a method. Great for extending features.",
        example: "def __init__(self):\n    super().__init__()\n    self.sword = True",
        practicePrompt: "Use super() in Warrior's constructor to set the Hero's name.",
        mistakes: ["Using super() outside of a class method."],
        summary: "Super connects the child to the parent.",
        quizzes: [{ question: "super() calls what?", options: ["Next class", "Parent class", "Child class", "All classes"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 20,
    title: "Comprehensions",
    lessons: [
      {
        id: "l20-1",
        title: "List Comprehensions",
        slug: "comp-list",
        content: "Create new lists from old ones in a single line. It's concise and fast.",
        example: "nums = [1, 2, 3]\ndoubles = [x*2 for x in nums]",
        practicePrompt: "Create a list of squares for numbers 1 to 5.",
        mistakes: ["Writing complex logic inside a comprehension (hard to read!)."],
        summary: "Comprehensions are a Python superpower.",
        quizzes: [{ question: "Result of [x for x in [1] ]?", options: ["[1]", "1", "[[1]]", "Error"], correctIndex: 0 }]
      },
      {
        id: "l20-2",
        title: "Adding Conditionals",
        slug: "comp-if",
        content: "You can add 'if' to comprehensions to filter items.",
        example: "evens = [x for x in range(10) if x % 2 == 0]",
        practicePrompt: "Filter a list to keep only strings longer than 3 letters.",
        mistakes: ["Putting the 'if' in the wrong place for 'else' logic."],
        summary: "Filters make comprehensions even better.",
        quizzes: [{ question: "Where does filter 'if' go?", options: ["Start", "End", "Middle", "Outside"], correctIndex: 1 }]
      },
      {
        id: "l20-3",
        title: "Dict Comprehensions",
        slug: "comp-dict",
        content: "You can do the same for dictionaries! Map keys to values in one line.",
        example: "squares = {x: x*x for x in range(5)}",
        practicePrompt: "Create a dictionary where names are keys and their length is the value.",
        mistakes: ["Forgetting the colon between key and value."],
        summary: "Dict comprehensions build dictionaries quickly.",
        quizzes: [{ question: "Dict comprehension uses which brackets?", options: ["[]", "()", "{}", "<>"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 21,
    title: "Functional Tools",
    lessons: [
      {
        id: "l21-1",
        title: "Lambdas",
        slug: "func-lambda",
        content: "Lambdas are tiny, one-line functions without names. Use them for quick tasks.",
        example: "add = lambda x, y: x + y\nprint(add(5, 5))",
        practicePrompt: "Write a lambda that multiplies a number by 10.",
        mistakes: ["Using lambda for multi-line code (doesn't work!)."],
        summary: "Lambdas are anonymous shortcuts.",
        quizzes: [{ question: "Keyword for anonymous functions?", options: ["anon", "def", "lambda", "tiny"], correctIndex: 2 }]
      },
      {
        id: "l21-2",
        title: "Map & Filter",
        slug: "func-map",
        content: "Map applies a function to every item. Filter keeps only items that return True.",
        example: "L = [1, 2]\nlist(map(lambda x: x+1, L))",
        practicePrompt: "Use filter and a lambda to keep numbers > 10 in a list.",
        mistakes: ["Forgetting to convert the result back to a list()."],
        summary: "Functional tools process data without loops.",
        quizzes: [{ question: "Which changes the values?", options: ["Map", "Filter", "Both", "Neither"], correctIndex: 0 }]
      },
      {
        id: "l21-3",
        title: "Zip & Enumerate",
        slug: "func-zip",
        content: "Zip combines two lists into pairs. Enumerate gives you both the index and the item while looping.",
        example: "for i, val in enumerate(['a', 'b']):\n    print(i, val)",
        practicePrompt: "Zip a list of names and a list of ages together.",
        mistakes: ["Zipping lists of different lengths (it stops at the shortest)."],
        summary: "Iterating is easier with these helpers.",
        quizzes: [{ question: "Which gives the index?", options: ["zip", "count", "enumerate", "range"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 22,
    title: "Generators",
    lessons: [
      {
        id: "l22-1",
        title: "Yield Keyword",
        slug: "gen-yield",
        content: "Generators use 'yield' instead of 'return'. They pause their state and come back later.",
        example: "def count():\n    yield 1\n    yield 2",
        practicePrompt: "Create a generator that yields 'Start', 'Middle', 'End'.",
        mistakes: ["Thinking yield is the same as return."],
        summary: "Yield makes functions 'iterable'.",
        quizzes: [{ question: "Yield makes a function a?", options: ["Loop", "Generator", "Constant", "Thread"], correctIndex: 1 }]
      },
      {
        id: "l22-2",
        title: "Lazy Evaluation",
        slug: "gen-lazy",
        content: "Generators don't compute all items at once. They wait until you ask for the next one. This saves huge amounts of memory.",
        example: "def big_range(n):\n    for i in range(n): yield i",
        practicePrompt: "Explain why lazy evaluation is good for processing 1 million files.",
        mistakes: ["Trying to access an item by index (generators don't support L[0])."],
        summary: "Lazy means 'calculate only when needed'.",
        quizzes: [{ question: "Generators save what?", options: ["Time", "Memory", "Storage", "Keys"], correctIndex: 1 }]
      },
      {
        id: "l22-3",
        title: "Next Function",
        slug: "gen-next",
        content: "Use next(generator) to get the next item manually. When empty, it raises StopIteration.",
        example: "g = count()\nprint(next(g))",
        practicePrompt: "Call next() on your start-middle-end generator twice.",
        mistakes: ["Calling next() too many times."],
        summary: "Next pushes the generator forward.",
        quizzes: [{ question: "Error when generator is empty?", options: ["EndError", "StopIteration", "EmptyGen", "None"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 23,
    title: "Decorators",
    lessons: [
      {
        id: "l23-1",
        title: "What is a Decorator?",
        slug: "dec-intro",
        content: "A decorator is a function that 'wraps' another function to add features. Think of it as a case for your phone.",
        example: "@my_decorator\ndef hello(): pass",
        practicePrompt: "Explain the visual benefit of using the @ symbol.",
        mistakes: ["Forgetting to use @ above the function definition."],
        summary: "Decorators modify behavior without changing code.",
        quizzes: [{ question: "Symbol for decorators?", options: ["$", "#", "@", "&"], correctIndex: 2 }]
      },
      {
        id: "l23-2",
        title: "Writing a Decorator",
        slug: "dec-write",
        content: "A decorator takes a function as input and returns a new 'wrapper' function.",
        example: "def dec(f):\n    def wrapper(): f()\n    return wrapper",
        practicePrompt: "Write a decorator that prints 'Starting...' before a function.",
        mistakes: ["Forgetting to return the wrapper function."],
        summary: "Decorators are functions that return functions.",
        quizzes: [{ question: "Decorators take what as input?", options: ["String", "Function", "List", "Int"], correctIndex: 1 }]
      },
      {
        id: "l23-3",
        title: "Using *args, **kwargs",
        slug: "dec-args",
        content: "Use *args and **kwargs in your wrapper to handle any number of inputs to the original function.",
        example: "def wrapper(*args, **kwargs):\n    return f(*args, **kwargs)",
        practicePrompt: "Update your decorator to handle functions with arguments.",
        mistakes: ["Hardcoding arguments (use * and ** instead)."],
        summary: "Args and Kwargs make decorators universal.",
        quizzes: [{ question: "*args returns a?", options: ["List", "Dict", "Tuple", "Set"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 24,
    title: "Regex",
    lessons: [
      {
        id: "l24-1",
        title: "The re Module",
        slug: "regex-intro",
        content: "Regex is for pattern matching. Use it to find things like emails or phone numbers in a sea of text.",
        example: "import re\nre.search('abc', 'abcdef')",
        practicePrompt: "Import the 're' module.",
        mistakes: ["Mistyping patterns (they are very sensitive!)."],
        summary: "Regex is a super-powered find-and-replace tool.",
        quizzes: [{ question: "Module for Regex?", options: ["regex", "re", "match", "search"], correctIndex: 1 }]
      },
      {
        id: "l24-2",
        title: "Special Characters",
        slug: "regex-char",
        content: "\\d matches digits, \\w matches letters, and . matches everything! Use r'' to avoid backslash issues.",
        example: "re.findall(r'\\d+', 'Age: 25')",
        practicePrompt: "Find all numbers in 'Room 101, Floor 2'.",
        mistakes: ["Forgetting the 'r' prefix for raw strings."],
        summary: "Patterns use specific symbols to represent data types.",
        quizzes: [{ question: "Matches any digit?", options: ["\\w", "\\s", "\\d", "\\t"], correctIndex: 2 }]
      },
      {
        id: "l24-3",
        title: "Match vs Search",
        slug: "regex-methods",
        content: ".match() only looks at the BEGINNING. .search() looks EVERYWHERE. .findall() returns ALL matches.",
        example: "re.findall(r'cat', 'the cat sat')",
        practicePrompt: "Try re.search for 'apple' in 'green apple'.",
        mistakes: ["Assuming .match() searches the whole string."],
        summary: "Choose the right method for your search goal.",
        quizzes: [{ question: "Finds all occurrences?", options: ["match", "search", "findall", "getall"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 25,
    title: "JSON & APIs",
    lessons: [
      {
        id: "l25-1",
        title: "JSON Basics",
        slug: "json-intro",
        content: "JSON is the language of data. It looks almost exactly like a Python dictionary.",
        example: "{\"name\": \"Zed\"}",
        practicePrompt: "Write a simple JSON object for a player with 'id' and 'gold'.",
        mistakes: ["Using single quotes (JSON requires double quotes!)."],
        summary: "JSON is standard for web data exchange.",
        quizzes: [{ question: "JSON uses which quotes?", options: ["Single", "Double", "None", "Backticks"], correctIndex: 1 }]
      },
      {
        id: "l25-2",
        title: "Loads & Dumps",
        slug: "json-methods",
        content: "json.loads() turns a string into a dict. json.dumps() turns a dict into a JSON string.",
        example: "import json\ns = json.dumps({'a': 1})",
        practicePrompt: "Convert your book dictionary into a JSON string.",
        mistakes: ["Confusing load (file) with loads (string)."],
        summary: "Switch between Python and JSON easily.",
        quizzes: [{ question: "Dict to JSON string?", options: ["load", "dump", "loads", "dumps"], correctIndex: 3 }]
      },
      {
        id: "l25-3",
        title: "Web APIs",
        slug: "json-api",
        content: "APIs are links that send JSON data. We use 'requests' module to talk to them.",
        example: "import requests\n# r = requests.get(url)",
        practicePrompt: "Explain how a weather app uses an API.",
        mistakes: ["Not handling internet connection errors."],
        summary: "APIs let your app talk to the whole world.",
        quizzes: [{ question: "Standard data format for APIs?", options: ["XML", "CSV", "JSON", "Plain Text"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 26,
    title: "Environment",
    lessons: [
      {
        id: "l26-1",
        title: "Pip Installer",
        slug: "env-pip",
        content: "Pip is the package manager. Use 'pip install name' in your terminal to get new libraries.",
        example: "# pip install flask",
        practicePrompt: "What command would install the 'numpy' library?",
        mistakes: ["Running pip commands inside the Python editor (they belong in terminal!)."],
        summary: "Pip connects you to thousands of free tools.",
        quizzes: [{ question: "Standard package manager?", options: ["npm", "pip", "pkg", "get"], correctIndex: 1 }]
      },
      {
        id: "l26-2",
        title: "Virtual Envs (venv)",
        slug: "env-venv",
        content: "Venv creates a separate 'room' for each project. Libraries from Project A won't mess up Project B.",
        example: "python -m venv myenv",
        practicePrompt: "Why is it bad to install everything globally?",
        mistakes: ["Forgetting to 'activate' the environment."],
        summary: "Venvs keep your computer clean and organized.",
        quizzes: [{ question: "Command to create venv?", options: ["venv init", "python venv", "python -m venv", "new venv"], correctIndex: 2 }]
      },
      {
        id: "l26-3",
        title: "Requirements.txt",
        slug: "env-req",
        content: "List all your libraries in a file called 'requirements.txt' so others can install them all at once.",
        example: "flask==2.0\nrequests",
        practicePrompt: "Explain how a teammate would use your requirements file.",
        mistakes: ["Forgetting to update the version numbers."],
        summary: "Requirement files make projects easy to share.",
        quizzes: [{ question: "Command to install from file?", options: ["pip get -f", "pip install -r", "pip read", "pip add"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 27,
    title: "SQLite",
    lessons: [
      {
        id: "l27-1",
        title: "Database Basics",
        slug: "sql-intro",
        content: "Databases store huge amounts of data in tables. SQLite is a tiny database that fits in one file.",
        example: "import sqlite3\nconn = sqlite3.connect('my.db')",
        practicePrompt: "Connect to a database named 'game.db'.",
        mistakes: ["Thinking databases are just text files (they are structured!)."],
        summary: "SQLite is great for small apps and local storage.",
        quizzes: [{ question: "SQLite data is stored in?", options: ["Memory only", "A single file", "Many files", "The cloud"], correctIndex: 1 }]
      },
      {
        id: "l27-2",
        title: "SQL Queries",
        slug: "sql-query",
        content: "Use SQL language to talk to the database. CREATE TABLE, INSERT INTO, and SELECT are the basics.",
        example: "cur = conn.cursor()\ncur.execute('SELECT * FROM users')",
        practicePrompt: "Write a query to select everything from a 'scores' table.",
        mistakes: ["Forgetting to .commit() your changes to save them."],
        summary: "SQL is the language of data storage.",
        quizzes: [{ question: "Command to get data?", options: ["GET", "SELECT", "FETCH", "READ"], correctIndex: 1 }]
      },
      {
        id: "l27-3",
        title: "Closing Conn",
        slug: "sql-close",
        content: "Always close your database connection when done, otherwise it might get locked!",
        example: "conn.close()",
        practicePrompt: "Ensure your database code always closes even if an error happens.",
        mistakes: ["Leaving connections open for too long."],
        summary: "Proper cleanup prevents data corruption.",
        quizzes: [{ question: "What saves the data?", options: ["save()", "push()", "commit()", "sync()"], correctIndex: 2 }]
      }
    ]
  },
  {
    id: 28,
    title: "Unit Testing",
    lessons: [
      {
        id: "l28-1",
        title: "Assert Basics",
        slug: "test-assert",
        content: "The 'assert' keyword checks if something is True. If not, it crashes. It's the simplest test.",
        example: "assert 2 + 2 == 4",
        practicePrompt: "Assert that the length of 'Hi' is 2.",
        mistakes: ["Using assert for production code (it can be disabled!)."],
        summary: "Assert is a quick sanity check.",
        quizzes: [{ question: "What happens if assert is False?", options: ["Error", "Warning", "Nothing", "Skip"], correctIndex: 0 }]
      },
      {
        id: "l28-2",
        title: "Unittest Module",
        slug: "test-unit",
        content: "Python has a built-in module for testing. You write classes that inherit from unittest.TestCase.",
        example: "import unittest\nclass MyTest(unittest.TestCase):\n    def test_add(self): self.assertEqual(1, 1)",
        practicePrompt: "Define a test class that checks if a string is uppercase.",
        mistakes: ["Naming test methods without 'test_' prefix (they won't run!)."],
        summary: "Unittest is standard for professional code.",
        quizzes: [{ question: "Prefix for test methods?", options: ["check_", "test_", "run_", "try_"], correctIndex: 1 }]
      },
      {
        id: "l28-3",
        title: "Pytest",
        slug: "test-pytest",
        content: "Pytest is a popular third-party tool that makes testing even easier and more readable.",
        example: "# In terminal: pytest my_file.py",
        practicePrompt: "Search online: what is one advantage of Pytest over Unittest?",
        mistakes: ["Over-testing (only test the logic that matters)."],
        summary: "Pytest is the favorite of many developers.",
        quizzes: [{ question: "Is Pytest built-in?", options: ["Yes", "No", "Only on Mac", "Only on Windows"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 29,
    title: "Data Science",
    lessons: [
      {
        id: "l29-1",
        title: "NumPy Arrays",
        slug: "ds-numpy",
        content: "NumPy arrays are like lists but much faster for math. Essential for big science!",
        example: "import numpy as np\na = np.array([1, 2, 3])",
        practicePrompt: "Create a NumPy array with numbers 1 to 10.",
        mistakes: ["Mixing standard lists with NumPy arrays (conversion needed)."],
        summary: "NumPy is the foundation of data science.",
        quizzes: [{ question: "Main object in NumPy?", options: ["List", "ndarray", "Series", "Tensor"], correctIndex: 1 }]
      },
      {
        id: "l29-2",
        title: "Pandas DataFrames",
        slug: "ds-pandas",
        content: "Pandas is like Excel inside Python. It uses 'DataFrames' to store tables with rows and columns.",
        example: "import pandas as pd\ndf = pd.read_csv('data.csv')",
        practicePrompt: "Explain what a 'column' is in a DataFrame.",
        mistakes: ["Trying to loop through rows manually (use vectorized functions!)."],
        summary: "Pandas makes data analysis easy.",
        quizzes: [{ question: "Pandas uses which object?", options: ["List", "Dict", "DataFrame", "Tuple"], correctIndex: 2 }]
      },
      {
        id: "l29-3",
        title: "Visualization",
        slug: "ds-viz",
        content: "Libraries like Matplotlib and Seaborn let you turn data into charts and graphs.",
        example: "import matplotlib.pyplot as plt\nplt.plot([1, 2], [10, 20])",
        practicePrompt: "Describe why a chart is better than a giant list of numbers.",
        mistakes: ["Plotting too much data on one graph (clutter)."],
        summary: "Visuals help tell stories with data.",
        quizzes: [{ question: "Most common plotting library?", options: ["Plotlib", "Matplotlib", "Seaborn", "ChartsPlus"], correctIndex: 1 }]
      }
    ]
  },
  {
    id: 30,
    title: "Web Hero",
    lessons: [
      {
        id: "l30-1",
        title: "Flask Framework",
        slug: "web-flask",
        content: "Flask is a 'micro' framework for building websites. You can start a server in just 5 lines!",
        example: "from flask import Flask\napp = Flask(__name__)\n@app.route('/')\ndef hi(): return 'Hi!'",
        practicePrompt: "What is a 'Route' in web development?",
        mistakes: ["Running in debug mode in a real production environment."],
        summary: "Flask is perfect for small-to-medium web projects.",
        quizzes: [{ question: "Which decorator for URL path?", options: ["@url", "@route", "@path", "@app.route"], correctIndex: 3 }]
      },
      {
        id: "l30-2",
        title: "Templates (HTML)",
        slug: "web-html",
        content: "Websites use HTML. Flask uses 'render_template' to send HTML files to the user's browser.",
        example: "# return render_template('index.html')",
        practicePrompt: "Explain how Python sends data to an HTML page.",
        mistakes: ["Putting hardcoded HTML strings in Python (use templates!)."],
        summary: "Keep logic (Python) and layout (HTML) separate.",
        quizzes: [{ question: "Flask template engine name?", options: ["Django", "Jinja2", "Mustache", "EJS"], correctIndex: 1 }]
      },
      {
        id: "l30-3",
        title: "The Final Step",
        slug: "web-final",
        content: "You've finished the roadmap! You are now a Python Hero. The next step is to build something for yourself.",
        example: "# Your future starts here\nprint('Mastery achieved!')",
        practicePrompt: "Write down one project idea you want to build now.",
        mistakes: ["Stopping here! (Learning never ends)."],
        summary: "Consistent practice is the key to mastery.",
        quizzes: [{ question: "What is the best way to master Python?", options: ["Watching videos", "Reading books", "Building projects", "Memorizing"], correctIndex: 2 }]
      }
    ]
  }
];

export const PRACTICE_PROBLEMS: PracticeProblem[] = Array.from({ length: 80 }, (_, i) => ({
  id: i + 1,
  topic: i < 15 ? "Basics" : i < 30 ? "Logic" : i < 45 ? "Data" : i < 60 ? "OOP" : "Advanced",
  prompt: `Exercise ${i + 1}: Write a script to ${[
    'sum two numbers', 'check if a word is a palindrome', 'calculate factorial', 'filter even numbers', 
    'reverse a string', 'find common items in lists', 'sort a dictionary by value', 'handle a file error',
    'create a class for a bank account', 'use map to square numbers', 'write a regex for emails', 'scrape a website title'
  ][i % 12]}.`,
  output: "Calculated result based on input.",
  solution: "Refer to the corresponding module for the solution pattern!",
  explanation: "This task ensures you can apply the theory from the lessons to real code."
}));

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Digital Money Manager",
    description: "Track your income and expenses in a local file.",
    features: ["Add income", "Subtract expense", "Save to CSV", "View balance summary"],
    steps: ["Setup balance variable", "Create input loop", "Write to file using CSV module", "Display final calculation"],
    difficulty: "Beginner",
    code: "import csv\n# Implementation logic..."
  },
  {
    id: 2,
    title: "AI Chatbot Prototype",
    description: "Build a simple rule-based bot that answers questions.",
    features: ["Input processing", "Keyword matching", "Default responses", "Exit command"],
    steps: ["Define a dictionary of questions/answers", "Use a while loop", "Implement string .lower() for matching"],
    difficulty: "Beginner",
    code: "responses = {'hello': 'Hi there!'}\n# Bot logic..."
  },
  {
    id: 3,
    title: "Weather Scraper",
    description: "Get real-time weather info from a website.",
    features: ["Web request", "HTML parsing", "Data extraction", "JSON saving"],
    steps: ["Use requests to get HTML", "Use BeautifulSoup to find tags", "Print current temperature"],
    difficulty: "Intermediate",
    code: "import requests\nfrom bs4 import BeautifulSoup\n# Scraper logic..."
  },
  {
    id: 4,
    title: "Task Management API",
    description: "Build a web service to manage tasks.",
    features: ["REST routes", "JSON communication", "Local DB storage", "Error handling"],
    steps: ["Setup Flask app", "Create SQLite table", "Implement GET/POST routes"],
    difficulty: "Intermediate",
    code: "from flask import Flask\n# API logic..."
  }
];
