# toolsuite

A JS Toolsuite with many helpfull functions.

## functions

You need to import this module with require

```
var toolsuite = require("../toolsuite");
```

### getMinValueFromArray(array)
```
var arr = [9, "test", "1001", 1];

toolsuite.getMinValueFromArray(arr);
```
Result: 1

```
var arr = ["emptyarray", "orstrings];

toolsuite.getMinValueFromArray(arr);
```
Result: null


### getMaxValueFromArray(array)
```
var arr = [9, "test", "1001", 1];

toolsuite.getMaxValueFromArray(arr);
```
Result: 1001

```
var arr = ["emptyarray", "orstrings];

toolsuite.getMaxValueFromArray(arr);
```
Result: null


###getMinValueFromObjectArray(array, key)
```
var arr = [{ key1: 1, key2: 50 }, { key1: 2, key2: 100 }, { key1: 3, key2: -50 }];

toolsuite.getMinValueFromObjectArray(arr, "key2");
```
Result: -50

```
var arr = [{ key1: 1, key2: 50, key3: { subkey: 0 } }, { key1: 2, key2: 100, key3: { subkey: 10 } }, { key1: 3, key2: -50, key3: { subkey: 50 } }];

toolsuite.getMinValueFromObjectArray(arr, "key3.subkey");
```
Result: 0

```
var arr = [{ key1: 1 }, { key1: 2 }];

toolsuite.getMinValueFromObjectArray(arr, "key2");
```
Result: null

```
var arr = [{ key1: 1 }, { key1: 2, key2: 99 }];

toolsuite.getMinValueFromObjectArray(arr, "key2");
```
Result: 99


###getMaxValueFromObjectArray(array, key)
```
var arr = [{ key1: 1, key2: 50 }, { key1: 2, key2: 100 }, { key1: 3, key2: -50 }];

toolsuite.getMaxValueFromObjectArray(arr, "key2");
```
Result: 100

```
var arr = [{ key1: 1, key2: 50, key3: { subkey: 0 } }, { key1: 2, key2: 100, key3: { subkey: 10 } }, { key1: 3, key2: -50, key3: { subkey: 50 } }];

toolsuite.getMaxValueFromObjectArray(arr, "key3.subkey");
```

Result: 50

```
var arr = [{ key1: 1 }, { key1: 2 }];

toolsuite.getMaxValueFromObjectArray(arr, "key2");
```
Result: null

```
var arr = [{ key1: 1 }, { key1: 2, key2: 99 }];

toolsuite.getMaxValueFromObjectArray(arr, "key2");
```
Result: 99
