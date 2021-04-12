export class Store {
  constructor(discountOffers = []) {
    this.discountOffers = discountOffers;
  }
  
  updateRegularDiscount(product, discount) {
    if (product.expiresIn >= 0) {
      product.decreaseDiscountInPercent(discount);
    } else {
      product.decreaseDiscountInPercent(discount * 2);
    }
  }
  updateNaturaliaDiscount(product) {
    if (product.expiresIn >= 0) {
      product.increaseDiscountInPercent(1)
    } else {
      product.increaseDiscountInPercent(2)
    }  
  }
  updateVintedDiscount(product) {
    if (product.expiresIn > 10) {
      product.ncreaseDiscountInPercent(1) 
    } else if (product.expiresIn <= 10 && product.expiresIn > 5) {
      product.increaseDiscountInPercent(2)
    } else if (product.expiresIn <= 5 && product.expiresIn >= 0) {
      product.increaseDiscountInPercent(3)
    } else {
      product.benefit = 0
    }
  }



  updateDiscounts() {
    for (var i = 0; i < this.discountOffers.length; i++) {
      if (
        this.discountOffers[i].partnerName != "Naturalia" &&
        this.discountOffers[i].partnerName != "Vinted"
      ) {
        if (this.discountOffers[i].discountInPercent > 0) {
          if (this.discountOffers[i].partnerName != "Ilek") {
            this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent - 1;
          }
        }
      } else {
        if (this.discountOffers[i].discountInPercent < 50) {
          this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent + 1;
          if (this.discountOffers[i].partnerName == "Vinted") {
            if (this.discountOffers[i].expiresIn < 11) {
              if (this.discountOffers[i].discountInPercent < 50) {
                this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent + 1;
              }
            }
            if (this.discountOffers[i].expiresIn < 6) {
              if (this.discountOffers[i].discountInPercent < 50) {
                this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent + 1;
              }
            }
          }
        }
      }
      if (this.discountOffers[i].partnerName != "Ilek") {
        this.discountOffers[i].expiresIn = this.discountOffers[i].expiresIn - 1;
      }
      if (this.discountOffers[i].expiresIn < 0) {
        if (this.discountOffers[i].partnerName != "Naturalia") {
          if (this.discountOffers[i].partnerName != "Vinted") {
            if (this.discountOffers[i].discountInPercent > 0) {
              if (this.discountOffers[i].partnerName != "Ilek") {
                this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent - 1;
              }
            }
          } else {
            this.discountOffers[i].discountInPercent =
              this.discountOffers[i].discountInPercent - this.discountOffers[i].discountInPercent;
          }
        } else {
          if (this.discountOffers[i].discountInPercent < 50) {
            this.discountOffers[i].discountInPercent = this.discountOffers[i].discountInPercent + 1;
          }
        }
      }
    }

    return this.discountOffers;
  }
}
