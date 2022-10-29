# Classis: utility to construct html classes conditionally

> ⚠️ I recommend using [classnames](https://github.com/JedWatson/classnames) since they are legacy compatible and take serious action about compatibility, and [clsx](https://github.com/lukeed/clsx) are much faster.

### Why classis exists?

_[classnames](https://github.com/JedWatson/classnames) are good but it doesn't override classes which is what i want._

## Examples

```ts
import classis from 'classis';

classis("blue", { blue: false }) // -> ''

classis("blue", ['btn', ['rouned']] { blue: 'red' }) // -> 'btn rouned red'

// With tailwindcss
classis("bg-red-500", { 'bg-red-500': 'bg-blue-500' }) // -> 'bg-blue-500'
```

_More examples in [tests](./tests/)_

---

[MIT © License](./license)
