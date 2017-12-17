"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeButton.prototype.onClick = function () {
        this._isSelected ? this._likesCount-- : this._likesCount++;
        this._isSelected = !this._isSelected;
    };
    Object.defineProperty(LikeButton.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeButton;
}());
exports.LikeButton = LikeButton;
