declare module "color-thief-browser" {
  interface ColorThief {
    getColor(img: HTMLImageElement): Promise<[number, number, number]>;
    getPalette(
      img: HTMLImageElement,
      colorCount?: number
    ): Promise<[number, number, number][]>;
  }

  const colorThief: ColorThief;
  export default colorThief;
}
