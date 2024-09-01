let wishlistItemObjects;
onLoad();


function onLoad(){
    loadWishlistObjects();
    displayWishlistItems();
}

function loadWishlistObjects() {
    console.log(wishlistItems);
    wishlistItemObjects = wishlistItems.map(itemId => {
      for (let i = 0; i < items.length; i++) {
        if (itemId == items[i].id) {
          return items[i];
        }
      }
    });
    console.log(wishlistItemObjects);
  }
  

  function displayWishlistItems() {
    let wishlistcontainerElement = document.querySelector('.wishlist-items-container');
    let innerHtml = '';
    wishlistItemObjects.forEach(wishlistItem => {
      innerHtml += generateWishlistItemHTML(wishlistItem);
    });
     wishlistcontainerElement.innerHTML = innerHtml;
  }


  function removeFromWishlist(itemId){
      wishlistItems = wishlistItems.filter(wishlistItemId => wishlistItemId != itemId);
         localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
         loadWishlistObjects();
         displayWishlistItems();

      
  }

  function generateWishlistItemHTML(item) {
    return `<div class="item-container wishlists">
      <img class="item-image" src="../${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <span class="btns">
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add To Bag</button>
      <button class="remove-wishlist-btn" onclick= "removeFromWishlist(${item.id})"><i class="fa fa-trash" aria-hidden="true"></i></button>
      </span>
    </div>`;
  }