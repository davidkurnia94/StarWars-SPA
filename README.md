# A Simple Star Wars Repository
A multi-page Single Page Application powered by Angular.js and Bootstrap and uses Star Wars API by [swapi.co](http://swapi.co).

## Requirement
To run this project, you will need these softwares to be installed.

  * [Python](https://www.python.org/downloads/): We will need this to create our own local webserver.
  * [Git](http://git-scm.com/downloads): Use the installer for your OS.
    * Windows users can try [Git for Windows](http://git-for-windows.github.io/).

## Getting Started
Open Terminal, and clone this repository.

```bash
git clone https://github.com/davidkurnia94/StarWars-SPA.git app
```
You can rename `app` with a name of your liking.
Next, change to the directory you have just cloned.

```bash
cd app
```

Next, we are going to create a SimpleHTTPRequest to create a local webserver which is needed to run this project in your browser.
```bash
python -m SimpleHTTPServer 8000
```

Now, go to `localhost:8000` to see it in action.


## Few Notes
 * If somehow `python -m SimpleHTTPServer 8000` isn't working, try using `python -m http.server 8000`.
 * For Safari users, if you are experiencing issue with the website not displaying any data, it is due to Cross-Origin Restrictions. To disable this, go to Develop > Disable Cross-Origin Restrictions.
 * This repository is also available at [BitBucket](https://davidkurnia94@bitbucket.org/davidkurnia94/starwars-spa.git).
