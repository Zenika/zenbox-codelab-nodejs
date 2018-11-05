# zenbox-codelab-nodejs

* Isoler les routes du serveur dans un module `route.js` à l'aide de la documentation : https://expressjs.com/en/guide/routing.html
* Les nouvelles routes doivent être organisées ainsi :
```
url :           => reponse :
/               => "Main page"
/hello          => "Hello no one"
/hello/me       => "Hello me"
/hello/world    => "Hello world"
```


Le fichier `index.js` doit être organiser ainsi : 

```
const express = require('express')
const route = require('./route')
const app = express()

app.use('/', route)
app.listen(4000)
```
