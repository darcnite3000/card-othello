# Card Othello

a card based flip control game

[testing site](https://darcnite3000.github.io/card-othello/)

to compare attack/defence between two cards the check the same index on the inverse pips of the card you are comparing to

```
['tl','tm','tr',
 'ml',     'mr',
 'bl','bm','br']
```

```
['br','bm','bl,
 'mr',     'ml,
 'tr','tm','tl']
```

`carda.pips = [0,0,0,3,0,0,2,0]`

`cardb.pips = [0,0,4,0,4,0,0,0]`

to compare carda to cardb if cardb is to the left of carda (ie middle left from carda)

reverse cardb

`cardb.pips = [0,0,0,4,0,4,0,0]`

compare middle left (id 3)

`carda.pips[3] = 3`

`cardb.pips[3] = 4`
