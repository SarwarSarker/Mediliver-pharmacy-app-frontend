import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { loginUser, reset } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      dispatch(reset());
      navigate(from, { replace: true });
    }
  }, [user, isError, isSuccess, message, navigate, dispatch, from]);

  const initialvalues = {
    email: "",
    password: "",
  };

  const validateSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    dispatch(loginUser({ email, password }));
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Login</h1>
                  <p className="text-muted">Log In to your account</p>
                  <Formik
                    initialValues={initialvalues}
                    validationSchema={validateSchema}
                    onSubmit={handleLogin}
                  >
                    <Form>
                      <div className="input-group mb-3">
                        <div className="input-group-text">
                          <i className="fa fa-user"></i>
                        </div>
                        <Field
                          type="email"
                          className="form-control w-75 outline-none"
                          placeholder="Email Address"
                          name="email"
                        />
                        <ErrorMessage
                          name="email"
                          className="text-danger mt-1"
                          component="div"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <div className="input-group-text">
                          <i className="fa fa-lock"></i>
                        </div>
                        <Field
                          type="password"
                          className="form-control w-75"
                          placeholder="Password"
                          name="password"
                        />
                        <ErrorMessage
                          name="password"
                          className="text-danger mt-1"
                          component="div"
                        />
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <button
                            type="submit"
                            className="btn btn-primary px-4"
                          >
                            Login
                          </button>
                        </div>
                        <div className="col-6 text-right">
                          <Link
                            to="/register"
                            type="button"
                            className="btn btn-link px-0"
                          >
                            Don't have an account?
                          </Link>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
