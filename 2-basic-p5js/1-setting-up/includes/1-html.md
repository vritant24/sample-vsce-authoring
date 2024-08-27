## Creating a basic webpage to hold our first p5.js sketch

p5.js is a framework to helping unlock your creative coding potential. p5.js focuses on making the entire browser your canvas for art and music.

This lesson will guide you through getting a basic p5.js sketch up and running as well as teaching you some of the basics of the p5.js framework.

## Creating a basic webpage and adding the p5.js library

Our p5.js sketch will be hosted inside of an HTML webpage that we can host and share with others online. You don't need to be an expert on HTML though, so don't worry, we just need enough to get started. Let's start out with the most basic HTML layout.

```html
<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
To give viewers a little bit of context about what is going on in this page we can add the following into the `body` section of the HTML. Everything in the `h2` section will show up as a title on the page, and the `p` section will show up as normal text.

```html
        <h2>My First p5.js sketch</h2>
        <p>Getting started with p5.js and creative coding.</p>
```

After adding that context we next need to tell our page where to find the p5.js framework that they will be using for this lesson. In the <head> section of the HTML file, add in the following line:

```html
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/p5.js"></script>
```

This line will load in the p5.js framework so that we can use it in our page.

## Previewing your work

When working with p5.js you can use our built-in HTML preview for viewing how your project currently works. With any HTML file selected just click the HTML Preview button in the file toolbar to open up our HTML Preview window. As you work with your files this view will continually refresh to show the latest changes.