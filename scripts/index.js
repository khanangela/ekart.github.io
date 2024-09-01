let bagItems;
let wishlistItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  let wishlistItemsStr = localStorage.getItem('wishlistItems');
  wishlistItems = wishlistItemsStr ? JSON.parse(wishlistItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');

  const maxProductsToShow = 8; // Limit to 6 products

    // Use slice to get a subset of the products array
    const limitedItems = items.slice(0, maxProductsToShow);

  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  limitedItems.forEach(item => {
    innerHtml += `
    <div class="item-container product" data-category="${item.data_category}" data-price="${item.current_price}" >
      <img class="item-image " src="${item.image}"  alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price ">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <span class="btns">
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
      <button class="wishlist-btn" onclick= "addToWishlist(${item.id})"><i class="fa fa-heart-o" aria-hidden="true"></i></button>
      </span>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}

// Example function to handle adding items to the wishlist
function addToWishlist(itemId) {
    if (!wishlistItems.includes(itemId)) {
         wishlistItems.push(itemId);
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        
    }
}


// document.querySelector('.sidebar-toggle').addEventListener('click', function () {
//   document.querySelector('.sidebar').classList.toggle('active');
// });



document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.category-filter');
    const products = document.querySelectorAll('.product');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyPriceFilterButton = document.getElementById('apply-price-filter');

    applyPriceFilterButton.addEventListener('click', function () {
        const minPrice = parseFloat(minPriceInput.value) || 0;
        const maxPrice = parseFloat(maxPriceInput.value) || Infinity;

        products.forEach(product => {
            const productPrice = parseFloat(product.getAttribute('data-price'));
            if (productPrice >= minPrice && productPrice <= maxPrice) {
                product.classList.remove('hidden');
            } else {
                product.classList.add('hidden');
            }
        });
    });

    filters.forEach(filter => {
        filter.addEventListener('change', function () {
            const selectedCategories = Array.from(filters)
                .filter(f => f.checked)
                .map(f => f.value);

            products.forEach(product => {
                const productCategory = product.getAttribute('data-category');
                if (selectedCategories.length === 0 || selectedCategories.includes(productCategory)) {
                    product.classList.remove('hidden');
                } else {
                    product.classList.add('hidden');
                }
            });
        });
    })
  })
