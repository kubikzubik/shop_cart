function GoodsItem(props) {
    const id = props.offerId;
    const name = props.displayName;
    const description = props.displayType;
    const price = props.price.finalPrice;
    const addToBasket = props.addToBasket;

    return (
        <div className="card" id={id}>
            <div className="card-image">
            </div>
            <div className="card-content">
                <h6>{name}</h6>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button className="btn #1565c0 blue-grey" onClick={() => addToBasket({id, name, price})} >Добавить в корзину</button>
                <h5 className="right">{price}</h5>
            </div>
        </div>
    );
}
export {GoodsItem};