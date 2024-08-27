# Web Development Course

## Lesson 1: Introduction to Web Development

### Learning Objectives

By the end of this lesson, you will be able to:

-   Understand the fundamentals of web development.
-   Differentiate between HTML, CSS, and JavaScript.
-   Set up a basic web development environment.

### What is Web Development?

Web development is the process of creating websites or web applications that are accessible over the internet. It involves a combination of programming languages, design principles, and technical skills to build and maintain web-based projects. In this course, we will focus on three core technologies: HTML, CSS, and JavaScript.

### HTML (Hypertext Markup Language)

HTML is the backbone of web development. It provides the structure and content of a web page. HTML uses a markup language consisting of elements and tags to define the various parts of a web page, such as headings, paragraphs, images, links, and forms.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>My First Web Page</title>
    </head>
    <body>
        <h1>Welcome to Web Development</h1>
        <p>This is a paragraph of text.</p>
        <img src="image.jpg" alt="An image" />
        <a href="https://www.example.com">Visit Example.com</a>
    </body>
</html>
```

### CSS (Cascading Style Sheets)

CSS is used to enhance the presentation and layout of web pages. It allows you to apply styles, such as colors, fonts, spacing, and positioning, to HTML elements. By using CSS, you can make your web pages visually appealing and responsive to different screen sizes.

```css
/* CSS Example */
h1 {
    color: #333;
    font-size: 24px;
}

p {
    color: #666;
    line-height: 1.5;
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: #007bff;
}
```

### JavaScript

JavaScript is a programming language that adds interactivity and functionality to web pages. With JavaScript, you can create dynamic elements, handle user interactions, and make asynchronous requests to servers. It's a powerful tool for building web applications.

```javascript
// JavaScript Example
document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('myButton');
    button.addEventListener('click', function () {
        alert('Button clicked!');
    });
});
```

In the next lesson, we will dive into HTML and start building the structure of a web page. Get ready to create your first HTML document!
