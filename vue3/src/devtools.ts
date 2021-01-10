// devtools.ts
import { App, Plugin } from "vue";

const devtools: Plugin = {
  install(app: App) {
    if (
      process.env.NODE_ENV === "development" &&
      (window as any).__VUE_DEVTOOLS_GLOBAL_HOOK__
    ) {
      (window as any).__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
    }
  }
};

export { devtools };
