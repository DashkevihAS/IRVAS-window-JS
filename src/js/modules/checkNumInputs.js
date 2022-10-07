const checkNumInputs = (selector) => {
  const numIputs = document.querySelectorAll(selector);

  numIputs.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

export default checkNumInputs;
