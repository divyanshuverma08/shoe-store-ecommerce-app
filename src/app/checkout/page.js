"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./checkout.module.css";
import Link from "next/link";
import Input from "@/components/input/input";
import { products } from "@/lib/services/products";
import { useDispatch, useSelector } from "react-redux";
import {
  loadProduct,
  getTotalAmount,
  selectDeliveryType,
  emptyCart
} from "@/redux/cartSlice";
import { order } from "../../lib/services/order";
import toast from "react-hot-toast";

const OrderSummary = dynamic(()=>import("@/components/orderSummary/orderSummary"),{ssr: false});

export default function CheckOut() {
  const dispatch = useDispatch();

  const [mounted,setMounted] = useState(false);

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.currentUser);

  const [deliveryType, setDeliveryType] = useState("Standard");
  const [userData, setUserData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    deliveryAddress: "",
    landmark: "",
    city: "",
    state: "default",
    pincode: "",
    phoneNumber: "",
  });
  const [billingSame, setBillingSame] = useState(false);
  const [olderThan13, setOlderThan13] = useState(false);

  const onDeliveryChange = (value) => {
    setDeliveryType(value);
    dispatch(selectDeliveryType(value));
  };

  useEffect(() => {
    if (cart) {
      getCartProducts();
    }

    if (user) {
      setUserData((prevValue) => {
        return {
          ...prevValue,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        };
      });
    }

    setMounted(true);
  }, []);

  const getCartProducts = async () => {
    let items = cart.products;

    if (cart.products.length < 1) {
      return;
    }

    try {
      await Promise.all(
        items.map(async (item) => {
          const product = await products.getProductById({
            id: item.id,
            auth: false,
          });

          const size = product.data.sizes.find(
            ({ size }) => item.size === size
          );

          dispatch(
            loadProduct({
              id: item.id,
              size: item.size,
              model: product.data.model,
              category: product.data.category.name,
              gender: product.data.gender,
              color: product.data.color,
              price: product.data.price,
              availableStock: size.quantity,
            })
          );
        })
      );

      dispatch(getTotalAmount());
    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const handleSubmit = async () => {

    if(cart.products.length < 1){
      toast.error("Please add products to your cart");
      return;
    }

    const {
      email,
      firstName,
      lastName,
      deliveryAddress,
      landmark,
      city,
      state,
      pincode,
      phoneNumber,
    } = userData;

    if (
      !email ||
      !firstName ||
      !lastName ||
      !deliveryAddress ||
      !landmark ||
      !city ||
      !pincode ||
      !phoneNumber
    ) {
      toast.error("Please fill the mandatory fields");
      return;
    }

    if (state === "default") {
      toast.error("Please select a state");
      return;
    }

    if (phoneNumber.length != 10) {
      toast.error("Provide valid phone number");
      return;
    }

    if (!billingSame) {
      toast.error("Please check the billing address checkbox");
      return;
    }

    if (!olderThan13) {
      toast.error(
        "You can only only place order if you care older than 13 years"
      );
      return;
    }

    try {
      const toastId = toast.loading("Loading...", { position: "top-left" });

      let response;

      const items = cart.products.map((product) => {
        return {
          product: product.id,
          size: product.size,
          quantity: product.quantity,
        };
      });

      if (user) {
        response = await order.createOrder({
          data: {
            ...userData,
            items,
            deliveryType,
            phoneNumber: parseInt(userData.phoneNumber),
          },
          auth: true,
        });
        
      } else {
        response = await order.createOrder({
          data: {
            ...userData,
            items,
            deliveryType,
            phoneNumber: parseInt(userData.phoneNumber),
          },
          auth: false,
        });
      }

      const orderId = response.data._id;

      dispatch(emptyCart());

      toast.dismiss(toastId);
      toast.success("Order created");

      let checkoutResponse;

      if(user){
        checkoutResponse = await order.createCheckout({id:orderId,auth: true});
      }else{
        checkoutResponse = await order.createCheckout({id:orderId,auth: false});
      }

      window.location.replace(checkoutResponse.data.url);

    } catch (error) {
      const err = error.response?.data?.message || "Something went wrong...";
      toast.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutDetails}>
        {mounted && !user && (
          <Link className={styles.link} href="/login">
            Login and Checkout faster
          </Link>
        )}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Contact Details</h2>
            <p className={styles.sectionHeaderContent}>
              We will use these details to keep you inform about your delivery.
            </p>
          </div>
          <div className={styles.sectionInputs}>
            <Input
              name={"email"}
              className={styles.sectionInput}
              placeholder={"Email"}
              type={"email"}
              value={userData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Shipping Address</h2>
          </div>
          <div className={styles.sectionInputs}>
            <div className={styles.sectionInputsFlex}>
              <Input
                name={"firstName"}
                className={styles.sectionInput}
                placeholder={"First Name*"}
                type={"text"}
                value={userData.firstName}
                onChange={handleChange}
              />
              <Input
                name={"lastName"}
                className={styles.sectionInput}
                placeholder={"Last Name*"}
                type={"text"}
                required={true}
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                name={"deliveryAddress"}
                placeholder={"Delivery Address*"}
                type={"text"}
                required={true}
                value={userData.deliveryAddress}
                onChange={handleChange}
              />
              <p className={styles.inputSuggestion}>
                Start typing your street address or zip code for suggestion
              </p>
            </div>
            <div className={styles.inputContainer}>
              <Input
                name={"landmark"}
                placeholder={"Landmark*"}
                type={"text"}
                required={true}
                value={userData.landmark}
                onChange={handleChange}
              />
              <p className={styles.inputSuggestion}>
                Company, Apartment, Building, etc.
              </p>
            </div>
            <div className={styles.sectionInputsFlex}>
              <Input
                name={"city"}
                className={styles.sectionInput}
                placeholder={"City*"}
                type={"text"}
                required={true}
                value={userData.city}
                onChange={handleChange}
              />
              <select
                name={"state"}
                value={userData.state}
                className={styles.inputSelect}
                id="state"
                onChange={handleChange}
              >
                <option disabled value="default">
                  State
                </option>
                <option value="andamanandnicobarislands">
                  Andaman and Nicobar Islands
                </option>
                <option value="andhrapradesh">Andhra Pradesh</option>
                <option value="arunachalpradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="dadraandnagarhavelianddamananddiu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="delhi">Delhi</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachalpradesh">Himachal Pradesh</option>
                <option value="jammuandkashmir">Jammu and Kashmir</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="ladakh">Ladakh</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="madhyapradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="puducherry">Puducherry</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamilnadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttarpradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="westbengal">West Bengal</option>
              </select>
            </div>
            <div className={styles.sectionInputsFlex}>
              <div className={styles.inputContainerFlex}>
                <Input
                  name={"pincode"}
                  placeholder={"Pincode*"}
                  type={"number"}
                  required={true}
                  value={userData.pincode}
                  onChange={handleChange}
                />
                <p className={styles.inputSuggestion}>E.g. 110001</p>
              </div>
              <div className={styles.inputContainerFlex}>
                <Input
                  name={"phoneNumber"}
                  placeholder={"Phone Number*"}
                  type={"number"}
                  required={true}
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
                <p className={styles.inputSuggestion}>E.g. 9825637XXX</p>
              </div>
            </div>
            <div className={styles.inputInfo}>
              <p>Country:</p>
              <p>India</p>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Delivery Options</h2>
          </div>
          <div className={styles.sectionInputs}>
            <div
              className={`${styles.delivery} ${
                deliveryType.localeCompare("Standard") === 0
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => onDeliveryChange("Standard")}
            >
              <div className={styles.deliveryOptionContainer}>
                <h3>Standard Delivery</h3>
                <p>It will take 5-7 days to reach you door step</p>
              </div>
              <p className={styles.deliveryCost}>Free</p>
            </div>
            <div
              className={`${styles.delivery} ${
                deliveryType.localeCompare("Fast") === 0
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => onDeliveryChange("Fast")}
            >
              <div className={styles.deliveryOptionContainer}>
                <h3>Fast Delivery</h3>
                <p>You will get your order in 2 days</p>
              </div>
              <p className={styles.deliveryCost}>₹100</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionInputs}>
          <div className={styles.inputCheckBox}>
            <input
              type="checkbox"
              name="addressSame"
              id="addressSame"
              checked={billingSame}
              onChange={(e) => setBillingSame(e.target.checked)}
            />
            <label htmlFor="addressSame">
              My billing and delivery information are the same
            </label>
          </div>
          <div className={styles.inputCheckBox}>
            <input
              type="checkbox"
              name="age"
              id="age"
              checked={olderThan13}
              onChange={(e) => setOlderThan13(e.target.checked)}
            />
            <label htmlFor="age">I’m 13+ year old</label>
          </div>
          <div className={styles.inputCheckBoxContainer}>
            <p>Also want product updates with our newsletter?</p>
            <div className={styles.inputCheckBox}>
              <input type="checkbox" name="news" id="news" />
              <label htmlFor="news">
                Yes, I’d like to receive emails about exclusive sales and more.
              </label>
            </div>
          </div>
        </div>
        <button className={styles.checkoutButton} onClick={handleSubmit}>
          Review AND PAY
        </button>
      </div>
      <div className={styles.orderDetails}>
        <OrderSummary />
      </div>
    </div>
  );
}
