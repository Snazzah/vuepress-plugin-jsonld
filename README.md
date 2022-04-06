# vuepress-plugin-jsonld
> VuePress plugin for adding JSON-LD to pages

You can add JSONLD to pages using the `ld` prop in the frontmatter:
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