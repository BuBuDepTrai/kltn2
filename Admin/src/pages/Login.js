import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authSlice";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    } else {
      navigate("");
    }
  }, [user, isError, isSuccess, isLoading]);

  return (
    <div style={styles.loginContainer}>
      <div style={styles.loginLeft}>
        <div style={styles.loginIllustration}></div>
      </div>
      <div style={styles.loginRight}>
        <div style={styles.loginFormContainer}>
          <h3 style={styles.loginTitle}>Wecome</h3>
          <form onSubmit={formik.handleSubmit}>
            <CustomInput
              type="text"
              label="Nhập email"
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
              label="密码"
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
              <label htmlFor="rememberMe">记住密码</label>
            </div>
            <button style={styles.loginButton} type="submit">
              登录
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: "flex",
    minHeight: "100vh",
  },
  loginLeft: {
    flex: 1,
    background: "linear-gradient(to right, #6441a5, #2a0845)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginIllustration: {
    backgroundImage: 'url("https://i.imgur.com/cbnTHN9.jpeg")', // Hình mẫu, thay thế bằng hình của bạn
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "80%",
    height: "80%",
  },
  loginRight: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
  },
  loginFormContainer: {
    width: "80%",
    maxWidth: "400px",
    background: "#fff",
    padding: "40px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  loginTitle: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  error: {
    marginTop: "10px",
    color: "red",
    textAlign: "center",
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },
  loginButton: {
    width: "100%",
    background: "#6441a5",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  loginButtonHover: {
    background: "#2a0845",
  },
  registerLink: {
    textAlign: "center",
    marginTop: "20px",
  },
};

export default Login;
