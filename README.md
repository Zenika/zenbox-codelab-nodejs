# zenbox-codelab-nodejs

* Séparer les routes du serveur dans un module `route.js` à l'aide de la documentation : https://expressjs.com/en/guide/routing.html
* Les nouvelles routes doivent être organisées ainsi :
** / => "Main page"
***/hello => "Hello no one"
****/me => Hello me
****/world => Hello world


Le fichier `index.js` doit ressembler à cela : 

```
const express = require('express')
const route = require('./route')
const app = express()

app.use('/', route)
app.listen(4000)
```
