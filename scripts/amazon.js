function createQuantityDropdown() {
  const quantityContainer = document.createElement('div');
  quantityContainer.className = 'product-quantity-container';
  
  const quantitySelect = document.createElement('select');
  for (let i = 1; i <= 10; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    quantitySelect.appendChild(option);
  }

  quantityContainer.appendChild(quantitySelect);
  return quantityContainer;
}

document.querySelectorAll('.product-container').forEach(product => {
  // Insert before the product-spacer div
  const spacer = product.querySelector('.product-spacer');
  if (spacer) {
    product.insertBefore(createQuantityDropdown(), spacer);
  }
});