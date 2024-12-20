class Utils {
  static calculateNumber(type, a, b) {
    const c = Math.round(a);
    const d = Math.round(b);

    if (type === 'SUM') {
      return c + d;
    }

    if (type === 'SUBTRACT') {
      return c - d;
    }

    if (type === 'DIVIDE') {
      if (d === 0) {
        return 'Error';
      }
      return c / d;
    }
    return 'Invalid operation type';
  }
}

module.exports = Utils;
