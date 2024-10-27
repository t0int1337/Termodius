# Termodius
A mod for Termius that adds a few features that I think are missing.

## Features
- Custom CSS Themes
- Devtools

## Installation
1. Download the [index.js](https://github.com/t0int1337/Termodius/blob/main/index.js) file.
2. Open libtermius folder:
   - Termius: `%localappdata%\Programs\Termius\resources\app.asar.unpacked\node_modules\@termius\libtermius`
   - Termius Beta: `%localappdata%\Programs\Termius Beta\resources\app.asar.unpacked\node_modules\@termius\libtermius`
3. Replace the index.js file with the downloaded file.
4. Restart Termius. (You may need to kill the process in Task Manager)

## Themes
1. Open the `themes` folder in the Termius directory. (If it doesn't exist, create it)
2. Add your CSS file to the folder. (You can add multiple themes)

## Creating Themes
- You can use the Devtools to inspect the elements and create your own CSS file.
- You can use the example theme (exampletheme.css) to get started.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## TODO
- Add plugin support
- Add better themes support
- Find a better way to get the themes directory

## Why this approach?
I know that modifying the source code is not the best way to add features, but the asar file is not easy to work with and I couldn't find a better way to do it.