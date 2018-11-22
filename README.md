# zenbox-codelab-nodejs

Dans cette étape, nous utiliserons la librairie `fs` de nodejs [https://nodejs.org/docs/latest-v10.x/api/fs.html](https://nodejs.org/docs/latest-v10.x/api/fs.html)

* Dans `service.js`, ajouter une fonction permettant de logger des informations dans un fichier `out.log` grâce à la librairie `fs` (utiliser l'api fsPromises). Voici le prototype de la fonction : `log(dataStr): Promise`.
* Dans `service.js`, ajouter une fonction permettant de retourner un buffer de lecture du fichier `out.log`. Utiliser la librairie `fs` (utiliser l'api fsPromises). Voici le prototype de la fonction : `readLog(): Promise`
* Dans `index.js`, logger la chaine de caractère `Hello World` puis afficher le contenu du fichier. Il suffit d´utiliser la méthode `toString()` à partir du buffer de lecture.
