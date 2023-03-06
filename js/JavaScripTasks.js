"use strict";
function factorial(n) {
    if (!Number.isInteger(n) || typeof n !== "number") {
      return "Ошибка, проверьте данные";
    }
    if (n <= 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  console.log(factorial(5));