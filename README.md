# zenbox-codelab-nodejs

* Dans `service.js`, ajouter une fonction permettant de logger des informations dans un fichier `out.log` grâce à la librairie `fs` (utiliser l'api fsPromises). Voici le prototype de la fonction : `log(dataStr): Promise`.
* Dans `service.js`, ajouter une fonction permettant de retourner un buffer de lecture du fichier `out.log`. Utiliser la librairie `fs`. Voici le prototype de la fonction : `readLog(): Promise`
* Dans `index.js` grâce au service logger dans le fichier `out.log` la chaine de caractère `Hello World` puis ensuite afficher le contenu du fichier. Pour info il suffit de réaliser la méthode `toString()` à partir du buffer de lecture.
