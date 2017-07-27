# campSlider

> campSlider is a simple responsive HTML content slider for each page.

[See online](https://fncoder.github.io/camp-slider/)

## How to use

The manual way:

1. Download the files.
2. Copy html,js and css files in your project.
3. Structure your html in a manner similar to below:

In your HEAD tag:
```html
<head>
    <link rel="stylesheet" href="yourPath/campSlider.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
</head>
```

Main slider in your Body tag:

```html
<div class="camp-wrapper">
	<ul class="slides">
		<li class="slide">
			<img src="https://wallpaperscraft.com/image/field_dawn_sky_beautiful_scenery_87654_1920x1080.jpg">
		</li>
		<li class="slide">
			<img src="https://www.qdtricks.net/wp-content/uploads/2016/05/latest-1080-wallpaper.jpg">
		</li>
		<li class="slide">
			<img src="https://wallpaperscraft.com/image/mountains_sky_clouds_mountain_range_stones_99500_1920x1080.jpg">
		</li>
	</ul>
</div>
```
And script file

```html
<script src="yourPath/campSlider.js"></script>
```

4. Initialize the content slider somewhere in your script file.

```javascript
campSlider.init();
```

If you want to change the default settings, do so like this:

````javacript
campSlider.init({
	property: value,
	property: value
});
````

# Default Settings
```javascript
campSlider.init({
	speed: 1000, // Speed slide animation in milliseconds
	easing: 'ease', // Type animation: ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier(n, n, n, n)
	delay: 0, 	// Delay animation before start in milliseconds
	animationLoop: true, // Automatic loop animation, true or false
	intervalSlide: 5000 // Interval animation loop in milliseconds
});
```

# Support

If you have a problem or found a bug, [create subject](https://github.com/fncoder/campSlider/issues), it will help me to solve your problem.
