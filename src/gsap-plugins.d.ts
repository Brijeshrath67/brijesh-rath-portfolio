declare module "gsap/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    revert(): void;
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    split: {
      chars: HTMLElement[];
      words: HTMLElement[];
      lines: HTMLElement[];
    };
  }
}

declare module "gsap/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(soft?: boolean): void;
    scrollTo(target: any, jump?: boolean, position?: string): void;
    scrollTop(value?: number): number;
    paused(value?: boolean): any;
  }
}
