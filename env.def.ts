declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TYPE?: "format";
    }
  }
}

export {};
