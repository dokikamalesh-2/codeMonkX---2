module.exports = {
  language: "Java",
  topics: [
    {
      topicNumber: 1,
      topicName: "01. Basics",
      topicKey: "basics",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Java is?", options: ["OOP language", "Procedural", "Scripting", "Assembly"], correct_answer: "OOP language" },
            { question: "Java creator?", options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"], correct_answer: "James Gosling" },
            { question: "Java runs on?", options: ["JVM", "OS directly", "Compiler", "BIOS"], correct_answer: "JVM" },
            { question: "Print statement?", options: ["System.out.println()", "printf()", "print()", "cout"], correct_answer: "System.out.println()" },
            { question: "File extension?", options: [".java", ".jv", ".j", ".class"], correct_answer: ".java" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "int size in Java?", options: ["32 bits", "16 bits", "64 bits", "8 bits"], correct_answer: "32 bits" },
            { question: "long size in Java?", options: ["64 bits", "32 bits", "16 bits", "128 bits"], correct_answer: "64 bits" },
            { question: "char in Java?", options: ["16-bit Unicode", "8-bit ASCII", "32-bit", "Variable size"], correct_answer: "16-bit Unicode" },
            { question: "boolean values?", options: ["true/false", "1/0", "yes/no", "TRUE/FALSE"], correct_answer: "true/false" },
            { question: "String is?", options: ["A class", "Primitive", "Keyword", "Interface"], correct_answer: "A class" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Integer.parseInt('5')?", options: ["5 as int", "5 as String", "Error", "5.0"], correct_answer: "5 as int" },
            { question: "Java is platform?", options: ["Independent", "Dependent", "Specific", "Native"], correct_answer: "Independent" },
            { question: "JDK vs JRE?", options: ["JDK includes JRE + tools", "Same thing", "JRE includes JDK", "JDK is runtime only"], correct_answer: "JDK includes JRE + tools" },
            { question: "byte range?", options: ["-128 to 127", "0 to 255", "-256 to 255", "-32768 to 32767"], correct_answer: "-128 to 127" },
            { question: "double vs float?", options: ["double is 64-bit", "float is 64-bit", "Same size", "double is 32-bit"], correct_answer: "double is 64-bit" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "String.length()?", options: ["Number of chars", "Byte size", "Word count", "Memory size"], correct_answer: "Number of chars" },
            { question: "String comparison?", options: [".equals()", "==", "compare()", "is()"], correct_answer: ".equals()" },
            { question: "String concatenation?", options: ["+ operator", "concat only", "append only", "join only"], correct_answer: "+ operator" },
            { question: "String is immutable?", options: ["Yes", "No", "Depends on JVM", "Only in Java 8+"], correct_answer: "Yes" },
            { question: "StringBuilder purpose?", options: ["Mutable string", "Immutable string", "String comparison", "String formatting"], correct_answer: "Mutable string" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "var keyword (Java 10+)?", options: ["Local type inference", "Global variable", "Variant type", "Virtual variable"], correct_answer: "Local type inference" },
            { question: "final variable?", options: ["Cannot be reassigned", "Cannot be accessed", "Static only", "Thread safe"], correct_answer: "Cannot be reassigned" },
            { question: "static variable?", options: ["Shared by all instances", "Unique per instance", "Constant always", "Private always"], correct_answer: "Shared by all instances" },
            { question: "Autoboxing is?", options: ["int to Integer auto", "Integer to int only", "Manual conversion", "Casting"], correct_answer: "int to Integer auto" },
            { question: "Unboxing is?", options: ["Integer to int auto", "int to Integer auto", "String to int", "Object to primitive"], correct_answer: "Integer to int auto" }
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
            { question: "Class keyword?", options: ["class", "Class", "object", "struct"], correct_answer: "class" },
            { question: "Constructor name?", options: ["Same as class", "init", "constructor", "new"], correct_answer: "Same as class" },
            { question: "new keyword?", options: ["Creates object", "Defines class", "Imports class", "Copies object"], correct_answer: "Creates object" },
            { question: "this keyword?", options: ["Current object", "Parent object", "Static object", "New object"], correct_answer: "Current object" },
            { question: "Access modifier for all?", options: ["public", "private", "protected", "default"], correct_answer: "public" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "private means?", options: ["Same class only", "Same package", "All classes", "Subclasses only"], correct_answer: "Same class only" },
            { question: "protected means?", options: ["Package + subclasses", "Package only", "All classes", "Class only"], correct_answer: "Package + subclasses" },
            { question: "Encapsulation?", options: ["Data hiding with getters/setters", "Inheritance", "Polymorphism", "Abstraction"], correct_answer: "Data hiding with getters/setters" },
            { question: "Getter method?", options: ["Returns field value", "Sets field value", "Deletes field", "Creates field"], correct_answer: "Returns field value" },
            { question: "Setter method?", options: ["Sets field value", "Returns field value", "Deletes field", "Creates field"], correct_answer: "Sets field value" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Inheritance keyword?", options: ["extends", "implements", "inherits", ":"], correct_answer: "extends" },
            { question: "Java supports?", options: ["Single inheritance", "Multiple inheritance", "Both", "Neither"], correct_answer: "Single inheritance" },
            { question: "super keyword?", options: ["Refers to parent class", "Refers to child class", "Creates object", "Defines class"], correct_answer: "Refers to parent class" },
            { question: "@Override annotation?", options: ["Marks overridden method", "Creates new method", "Hides method", "Deletes method"], correct_answer: "Marks overridden method" },
            { question: "Method overriding?", options: ["Redefine parent method", "Overload method", "Hide method", "Delete method"], correct_answer: "Redefine parent method" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "abstract class?", options: ["Cannot be instantiated", "Cannot be extended", "Cannot have methods", "Cannot be inherited"], correct_answer: "Cannot be instantiated" },
            { question: "interface keyword?", options: ["interface", "Interface", "abstract class", "trait"], correct_answer: "interface" },
            { question: "Class implements interface using?", options: ["implements", "extends", "uses", "inherits"], correct_answer: "implements" },
            { question: "Interface methods are by default?", options: ["abstract and public", "private", "protected", "static"], correct_answer: "abstract and public" },
            { question: "Polymorphism example?", options: ["Animal a = new Dog()", "int x = 5", "String s = 'hi'", "Object o = null"], correct_answer: "Animal a = new Dog()" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "instanceof checks?", options: ["Object type at runtime", "Variable type", "Method exists", "Interface implemented"], correct_answer: "Object type at runtime" },
            { question: "Casting (Dog) animal?", options: ["Downcasting", "Upcasting", "Autoboxing", "Unboxing"], correct_answer: "Downcasting" },
            { question: "Object class is?", options: ["Root of all classes", "Abstract class", "Interface", "Primitive"], correct_answer: "Root of all classes" },
            { question: "equals() and hashCode()?", options: ["Should be overridden together", "Override separately", "Never override", "Override hashCode only"], correct_answer: "Should be overridden together" },
            { question: "Functional interface?", options: ["Has one abstract method", "Has no methods", "Has only static", "Has multiple methods"], correct_answer: "Has one abstract method" }
          ]
        }
      ]
    },
    {
      topicNumber: 3,
      topicName: "03. Collections & Generics",
      topicKey: "collections",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "ArrayList vs Array?", options: ["ArrayList is dynamic", "Array is dynamic", "Same size flexibility", "ArrayList is faster always"], correct_answer: "ArrayList is dynamic" },
            { question: "Add to ArrayList?", options: ["list.add(x)", "list.push(x)", "list.insert(x)", "list.append(x)"], correct_answer: "list.add(x)" },
            { question: "ArrayList size?", options: ["list.size()", "list.length", "list.length()", "list.count()"], correct_answer: "list.size()" },
            { question: "Import ArrayList?", options: ["java.util.ArrayList", "java.lang.ArrayList", "java.io.ArrayList", "java.collection.ArrayList"], correct_answer: "java.util.ArrayList" },
            { question: "LinkedList vs ArrayList?", options: ["LinkedList faster insert", "ArrayList faster insert", "Same performance", "LinkedList uses less memory"], correct_answer: "LinkedList faster insert" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "HashMap stores?", options: ["Key-value pairs", "Unique values", "Ordered pairs", "Sorted pairs"], correct_answer: "Key-value pairs" },
            { question: "HashMap get(key)?", options: ["Returns value or null", "Throws exception", "Returns default", "Returns key"], correct_answer: "Returns value or null" },
            { question: "HashSet property?", options: ["No duplicates", "Allows duplicates", "Ordered", "Sorted"], correct_answer: "No duplicates" },
            { question: "TreeMap is?", options: ["Sorted by key", "Sorted by value", "Unsorted", "Hash-based"], correct_answer: "Sorted by key" },
            { question: "Iterator pattern?", options: ["Traverse collection", "Sort collection", "Filter collection", "Copy collection"], correct_answer: "Traverse collection" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Generic type syntax?", options: ["List<String>", "List(String)", "List[String]", "List{String}"], correct_answer: "List<String>" },
            { question: "Wildcard <?> means?", options: ["Unknown type", "Any number", "String type", "Object type"], correct_answer: "Unknown type" },
            { question: "Collections.sort()?", options: ["Sorts in natural order", "Reverse sort", "Random sort", "Stable sort only"], correct_answer: "Sorts in natural order" },
            { question: "Stack push/pop?", options: ["LIFO order", "FIFO order", "Random order", "Sorted order"], correct_answer: "LIFO order" },
            { question: "Queue add/remove?", options: ["FIFO order", "LIFO order", "Random order", "Sorted order"], correct_answer: "FIFO order" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "for-each loop syntax?", options: ["for(Type x : collection)", "for(x in collection)", "for each x in collection", "foreach(collection, x)"], correct_answer: "for(Type x : collection)" },
            { question: "Comparable interface?", options: ["compareTo() method", "equals() method", "compare() method", "sort() method"], correct_answer: "compareTo() method" },
            { question: "Comparator interface?", options: ["compare() method", "compareTo() method", "equals() method", "hashCode() method"], correct_answer: "compare() method" },
            { question: "List.of() creates?", options: ["Immutable list", "Mutable list", "Sorted list", "Empty list only"], correct_answer: "Immutable list" },
            { question: "Map.entry holds?", options: ["One key-value pair", "All pairs", "Only keys", "Only values"], correct_answer: "One key-value pair" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Stream API is in?", options: ["java.util.stream", "java.io.stream", "java.lang.stream", "java.collection.stream"], correct_answer: "java.util.stream" },
            { question: "stream().filter()?", options: ["Returns matching elements", "Maps elements", "Sorts elements", "Counts elements"], correct_answer: "Returns matching elements" },
            { question: "stream().map()?", options: ["Transforms elements", "Filters elements", "Collects elements", "Reduces elements"], correct_answer: "Transforms elements" },
            { question: "collect(Collectors.toList())?", options: ["Creates List from stream", "Creates Set", "Creates Map", "Creates array"], correct_answer: "Creates List from stream" },
            { question: "Optional.orElse()?", options: ["Returns value or default", "Throws exception", "Returns null", "Returns empty"], correct_answer: "Returns value or default" }
          ]
        }
      ]
    },
    {
      topicNumber: 4,
      topicName: "04. Exception Handling",
      topicKey: "exceptions",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Exception handling uses?", options: ["try/catch/finally", "if/else/error", "handle/catch/end", "try/except/finally"], correct_answer: "try/catch/finally" },
            { question: "catch block?", options: ["Handles exception", "Throws exception", "Ignores exception", "Logs exception"], correct_answer: "Handles exception" },
            { question: "finally block?", options: ["Always executes", "Only on error", "Only on success", "Optional always"], correct_answer: "Always executes" },
            { question: "throw keyword?", options: ["Raises exception", "Catches exception", "Creates exception class", "Handles exception"], correct_answer: "Raises exception" },
            { question: "throws in method signature?", options: ["Declares checked exception", "Handles exception", "Catches exception", "Ignores exception"], correct_answer: "Declares checked exception" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Checked vs unchecked?", options: ["Checked must be handled", "Unchecked must be handled", "Same thing", "Checked is runtime only"], correct_answer: "Checked must be handled" },
            { question: "RuntimeException is?", options: ["Unchecked", "Checked", "Error", "Neither"], correct_answer: "Unchecked" },
            { question: "IOException is?", options: ["Checked exception", "Unchecked exception", "Error", "Warning"], correct_answer: "Checked exception" },
            { question: "NullPointerException?", options: ["Accessing null object", "Out of memory", "Stack overflow", "Array out of bounds"], correct_answer: "Accessing null object" },
            { question: "ArrayIndexOutOfBoundsException?", options: ["Invalid array index", "Null array", "Empty array", "Oversized array"], correct_answer: "Invalid array index" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Custom exception?", options: ["Extend Exception class", "Implement Exception", "Use @Exception", "Declare exception"], correct_answer: "Extend Exception class" },
            { question: "Multi-catch syntax?", options: ["catch(A | B e)", "catch(A, B e)", "catch(A & B e)", "catch(A or B e)"], correct_answer: "catch(A | B e)" },
            { question: "try-with-resources?", options: ["Auto-closes resources", "Auto-catches exceptions", "Auto-throws exceptions", "Auto-retries"], correct_answer: "Auto-closes resources" },
            { question: "AutoCloseable interface?", options: ["close() method", "dispose() method", "free() method", "end() method"], correct_answer: "close() method" },
            { question: "Exception message?", options: ["e.getMessage()", "e.message", "e.getError()", "e.text()"], correct_answer: "e.getMessage()" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "StackOverflowError caused by?", options: ["Infinite recursion", "Memory leak", "Null pointer", "Array overflow"], correct_answer: "Infinite recursion" },
            { question: "OutOfMemoryError?", options: ["Heap exhausted", "Stack overflow", "Null pointer", "Division by zero"], correct_answer: "Heap exhausted" },
            { question: "Exception hierarchy root?", options: ["Throwable", "Exception", "Error", "Object"], correct_answer: "Throwable" },
            { question: "Error vs Exception?", options: ["Error is non-recoverable", "Exception is non-recoverable", "Same hierarchy", "Error is checked"], correct_answer: "Error is non-recoverable" },
            { question: "getCause()?", options: ["Returns wrapped exception", "Returns exception message", "Returns stack trace", "Returns class name"], correct_answer: "Returns wrapped exception" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "Exception chaining?", options: ["Wrap one in another", "Catch multiple", "Re-throw same", "Ignore and continue"], correct_answer: "Wrap one in another" },
            { question: "Rethrowing exception?", options: ["throw e in catch block", "throws in signature", "throw new Exception", "Re-catch same type"], correct_answer: "throw e in catch block" },
            { question: "Suppressed exceptions?", options: ["In try-with-resources", "In finally block", "In catch block", "In nested try"], correct_answer: "In try-with-resources" },
            { question: "Best practice for exceptions?", options: ["Catch specific types", "Catch Exception always", "Catch Throwable", "Use empty catch"], correct_answer: "Catch specific types" },
            { question: "Logging exceptions?", options: ["Log before rethrowing", "Log in finally", "Never log", "Log in constructor"], correct_answer: "Log before rethrowing" }
          ]
        }
      ]
    },
    {
      topicNumber: 5,
      topicName: "05. Advanced Java",
      topicKey: "advanced",
      levels: [
        {
          levelNumber: 1,
          questions: [
            { question: "Lambda syntax in Java?", options: ["(x) -> x+1", "lambda x: x+1", "[x] => x+1", "func(x){ x+1 }"], correct_answer: "(x) -> x+1" },
            { question: "Functional interface example?", options: ["Runnable", "ArrayList", "HashMap", "String"], correct_answer: "Runnable" },
            { question: "Method reference?", options: ["Class::method", "Class.method", "Class->method", "Class:method"], correct_answer: "Class::method" },
            { question: "Stream.of() creates?", options: ["Stream from values", "List from values", "Array from values", "Iterator"], correct_answer: "Stream from values" },
            { question: "Predicate<T> tests?", options: ["Boolean condition", "String condition", "Integer condition", "Object condition"], correct_answer: "Boolean condition" }
          ]
        },
        {
          levelNumber: 2,
          questions: [
            { question: "Thread creation?", options: ["extend Thread or implement Runnable", "extend Runnable", "implement Thread", "new Process()"], correct_answer: "extend Thread or implement Runnable" },
            { question: "synchronized keyword?", options: ["Prevents race conditions", "Creates thread", "Kills thread", "Pauses thread"], correct_answer: "Prevents race conditions" },
            { question: "Thread.sleep()?", options: ["Pauses execution", "Kills thread", "Creates thread", "Joins thread"], correct_answer: "Pauses execution" },
            { question: "ExecutorService?", options: ["Thread pool management", "Single thread runner", "Thread killer", "Process manager"], correct_answer: "Thread pool management" },
            { question: "volatile keyword?", options: ["Ensures visibility across threads", "Makes variable constant", "Synchronizes method", "Creates atomic variable"], correct_answer: "Ensures visibility across threads" }
          ]
        },
        {
          levelNumber: 3,
          questions: [
            { question: "Reflection API?", options: ["Inspect class at runtime", "Create classes", "Delete methods", "Copy objects"], correct_answer: "Inspect class at runtime" },
            { question: "Annotation syntax?", options: ["@AnnotationName", "#AnnotationName", "$AnnotationName", "<<AnnotationName>>"], correct_answer: "@AnnotationName" },
            { question: "enum in Java?", options: ["Fixed constants type", "Variable type", "Interface type", "Abstract type"], correct_answer: "Fixed constants type" },
            { question: "Record class (Java 16+)?", options: ["Immutable data class", "Mutable data class", "Abstract class", "Interface"], correct_answer: "Immutable data class" },
            { question: "Sealed class (Java 17+)?", options: ["Restricts subclasses", "Prevents inheritance", "Creates final class", "Hides class"], correct_answer: "Restricts subclasses" }
          ]
        },
        {
          levelNumber: 4,
          questions: [
            { question: "Java IO vs NIO?", options: ["NIO is non-blocking", "IO is non-blocking", "Same performance", "NIO is older"], correct_answer: "NIO is non-blocking" },
            { question: "Serialization?", options: ["Object to byte stream", "Byte stream to object", "Object to string", "String to object"], correct_answer: "Object to byte stream" },
            { question: "Serializable interface?", options: ["Marker interface", "Functional interface", "Abstract interface", "Generic interface"], correct_answer: "Marker interface" },
            { question: "JDBC is?", options: ["Java database connectivity", "Java data byte code", "Java debug console", "Java digital compiler"], correct_answer: "Java database connectivity" },
            { question: "Design pattern Singleton?", options: ["One instance only", "Many instances", "Abstract factory", "Observer"], correct_answer: "One instance only" }
          ]
        },
        {
          levelNumber: 5,
          questions: [
            { question: "CompletableFuture?", options: ["Async task handling", "Thread creation", "Synchronous call", "Exception wrapper"], correct_answer: "Async task handling" },
            { question: "Java modules (Java 9+)?", options: ["module-info.java", "module.java", "package-info.java", "imports.java"], correct_answer: "module-info.java" },
            { question: "Pattern matching instanceof?", options: ["if(x instanceof Dog d)", "if(x instanceof Dog)", "if(x is Dog d)", "if((Dog)x != null)"], correct_answer: "if(x instanceof Dog d)" },
            { question: "Text blocks (Java 15+)?", options: ["Triple quote strings \"\"\"", "Single quote strings", "@TextBlock annotation", "String.block()"], correct_answer: "Triple quote strings \"\"\"" },
            { question: "Virtual threads (Java 21)?", options: ["Lightweight threads", "Heavy OS threads", "Green threads renamed", "Coroutines"], correct_answer: "Lightweight threads" }
          ]
        }
      ]
    }
  ]
};