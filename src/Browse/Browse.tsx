import React from 'react';
import {Link} from "react-router-dom";

export const Browse = () => (
    <div>
      <Link className="Link-item" to="/products">Products</Link>
      <Link className="Link-item" to="/orders">Orders</Link>
    </div>
);