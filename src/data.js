import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'C#',
    description:
      'An object-oriented language that offers features such as type safety, garbage collection etc, particularly popular for developing applications on the .NET framework',
  },
  {
    image: jsxImg,
    title: 'React',
    description:
      'Allows developers to create reusable UI components and efficiently manage state changes, resulting in fast and dynamic web applications',
  },
  {
    image: propsImg,
    title: 'Javascript',
    description:
      'Renowned for its versatility, supporting both front-end and back-end development, and is essential for building modern web applications.',
  },
  {
    image: stateImg,
    title: 'HTML & CSS',
    description:
      'HTML is the standard markup language for creating web pages, defining the structure and content of a webpage ,CSS is a styling language used to enhance the presentation of HTML elements',
  },
];

export const EXAMPLES = {
  Csharp: {
    title: 'C#',
    description:
      'C# is a versatile and powerful programming language developed by Microsoft. It is widely used for building various types of applications, including desktop, web, and mobile applications, as well as games and enterprise software. C# is known for its simplicity, expressiveness, and robustness, making it a popular choice among developers.',
    code: `
    using System;
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }`,
  },
  React: {
    title: 'React',
    description:
      'React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components that efficiently manage the state of an application, resulting in fast and interactive web applications.',
    code: `
    import React from 'react';
    class HelloWorld extends React.Component {
      render() {
        return (
          <div>
            <h1>Hello, World!</h1>
          </div>
        );
      }
    }
    export default HelloWorld;`,
  },
  Javascript: {
    title: 'Javascript',
    description:
      'JavaScript is a versatile programming language primarily used for web development, enabling interactive and dynamic content creation on websites. It is renowned for its versatility, supporting both front-end and back-end development, and is essential for building modern web applications.',
    code: `
    const heading = document.getElementById('main-heading');
    const button = document.querySelector('.btn');
    button.addEventListener('click', function() {
        heading.style.color = 'blue';
        heading.textContent = 'Button Clicked!';
    });
    heading.style.fontSize = '24px';`,
  },
  HTMLandCSS: {
    title: 'HTML&CSS',
    description:
      'HTML (Hypertext Markup Language) is the standard markup language used to create the structure and content of web pages. It consists of a series of elements (tags) that define the different parts of a webpage, such as headings, paragraphs, images, links, forms, and more. HTML documents are interpreted by web browsers to display the content of a webpage to users.CSS (Cascading Style Sheets) is a styling language used to enhance the presentation and visual appearance of HTML elements on a webpage. With CSS, developers can control various aspects of the layout, typography, colors, spacing, and other design properties.',
    code: `
    <head>
    <style>
        /* CSS styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to My Website</h1>
        <p>This is a simple example of HTML with embedded CSS styling.</p>
        <p>You can customize the appearance of HTML elements using CSS rules.</p>
    </div>
</body>
</html>`,
  },
};