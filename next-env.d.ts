/// <reference types="next" />
/// <reference types="next/types/global" />

// https://github.com/vercel/next-plugins/issues/488#issuecomment-558569190
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}
