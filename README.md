<div align="center">
    <img alt="compass.js" src="./compassjs.png" height="200"><br>
    <h2>Use Compass programmatically with ease.</h2>
</div>

> UNDER DEVELOPMENT - Unstable, use with caution.

## Install

Due to being under development, you must install directly from the GitHub repo.
_This means that unnecessary development files will also be downloaded._

```sh
npm install https://github.com/Maytha8/compass.js.git
yarn add https://github.com/Maytha8/compass.js.git
pnpm add https://github.com/Maytha8/compass.js.git
```

## Usage

```js
// ESM / TypeScript
import { Client } from 'compass.js';

const client = new Client('example.compass.education');
await client.login('my.username', 'superS3cretPassw0rd');
```

```js
// CommonJS
const { Client } = require('compass.js');

const client = new Client('example.compass.education');
await client.login('my.username', 'superS3cretPassw0rd');
```

## Caveats

- Does not support 2FA login.

## Copyright & License

compass.js
Copyright (C) 2023 Maytham Alsudany

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.
