"use client";

import React from "react";
import styles from "./input.module.css";

export default function Input({ type, placeholder, value, name, onChange, className,required }) {
  return (
    <input
      className={`${styles.input} ${className ? className : styles.width}`}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={(e)=>onChange(e)}
      required={required}
    />
  );
}
