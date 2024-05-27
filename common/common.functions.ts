const getPlaceholderSVG = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="border-radius:'15px'">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#b5c7c6" offset="20%" />
      <stop stop-color="#7a8786" offset="50%" />
      <stop stop-color="#b5c7c6" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#b5c7c6" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export { getPlaceholderSVG, toBase64 };
