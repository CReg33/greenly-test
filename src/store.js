export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  
  updateRegularDiscount(discount, value) {
    if (discount.expiresIn >= 0) {
      discount.decreaseDiscountInPercent(value);
    } else {
      discount.decreaseDiscountInPercent(value * 2);
    }
  }
  updateNaturaliaDiscount(discount) {
    if (discount.expiresIn >= 0) {
      discount.increaseDiscountInPercent(1)
    } else {
      discount.increaseDiscountInPercent(2)
    }  
  }
  updateVintedDiscount(discount) {
    if (discount.expiresIn > 10) {
      discount.increaseDiscountInPercent(1) 
    } else if (discount.expiresIn <= 10 && discount.expiresIn > 5) {
      discount.increaseDiscountInPercent(2)
    } else if (discount.expiresIn <= 5 && discount.expiresIn >= 0) {
      discount.increaseDiscountInPercent(3)
    } else {
      discount.discountInPercent = 0
    }
  }

  updateDiscounts() {
    this.discountOffers.forEach(discount => {
      switch(discount.partnerName) {
        default: 
          this.updateRegularDiscount();
          break;
        case "Naturalia":
          this.updateNaturaliaDiscount();
          break;
        case "Vinted":
          this.updateVintedDiscount();
          break;
        case "BackMarket":
          this.updateRegularDiscount();
          break;  
      }
    })

    return this.discountOffers;
}
