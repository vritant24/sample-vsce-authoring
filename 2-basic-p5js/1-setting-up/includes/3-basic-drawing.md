## Drawing shapes in the draw() function

With all the setup work out of the way it's time to start actually drawing! For the next few sections we'll be working inside of the draw function.

## Basic shapes

In p5.js basic shapes can be drawn with a series of convenient shape functions such as `circle()` `triangle()` and `rect()`. For any of these functions, the shape is composed both of an outline stroke and an inside fill color. These colors are set just like the colors of the `background()` function by either color strings or sets of RGB values. So before you were to draw a circle with a red outline and a blue fill inside you would call the following functions before calling `circle()`:

```javascript
    stroke('red');
    fill('blue');
```

> [!TIP]
> stroke() and fill() apply to all following drawing calls
> After you set stroke or fill, it will apply to all the following drawing calls until they are changed, so you don't need to set it for each call.

### Circles

The `circle()` drawing function takes three parameters, x, y, and diameter. x and y are the coordinates of the centerpoint of your circle to draw and diameter is the distance across the circle. So a call of `circle(180, 30, 20);` would move 180 pixels over, 30 pixels down, and then draw a circle with a radius of 20 pixels.

> [!TIP]
> Remember the size of your canvas!
> In the setup function we created a canvas of 300 pixels by 300 pixels, if you don't see your shape drawn, check that you are not drawing it outside of that range.

### Rectangles

The `rect()` drawing function takes four parameters, x, y, w, and h. x and y are the coordinates of the upper left corner of the rectangle, while w and h are the width and height to draw it. 

> [!TIP]
> Rounded corners
> rect() also has an advanced form that takes eight parameters. Those four extra parameters control the rounding of each corner of the rect, starting from the top left, so that you can make a rectangle with rounded corners.

### Triangles

The `triangle()` drawing function takes six parameters. These parameters come as pairs of x, y points that define the three points of the triangle.

Try out the following code snippet in your `draw()` function:

```javascript
    stroke('red');
    fill('green');
    circle(180, 30, 20);

    stroke('black')
    fill('red');
    rect(200, 200, 20, 30);

    stroke('orange');
    fill('blue');
    triangle(140, 140, 80, 160, 60, 60);
```

> [!NOTE]
> Make it yours!
> Try changing both the stroke and fill values as well as the size and locations of the shapes. What happens when you draw one on top of another?