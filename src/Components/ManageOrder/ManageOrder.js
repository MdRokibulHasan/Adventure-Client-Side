import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';

const ManageOrder = () => {

    const [order, setOrder] = useState();
    useEffect(() => {
        fetch('https://frozen-fjord-73803.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data));
    }, []);
    console.log("pace", order);
    return (




        <>
            <div className="text-center m-5">
                <h1>All User Order Page</h1>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Package</th>
                        <th scope="col">Address</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        order?.map((iteam, index) => (<Order
                            key={iteam._id}
                            sl={index}
                            iteam={iteam}
                        > </Order>))
                    }

                </tbody>
            </table>
        </>









        /*   <div>
              <h1 className="text-center m-5">This is all user order</h1>
  
              {
                  order?.map(iteam => <Order
                      key={iteam._id}
                      iteam={iteam}
                  > </Order>)
              }
          </div> */
    );
};

export default ManageOrder;