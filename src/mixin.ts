export default {
  created(this: any) {
    if (this.$ssrContext && this.$page.frontmatter.ld) {
      const ld = this.$page.frontmatter.ld;
      let script = '';
      if (Array.isArray(ld))
        for (const ldi of ld)
          script += `\n    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', ...ldi })}</script>`;
      else script += `\n    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', ...ld })}</script>`;
      this.$ssrContext.pageMeta += script;
    }
  },

  mounted(this: any) {
    this.refreshJSONLD();
  },

  methods: {
    refreshJSONLD(this: any) {
      Array.from(document.querySelectorAll('head script[type="application/ld+json"]')).forEach((el) => el.remove());
      if (this.$page.frontmatter.ld) {
        const ld = Array.isArray(this.$page.frontmatter.ld) ? this.$page.frontmatter.ld : [this.$page.frontmatter.ld];
        for (const ldi of ld) {
          const script = document.createElement('script');
          script.setAttribute('type', 'application/ld+json');
          script.innerHTML = JSON.stringify({ '@context': 'https://schema.org', ...ldi });
          document.head.appendChild(script);
        }
      }
    }
  },

  watch: {
    $page(this: any) {
      this.refreshJSONLD();
    }
  },

  beforeDestroy() {
    Array.from(document.querySelectorAll('head script[type="application/ld+json"]')).forEach((el) => el.remove());
  }
};
