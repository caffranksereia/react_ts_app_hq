export abstract class Discount {
  protected discount =0;
  abstract calculate(value: number): number;
}


// export  class CumponsComumDiscount extends Discount{
// protected readonly discount = 0.1;

// }

// export  class CumponsRaroDiscount  extends Discount {
//   protected readonly discount = 0.15;

// }

// export class NoDiscount extends Discount {
//   calculate(price: number): number {
//     return price;
//   }}

