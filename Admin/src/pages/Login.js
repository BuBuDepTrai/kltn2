import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";
import logo from "../assets/Black Circle Icon Business Logo (3).png"; // Adjust the path as needed
import { ToastContainer } from "react-toastify";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });
  const authState = useSelector((state) => state);

  const { user, isError, isSuccess, isLoading, message } = authState.auth;

  useEffect(() => {
    if (isSuccess) {
      window.location.href = "/admin";
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='light' />
      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <div style={styles.leftContent}>
            <h1>A2K</h1>
          </div>
        </div>
        <div style={styles.rightPanel}>
          <div style={styles.loginFormContainer}>
            <img src={logo} alt="A2K Logo" style={styles.logo} />
            <h3 style={styles.loginTitle}>Welcome to A2K</h3>
            <form onSubmit={formik.handleSubmit}>
              <CustomInput
                type="text"
                label="email"
                id="email"
                name="email"
                onChng={formik.handleChange("email")}
                onBlr={formik.handleBlur("email")}
                val={formik.values.email}
              />
              <div style={styles.error}>
                {formik.touched.email && formik.errors.email}
              </div>
              <CustomInput
                type="password"
                label="password"
                id="pass"
                name="password"
                onChng={formik.handleChange("password")}
                onBlr={formik.handleBlur("password")}
                val={formik.values.password}
              />
              <div style={styles.error}>
                {formik.touched.password && formik.errors.password}
              </div>
              <div style={styles.rememberMe}>
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <button style={styles.loginButton} type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "'Arial', sans-serif",
  },
  leftPanel: {
    flex: 1,
    backgroundColor: "#4CA2CD",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  leftContent: {
    textAlign: "center",
  },
  rightPanel: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormContainer: {
    width: "80%",
    maxWidth: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center", // Center content
  },
  logo: {
    width: "150px", // Adjust the size as needed
    marginBottom: "20px", // Space between logo and title
  },
  loginTitle: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  error: {
    marginTop: "10px",
    color: "red",
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    justifyContent: "center", // Center checkbox and label
  },
  loginButton: {
    width: "100%",
    backgroundColor: "#4CA2CD",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  registerLink: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Login;
