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