# Strapi Placeholder Generator

Generate base64 placeholders for [Strapi](https://strapi.io/) images.

## 🖌️ Supported Content
The Placeholder plugin currently supports the following formats:
- JPEG
- PNG
- GIF
- TIFF
- SVG

## ✨ Supported Strapi Versions

The Placeholder plugin is only compatible with Strapi v4.

## ⚙️ Installation

```bash
# if you use NPM
npm install strapi-plugin-placeholder

# if you use Yarn
yarn add strapi-plugin-placeholder
```

## 🔧 Configuration

### Enable The Plugin

Open or create the file `config/plugins.js` and enable the plugin by adding the following snippet:

```js
module.exports = {
  // ...
  placeholder: {
    enabled: true,
    config: {
      size: 10,
    },
  },
};
```

For more information regarding the `size` param, refer to the [Plaiceholder docs](https://plaiceholder.co/docs/usage).

### Generate Placeholders For Existing Images

Create the file `database/migrations/generate-placeholders-for-existing-images.js` with the following content:

```js
'use strict';

const FILES_TABLE = 'files';
const BATCH_SIZE = 1000;

async function up(trx) {
  let lastId = 0;

  while (true) {
    const files = await trx
      .select(['id', 'url'])
      .from(FILES_TABLE)
      .whereNot('url', null)
      .andWhereLike('mime', 'image/%')
      .andWhere('placeholder', null)
      .andWhere('id', '>', lastId)
      .orderBy('id', 'asc')
      .limit(BATCH_SIZE);

    for (const file of files) {
      const placeholder = await strapi
        .plugin('placeholder')
        .service('placeholder')
        .generate(file.url);

      if (placeholder)
        await trx.update('placeholder', placeholder).from(FILES_TABLE).where('id', file.id);
    }

    if (files.length < BATCH_SIZE) {
      break;
    }

    lastId = files[files.length - 1].id;
  }
}

async function down() {}

module.exports = { up, down };
```