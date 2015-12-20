# Website Performance Optimization

Original files are in the folder `src/` and production files are in the folder `dist/`


## Task 1 - index.html

PageSpeed Insights score before optimization - 28/100 mobile, 30/100 desktop

- Created Gruntfile.js and added minification tasks - 32/100 mobile, 34/100 desktop
- Resized views/images/pizzeria.jpg image to 100px wide - 77/100 mobile, 91/100 desktop
- Inlined CSS, removed webfont, made JS asynchronous - 95/100 mobile, 97/100 desktop

Distribution version can be found here: [http://slooptb.github.io/crp/dist/index.html](http://slooptb.github.io/crp/dist/index.html)


## Task 2 - views/pizza.html

Remove JANK and optimize fps to 60fps or higher

- Removed forced synchronous layout from pizza resizing. Pizzas resize in under 1ms.
- Reduced number of background pizzas from 200 to 32. No one needs that many pizzas.
- Refactored updatePositions loop to work out distance to top once, rather than once per pizza (we have just about reached the goal of 60fps, but lets keep going).
- Targeted background pizzas with getElementsByClassName yields slightly better performance (every little helps...).
- Applied transform to updatePositions to remove layout and paint steps.
- Added will-change: transform to .mover css
-- Note: this change increases time to resize pizzas to under 2ms, still within range for project requirements.

More optimizations since first submit:
- Move array.length methods into variable so only called once in loops
- Move getElementByID outside of loops to only make one DOM call
- Calculate number of background pizzas required
- Add transform and backface-visibility css properties