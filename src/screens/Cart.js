import React from 'react';
// import trash from "../trash.svg";
import { useCart, useDispatchCart } from '../components/ContextReducer';

export const Cart = () => {
    let data = useCart();
    // console.log(data);
    let dispatch = useDispatchCart();
    if(data.length === 0) {
        return(
            <div>
                <div className='m-5 w-100 text-center fs-3 text-white'>The Cart is Empty</div>
            </div>
        )
    }

    const handleCheckout = async() => {
        let userEmail = localStorage.getItem("userEmail");
        console.log(userEmail);
        let response = await fetch("http://localhost:5000/api/orderData",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order_data: data,
                email:userEmail,
                order_date:new Date().toDateString()
            })
        }
    );
    if(response.status===200){
        dispatch({type: "DROP"})
    }
    }


    let totalPrice = data.reduce((total,item)=> total + item.price,0);

  return (
    <div>
        <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
            <table className='table table-hover'>
                <thread className='text-success fs-4'>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Quantity</th>
                        <th scope='col'>Option</th>
                        <th scope='col'>Amount</th>
                        <th scope='col'></th>
                    </tr>
                </thread>
                <tbody>
            {data.map((item, index) => (
              <tr className='bg-danger  text-white'>
                <th scope='row' >{index + 1}</th>
                <td >{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.size}</td>
                <td>{item.price}</td>
                <td ><button type="button" className="btn p-0"><img src='' alt='delete' onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
            </table>
            <div><h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1></div>
            <div>
                <button className='btn bg-success mt-5 text-white' onClick={handleCheckout}>Check Out</button>
            </div>
        </div>
    </div>
  )
}
