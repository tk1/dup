# Aufgabe

in diesem Repository finden Sie das Beispiel auis der Vorlesung.

## callback-Funktion ermöglichen

Schreiben Sie das Beispiel so um, dass der Aufruf für listDir wie folgt erfolgen kann:

```js
listDir(path, callback)
```

listDir ruft die callback-Funktion auf, sobald der Verzeichnisbaum vollständig
durchlaufen wurde. Der Aufruf sieht so aus:

```js
callback(err, duplicates)
```

err enthält eine Fehlermeldung, wenn listDir nicht erfolgreich war. duplicates ist ein
Array von Arrays. Die enthaltenen Arrays enthalten jeweils die gefundenen mehrfachen
Dateien

### Beispiel

 ```js
[ ['./a.txt', './js/b.txt'], ['./c.html', './html/d.html', './js/html/e.html' ]]
```

Hier sind a.txt und b.txt gleich und die drei HTML-Dateien sind gleich.

## Mit Promises arbeiten

Schreiben Sie listDir so um, dass ein Promise-Objekt zurückgeliefert wird.
Dieses kann folgendermassen verwendet werden:

```js
listDir(path).then(
    duplicates => { /* duplicates enthält die mehrfachen Dateien */ }
    err => { /* err enthält eine Fehlermeldung */ }
)
```

Die Datei readdirPromise.js zeigt, wie readdir als Promise arbeiten kann.