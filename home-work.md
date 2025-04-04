### Adapted Request and Response Examples for Online Phone Store Backend using JSON

#### Authentication

- **Register**

  - **Request:** `POST /register`
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **Login**
  - **Request:** `POST /login`
    ```json
    {
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

#### User (Foydalanuvchi)

- **Get All Users**

  - **Request:** `GET /users`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      }
    ]
    ```

- **Get User by ID**

  - **Request:** `GET /users/:userId`
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **Update User**

  - **Request:** `PUT /users/:userId`
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```

- **Delete User**
  - **Request:** `DELETE /users/:userId`
  - **Response:**
    ```json
    {
      "message": "User deleted"
    }
    ```

#### Product (Mahsulotlar)

- **Get All Products**

  - **Request:** `GET /products`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "iPhone 13",
        "price": 999.99,
        "description": "Latest Apple iPhone",
        "stock": 50
      }
    ]
    ```

- **Get Product by ID**

  - **Request:** `GET /products/:productId`
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "iPhone 13",
      "price": 999.99,
      "description": "Latest Apple iPhone",
      "stock": 50
    }
    ```

- **Create Product**

  - **Request:** `POST /products`
    ```json
    {
      "name": "iPhone 13",
      "price": 999.99,
      "description": "Latest Apple iPhone",
      "stock": 50
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "iPhone 13",
      "price": 999.99,
      "description": "Latest Apple iPhone",
      "stock": 50
    }
    ```

- **Update Product**

  - **Request:** `PUT /products/:productId`
    ```json
    {
      "name": "iPhone 13 Pro",
      "price": 1099.99,
      "description": "Latest Apple iPhone with Pro features",
      "stock": 30
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "iPhone 13 Pro",
      "price": 1099.99,
      "description": "Latest Apple iPhone with Pro features",
      "stock": 30
    }
    ```

- **Delete Product**
  - **Request:** `DELETE /products/:productId`
  - **Response:**
    ```json
    {
      "message": "Product deleted"
    }
    ```

#### Order (Buyurtmalar)

- **Get All Orders**

  - **Request:** `GET /orders`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "userId": 1,
        "productId": 1,
        "total": 1999.98,
        "status": "processing"
      }
    ]
    ```

- **Get Order by ID**

  - **Request:** `GET /orders/:orderId`
  - **Response:**
    ```json
    {
      "id": 1,
      "userId": 1,
      "productId": 2,
      "total": 1999.98,
      "status": "processing"
    }
    ```

- **Create Order**

  - **Request:** `POST /orders`
    ```json
    {
      "userId": 1,
      "productId": 1,
      "total": 1999.98,
      "status": "processing"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "userId": 1,
      "productId": 1,
      "total": 1999.98,
      "status": "processing"
    }
    ```

- **Update Order**

  - **Request:** `PUT /orders/:orderId`
    ```json
    {
      "status": "shipped"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "userId": 1,
      "productId": 1,
      "total": 1999.98,
      "status": "shipped"
    }
    ```

- **Delete Order**
  - **Request:** `DELETE /orders/:orderId`
  - **Response:**
    ```json
    {
      "message": "Order deleted"
    }
    ```

### Qo'shimcha Talablar

- **Product** o'chirilganda, uning barcha **Order**lari ham yangilanib, o'sha product buyurtmadan olib tashlanishi kerak.
- **User** o'chirilganda, uning barcha **Order**lari ham o'chirilishi kerak.
- Endpointlar faqat ma'lumotlar bazasi bilan ishlashi kerak.
- `application/json` formati so'rov va javoblar uchun ishlatilishi kerak.
- Kodni alohida fayllarga ajrating (ilova yaratish, routerlar, database va biznes mantiqi).
- Projectni ishga tushirish uchun `npm start` buyrug'ini ishlating.
- Xizmat 4000-portda tinglash kerak.