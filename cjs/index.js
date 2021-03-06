// inspired by https://mathiasbynens.be/notes/globalthis
(function (Object) {
  if (typeof globalThis === 'undefined')
    (Object.defineProperty(Object.prototype, '_T_', {
      configurable: true,
      get: function () {
        this.globalThis = this;
        delete Object.prototype._T_;
      }
    }), _T_);
}(Object));
module.exports = globalThis;
