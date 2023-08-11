export const __prod__ = process.env.NODE_ENV === "production";

export const authenticationProvider = {
  GITHUB: "github",
};

export const githubGistUrl = "https://api.github.com";

export const dummySnippets = {
  data: [
    { 
      id:1,
      code: `print("Hello, World!")`,
      language: "javascript",
      tags: ["js", "javascript"],
    },

    {
      code: `<user>
        <id>1</id>
        <username>john_doe</username>
        <email>john@example.com</email>
    </user>
    
    <post>
        <id>1</id>
        <title>Sample Post</title>
        <content>Lorem ipsum dolor sit amet...</content>
    </post>`,
      language: "html",
      tags: ["js", "javascript"],
    },

    {
        id: 2,
      code: `public class HelloWorld {
                public static void main(String[] args) {
                    System.out.println("Hello, World!");
                }
            }`,
      language: "java",
      tags: ["js", "javascript"],
    },

    {
        id: 3,
      code: `#include <iostream>
        using namespace std;
        
        int main() {
            cout << "Hello, World!" << endl;
            return 0;
        }`,
      language: "cpp",
      tags: ["js", "javascript"],
    },

    {
        id: 4,
      code: `console.log("Hello, World!");`,
      language: "javascript",
      tags: ["js", "javascript"],
    },

    {
        id: 5,
      code: `puts "Hello, World!"`,
      language: "ruby",
      tags: ["js", "javascript"],
    },

    {
        id: 6,
      code: `using System;

                class Program {
                        static void Main() {
                        Console.WriteLine("Hello, World!");
                        }
                }`,
      language: "chsharp",
      tags: ["js", "javascript"],
    },

    {
        id: 7,
      code: `print("Hello, World!")`,
      language: "swift",
      tags: ["js", "javascript"],
    },
    {
        id: 8,
      code: `package main

                import "fmt"
                
                func main() {
                        fmt.Println("Hello, World!")
                }`,
      language: "go",
      tags: ["js", "javascript"],
    },
    {
        id: 9,
      code: `<?php
                echo "Hello, World!";
                ?>`,
      language: "php",
      tags: ["js", "javascript"],
    },
    {
        id: 10,
      code: `fn main() {
                println!("Hello, World!");
                }`,
      language: "kotlin",
      tags: ["js", "javascript"],
    },
  ],
};
