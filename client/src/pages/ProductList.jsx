import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GetProductList } from "../APIRequest/ApiRequest";

const ProductList = () => {
  let [searchKey, setSearchKey] = useState("0");
  let [perPageKey, setPerPageKey] = useState(10);

  useEffect(() => {
    GetProductList(1, perPageKey, searchKey);
  }, []);

  let ALLProduct = useSelector((state) => state.product.ALLProduct);
  let Total = useSelector((state) => state.product.Total);
  // console.log(ALLProduct)
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <h5 className="text-primary">My Product List</h5>
                    </div>
                    <div className="col-2"></div>
                    <div className="col-4">
                      <div className="input-group mb-3"></div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive data-table">
                        {/* <table className="table">
                          <thead className="sticky-top bg-white">
                            <tr>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Product
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Price
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Stock
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Code
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ALLProduct?.map((item, i) => (
                              <tr>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div>
                                      <img
                                        src={item.image_link}
                                        className="avatar me-3"
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0  text-xs">
                                        {item.name}
                                      </h6>
                                      <p className="text-xs  text-secondary mb-0">
                                        {item.category}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.brand}
                                  </p>
                                  <p className="text-xs  text-secondary mb-0">
                                    {item.price} Taka{" "}
                                  </p>
                                </td>
                                <td>
                                  <p className="badge  bg-gradient-success">
                                    {item.stock}
                                  </p>
                                </td>
                                <td>
                                  <span className="text-secondary text-xs font-weight-bold">
                                    {item.product_code}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table> */}
                        <table className="table table-hover">
                          <thead className="sticky-top bg-white">
                            <tr>
                              <th className="text-uppercase text-primary font-weight-bolder opacity-7">
                                Product
                              </th>
                              <th className="text-uppercase text-primary font-weight-bolder opacity-7">
                                Name
                              </th>
                              <th className="text-uppercase text-primary  font-weight-bolder opacity-7 ps-2">
                                Price
                              </th>
                              <th className="text-uppercase text-primary  font-weight-bolder opacity-7 ps-2">
                                Brand
                              </th>
                              <th className="text-uppercase text-primary  font-weight-bolder opacity-7 ps-2">
                                Category
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ALLProduct?.map((item, i) => (
                              <tr key={i.toString()}>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div>
                                      <img
                                        src={item.image_link}
                                        className="avatar me-3"
                                        width="50"
                                        height="50"
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0 text-sm">
                                        {item.name}
                                      </h6>
                                      <p className="text-sm text-muted mb-0">
                                        {item.category}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-sm font-weight-bold mb-0">
                                    {item.name}
                                  </p>
                                </td>

                                <td>
                                  <p className="text-sm text-muted mb-0">
                                    {item.price} Taka{" "}
                                  </p>
                                </td>
                                <td>
                                  <p className="text-sm font-weight-bold mb-0">
                                    {item.brand}
                                  </p>
                                </td>
                                <td>
                                  <span className="text-muted text-sm font-weight-bold">
                                    {item.category}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-12 mt-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
