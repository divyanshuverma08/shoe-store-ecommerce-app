"use client";

import React, { useState } from "react";
import styles from "./checkout.module.css";
import OrderSummary from "@/components/orderSummary/orderSummary";
import Link from "next/link";
import Input from "@/components/input/input";

export default function CheckOut() {
  const [deliveryType, setDeliveryType] = useState("standard");

  const onValueChange = (e) => {
    console.log(e.target.value);
    setDeliveryType(e.target.value);
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutDetails}>
        <Link className={styles.link} href="/login">
          Login and Checkout faster
        </Link>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionHeaderTitle}>Contact Details</h2>
            <p className={styles.sectionHeaderContent}>
              We will use these details to keep you inform about your delivery.
            </p>
          </div>
          <div className={styles.sectionInputs}>
            <Input
              className={styles.sectionInput}
              placeholder={"Email"}
              type={"text"}
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
                className={styles.sectionInput}
                placeholder={"First Name*"}
                type={"text"}
              />
              <Input
                className={styles.sectionInput}
                placeholder={"Last Name*"}
                type={"text"}
                required={true}
              />
            </div>
            <div className={styles.inputContainer}>
              <Input
                placeholder={"Delivery Address*"}
                type={"text"}
                required={true}
              />
              <p className={styles.inputSuggestion}>
                Start typing your street address or zip code for suggestion
              </p>
            </div>
            <div className={styles.inputContainer}>
              <Input placeholder={"Landmark*"} type={"text"} required={true} />
              <p className={styles.inputSuggestion}>
                Company, Apartment, Building, etc.
              </p>
            </div>
            <div className={styles.sectionInputsFlex}>
              <Input
                className={styles.sectionInput}
                placeholder={"City*"}
                type={"text"}
                required={true}
              />
              <select
                defaultValue="default"
                className={styles.inputSelect}
                name="state"
                id="state"
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
                <Input placeholder={"Pincode*"} type={"text"} required={true} />
                <p className={styles.inputSuggestion}>E.g. 110001</p>
              </div>
              <div className={styles.inputContainerFlex}>
                <Input
                  placeholder={"Phone Number*"}
                  type={"text"}
                  required={true}
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
                deliveryType.localeCompare("standard") === 0
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => setDeliveryType("standard")}
            >
              <div className={styles.deliveryOptionContainer}>
                <h3>Standard Delivery</h3>
                <p>It will take 5-7 days to reach you door step</p>
              </div>
              <p className={styles.deliveryCost}>Free</p>
            </div>
            <div
              className={`${styles.delivery} ${
                deliveryType.localeCompare("fast") === 0
                  ? styles.selected
                  : styles.unselected
              }`}
              onClick={() => setDeliveryType("fast")}
            >
              <div className={styles.deliveryOptionContainer}>
                <h3>Fast Delivery</h3>
                <p>You will get your order in 2 days</p>
              </div>
              <p className={styles.deliveryCost}>$6.99</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionInputs}>
          <div className={styles.inputCheckBox}>
            <input type="checkbox" name="addressSame" id="addressSame" />
            <label htmlFor="addressSame">
              My billing and delivery information are the same
            </label>
          </div>
          <div className={styles.inputCheckBox}>
            <input type="checkbox" name="age" id="age" />
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
        <button className={styles.checkoutButton}>Review AND PAY</button>
      </div>
      <div className={styles.orderDetails}>
        <OrderSummary />
      </div>
    </div>
  );
}
