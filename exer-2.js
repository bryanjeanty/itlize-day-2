for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    document.write(`${i} is even<br>`);
    continue;
  }
  document.write(`${i} is odd<br>`);
}
