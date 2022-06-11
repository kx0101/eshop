# eShop Project




# Frontend: React, Redux, Bootstrap

# Backend: Node.js, Express.js

# Database: MongoDB

# Screenshots at the very bottom


## Features

### Simple User Features

1. User Registration/Login with JWT tokens
2. Search Box
3. Latest Products - Carousel
4. Pagination
5. Profile Page <br />
  a. My Orders <br />
  b. Update Profile <br />
6. Product Page <br />
  a. Leave a review (Only 1 per User) - Comment & Rate <br />
  b. Reviews per product <br />
  c. Add to Cart based on Quantity (if It's in stock or not) <br />
8. Shopping Cart
9. Cart Page
10. Checkout Steps <br />
  a. Shipping information <br />
  b. Payment <br />
  c. Place Order <br />
   &ensp; I. Shipping Information <br />
   &ensp; II. Payment Method <br /> 
   &ensp; III. Ordered Items <br />
   &ensp; IV. Order Summary <br />


### Admin User Features

**Admin dashboard**
1. Listing all Users (Update/Delete User)
2. Listing all Products (Update/Create/Delete Product)
3. Listing all Orders



## Backend

### Middlewares
--Admin <br />
--User

### MongoDB Models

Order Schema

--User (Object) <br />
--orderItems (Array) <br />
  &ensp; a. name (String) <br />
  &ensp; b. qty (Number) <br />
  &ensp; c. image (String) <br />
  &ensp; d. price (String) <br />
  &ensp; e. product (Object) <br />
--shippingAddress (Object) <br />
  &ensp; a. address (String) <br />
  &ensp; b. city (String) <br />
  &ensp; c. postalCode (String) <br />
  &ensp; d. country (String) <br />
--paymentMethod (String) <br />
--paymentREsult (Object) <br />
  &ensp; a. id (String) <br />
  &ensp; b. status (String) <br />
  &ensp; c. update_time (String) <br />
  &ensp; d. email_address (String) <br />
--itemsPrice (Number) <br />
--taxPrice (Number) <br />
--shippingPrice (Number) <br />
--totalPrice (Number) <br />
--isPaid (Boolean) <br />
--paidAt (Date) <br />
--isDelivered (Boolean) <br />
--deliveredAt (Date) <br />

Product Schema

--User (Object) <br />
--name (String) <br />
--image (String) <br />
--brand (String) <br />
--category (String) <br />
--description (String) <br />
--reviews (Review Schema) <br />
  Review Schema <br />
    &ensp; a. name (String) <br />
    &ensp; b. rating (Number) <br />
    &ensp; c. comment (String) <br />
--rating (Number) <br />
--numReviews (Number) <br />
--price (Number) <br />
--countInStock (Number) <br />

User Schema

--name (String) <br />
--email (String) <br />
--password (String) (using bcrypt to hash) <br />
--isAdmin (Boolean) <br />


### Routes


### Orders Routes

/api/orders
  1. POST (addOrderItems) -- Make an order
  2. GET (getOrders) -- Get Orders as an Admin

/api/orders/myorders
  1. GET (getMyOrders) -- Get your orders

/api/orders/:id
  1. GET (getOrderById) -- Get order by Id

/api/orders/:id/pay
  1. PUT (updateOrderToPaid) -- Update order to paid

/api/orders/:id/deliver
  1. PUT (updateOrderToDelivered) -- Update order to Delivered


## Products Routes

/api/products
  1. GET (getAllProducts) -- Get all products
  2. POST (createProduct) -- Create a product

/api/products/top
  1. GET (getTopProducts) -- Get the top products

/api/products/:id
  1. GET (getProduct) -- Get product by Id
  2. DELETE (deleteProduct) -- Delete product by Id
  3. PUT (updateProduct) -- Update product by Id

/api/products/:id/reviews
  1. POST (createProductReview) -- Create a Product review


## Users Routes

/api/users
  1. POST (registerUser) -- Register a new user
  2. GET (getUser) -- Get a user

/api/users/login
  1. POST (loginUser) -- Login

/api/users/profile
  1. GET (getUserProfile) -- Get the profile of the user
  2. PUT (updateUserProfile) -- Update the user
 
/api/users/:id
  1. DELETE (deleteUser) -- Delete a user by Id
  2. GET (getUserById) -- Get user by Id
  3. PUT (updateUser) -- Update user by Id


## State

## Reducers

productList: productListReducer, <br />
productDetails: productDetailsReducer, <br />
productDelete: productDeleteReducer, <br />
productCreate: productCreateReducer, <br />
productUpdate: productUpdateReducer, <br />
productReviewCreate: productReviewCreateReducer, <br />
productTopRated: productTopRatedReducer, <br />
cart: cartReducer, <br />
userLogin: userLoginReducer, <br />
userRegister: userRegisterReducer, <br />
userDetails: userDetailsReducer, <br />
userUpdateProfile: userUpdateProfileReducer, <br />
userList: userListReducer, <br />
userDelete: userDeleteReducer, <br />
userUpdate: userUpdateReducer, <br />
orderCreate: orderCreateReducer, <br />
orderDetails: orderDetailsReducer, <br />
orderPay: orderPayReducer, <br />
orderListMy: orderListMyReducer, <br />
orderList: orderListReducer, <br />
orderDeliver: orderDeliverReducer, <br />

## Local Storage

### cartItems
Saving cart items

### userInfo
Saving user

### shippingAddress
Saving shipping information

## Screenshots

### Admin Orders

<img src="screenshots/Admin_Orders.png" />

## Admin Products

<img src="screenshots/Admin_Products.png" />

## Admin Users

<img src="screenshots/Admin_Users.png" />

## Cart

<img src="screenshots/Cart.png" />

## Edit Product

<img src="screenshots/Edit_Product.png" />

## Edit User

<img src="screenshots/Edit_User.png" />

## Home

<img src="screenshots/Home.png" />

## Order not paid

<img src="screenshots/Order_Not_Paid.png" />

## Order Paid and Delivered

<img src="screenshots/Order_Paid_Delivered.png" />

## Product

<img src="screenshots/Product_Page_1.png" />
<img src="screenshots/Product_Page_2.png" />

## Profile

<img src="screenshots/Profile.png" />

## Search

<img src="screenshots/Search.png" />

## Shipping Steps

<img src="screenshots/Shipping_Step_2.png" />
<img src="screenshots/Shipping_Step_3.png" />
<img src="screenshots/Shipping_Step_4.png" />

## Sign In

<img src="screenshots/Sign_In.png" />

## Sign Up

<img src="screenshots/Sign_Up.png" />
