module.exports = {
  language: "C",
  topics: [
    {
      topicNumber: 1,
      topicName: "01. Basics",
      topicKey: "basics",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "C is?", options: ["Language", "OS", "Browser", "Compiler"], correct_answer: "Language" },
            { question: "Statement ends with?", options: [";", ".", ":", ","], correct_answer: ";" },
            { question: "Input function?", options: ["scanf", "cin", "print", "read"], correct_answer: "scanf" },
            { question: "Output function?", options: ["printf", "cout", "print", "show"], correct_answer: "printf" },
            { question: "C is?", options: ["Procedural", "OOP", "Both", "None"], correct_answer: "Procedural" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Header for printf?", options: ["stdio.h", "math.h", "string.h", "stdlib.h"], correct_answer: "stdio.h" },
            { question: "Integer type?", options: ["int", "float", "char", "double"], correct_answer: "int" },
            { question: "Float stores?", options: ["decimal", "char", "int", "string"], correct_answer: "decimal" },
            { question: "Assignment operator?", options: ["=", "==", "+=", "!="], correct_answer: "=" },
            { question: "Invalid name?", options: ["2var", "var2", "_var", "var_"], correct_answer: "2var" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "5/2=?", options: ["2", "2.5", "3", "Error"], correct_answer: "2" },
            { question: "sizeof(char)?", options: ["1", "2", "4", "8"], correct_answer: "1" },
            { question: "Comparison operator?", options: ["==", "=", "<=", "!="], correct_answer: "==" },
            { question: "Exit loop?", options: ["break", "stop", "exit", "return"], correct_answer: "break" },
            { question: "Loop at least once?", options: ["do-while", "for", "while", "none"], correct_answer: "do-while" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "x=5; printf(\"%d\", x++);", options: ["5", "6", "Error", "None"], correct_answer: "5" },
            { question: "NULL pointer?", options: ["no address", "0 value", "variable", "error"], correct_answer: "no address" },
            { question: "Pointer syntax?", options: ["int *p;", "int p*;", "*int p;", "p int*"], correct_answer: "int *p;" },
            { question: "++i vs i++?", options: ["prefix faster", "postfix faster", "same", "none"], correct_answer: "prefix faster" },
            { question: "Memory alloc?", options: ["malloc", "new", "alloc", "create"], correct_answer: "malloc" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Dangling pointer?", options: ["freed memory", "null", "constant", "array"], correct_answer: "freed memory" },
            { question: "Heap memory?", options: ["dynamic", "static", "stack", "register"], correct_answer: "dynamic" },
            { question: "Free memory?", options: ["free()", "delete", "remove", "clear"], correct_answer: "free()" },
            { question: "Recursion?", options: ["self call", "loop", "pointer", "array"], correct_answer: "self call" },
            { question: "Function pointer?", options: ["address", "value", "array", "loop"], correct_answer: "address" }
          ]
        }
      ]
    },
    {
      topicNumber: 2,
      topicName: "02. Control Flow",
      topicKey: "control-flow",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Which keyword starts a conditional block?", options: ["when", "if", "check", "case"], correct_answer: "if" },
            { question: "What is the correct syntax for if-else?", options: ["if(x>0) {} else {}", "if x>0 then {} else {}", "if(x>0): else:", "when(x>0) {}"], correct_answer: "if(x>0) {} else {}" },
            { question: "Which loop checks the condition at the end?", options: ["for", "while", "do-while", "foreach"], correct_answer: "do-while" },
            { question: "What does break do inside a loop?", options: ["Skips one iteration", "Exits the loop", "Restarts the loop", "Pauses execution"], correct_answer: "Exits the loop" },
            { question: "What does continue do inside a loop?", options: ["Exits the loop", "Ends the program", "Skips current iteration", "Breaks the switch"], correct_answer: "Skips current iteration" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "How many times does this loop run: for(i=0;i<5;i++)?", options: ["4", "5", "6", "0"], correct_answer: "5" },
            { question: "Which keyword is used in switch-case?", options: ["option", "case", "when", "select"], correct_answer: "case" },
            { question: "What happens if there's no break in a switch case?", options: ["Error", "Fall-through to next case", "Loop restarts", "Nothing"], correct_answer: "Fall-through to next case" },
            { question: "What is the correct while loop syntax?", options: ["while x<5 {}", "while(x<5) {}", "loop(x<5) {}", "repeat(x<5) {}"], correct_answer: "while(x<5) {}" },
            { question: "Which is used as default in switch?", options: ["else", "otherwise", "default", "fallback"], correct_answer: "default" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "What is a nested loop?", options: ["A loop inside a function", "A loop inside another loop", "A loop with two conditions", "A recursive loop"], correct_answer: "A loop inside another loop" },
            { question: "What is the ternary operator syntax?", options: ["a ? b : c", "a : b ? c", "if a then b else c", "a ?? b : c"], correct_answer: "a ? b : c" },
            { question: "What does goto do in C?", options: ["Exits program", "Jumps to a label", "Calls a function", "Skips a line"], correct_answer: "Jumps to a label" },
            { question: "Which comparison operator checks equality?", options: ["=", "===", "==", ":="], correct_answer: "==" },
            { question: "What is output of: int x=10; if(x>5) printf(\"Yes\");?", options: ["No", "Yes", "Error", "Nothing"], correct_answer: "Yes" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "What is an infinite loop?", options: ["A loop that runs 1000 times", "A loop that never ends", "A loop with no body", "A loop with goto"], correct_answer: "A loop that never ends" },
            { question: "Which creates an infinite loop?", options: ["for(;;)", "while(1)", "do{}while(1)", "All of the above"], correct_answer: "All of the above" },
            { question: "What is the NOT operator in C?", options: ["~", "!", "NOT", "^"], correct_answer: "!" },
            { question: "What is output: printf(\"%d\", 10>5)?", options: ["10", "5", "1", "0"], correct_answer: "1" },
            { question: "Which operator is logical OR?", options: ["|", "||", "OR", "or"], correct_answer: "||" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "What does return 0 indicate in main()?", options: ["Error", "Successful execution", "Loop end", "Memory free"], correct_answer: "Successful execution" },
            { question: "Can switch work with char in C?", options: ["No", "Yes", "Only with ASCII", "Only in C99"], correct_answer: "Yes" },
            { question: "Which loop is best when number of iterations is known?", options: ["while", "do-while", "for", "goto"], correct_answer: "for" },
            { question: "What is the output: for(i=0;i<3;i++) printf(\"%d\",i);?", options: ["123", "012", "0 1 2", "1 2 3"], correct_answer: "012" },
            { question: "Can if-else be replaced by ternary?", options: ["Never", "Always", "Only for simple conditions", "Only in C++"], correct_answer: "Only for simple conditions" }
          ]
        }
      ]
    },
    {
      topicNumber: 3,
      topicName: "03. Functions",
      topicKey: "functions",
      levels: [
        { levelNumber: 1, questions: [
          { question: "What keyword is used to define a function?", options: ["func", "def", "function", "return type + name"], correct_answer: "return type + name" },
          { question: "What is a function prototype?", options: ["Function definition", "Function declaration without body", "Function call", "Recursive function"], correct_answer: "Function declaration without body" },
          { question: "What does void mean as a return type?", options: ["Returns 0", "Returns null", "Returns nothing", "Returns string"], correct_answer: "Returns nothing" },
          { question: "How do you call a function named add()?", options: ["call add()", "add()", "run add()", "execute add()"], correct_answer: "add()" },
          { question: "What are parameters?", options: ["Return values", "Variables passed to a function", "Global variables", "Local constants"], correct_answer: "Variables passed to a function" }
        ]},
        { levelNumber: 2, questions: [
          { question: "What is recursion?", options: ["A loop", "A function calling itself", "A nested function", "A pointer function"], correct_answer: "A function calling itself" },
          { question: "What is the base case in recursion?", options: ["The first call", "The condition that stops recursion", "The return value", "The parameter"], correct_answer: "The condition that stops recursion" },
          { question: "What is a local variable?", options: ["Declared outside all functions", "Declared inside a function", "Declared in header file", "Global variable"], correct_answer: "Declared inside a function" },
          { question: "What is a global variable?", options: ["Declared inside main()", "Declared outside all functions", "Declared in a loop", "Declared with const"], correct_answer: "Declared outside all functions" },
          { question: "Can a function return multiple values directly in C?", options: ["Yes", "No", "Only with arrays", "Only with pointers"], correct_answer: "No" }
        ]},
        { levelNumber: 3, questions: [
          { question: "What is call by value?", options: ["Passing address", "Passing a copy of variable", "Passing reference", "Passing pointer"], correct_answer: "Passing a copy of variable" },
          { question: "What is call by reference?", options: ["Passing a copy", "Passing the address of variable", "Passing by name", "Passing by index"], correct_answer: "Passing the address of variable" },
          { question: "What header is needed for math functions?", options: ["stdio.h", "stdlib.h", "math.h", "string.h"], correct_answer: "math.h" },
          { question: "What does sqrt() do?", options: ["Square a number", "Find square root", "Round a number", "Find modulus"], correct_answer: "Find square root" },
          { question: "What is the return type of strlen()?", options: ["int", "char", "size_t", "float"], correct_answer: "size_t" }
        ]},
        { levelNumber: 4, questions: [
          { question: "What is a static variable in a function?", options: ["Destroyed after function ends", "Retains value between calls", "Global variable", "Constant variable"], correct_answer: "Retains value between calls" },
          { question: "Can functions be overloaded in C?", options: ["Yes", "No", "Only with macros", "Only in C99"], correct_answer: "No" },
          { question: "What is an inline function?", options: ["A recursive function", "A function expanded at call site", "A static function", "A void function"], correct_answer: "A function expanded at call site" },
          { question: "Which storage class makes a variable persist?", options: ["auto", "register", "static", "extern"], correct_answer: "static" },
          { question: "What does extern do?", options: ["Creates new variable", "Declares variable defined elsewhere", "Deletes variable", "Makes variable constant"], correct_answer: "Declares variable defined elsewhere" }
        ]},
        { levelNumber: 5, questions: [
          { question: "What is a function pointer?", options: ["A pointer to a variable", "A pointer that stores function address", "A recursive pointer", "A null pointer"], correct_answer: "A pointer that stores function address" },
          { question: "What is argc in main(int argc, char *argv[])?", options: ["Argument string", "Number of command-line arguments", "Array of arguments", "Argument character"], correct_answer: "Number of command-line arguments" },
          { question: "What is argv in main()?", options: ["Argument count", "Array of argument strings", "Argument value", "Argument void"], correct_answer: "Array of argument strings" },
          { question: "Which function exits the program immediately?", options: ["return()", "break()", "exit()", "quit()"], correct_answer: "exit()" },
          { question: "What header is needed for exit()?", options: ["stdio.h", "stdlib.h", "string.h", "math.h"], correct_answer: "stdlib.h" }
        ]}
      ]
    },
    {
      topicNumber: 4,
      topicName: "04. Arrays & Pointers",
      topicKey: "arrays-pointers",
      levels: [
        { levelNumber: 1, questions: [
          { question: "How do you declare an int array of size 5?", options: ["int a[5];", "array int a(5);", "int a = [5];", "declare a[5];"], correct_answer: "int a[5];" },
          { question: "What is the index of the first element in an array?", options: ["1", "-1", "0", "Depends"], correct_answer: "0" },
          { question: "What is a pointer?", options: ["A variable that stores a value", "A variable that stores an address", "A function parameter", "A constant"], correct_answer: "A variable that stores an address" },
          { question: "Which operator gives address of a variable?", options: ["*", "&", "->", "#"], correct_answer: "&" },
          { question: "Which operator dereferences a pointer?", options: ["&", "->", "*", "#"], correct_answer: "*" }
        ]},
        { levelNumber: 2, questions: [
          { question: "What is a NULL pointer?", options: ["A pointer to 0", "A pointer pointing to nothing", "A void pointer", "A dangling pointer"], correct_answer: "A pointer pointing to nothing" },
          { question: "What is pointer arithmetic?", options: ["Adding two pointers", "Moving pointer by data type size", "Multiplying addresses", "Comparing strings"], correct_answer: "Moving pointer by data type size" },
          { question: "What does int *p = &x mean?", options: ["p stores value of x", "p stores address of x", "p equals x", "p is null"], correct_answer: "p stores address of x" },
          { question: "How do you access 3rd element of array a?", options: ["a[3]", "a[2]", "a(3)", "a.3"], correct_answer: "a[2]" },
          { question: "What is a 2D array?", options: ["Array of pointers", "Array of arrays", "Double pointer", "Matrix pointer"], correct_answer: "Array of arrays" }
        ]},
        { levelNumber: 3, questions: [
          { question: "What is a dangling pointer?", options: ["NULL pointer", "Pointer to freed memory", "Wild pointer", "Void pointer"], correct_answer: "Pointer to freed memory" },
          { question: "What is a void pointer?", options: ["NULL pointer", "Pointer with no specific type", "Pointer to void function", "Empty pointer"], correct_answer: "Pointer with no specific type" },
          { question: "Which function allocates memory dynamically?", options: ["alloc()", "malloc()", "new()", "memalloc()"], correct_answer: "malloc()" },
          { question: "Which function frees allocated memory?", options: ["delete()", "remove()", "free()", "dealloc()"], correct_answer: "free()" },
          { question: "What header is needed for malloc()?", options: ["stdio.h", "string.h", "stdlib.h", "memory.h"], correct_answer: "stdlib.h" }
        ]},
        { levelNumber: 4, questions: [
          { question: "What does calloc() do differently than malloc()?", options: ["Allocates less memory", "Initializes memory to zero", "Returns void", "Frees memory"], correct_answer: "Initializes memory to zero" },
          { question: "What does realloc() do?", options: ["Frees memory", "Resizes allocated memory", "Copies memory", "Clears memory"], correct_answer: "Resizes allocated memory" },
          { question: "What is a pointer to pointer?", options: ["A double variable", "A pointer storing address of another pointer", "A 2D array", "A function pointer"], correct_answer: "A pointer storing address of another pointer" },
          { question: "How is a string stored in C?", options: ["As int array", "As char array ending with \\0", "As pointer only", "As linked list"], correct_answer: "As char array ending with \\0" },
          { question: "What does strcpy() do?", options: ["Compares strings", "Copies one string to another", "Finds string length", "Concatenates strings"], correct_answer: "Copies one string to another" }
        ]},
        { levelNumber: 5, questions: [
          { question: "What does strcat() do?", options: ["Copies string", "Compares strings", "Concatenates two strings", "Finds substring"], correct_answer: "Concatenates two strings" },
          { question: "What does strcmp() return when strings are equal?", options: ["1", "-1", "0", "true"], correct_answer: "0" },
          { question: "What is strlen(\"hello\")?", options: ["6", "5", "4", "0"], correct_answer: "5" },
          { question: "Which header is needed for string functions?", options: ["stdio.h", "stdlib.h", "string.h", "ctype.h"], correct_answer: "string.h" },
          { question: "What does *(a+i) equivalent to?", options: ["a+i", "a[i]", "&a[i]", "a[i+1]"], correct_answer: "a[i]" }
        ]}
      ]
    },
    {
      topicNumber: 5,
      topicName: "05. Structures & Files",
      topicKey: "structures-files",
      levels: [
        { levelNumber: 1, questions: [
          { question: "What keyword is used to define a structure?", options: ["class", "struct", "typedef", "record"], correct_answer: "struct" },
          { question: "How do you access a struct member?", options: ["->", "::", ".", "#"], correct_answer: "." },
          { question: "How do you access a struct member via pointer?", options: [".", "::", "->", "*"], correct_answer: "->" },
          { question: "What is typedef used for?", options: ["Define new type", "Create alias for a type", "Both A and B", "Declare variable"], correct_answer: "Create alias for a type" },
          { question: "What is a union in C?", options: ["Same as struct", "Members share same memory", "Array of structs", "Pointer to struct"], correct_answer: "Members share same memory" }
        ]},
        { levelNumber: 2, questions: [
          { question: "Which function opens a file in C?", options: ["open()", "fopen()", "fileopen()", "read()"], correct_answer: "fopen()" },
          { question: "Which mode opens a file for reading?", options: ["w", "a", "r", "rw"], correct_answer: "r" },
          { question: "Which function closes a file?", options: ["close()", "fclose()", "end()", "fend()"], correct_answer: "fclose()" },
          { question: "Which function writes to a file?", options: ["fwrite()", "fprintf()", "fputs()", "All of the above"], correct_answer: "All of the above" },
          { question: "Which function reads from a file?", options: ["fread()", "fscanf()", "fgets()", "All of the above"], correct_answer: "All of the above" }
        ]},
        { levelNumber: 3, questions: [
          { question: "What does feof() check?", options: ["File error", "End of file", "File open status", "File size"], correct_answer: "End of file" },
          { question: "What does rewind() do?", options: ["Closes file", "Moves pointer to beginning", "Deletes file", "Copies file"], correct_answer: "Moves pointer to beginning" },
          { question: "Which mode opens file for appending?", options: ["r", "w", "a", "x"], correct_answer: "a" },
          { question: "What is a binary file mode?", options: ["rb", "b", "bin", "binary"], correct_answer: "rb" },
          { question: "What does fseek() do?", options: ["Reads file", "Moves file pointer to specific position", "Closes file", "Opens file"], correct_answer: "Moves file pointer to specific position" }
        ]},
        { levelNumber: 4, questions: [
          { question: "What is an enum in C?", options: ["Array of strings", "Set of named integer constants", "Pointer type", "Function type"], correct_answer: "Set of named integer constants" },
          { question: "What is the default starting value of enum?", options: ["1", "-1", "0", "Undefined"], correct_answer: "0" },
          { question: "What is a macro in C?", options: ["A function", "A preprocessor defined constant/code", "A variable", "A pointer"], correct_answer: "A preprocessor defined constant/code" },
          { question: "Which directive defines a macro?", options: ["#include", "#define", "#pragma", "#ifdef"], correct_answer: "#define" },
          { question: "What does #include do?", options: ["Defines macro", "Includes header file", "Imports module", "Links library"], correct_answer: "Includes header file" }
        ]},
        { levelNumber: 5, questions: [
          { question: "What is a preprocessor directive?", options: ["A function call", "Instruction processed before compilation", "A loop type", "A data type"], correct_answer: "Instruction processed before compilation" },
          { question: "What does #ifdef check?", options: ["If a variable is defined", "If a macro is defined", "If a file exists", "If a function exists"], correct_answer: "If a macro is defined" },
          { question: "What is a bit field in a struct?", options: ["Array of bits", "Struct member with specified bit width", "Boolean variable", "Binary file"], correct_answer: "Struct member with specified bit width" },
          { question: "What is the difference between struct and union?", options: ["No difference", "Struct members have own memory, union share", "Union is faster", "Struct is for pointers only"], correct_answer: "Struct members have own memory, union share" },
          { question: "Which function deletes a file in C?", options: ["delete()", "remove()", "erase()", "fdelete()"], correct_answer: "remove()" }
        ]}
      ]
    }
  ]
};
