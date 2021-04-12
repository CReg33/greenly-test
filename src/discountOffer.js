export class DiscountOffer {
    constructor(partnerName, expiresIn, discountRateInPercent) {
      this.partnerName = partnerName;
      this.expiresIn = expiresIn;
      this.discountInPercent = discountRateInPercent;
    }
    increaseDiscountInPercent(value) {
        this.discountInPercent += value;
        if (this.discountInPercent > 50) {
            this.discountInPercent = 50;
        }
    }
    decreaseDiscountInPercent(value) {
        this.discountInPercent -= value;
        if (this.discountInPercent < 0) {
            this.discountInPercent = 0;
        }
    }
  }