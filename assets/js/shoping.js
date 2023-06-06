// giỏ hàng
const btn = document.querySelectorAll("button")
// console.log (btn)
btn.forEach (function(button,index){
  button.addEventListener("click",function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    // console.log (product)
   var productImg = product.querySelector("img")
   var productName = product.querySelector("h5").innerText
   var productPrice = product.querySelector("p").innerText
    addcart (productImg, productName, productPrice)
}})
})
function addcart (productImg, productName, productPrice)  {
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll("tbody tr")
  for (i=0; i < cartItem.length; i++){
    var productT = document.querySelectorAll(".tittle")
    if (productT[i].innerHTML == productName){
      alert ("Sản phẩm của bạn đã có trong giỏ hàng")
      return
    }
    
  }
  var trcontent = '<tr><td><img style="width: 70px" src="'+productImg+'" alt=""/><span class="tittle">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span></p></td> <td><input style="width: 30px; outline: none"type="number" value="1"min="1"/></td><td style="cursor: pointer"><span class="cart-delete">Xóa</span></td></tr>'
  addtr.innerHTML = trcontent
  var cartTable = document.querySelector("tbody")
  // console.log (cartTable)
   cartTable.append(addtr)
carttotal()
deleteCart()
  }

// Tính Tổng Tiền
function carttotal () {
var cartItem = document.querySelectorAll("tbody tr")
var totalC = 0
for (i=0; i < cartItem.length; i++){
 var inputValue = cartItem[i].querySelector("input").value
 
 var productPrice = cartItem[i].querySelector(".prices").innerHTML
 var numberPattern = /\d+/; // Biểu thức chính quy để tìm các chữ số trong chuỗi

var matches = productPrice.match(numberPattern); // Lấy các chữ số từ chuỗi

if (matches !== null) {
  var number = parseInt(matches[0]); // Chuyển đổi kết quả thành số nguyên
  console.log(number); // In ra số đã lấy được
} else {
  console.log("Không tìm thấy số trong chuỗi.");
}
 
 totalA = inputValue * matches 
//  totalB = totalA.toLocaleString ('de-De')
 totalC = totalC + totalA
//  console.log (totalC)

}
var cartTotalA = document.querySelector(".price-total span")
var cartPrice = document.querySelector(".total-price")
cartTotalA.innerHTML = totalC
cartPrice.innerHTML = totalC
inputchange ()  
}


// Xóa sản phẩm 
function deleteCart (){
  var cartItem = document.querySelectorAll("tbody tr")
  for (i=0; i < cartItem.length; i++){
    var productT = document.querySelectorAll(".cart-delete")
    productT[i].addEventListener("click",function(event){
      var cartDelete = event.target
      var cartitemR = cartDelete.parentElement.parentElement
      console.log (cartitemR)
      cartitemR.remove()
      carttotal ()
    })
  }
}
function inputchange (){
  var cartItem = document.querySelectorAll("tbody tr")
  for (i=0; i < cartItem.length; i++){
    var inputValue = cartItem[i].querySelector("input")
    inputValue.addEventListener ("change",function(){
      carttotal ()
    })
  }
}
// click tắt mở giỏ hàng
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right = "-100%"
})