"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    ;
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " has to pay ").concat(this.amount, " Rupess for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
