class Order {
    constructor(amount, payment_capture, currency, transfers) {
        this.amount = amount;
        this.payment_capture = payment_capture;
        this.currency = currency;
        this.transfers = transfers;
    }

    static validate(data) {
        if (!data.amount || !data.payment_capture || !data.currency || !data.transfers) {
            return false;
        }
        return true;
    }
}

module.exports = Order;
