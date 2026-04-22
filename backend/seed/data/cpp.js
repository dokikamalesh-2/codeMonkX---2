module.exports = {
  language: "Cpp",
  topics: [
    {
      topicNumber: 1,
      topicName: "01. Basics",
      topicKey: "basics",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "C++ supports?", options: ["OOP", "Procedural", "Both", "None"], correct_answer: "Both" },
            { question: "C++ creator?", options: ["Bjarne Stroustrup", "Dennis Ritchie", "Guido van Rossum", "James Gosling"], correct_answer: "Bjarne Stroustrup" },
            { question: "Output operator?", options: ["<<", ">>", "print", "printf"], correct_answer: "<<" },
            { question: "Input object?", options: ["cin", "cout", "std", "endl"], correct_answer: "cin" },
            { question: "Standard header?", options: ["iostream", "stdio.h", "math.h", "string.h"], correct_answer: "iostream" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Namespace keyword?", options: ["using namespace", "import", "include", "define"], correct_answer: "using namespace" },
            { question: "Boolean type in C++?", options: ["bool", "boolean", "bit", "flag"], correct_answer: "bool" },
            { question: "Single-line comment?", options: ["//", "/* */", "#", "--"], correct_answer: "//" },
            { question: "endl does?", options: ["New line + flush", "New line only", "Flush only", "Nothing"], correct_answer: "New line + flush" },
            { question: "String header?", options: ["<string>", "<str.h>", "<text>", "<chars>"], correct_answer: "<string>" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Declare constant?", options: ["const int x=5;", "constant x=5;", "final x=5;", "static x=5;"], correct_answer: "const int x=5;" },
            { question: "sizeof(int) typically?", options: ["4 bytes", "2 bytes", "8 bytes", "1 byte"], correct_answer: "4 bytes" },
            { question: "auto keyword?", options: ["Type deduction", "Automatic storage", "Loop variable", "Global variable"], correct_answer: "Type deduction" },
            { question: "Escape for newline?", options: ["\\n", "\\t", "\\r", "\\0"], correct_answer: "\\n" },
            { question: "Ternary operator?", options: ["? :", "if else", "switch", ":?"], correct_answer: "? :" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Range-based for loop?", options: ["for(auto x:arr)", "for each(x in arr)", "foreach(arr)", "loop(arr)"], correct_answer: "for(auto x:arr)" },
            { question: "nullptr means?", options: ["No address", "Zero value", "Empty string", "Error"], correct_answer: "No address" },
            { question: "Reference declaration?", options: ["int &r=x;", "int *r=x;", "ref int r=x;", "int r=&x;"], correct_answer: "int &r=x;" },
            { question: "std::vector is?", options: ["Dynamic array", "Static array", "Linked list", "Stack"], correct_answer: "Dynamic array" },
            { question: "Compilation command?", options: ["g++", "gcc", "javac", "python"], correct_answer: "g++" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Lambda syntax?", options: ["[](){ }", "func(){ }", "lambda(){ }", "=>{ }"], correct_answer: "[](){ }" },
            { question: "std::cout is in?", options: ["std namespace", "global", "iostream namespace", "main"], correct_answer: "std namespace" },
            { question: "Move semantics header?", options: ["<utility>", "<move>", "<memory>", "<algorithm>"], correct_answer: "<utility>" },
            { question: "Smart pointer type?", options: ["unique_ptr", "safe_ptr", "auto_ptr only", "raw_ptr"], correct_answer: "unique_ptr" },
            { question: "Operator overloading is?", options: ["Redefining operators", "Deleting operators", "Creating operators", "Hiding operators"], correct_answer: "Redefining operators" }
          ]
        }
      ]
    },
    {
      topicNumber: 2,
      topicName: "02. OOP Concepts",
      topicKey: "oop",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "OOP stands for?", options: ["Object Oriented Programming", "Object Output Program", "Open Oriented Protocol", "None"], correct_answer: "Object Oriented Programming" },
            { question: "Blueprint of object?", options: ["Class", "Function", "Variable", "Array"], correct_answer: "Class" },
            { question: "Create object syntax?", options: ["ClassName obj;", "new ClassName;", "object ClassName;", "make ClassName;"], correct_answer: "ClassName obj;" },
            { question: "Access members using?", options: [".", "->", "Both . and ->", ":"], correct_answer: "Both . and ->" },
            { question: "Constructor purpose?", options: ["Initialize object", "Destroy object", "Copy object", "Print object"], correct_answer: "Initialize object" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Destructor prefix?", options: ["~", "!", "-", "@"], correct_answer: "~" },
            { question: "Private members accessed by?", options: ["Class itself", "Derived class", "Any function", "Global scope"], correct_answer: "Class itself" },
            { question: "Public means?", options: ["Accessible everywhere", "Accessible in class only", "Accessible in derived class", "Inaccessible"], correct_answer: "Accessible everywhere" },
            { question: "this pointer refers to?", options: ["Current object", "Parent object", "Global object", "New object"], correct_answer: "Current object" },
            { question: "Encapsulation means?", options: ["Data hiding", "Inheritance", "Polymorphism", "Overloading"], correct_answer: "Data hiding" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Inheritance keyword?", options: [":", "extends", "inherits", "->"], correct_answer: ":" },
            { question: "Base class also called?", options: ["Parent class", "Child class", "Derived class", "Object class"], correct_answer: "Parent class" },
            { question: "Multiple inheritance?", options: ["C++ supports it", "C++ does not support", "Only with interfaces", "Only with abstract"], correct_answer: "C++ supports it" },
            { question: "protected access?", options: ["Class + derived", "Class only", "Everywhere", "Outside only"], correct_answer: "Class + derived" },
            { question: "virtual keyword used for?", options: ["Polymorphism", "Encapsulation", "Inheritance", "Overloading"], correct_answer: "Polymorphism" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Pure virtual function syntax?", options: ["virtual void f()=0;", "virtual void f();", "void f()=0;", "abstract void f();"], correct_answer: "virtual void f()=0;" },
            { question: "Abstract class?", options: ["Has pure virtual function", "Has no functions", "Has only static", "Has constructors only"], correct_answer: "Has pure virtual function" },
            { question: "Function overloading?", options: ["Same name, diff params", "Same name, same params", "Diff name, same params", "Virtual function"], correct_answer: "Same name, diff params" },
            { question: "Compile-time polymorphism?", options: ["Overloading", "Overriding", "Virtual", "Abstract"], correct_answer: "Overloading" },
            { question: "Runtime polymorphism?", options: ["Overriding", "Overloading", "Templates", "Macros"], correct_answer: "Overriding" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Friend function?", options: ["Accesses private members", "Is a member function", "Is inherited", "Is static"], correct_answer: "Accesses private members" },
            { question: "Static member?", options: ["Shared by all objects", "Unique per object", "Private always", "Const always"], correct_answer: "Shared by all objects" },
            { question: "Copy constructor takes?", options: ["Reference to same class", "Pointer to same class", "Value of same class", "No parameters"], correct_answer: "Reference to same class" },
            { question: "Operator << overloaded for?", options: ["Stream output", "Left shift only", "Comparison", "Assignment"], correct_answer: "Stream output" },
            { question: "vtable is used for?", options: ["Dynamic dispatch", "Static dispatch", "Memory allocation", "Garbage collection"], correct_answer: "Dynamic dispatch" }
          ]
        }
      ]
    },
    {
      topicNumber: 3,
      topicName: "03. Memory & Pointers",
      topicKey: "memory",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Allocate on heap?", options: ["new", "malloc", "alloc", "create"], correct_answer: "new" },
            { question: "Deallocate heap?", options: ["delete", "free()", "remove", "clear"], correct_answer: "delete" },
            { question: "Pointer stores?", options: ["Memory address", "Value", "String", "Boolean"], correct_answer: "Memory address" },
            { question: "Dereference operator?", options: ["*", "&", "->", "."], correct_answer: "*" },
            { question: "Address-of operator?", options: ["&", "*", "->", "@"], correct_answer: "&" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "int* p; *p = 5; is?", options: ["Dangerous - uninitialized", "Correct", "Syntax error", "Compile error"], correct_answer: "Dangerous - uninitialized" },
            { question: "delete[] used for?", options: ["Arrays", "Single objects", "Pointers only", "References"], correct_answer: "Arrays" },
            { question: "Stack memory is?", options: ["Automatic", "Manual", "Dynamic", "Persistent"], correct_answer: "Automatic" },
            { question: "Memory leak occurs when?", options: ["Allocated but not freed", "Freed twice", "Stack overflow", "Null dereference"], correct_answer: "Allocated but not freed" },
            { question: "Dangling pointer?", options: ["Points to freed memory", "Points to null", "Uninitialized pointer", "Const pointer"], correct_answer: "Points to freed memory" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "unique_ptr allows?", options: ["Single ownership", "Shared ownership", "Weak ownership", "No ownership"], correct_answer: "Single ownership" },
            { question: "shared_ptr uses?", options: ["Reference counting", "Single ownership", "Raw pointer", "Stack allocation"], correct_answer: "Reference counting" },
            { question: "weak_ptr purpose?", options: ["Break circular refs", "Strong ownership", "Replace unique_ptr", "Allocate heap"], correct_answer: "Break circular refs" },
            { question: "std::make_unique header?", options: ["<memory>", "<utility>", "<smart>", "<ptr>"], correct_answer: "<memory>" },
            { question: "RAII stands for?", options: ["Resource Acquisition Is Initialization", "Runtime Allocation In Instance", "Reference And Interface Init", "None"], correct_answer: "Resource Acquisition Is Initialization" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Pointer to pointer?", options: ["int **pp;", "int *pp;", "int pp**;", "ptr<ptr> pp;"], correct_answer: "int **pp;" },
            { question: "Array name is?", options: ["Pointer to first element", "Pointer to last element", "Value type", "Reference"], correct_answer: "Pointer to first element" },
            { question: "Void pointer?", options: ["Generic pointer type", "Null pointer", "Function pointer", "Const pointer"], correct_answer: "Generic pointer type" },
            { question: "Const pointer?", options: ["Address can't change", "Value can't change", "Both fixed", "Neither fixed"], correct_answer: "Address can't change" },
            { question: "Pointer to const?", options: ["Value can't change", "Address can't change", "Both fixed", "Neither fixed"], correct_answer: "Value can't change" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Stack overflow caused by?", options: ["Infinite recursion", "Memory leak", "Null pointer", "Dangling pointer"], correct_answer: "Infinite recursion" },
            { question: "Heap fragmentation?", options: ["Non-contiguous free blocks", "Stack overflow", "Null dereference", "Double free"], correct_answer: "Non-contiguous free blocks" },
            { question: "Double free is?", options: ["Deleting same memory twice", "Allocating twice", "Two pointers to same", "None"], correct_answer: "Deleting same memory twice" },
            { question: "Memory pool purpose?", options: ["Faster allocation", "Garbage collection", "Smart pointers", "Stack management"], correct_answer: "Faster allocation" },
            { question: "Placement new?", options: ["Constructs at given address", "Allocates extra memory", "Replaces delete", "Initializes stack"], correct_answer: "Constructs at given address" }
          ]
        }
      ]
    },
    {
      topicNumber: 4,
      topicName: "04. STL & Templates",
      topicKey: "stl",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "STL stands for?", options: ["Standard Template Library", "Static Type Library", "String Template List", "None"], correct_answer: "Standard Template Library" },
            { question: "vector push_back()?", options: ["Adds to end", "Adds to front", "Removes from end", "Removes from front"], correct_answer: "Adds to end" },
            { question: "Access vector element?", options: ["v[i] or v.at(i)", "v.get(i)", "v->i", "v.item(i)"], correct_answer: "v[i] or v.at(i)" },
            { question: "vector size()?", options: ["Number of elements", "Capacity", "Max size", "Byte size"], correct_answer: "Number of elements" },
            { question: "Vector header?", options: ["<vector>", "<array>", "<list>", "<stl>"], correct_answer: "<vector>" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "std::map stores?", options: ["Key-value pairs", "Values only", "Keys only", "Arrays"], correct_answer: "Key-value pairs" },
            { question: "map is sorted by?", options: ["Key", "Value", "Insertion order", "Random"], correct_answer: "Key" },
            { question: "unordered_map uses?", options: ["Hash table", "Binary tree", "Linked list", "Array"], correct_answer: "Hash table" },
            { question: "std::set contains?", options: ["Unique elements", "Duplicate elements", "Key-value pairs", "Ordered pairs"], correct_answer: "Unique elements" },
            { question: "stack top()?", options: ["Returns top element", "Removes top", "Adds element", "Returns size"], correct_answer: "Returns top element" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Template function syntax?", options: ["template<typename T>", "template<T>", "generic<T>", "type<T>"], correct_answer: "template<typename T>" },
            { question: "Template class purpose?", options: ["Generic data structures", "OOP only", "Pointer management", "Memory allocation"], correct_answer: "Generic data structures" },
            { question: "std::sort header?", options: ["<algorithm>", "<sort>", "<utility>", "<vector>"], correct_answer: "<algorithm>" },
            { question: "std::find returns?", options: ["Iterator to element", "Index", "Pointer", "Boolean"], correct_answer: "Iterator to element" },
            { question: "Iterator begin()?", options: ["First element", "Last element", "End marker", "Middle element"], correct_answer: "First element" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "std::pair holds?", options: ["Two values", "One value", "Three values", "Key only"], correct_answer: "Two values" },
            { question: "make_pair syntax?", options: ["make_pair(a,b)", "pair(a,b)", "new pair(a,b)", "pair::make(a,b)"], correct_answer: "make_pair(a,b)" },
            { question: "queue is?", options: ["FIFO", "LIFO", "Random access", "Sorted"], correct_answer: "FIFO" },
            { question: "priority_queue top?", options: ["Largest element", "Smallest element", "First inserted", "Last inserted"], correct_answer: "Largest element" },
            { question: "deque supports?", options: ["Front and back insert", "Back insert only", "Front insert only", "Random insert only"], correct_answer: "Front and back insert" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "std::transform?", options: ["Applies function to range", "Sorts range", "Copies range", "Filters range"], correct_answer: "Applies function to range" },
            { question: "std::accumulate?", options: ["Sums a range", "Sorts a range", "Finds max", "Counts elements"], correct_answer: "Sums a range" },
            { question: "Variadic template?", options: ["Variable number of types", "Variable size array", "Template with one type", "None"], correct_answer: "Variable number of types" },
            { question: "Template specialization?", options: ["Custom behavior for type", "Generic behavior", "Overloading", "Inheritance"], correct_answer: "Custom behavior for type" },
            { question: "SFINAE stands for?", options: ["Substitution Failure Is Not An Error", "Static Function In No Action Error", "None", "Standard Function In New API"], correct_answer: "Substitution Failure Is Not An Error" }
          ]
        }
      ]
    },
    {
      topicNumber: 5,
      topicName: "05. Advanced C++",
      topicKey: "advanced",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Exception handling keyword?", options: ["try/catch/throw", "try/except", "error/catch", "handle/catch"], correct_answer: "try/catch/throw" },
            { question: "throw keyword?", options: ["Raises exception", "Catches exception", "Handles exception", "Ignores exception"], correct_answer: "Raises exception" },
            { question: "catch(...) catches?", options: ["All exceptions", "Only integers", "Only strings", "Only runtime errors"], correct_answer: "All exceptions" },
            { question: "std::exception header?", options: ["<stdexcept>", "<exception.h>", "<error>", "<except>"], correct_answer: "<stdexcept>" },
            { question: "noexcept keyword?", options: ["Function won't throw", "Function always throws", "Disables exceptions", "Catches exceptions"], correct_answer: "Function won't throw" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Multithreading header?", options: ["<thread>", "<mutex>", "<async>", "<parallel>"], correct_answer: "<thread>" },
            { question: "std::mutex purpose?", options: ["Prevent race conditions", "Create threads", "Sleep threads", "Join threads"], correct_answer: "Prevent race conditions" },
            { question: "std::async returns?", options: ["std::future", "std::thread", "std::promise", "std::task"], correct_answer: "std::future" },
            { question: "Race condition occurs?", options: ["Concurrent unsynchronized access", "Single thread access", "Mutex locked access", "Atomic access"], correct_answer: "Concurrent unsynchronized access" },
            { question: "atomic<int> is?", options: ["Thread-safe integer", "Fast integer", "Const integer", "Pointer to int"], correct_answer: "Thread-safe integer" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "File input header?", options: ["<fstream>", "<file.h>", "<io>", "<fileio>"], correct_answer: "<fstream>" },
            { question: "ofstream is?", options: ["Output file stream", "Input file stream", "Both", "Binary stream"], correct_answer: "Output file stream" },
            { question: "Open file mode for append?", options: ["ios::app", "ios::out", "ios::in", "ios::trunc"], correct_answer: "ios::app" },
            { question: "getline() reads?", options: ["Whole line", "One word", "One character", "One integer"], correct_answer: "Whole line" },
            { question: "file.close()?", options: ["Closes file stream", "Deletes file", "Flushes only", "Opens file"], correct_answer: "Closes file stream" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "C++11 introduced?", options: ["auto, lambda, smart ptrs", "Templates only", "STL only", "Namespaces only"], correct_answer: "auto, lambda, smart ptrs" },
            { question: "constexpr means?", options: ["Compile-time constant", "Runtime constant", "Dynamic value", "Static variable"], correct_answer: "Compile-time constant" },
            { question: "std::optional holds?", options: ["Value or nothing", "Two values", "Error or value", "Pointer or null"], correct_answer: "Value or nothing" },
            { question: "Structured bindings (C++17)?", options: ["auto [a,b]=pair;", "pair.first, pair.second", "get<0>(pair)", "None"], correct_answer: "auto [a,b]=pair;" },
            { question: "std::variant holds?", options: ["One of several types", "All types at once", "Only primitives", "Only classes"], correct_answer: "One of several types" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Perfect forwarding uses?", options: ["std::forward", "std::move", "std::copy", "std::pass"], correct_answer: "std::forward" },
            { question: "Rvalue reference syntax?", options: ["int&&", "int&", "int*", "int**"], correct_answer: "int&&" },
            { question: "Move constructor purpose?", options: ["Transfer resources", "Copy resources", "Delete resources", "Share resources"], correct_answer: "Transfer resources" },
            { question: "CRTP stands for?", options: ["Curiously Recurring Template Pattern", "Const Reference Template Pattern", "None", "Class Runtime Template Protocol"], correct_answer: "Curiously Recurring Template Pattern" },
            { question: "Metaprogramming is?", options: ["Code that generates code", "Runtime code", "Debugger code", "OS code"], correct_answer: "Code that generates code" }
          ]
        }
      ]
    }
  ]
};