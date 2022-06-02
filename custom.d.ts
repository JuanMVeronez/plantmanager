// used to TS handle with png files correctly
declare module '*.png' {
  const content: any;
  export default content;
}