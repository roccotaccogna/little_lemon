import Wall from "../assets/image/wall.jpg";

export default function Order(){
    return (
        <header className="reserve-table">
        <img
          className="header-reserve"
          src={Wall}
          alt="Little Lemon Ingredients"
        ></img>
        <div className="reserve-header-text">
          <h1>Order</h1>
        </div>
      </header>
    )
}