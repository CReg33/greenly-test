import { Store } from "./src/store";
import { DiscountOffer } from "./src/discountOffer";

describe("Store", () => {
  // Regular discount 
  it("Regular discount : should decrease the discount and expiresIn by 1 when expiresIn >= 0", () => {
    expect(new Store([new DiscountOffer("test", 2, 3)]).updateDiscounts()).toEqual(
      [new DiscountOffer("test", 1, 2)]
    );
  });
  it("Regular discount : should decrease the discount twice as fast as expiresIn when expiresIn < 0", () => {
    expect(new Store([new DiscountOffer("test", 0, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("test", -1, 8)]
    );
  });
  // Naturalia discount
  it("Naturalia discount : should increase the discount and decrease expiresIn by 1 when expiresIn >= 0", () => {
    expect(new Store([new DiscountOffer("Naturalia", 2, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Naturalia", 1, 11)]
    );
  });
  it("Naturalia discount : should increase the discount twice as fast as the expiresIn decreases when expiresIn < 0", () => {
    expect(new Store([new DiscountOffer("Naturalia", 0, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Naturalia", -1, 12)]
    );
  });
  // Ilek discount
  it("Ilek discount : should never change value of discount and expiresIn", () => {
    expect(new Store([new DiscountOffer("Ilek", 2, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Ilek", 2, 10)]
    );
  });
  // Vinted discount
  it("Vinted discount : should increase the discount and decrease expiresIn by 1 when expiresIn > 10", () => {
    expect(new Store([new DiscountOffer("Vinted", 11, 3)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Vinted", 10, 4)]
    );
  });
  it("Vinted discount : should increase the discount by 2 and decrease expiresIn by 1 when expiresIn =< 10", () => {
    expect(new Store([new DiscountOffer("Vinted", 10, 8)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Vinted", 9, 10)]
    );
  });
  it("Vinted discount : should increase the discount by 3 as the expiresIn decreases when expiresIn =< 5", () => {
    expect(new Store([new DiscountOffer("Vinted", 5, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Vinted", 4, 13)]
    );
  });
  it("Vinted discount : should drop the discount to 0 as the expiresIn decreases when expiresIn < 0", () => {
    expect(new Store([new DiscountOffer("Vinted", 0, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("Vinted", -1, 0)]
    );
  });
  // BackMarket discount
  it("BackMarket discount : should decrease the discount by 2 and expiresIn by 1 when expiresIn >= 0", () => {
    expect(new Store([new DiscountOffer("BackMarket", 4, 8)]).updateDiscounts()).toEqual(
      [new DiscountOffer("BackMarket", 3, 6)]
    );
  });
  it("BackMarket discount : should decrease the discount by 4 and expiresIn by 1 when expiresIn < 0", () => {
    expect(new Store([new DiscountOffer("BackMarket", 0, 10)]).updateDiscounts()).toEqual(
      [new DiscountOffer("BackMarket", -1, 6)]
    );
  });
});
