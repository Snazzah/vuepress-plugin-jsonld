# vuepress-plugin-jsonld
> VuePress plugin for adding JSON-LD to pages

## Installation
```sh
yarn add -D vuepress-plugin-jsonld
# or
npm install -D vuepress-plugin-jsonld
```

## Usage
```js
// .vuepress/config.js
module.exports = {
  plugins: ['jsonld'],
}
```

You can add JSON-LD to pages using the `ld` prop in the frontmatter:
```yaml
---
ld:
  '@type': Organization
  url: https://example.com
  logo: https://example.com/logo.png
  name: VuePress
---
```

You can follow the [schema](https://schema.org/) and write it in YAML.