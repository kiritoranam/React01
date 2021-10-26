import './editproduct.css';

const EditProduct = () => {
    return (
        <form>
            <div>
                <h1>Edit Product Id :3</h1>
            </div>
            <div>
                <label htmlfor='name'>Name</label>
                <input type='text' id='name' />
            </div>
            <div>
                <label htmlfor='description'>Description</label>
                <input type='text' id='description' />
            </div>
            <div>
                <label htmlfor='price'>Price</label>
                <input type='number' id='price' />
            </div>
            <div>
                <button>Save</button>
                <button>Cancel</button>
            </div>
        </form>
    );
};

export default EditProduct;