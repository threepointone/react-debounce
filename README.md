react-debounce
---
`npm install react-debounce --save`

```js
import {Debounce} from 'react-debounce';

...
<Debounce period={200} value={input}>{
  value => debounced: {value}, actual: {input}
}</Debounce>
```

for a better example - look at [an integration with with react-superagent for a search box.](https://github.com/threepointone/react-superagent/blob/master/examples/simple/app.js)