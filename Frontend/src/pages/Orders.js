import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );

  const [filteredOrders, setFilteredOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [expandedOrders, setExpandedOrders] = useState({});

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${
        getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
      }`,
      Accept: "application/json",
      "ngrok-skip-browser-warning": "69420"
    },
  };

  useEffect(() => {
    dispatch(getOrders(config2));
  }, [dispatch, config2]);

  useEffect(() => {
    if (orderState) {
      setFilteredOrders(
        statusFilter
          ? orderState.filter((order) => order.orderStatus === statusFilter)
          : orderState
      );
    }
  }, [orderState, statusFilter]);

  const toggleExpandOrder = (orderId) => {
    setExpandedOrders((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Ordered":
        return { backgroundColor: "#D3D3D3", color: "black", padding: "5px 10px", borderRadius: "5px" };
      case "Processed":
        return { backgroundColor: "#A9A9A9", color: "black", padding: "5px 10px", borderRadius: "5px" };
      case "Shipped":
        return { backgroundColor: "#FFD700", color: "black", padding: "5px 10px", borderRadius: "5px" };
      case "Out for Delivery":
        return { backgroundColor: "#FFD700", color: "black", padding: "5px 10px", borderRadius: "5px" };
      case "Delivered":
        return { backgroundColor: "#90EE90", color: "black", padding: "5px 10px", borderRadius: "5px" };
      case "Cancelled":
        return { backgroundColor: "#FF0000", color: "black", padding: "5px 10px", borderRadius: "5px" }; // Changed to red
      default:
        return { backgroundColor: "white", color: "black", padding: "5px 10px", borderRadius: "5px" };
    }
  };

  const styles = {
    orderList: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      backgroundColor: "#fff",
      borderRadius: "8px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    orderHeader: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderBottom: "1px solid #ccc",
      backgroundColor: "#f7f7f7",
    },
    orderColumn: {
      flex: 1,
      textAlign: "center",
    },
    orderItem: {
      marginBottom: "20px",
      borderRadius: "8px",
      overflow: "hidden",
      border: "1px solid #ccc",
    },
    orderProducts: {
      backgroundColor: "#fff",
      color: "#000",
      padding: "10px 20px",
    },
    productHeader: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #ccc",
    },
    productItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderBottom: "1px solid #eee",
    },
    productColumn: {
      flex: 1,
      textAlign: "center",
    },
    colors: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
    colorItem: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      display: "inline-block",
    },
    filterContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    filterSelect: {
      padding: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    orderDetails: {
      padding: "10px 20px",
      backgroundColor: "#f7f7f7",
      borderBottom: "1px solid #ccc",
    },
    orderDetailsColumn: {
      textAlign: "left",
      paddingBottom: "10px",
    },
    detailSection: {
      marginBottom: "10px",
    },
    toggleButton: {
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "50%",
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  return (
    <>
      <BreadCrumb title="My Orders" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div style={styles.filterContainer}>
          <select
            style={styles.filterSelect}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Ordered">Ordered</option>
            <option value="Shipped">Shipped</option> 
            <option value="Processed">Processed</option>
            <option value="Out for Delivery">Out for Delivery</option>  
            <option value="Delivered">Delivered</option> 
            <option value="Cancelled">Cancelled</option> 
          </select>
        </div>
        <div style={styles.orderList}>
          <div style={styles.orderHeader}>
            <div style={styles.orderColumn}>
              <h5>ID</h5>
            </div>
            <div style={styles.orderColumn}>
              <h5>Tình trạng đơn hàng</h5>
            </div>
            <div style={styles.orderColumn}>
              <h5>Đơn giá</h5>
            </div>
            <div style={styles.orderColumn}>
              <h5>Ngày đặt</h5>
            </div>
            <div style={styles.orderColumn}>
              <h5>Tổng tiền sau giảm giá</h5>
            </div>
            <div style={styles.orderColumn}>
              <h5></h5>
            </div>
          </div>

          <div className="order-content">
            {filteredOrders &&
              filteredOrders?.map((item, index) => {
                return (
                  <div style={styles.orderItem} key={index}>
                    <div className="order-details" style={styles.orderDetails}>
                      <div style={styles.orderHeader}>
                        <div style={styles.orderColumn}>
                          <p>{item?._id}</p>
                        </div>
                        <div style={styles.orderColumn}>
                          <p style={getStatusStyle(item?.orderStatus)}>
                            {item?.orderStatus}
                          </p>
                        </div>
                        <div style={styles.orderColumn}>
                          <p>{item?.totalPrice.toLocaleString("vi-VN")} ₫</p>
                        </div>
                        <div style={styles.orderColumn}>
                          <p>{new Date(item?.createdAt).toLocaleString()}</p>
                        </div>
                        <div style={styles.orderColumn}>
                          <p>{item?.totalPriceAfterDiscount.toLocaleString("vi-VN")} ₫</p>
                        </div>
                        <div style={styles.orderColumn}>
                          <button
                            style={styles.toggleButton}
                            onClick={() => toggleExpandOrder(item?._id)}
                          >
                            {expandedOrders[item?._id] ? "-" : "+"}
                          </button>
                        </div>
                      </div>
                      {expandedOrders[item?._id] && (
                        <>
                          <div style={styles.detailSection}>
                            <h5>Thông tin thanh toán</h5>
                            <p>Hình thức thanh toán: {item.paymentMethod}</p>
                          </div>
                          <div style={styles.detailSection}>
                            <h5>Thông tin vận chuyển</h5>
                            <p>Tình trạng: {item.orderStatus}</p>
                            <h6 style={{color: "red"}}>If you have a request to cancel an order. Please contact an advisor !!!</h6>
                          </div>
                          <div style={styles.detailSection}>
                            <h5>Thông tin người nhận</h5>
                            <p>Người nhận: {item.shippingInfo.firstname} {item.shippingInfo.lastname}</p>
                            <p>Số điện thoại: {item.shippingInfo.pincode}</p>
                            <p>Địa chỉ giao hàng: {item.shippingInfo.address}, {item.shippingInfo.city}, {item.shippingInfo.state}, {item.shippingInfo.country}</p>
                          </div>
                          <div style={styles.orderProducts}>
                            <h5>Chi Tiết Sản Phẩm</h5>
                            <div style={styles.productHeader}>
                              <div style={styles.productColumn}>
                                <h6>Tên sản phẩm</h6>
                              </div>
                              <div style={styles.productColumn}>
                                <h6>Hình ảnh</h6>
                              </div>
                              <div style={styles.productColumn}>
                                <h6>Color</h6>
                              </div>
                              <div style={styles.productColumn}>
                                <h6>Số lượng</h6>
                              </div>
                              <div style={styles.productColumn}>
                                <h6>Đơn giá</h6>
                              </div>
                              <div style={styles.productColumn}>
                                <h6>Tổng tiền</h6>
                              </div>
                            </div>
                            {item?.orderItems?.map((i, index) => {
                              return (
                                <div style={styles.productItem} key={index}>
                                  <div style={styles.productColumn}>
                                    <p>{i?.product?.title}</p>
                                  </div>
                                  <div style={styles.productColumn}>
                                    <img
                                      src={i?.product?.images[0]?.url}
                                      width={50}
                                      height={50}
                                      alt="product"
                                    />
                                  </div>
                                  <div style={styles.productColumn}>
                                    <ul style={styles.colors}>
                                      <li
                                        style={{
                                          ...styles.colorItem,
                                          backgroundColor: i?.color?.title,
                                        }}
                                      ></li>
                                    </ul>
                                  </div>
                                  <div style={styles.productColumn}>
                                    <p>{i?.quantity}</p>
                                  </div>
                                  <div style={styles.productColumn}>
                                    <p>{i?.price.toLocaleString("vi-VN")} ₫</p>
                                  </div>
                                  <div style={styles.productColumn}>
                                  <p>{item?.totalPriceAfterDiscount.toLocaleString("vi-VN")} ₫</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
