## Adding the script to start creating with p5.js

Our HTML file defined what the basic outline of our webpage will look like, but the real work with p5.js will all be happening in a javascript script file.

To start with, we need to link our new script file into our HTML page. We do this by adding another `script` tag like the one that we brought in to add p5.js. In the `head` of the document add this in below the previous script line:

```html
        <script src="script.js"></script>
```

## Preparing our script for drawing

Now that our script is linked in, it will be run when we load up our web page. However, by itself it won't do anything. We'll need to tell it the parameters of how we want to start drawing before we can actually draw anything. The first function that we will be concerned with is the setup() function. This function will automatically be run once one the program starts and is the place to set up one time initialization of the sketch.

For now, we are going to do three things in our setup function. First, we will choose the size of the drawing space that we will be working with. Second, we will set a background color for our drawing. And third, we will tell p5.js that we are going to create a single non-interactive image.

To set our drawing size we will use the `createCanvas(X, Y)` function. This function will set how wide (X) and how tall (Y) we want our image to be. To start with, let's just pick 300 x 300 so we have a small managable image to work with. Next we will use the `background()` function to clear the background of our canvas. This function can be passed different parameters, such as just the name of a color like `background('lightblue')` or a set of RGB values like `background(123, 45, 67)`. For now let's just use 'lightblue' for our example. After that, the final part of our setup is the `noLoop()` function. This function should be called as the final line  of the `setup()` function if used in setup. This function tells p5.js to only run the draw command once, instead of continually in a loop. Later on, we will get into creating some interactive drawings with noLoop off, but for now, we just want to draw a single image.

Your `setup()` function should have the following in it now:

```javascript
    createCanvas(300, 300);
    background('lightblue');
    noLoop();
```

> [!NOTE]
> Make it yours!
> Try playing with the values to pass into background(). Different color names like 'green' or 'red' or sets of three RGB values (between 0 - 255)