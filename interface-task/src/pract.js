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
var organization = /** @class */ (function () {
    function organization(no, name) {
        this.profit = 10000;
        this.empNo = no;
        this.empName = name;
        console.log(this.empName);
        console.log(this.empNo);
    }
    organization.prototype.test = function () {
        console.log(this.profit);
    };
    return organization;
}());
var sales = /** @class */ (function (_super) {
    __extends(sales, _super);
    function sales() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sales.prototype.disp = function () {
        console.log("display method");
    };
    sales.prototype.revenue = function () {
        console.log("revenue method");
    };
    return sales;
}(organization));
var sale = new sales(123, "john");
sale.revenue();
sale.disp();
sale.test();
