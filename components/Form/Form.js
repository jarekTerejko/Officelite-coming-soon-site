import React from "react";
import {
  ContactFormEl,
  ContactFormLabel,
  ContactFormTextInput,
  ContactFormRow,
  ContactFormSelect,
  ContactFormBtn,
  ContactFormErrorMsg,
} from "./FormElements";
import IconArrowDown from "../../public/assets/sign-up/icon-arrow-down.svg";
import IconCross from "../../public/assets/sign-up/icon-cross.svg";
import IconCheck from "../../public/assets/sign-up/icon-check.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

const Form = () => {
  const router = useRouter();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const selectOptions = [
    { optionName: "Choose Pack", optionValue: "" },
    { optionName: "Basic Pack Free", optionValue: "Basic Pack Free" },
    { optionName: "Pro Pack $9.99", optionValue: "Pro Pack $9.99" },
    { optionName: "Ultimate Pack $19.99", optionValue: "Ultimate Pack $19.99" },
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      pack: "",
      phoneNumber: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Max charracters is 20")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      pack: Yup.string().required("Pack is required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Phone Number is required"),
      company: Yup.string().required("Company is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });

  return (
    <ContactFormEl onSubmit={formik.handleSubmit}>
      <ContactFormRow>
        <ContactFormLabel htmlFor="firstName">Name</ContactFormLabel>
        <ContactFormTextInput
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <img src={IconCross.src} className="cross-icon" />
        ) : null}
        {formik.touched.name && !formik.errors.name ? (
          <img src={IconCheck.src} className="check-icon" />
        ) : null}
        {formik.touched.name && formik.errors.name ? (
          <ContactFormErrorMsg>{formik.errors.name}</ContactFormErrorMsg>
        ) : null}
      </ContactFormRow>
      <ContactFormRow>
        <ContactFormLabel htmlFor="email">Email Address</ContactFormLabel>
        <ContactFormTextInput
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <img src={IconCross.src} className="cross-icon" />
        ) : null}
        {formik.touched.email && !formik.errors.email ? (
          <img src={IconCheck.src} className="check-icon" />
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <ContactFormErrorMsg>{formik.errors.email}</ContactFormErrorMsg>
        ) : null}
      </ContactFormRow>
      <ContactFormRow>
        <ContactFormLabel htmlFor="pack"></ContactFormLabel>
        <img src={IconArrowDown.src} className="icon-arrow-down" alt="" />
        <ContactFormSelect
          name="pack"
          value={formik.values.pack}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {selectOptions.map((option) => {
            return (
              <option value={option.optionValue}>{option.optionName}</option>
            );
          })}
        </ContactFormSelect>
        {formik.touched.pack && formik.errors.pack ? (
          <ContactFormErrorMsg>{formik.errors.pack}</ContactFormErrorMsg>
        ) : null}
      </ContactFormRow>
      <ContactFormRow>
        <ContactFormLabel htmlFor="firstName">Phone Number</ContactFormLabel>
        <ContactFormTextInput
          type="text"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <img src={IconCross.src} className="cross-icon" />
        ) : null}
        {formik.touched.phoneNumber && !formik.errors.phoneNumber ? (
          <img src={IconCheck.src} className="check-icon" />
        ) : null}
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <ContactFormErrorMsg>{formik.errors.phoneNumber}</ContactFormErrorMsg>
        ) : null}
      </ContactFormRow>
      <ContactFormRow>
        <ContactFormLabel htmlFor="firstName">Company</ContactFormLabel>
        <ContactFormTextInput
          type="text"
          name="company"
          value={formik.values.company}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.company && formik.errors.company ? (
          <img src={IconCross.src} className="cross-icon" />
        ) : null}
        {formik.touched.company && !formik.errors.company ? (
          <img src={IconCheck.src} className="check-icon" />
        ) : null}
        {formik.touched.company && formik.errors.company ? (
          <ContactFormErrorMsg>{formik.errors.company}</ContactFormErrorMsg>
        ) : null}
      </ContactFormRow>
      <ContactFormBtn as="button" type="submit">
        Get on the list
      </ContactFormBtn>
    </ContactFormEl>
  );
};

export default Form;
