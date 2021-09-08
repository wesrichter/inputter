var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Inputer = /** @class */ (function () {
    function Inputer() {
        this.error = false;
        this.errorMessage = '';
    }
    return Inputer;
}());
var Texter = /** @class */ (function (_super) {
    __extends(Texter, _super);
    function Texter(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    Texter.prototype.Max = function (compare, message) {
        console.log(compare);
        if (this.value.length > compare) {
            this.error = true;
            this.errorMessage = message ? "Max Length " + compare + " Exceeded" : "" + message;
        }
    };
    Texter.prototype.Min = function (compare, message) {
        if (this.value.length < compare) {
            this.error = true;
            this.errorMessage = message ? "Min Length " + compare + " Required" : "" + message;
        }
    };
    Texter.prototype.Required = function (message) {
        if (!this.value) {
            this.error = true;
            this.errorMessage = message ? "Required" : "" + message;
        }
    };
    return Texter;
}(Inputer));
var t = new Texter('laskdjf');
t.Max(4);
console.log(t.error);
