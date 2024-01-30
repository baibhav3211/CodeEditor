const defaultText = {
    Javascript: `// JavaScript code here
console.log("Hello, world!");`,
    Python: `# Python code here
print("Hello, world!")`,
    Java: `// Java code here
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}`,
    C: `// C code here
#include <stdio.h>

int main() {
    printf("Hello, world!\\n");
    return 0;
}`,
    'C++': `// C++ code here
#include <iostream>

int main() {
    std::cout << "Hello, world!" << std::endl;
    return 0;
}`,
    'C#': `// C# code here
using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, world!");
    }
}`,
    Go: `// Go code here
package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}`,
    Ruby: `# Ruby code here
puts "Hello, world!"`,
};

export default defaultText;
