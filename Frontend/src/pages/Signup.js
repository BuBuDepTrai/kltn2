import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import logo from "../assets/Black Circle Icon Business Logo (3).png"; // Adjust the path according to your project structure

// Updated Yup schema
let signUpSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  mobile: yup
    .string()
    .matches(/^(\d{10})$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is Required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is Required"),
});

const Signup = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
      // Optionally navigate on successful registration
    },
  });

  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <div className="text-center mb-3">
                <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
              </div>
              <h3 className="text-center mb-3">Sign Up</h3>
              <form
                className="d-flex flex-column gap-15"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="FirstName"
                  value={formik.values.firstname}
                  onChange={formik.handleChange('firstname')}
                  onBlur={formik.handleBlur('firstname')}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="LastName"
                  value={formik.values.lastname}
                  onChange={formik.handleChange('lastname')}
                  onBlur={formik.handleBlur('lastname')}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange('email')}
                  onBlur={formik.handleBlur('email')}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange('mobile')}
                  onBlur={formik.handleBlur('mobile')}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange('password')}
                  onBlur={formik.handleBlur('password')}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button type="submit" className="button border-0">Sign Up</button>
                  <Link to="/login" className="button signup">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
