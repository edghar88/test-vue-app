declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent;

  export interface HTMLAttributes {
    vModel?: number;
  }
  export default component
}
