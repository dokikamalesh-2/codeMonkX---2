module.exports = {
  language: "Python",
  topics: [
    {
      topicNumber: 1,
      topicName: "01. Basics",
      topicKey: "basics",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Python is?", options: ["Interpreted", "Compiled", "Binary", "None"], correct_answer: "Interpreted" },
            { question: "Python creator?", options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Bjarne Stroustrup"], correct_answer: "Guido van Rossum" },
            { question: "Print function?", options: ["print()", "printf()", "cout", "echo"], correct_answer: "print()" },
            { question: "Input function?", options: ["input()", "scanf()", "cin", "read()"], correct_answer: "input()" },
            { question: "Python is?", options: ["High-level", "Low-level", "Assembly", "Machine code"], correct_answer: "High-level" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Comment in Python?", options: ["#", "//", "/* */", "--"], correct_answer: "#" },
            { question: "Integer type?", options: ["int", "integer", "num", "whole"], correct_answer: "int" },
            { question: "Assign variable?", options: ["x = 5", "int x = 5", "var x = 5", "x := 5 only"], correct_answer: "x = 5" },
            { question: "Python uses indentation for?", options: ["Code blocks", "Comments", "Variables", "Imports"], correct_answer: "Code blocks" },
            { question: "String delimiter?", options: ["' ' or \" \"", "{ }", "[ ]", "< >"], correct_answer: "' ' or \" \"" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Type of 3.14?", options: ["float", "double", "decimal", "real"], correct_answer: "float" },
            { question: "len('hello')?", options: ["5", "4", "6", "Error"], correct_answer: "5" },
            { question: "Convert to int?", options: ["int(x)", "Integer(x)", "toInt(x)", "(int)x"], correct_answer: "int(x)" },
            { question: "True and False are?", options: ["bool", "int", "string", "object"], correct_answer: "bool" },
            { question: "None means?", options: ["No value", "Zero", "Empty string", "False"], correct_answer: "No value" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Floor division operator?", options: ["//", "/", "%", "**"], correct_answer: "//" },
            { question: "Exponent operator?", options: ["**", "^", "pow", "exp"], correct_answer: "**" },
            { question: "Modulus operator?", options: ["%", "mod", "//", "%%"], correct_answer: "%" },
            { question: "String concatenation?", options: ["+", "&", ".", ","], correct_answer: "+" },
            { question: "x = 'Hi' * 3?", options: ["HiHiHi", "Hi3", "Error", "HiHi"], correct_answer: "HiHiHi" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Walrus operator?", options: [":=", "=", "==", "=>"], correct_answer: ":=" },
            { question: "type(42) returns?", options: ["<class 'int'>", "int", "42", "number"], correct_answer: "<class 'int'>" },
            { question: "id() function?", options: ["Memory address", "Object type", "Object value", "Hash"], correct_answer: "Memory address" },
            { question: "is vs ==?", options: ["Identity vs equality", "Same thing", "Only for strings", "Only for numbers"], correct_answer: "Identity vs equality" },
            { question: "Mutable type?", options: ["list", "tuple", "string", "int"], correct_answer: "list" }
          ]
        }
      ]
    },
    {
      topicNumber: 2,
      topicName: "02. Control Flow",
      topicKey: "control",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "if statement syntax?", options: ["if x > 0:", "if (x > 0)", "if x > 0 then", "if x > 0 {}"], correct_answer: "if x > 0:" },
            { question: "elif means?", options: ["else if", "end if", "else", "error if"], correct_answer: "else if" },
            { question: "for loop syntax?", options: ["for i in range(5):", "for(i=0;i<5;i++)", "for i = 0 to 5:", "loop i in 5:"], correct_answer: "for i in range(5):" },
            { question: "while loop?", options: ["while x > 0:", "while (x > 0)", "while x > 0 do", "loop while x > 0:"], correct_answer: "while x > 0:" },
            { question: "Break statement?", options: ["Exits loop", "Continues loop", "Skips iteration", "Exits program"], correct_answer: "Exits loop" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "continue statement?", options: ["Skips to next iteration", "Exits loop", "Exits function", "Skips else"], correct_answer: "Skips to next iteration" },
            { question: "pass statement?", options: ["Does nothing", "Exits loop", "Skips function", "Returns None"], correct_answer: "Does nothing" },
            { question: "range(1, 5) produces?", options: ["1,2,3,4", "1,2,3,4,5", "0,1,2,3,4", "1,2,3"], correct_answer: "1,2,3,4" },
            { question: "range(0,10,2) step?", options: ["2", "1", "10", "0"], correct_answer: "2" },
            { question: "Nested loop depth limit?", options: ["No hard limit", "3 levels", "5 levels", "2 levels"], correct_answer: "No hard limit" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "for...else in Python?", options: ["else runs if no break", "else always runs", "else never runs", "Syntax error"], correct_answer: "else runs if no break" },
            { question: "while...else?", options: ["else runs if condition false", "else always runs", "else on break", "None"], correct_answer: "else runs if condition false" },
            { question: "match statement added in?", options: ["Python 3.10", "Python 3.8", "Python 2.7", "Python 3.6"], correct_answer: "Python 3.10" },
            { question: "Ternary expression?", options: ["a if cond else b", "cond ? a : b", "if cond: a else b", "a when cond else b"], correct_answer: "a if cond else b" },
            { question: "enumerate() gives?", options: ["Index and value", "Index only", "Value only", "Length"], correct_answer: "Index and value" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "zip() function?", options: ["Combines iterables", "Compresses files", "Sorts lists", "Splits list"], correct_answer: "Combines iterables" },
            { question: "map(func, list)?", options: ["Applies func to each", "Filters list", "Sorts list", "Counts list"], correct_answer: "Applies func to each" },
            { question: "filter(func, list)?", options: ["Keeps true elements", "Maps elements", "Sorts elements", "Counts elements"], correct_answer: "Keeps true elements" },
            { question: "any([False, True])?", options: ["True", "False", "Error", "None"], correct_answer: "True" },
            { question: "all([True, False])?", options: ["False", "True", "Error", "None"], correct_answer: "False" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "List comprehension?", options: ["[x for x in lst]", "{x for x in lst}", "(x for x in lst)", "<x for x in lst>"], correct_answer: "[x for x in lst]" },
            { question: "Generator expression?", options: ["(x for x in lst)", "[x for x in lst]", "{x for x in lst}", "gen(x for x in lst)"], correct_answer: "(x for x in lst)" },
            { question: "Dict comprehension?", options: ["{k:v for k,v in d}", "[k:v for k,v in d]", "(k:v for k,v in d)", "dict(k:v for d)"], correct_answer: "{k:v for k,v in d}" },
            { question: "reduce() is in?", options: ["functools", "itertools", "builtins", "operator"], correct_answer: "functools" },
            { question: "Lazy evaluation means?", options: ["Compute only when needed", "Compute ahead of time", "Never compute", "Cache results"], correct_answer: "Compute only when needed" }
          ]
        }
      ]
    },
    {
      topicNumber: 3,
      topicName: "03. Functions",
      topicKey: "functions",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Define function?", options: ["def myFunc():", "function myFunc():", "func myFunc():", "define myFunc():"], correct_answer: "def myFunc():" },
            { question: "Return value?", options: ["return x", "give x", "yield x", "output x"], correct_answer: "return x" },
            { question: "Default argument?", options: ["def f(x=5):", "def f(x:5):", "def f(x->5):", "def f(x=?5):"], correct_answer: "def f(x=5):" },
            { question: "Call function?", options: ["myFunc()", "call myFunc()", "run myFunc()", "myFunc"], correct_answer: "myFunc()" },
            { question: "Function with no return?", options: ["Returns None", "Returns 0", "Returns False", "Error"], correct_answer: "Returns None" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "*args allows?", options: ["Variable positional args", "Variable keyword args", "One extra arg", "No args"], correct_answer: "Variable positional args" },
            { question: "**kwargs allows?", options: ["Variable keyword args", "Variable positional args", "Pointer args", "No args"], correct_answer: "Variable keyword args" },
            { question: "Lambda syntax?", options: ["lambda x: x+1", "lambda(x){ x+1 }", "func x: x+1", "=> x+1"], correct_answer: "lambda x: x+1" },
            { question: "Lambda can have?", options: ["One expression", "Multiple statements", "Loops", "Classes"], correct_answer: "One expression" },
            { question: "Local variable scope?", options: ["Inside function only", "Entire module", "Entire program", "Inside class only"], correct_answer: "Inside function only" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "global keyword?", options: ["Use global variable", "Create global var", "Delete global var", "Import global"], correct_answer: "Use global variable" },
            { question: "nonlocal keyword?", options: ["Access enclosing scope", "Global scope", "Local scope", "Class scope"], correct_answer: "Access enclosing scope" },
            { question: "Closure is?", options: ["Function + enclosing scope", "Class function", "Static function", "Lambda only"], correct_answer: "Function + enclosing scope" },
            { question: "Decorator syntax?", options: ["@decorator", "#decorator", "$decorator", "!decorator"], correct_answer: "@decorator" },
            { question: "functools.wraps does?", options: ["Preserves metadata", "Calls function", "Copies function", "Deletes function"], correct_answer: "Preserves metadata" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Recursion needs?", options: ["Base case + recursive call", "Loop inside", "Global variable", "Class"], correct_answer: "Base case + recursive call" },
            { question: "Default recursion limit?", options: ["1000", "100", "10000", "Unlimited"], correct_answer: "1000" },
            { question: "yield keyword creates?", options: ["Generator", "List", "Coroutine only", "Thread"], correct_answer: "Generator" },
            { question: "next() on generator?", options: ["Gets next value", "Resets generator", "Closes generator", "Counts values"], correct_answer: "Gets next value" },
            { question: "StopIteration raised when?", options: ["Generator exhausted", "Loop ends", "Function returns", "Error occurs"], correct_answer: "Generator exhausted" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "async def creates?", options: ["Coroutine function", "Thread function", "Generator function", "Class method"], correct_answer: "Coroutine function" },
            { question: "await keyword?", options: ["Pauses coroutine", "Stops program", "Raises exception", "Creates thread"], correct_answer: "Pauses coroutine" },
            { question: "asyncio.run()?", options: ["Runs coroutine", "Creates thread", "Imports module", "Defines event loop"], correct_answer: "Runs coroutine" },
            { question: "partial() is in?", options: ["functools", "itertools", "operator", "builtins"], correct_answer: "functools" },
            { question: "Higher-order function?", options: ["Takes/returns function", "High memory function", "Recursive function", "Async function"], correct_answer: "Takes/returns function" }
          ]
        }
      ]
    },
    {
      topicNumber: 4,
      topicName: "04. Data Structures",
      topicKey: "datastructures",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "List is?", options: ["Mutable ordered sequence", "Immutable ordered", "Unordered unique", "Key-value pairs"], correct_answer: "Mutable ordered sequence" },
            { question: "Tuple is?", options: ["Immutable ordered sequence", "Mutable ordered", "Unordered unique", "Key-value pairs"], correct_answer: "Immutable ordered sequence" },
            { question: "dict stores?", options: ["Key-value pairs", "Values only", "Unique values", "Ordered values"], correct_answer: "Key-value pairs" },
            { question: "set contains?", options: ["Unique unordered elements", "Ordered unique", "Duplicates allowed", "Key-value pairs"], correct_answer: "Unique unordered elements" },
            { question: "List append()?", options: ["Adds to end", "Adds to front", "Removes from end", "Removes from front"], correct_answer: "Adds to end" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "List slicing [1:3]?", options: ["Elements 1 and 2", "Elements 1,2,3", "Elements 0,1,2", "Element 1 only"], correct_answer: "Elements 1 and 2" },
            { question: "list.pop()?", options: ["Removes last element", "Removes first element", "Removes all", "Returns last without removing"], correct_answer: "Removes last element" },
            { question: "dict.get(key, default)?", options: ["Returns value or default", "Raises KeyError", "Returns None always", "Deletes key"], correct_answer: "Returns value or default" },
            { question: "set.add(x)?", options: ["Adds element", "Removes element", "Checks membership", "Clears set"], correct_answer: "Adds element" },
            { question: "sorted() vs list.sort()?", options: ["sorted() returns new list", "Same thing", "sort() returns new list", "Both in-place"], correct_answer: "sorted() returns new list" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Stack using list?", options: ["append()/pop()", "insert(0)/pop(0)", "extend()/clear()", "add()/remove()"], correct_answer: "append()/pop()" },
            { question: "Queue using deque?", options: ["append()/popleft()", "append()/pop()", "appendleft()/pop()", "push()/shift()"], correct_answer: "append()/popleft()" },
            { question: "collections.deque is in?", options: ["collections", "itertools", "builtins", "queue"], correct_answer: "collections" },
            { question: "defaultdict purpose?", options: ["Auto-creates missing keys", "Sorts dict", "Reverses dict", "Freezes dict"], correct_answer: "Auto-creates missing keys" },
            { question: "Counter counts?", options: ["Element frequencies", "List length", "Dict keys", "Set size"], correct_answer: "Element frequencies" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "heapq gives?", options: ["Min heap", "Max heap", "Sorted list", "Binary tree"], correct_answer: "Min heap" },
            { question: "namedtuple?", options: ["Tuple with named fields", "Named list", "Named dict", "Named set"], correct_answer: "Tuple with named fields" },
            { question: "frozenset is?", options: ["Immutable set", "Mutable set", "Ordered set", "Sorted set"], correct_answer: "Immutable set" },
            { question: "dict.items() returns?", options: ["Key-value pairs", "Keys only", "Values only", "Indices"], correct_answer: "Key-value pairs" },
            { question: "List multiplication [0]*3?", options: ["[0,0,0]", "[0*3]", "[3]", "Error"], correct_answer: "[0,0,0]" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Linked list built-in?", options: ["Not in Python builtins", "list", "deque", "tuple"], correct_answer: "Not in Python builtins" },
            { question: "Time complexity list append?", options: ["O(1) amortized", "O(n)", "O(log n)", "O(n^2)"], correct_answer: "O(1) amortized" },
            { question: "dict lookup time?", options: ["O(1) average", "O(n)", "O(log n)", "O(n^2)"], correct_answer: "O(1) average" },
            { question: "set membership test?", options: ["O(1) average", "O(n)", "O(log n)", "O(n^2)"], correct_answer: "O(1) average" },
            { question: "array module vs list?", options: ["array is typed, faster", "Same performance", "list is typed", "array is mutable only"], correct_answer: "array is typed, faster" }
          ]
        }
      ]
    },
    {
      topicNumber: 5,
      topicName: "05. OOP & Modules",
      topicKey: "oop",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Define class?", options: ["class MyClass:", "class MyClass{}", "define class MyClass:", "struct MyClass:"], correct_answer: "class MyClass:" },
            { question: "__init__ is?", options: ["Constructor", "Destructor", "Copy method", "String method"], correct_answer: "Constructor" },
            { question: "self refers to?", options: ["Current instance", "Class itself", "Parent class", "Global scope"], correct_answer: "Current instance" },
            { question: "Create instance?", options: ["obj = MyClass()", "obj = new MyClass()", "obj = MyClass.new()", "obj := MyClass()"], correct_answer: "obj = MyClass()" },
            { question: "Instance method needs?", options: ["self as first param", "cls as first param", "No params", "static keyword"], correct_answer: "self as first param" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Inheritance syntax?", options: ["class Child(Parent):", "class Child extends Parent:", "class Child:Parent:", "class Child->Parent:"], correct_answer: "class Child(Parent):" },
            { question: "super() calls?", options: ["Parent class method", "Child class method", "Static method", "Global function"], correct_answer: "Parent class method" },
            { question: "__str__ method?", options: ["String representation", "Comparison method", "Hash method", "Copy method"], correct_answer: "String representation" },
            { question: "@classmethod first param?", options: ["cls", "self", "klass", "class"], correct_answer: "cls" },
            { question: "@staticmethod?", options: ["No self or cls", "Has self", "Has cls", "Has both"], correct_answer: "No self or cls" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "__repr__ vs __str__?", options: ["repr for devs, str for users", "Same thing", "repr for users", "str for devs"], correct_answer: "repr for devs, str for users" },
            { question: "Multiple inheritance?", options: ["class C(A, B):", "class C extends A, B:", "class C(A)(B):", "class C[A,B]:"], correct_answer: "class C(A, B):" },
            { question: "MRO stands for?", options: ["Method Resolution Order", "Multiple Runtime Object", "Module Resolution Order", "None"], correct_answer: "Method Resolution Order" },
            { question: "Abstract class uses?", options: ["abc module", "abstract keyword", "interface keyword", "virtual keyword"], correct_answer: "abc module" },
            { question: "Property decorator?", options: ["@property", "@getter", "@getset", "@attr"], correct_answer: "@property" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Import module?", options: ["import math", "include math", "using math", "require math"], correct_answer: "import math" },
            { question: "from...import?", options: ["Import specific name", "Import everything", "Import module", "Create module"], correct_answer: "Import specific name" },
            { question: "__name__ == '__main__'?", options: ["Script run directly", "Module imported", "Class defined", "Function called"], correct_answer: "Script run directly" },
            { question: "pip is?", options: ["Package installer", "Python interpreter", "Debugger", "Compiler"], correct_answer: "Package installer" },
            { question: "virtual environment?", options: ["Isolated Python env", "Virtual machine", "Online Python", "Docker container"], correct_answer: "Isolated Python env" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "dataclass decorator?", options: ["Auto-generates __init__", "Adds database support", "Creates async class", "Freezes class"], correct_answer: "Auto-generates __init__" },
            { question: "__slots__ purpose?", options: ["Restrict attributes, save memory", "Add extra attributes", "Make class mutable", "Inherit slots"], correct_answer: "Restrict attributes, save memory" },
            { question: "Metaclass?", options: ["Class of a class", "Parent class", "Abstract class", "Mixin class"], correct_answer: "Class of a class" },
            { question: "__getattr__ called when?", options: ["Attribute not found", "Attribute found", "Class created", "Object deleted"], correct_answer: "Attribute not found" },
            { question: "Mixin class purpose?", options: ["Add reusable behavior", "Create base class", "Replace inheritance", "Define interface"], correct_answer: "Add reusable behavior" }
          ]
        }
      ]
    }
  ]
};