const UploadProduct = () => {
  return(
    <div>
      <h1>Upload Product</h1>

      <form>
        <div>
          <label>Product name</label>
          <input type="text" name="product-name" id="" />
        </div>
        <div>
          <label>Product Image</label>
          <input type="text" name="product-image" id="" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" id="" />
        </div>
        <div>
          <label>Price</label>
          <input type="text" name="price" id="" />
        </div>
        <div>
          <label>Quantity</label>
          <input type="text" name="quantity" id="" />
        </div>
        <div>
          <label>Category</label>
          <input type="text" name="category" id="" />
        </div>
        <button type="submit">sumbit</button>
      </form>
    </div>
  )
}

export default UploadProduct;