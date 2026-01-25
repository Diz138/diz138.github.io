/// <reference types="astro/client" />

declare module "*.svg?component" {
  const Component: (props: Record<string, any>) => any;
  export default Component;
}

declare module "*.svg?raw" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const src: string;
  export default src;
}
