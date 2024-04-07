import React from "react";

function Card(props) {

  let options = props.options;
  let choice = Object.keys(options[0])
  // console.log(choice);
  // console.log(options)



  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">this is some imp doc</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
              {choice.map((data)=>{
                // console.log(data);
                return(
                  <option key={data} value={data}>{data}</option>
                )
              })}
            </select>
            <div>Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
