// adapted from https://github.com/WebDevSimplified/Introduction-to-Web-Development/blob/master/Introduction%20to%20JavaScript/Lesson%201/store.js
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // mc-button drop
    var removeCartItemButtons = document.getElementsByClassName('mc-button drop')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    // for (var i = 0; i < quantityInputs.length; i++) {
    //     var input = quantityInputs[i]
    //     input.addEventListener('change', quantityChanged)
    // }
    // shop-item-button
    var addToCartButtons = document.getElementsByClassName('mc-button add')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    // document.getElementsByClassName('mc-button add')[0].addEventListener('click', addToCartClicked)
}
// current-spring-22-courses
// function purchaseClicked() {
//     // alert('Just made an adjustment to your Spring 2022 course schedule')
//     var cartItems = document.getElementsByClassName('course')[0]
//     while (cartItems.hasChildNodes()) {
//         cartItems.removeChild(cartItems.firstChild)
//     }
//     // updateCartTotal()
// }

function removeCartItem(event) {
    var buttonClicked = event.target
    // buttonClicked.parentElement.parentElement.remove()
    buttonClicked.parentElement.parentElement.remove()
    alert('Just deleted a course from your Spring 2022 course schedule')

    // updateCartTotal()
}

// function quantityChanged(event) {
//     var input = event.target
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1
//     }
//     updateCartTotal()
// }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement

    // title -> cname, price->cnum
    var cname = shopItem.getElementsByClassName('course-name')[0].innerText
    var cnum = shopItem.getElementsByClassName('course-number')[0].innerText
    var cloc = shopItem.getElementsByClassName('course-location')[0].innerText
    var cprof = shopItem.getElementsByClassName('course-prof')[0].innerText
    var cu = shopItem.getElementsByClassName('course-units')[0].innerText
    var cfce = shopItem.getElementsByClassName('course-fces')[0].innerText
    var cd = shopItem.getElementsByClassName('course-description')[0].innerText

    addItemToCart(cname, cnum, cloc, cprof, cu, cfce, cd)
    // updateCartTotal()
}

function addItemToCart(cname, cnum, cloc, cprof, cu, cfce, cd) {
    var cartRow = document.getElementsByClassName('current-spring-22-courses')[0]
    // cartRow.classList.add('course')
    // var cartItems = document.getElementsByClassName('waitlisted-spring-22-courses')[0]
   
    // var cartItemNames = cartItems.getElementsByClassName('cname')
    // for (var i = 0; i < cartItemNames.length; i++) {
    //     if (cartItemNames[i].innerText == cname) {
    //         alert('This item is already added to the cart')
    //         return
    //     }
    // }
    var cartRowContents = `<div class = "course">
    <table>
        <tbody>
            <tr>
            <td class = "course-name"><a href = "05-123.html">${cname}</a></td>
            <td class = "course-number">${cnum}</td>
            <td class = "course-location">${cloc}</td>
            <td class = "course-prof">${cprof}</td>
            <td class = "course-units">${cu}</td>
            <td class = "course-fces">${cfce}</td>
            <td class = "course-description">${cd}<br> <a href = "05-123.html">Read More</a></td>
            <td><button class="mc-button add">Add</button><button class="mc-button drop">Drop</button></td>
            <td>Yes</td>
            </tr>
        </tbody>
    </table>
</div>`
    cartRow.innerHTML += cartRowContents
    // cartItems.append(cartRowContents)
    cartRow.getElementsByClassName('mc-button add')[0].addEventListener('click', addToCartClicked)
    cartRow.getElementsByClassName('mc-button drop')[0].addEventListener('click', removeCartItem)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

// function updateCartTotal() {
//     var cartItemContainer = document.getElementsByClassName('current-spring-22-courses')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total = 0
//     for (var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var cnumElement = cartRow.getElementsByClassName('cart-cnum')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var cnum = parseFloat(cnumElement.innerText.replace('$', ''))
//         var quantity = quantityElement.value
//         total = total + (cnum * quantity)
//     }
//     // total = Math.round(total * 100) / 100
//     // document.getElementsByClassName('cart-total-cnum')[0].innerText = '$' + total
// }

