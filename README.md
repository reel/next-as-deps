## Error while next is a dependency of a loaded module

### Error:

```
 ERROR  Failed to compile with 6 errors

These dependencies were not found in node_modules:

* ./pages/a.js?entry
* ./pages/b.js?entry
* ./pages/index.js?entry
* C:\Users\user\code\next-as-deps\with-next\node_modules\next\dist\pages\_error.js?entry
* C:\Users\user\code\next-as-deps\with-next\node_modules\next\dist\pages\_error-debug.js?entry
* C:\Users\user\code\next-as-deps\with-next\node_modules\next\dist\pages\_document.js?entry

Did you forget to run npm install --save for them?
> Ready on http://localhost:3000
```

### Steps to reproduce

```bash

git clone https://github.com/reel/next-as-deps.git

cd next-as-deps

cd with-next && npm install

npm link

cd ../main-app

npm link with-next

node index.js

```