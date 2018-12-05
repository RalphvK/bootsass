# Installation instructions

Clone this repository:

```git clone https://github.com/RalphvK/bootsass.git```

Run NPM install:

```npm install```

If Gulp-CLI is not yet installed on the system, run:

```npm install gulp-cli -g```

Make your changes and build the CSS file using:

```gulp sass```

or Ruby Sass:

```sass scss/style.scss css/style.css```

Watch for changes using Ruby Sass:

```sass --watch scss/style.scss:css/style.css```

Or execute the batch file as a shorthand:

```watch-sass```

# Javascript files

The combined javascript file ```js/scripts.min.js``` is compiled from the index in the ```js/index.json``` file. By default it looks like this:

```json
{
    "includes": [
        "./js/partials/**/*.js"
    ]
}
```

You can run the build using the following Gulp task:

```gulp concat_js```

Watch for changes using the following Gulp task:

```gulp watch```

Running ```gulp``` will run this task by default.

Include the javascript file with the script tag:

```html
<!-- concatenated javascript -->
<script src="js/scripts.min.js"></script>
```