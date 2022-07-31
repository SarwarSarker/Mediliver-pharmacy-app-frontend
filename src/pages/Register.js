import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { registerUser, reset } from "../features/auth/authSlice";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      dispatch(reset());
      navigate("/");
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const initialvalues = {
    name: "",
    email: "",
    password: "",
  };

  const validateSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(6, "Name must be at least 6 characters")
      .max(20, "Name must not exceed 20 characters"),
    email: Yup.string().email().required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const handleRegister = (formValue) => {
    const { name, email, password } = formValue;
    dispatch(registerUser({ name, email, password })).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-body">
                  <h1>Register</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <Formik
                    initialValues={initialvalues}
                    validationSchema={validateSchema}
                    onSubmit={handleRegister}
                  >
                    <Form>
                      <div className="input-group mb-3">
                        <div className="input-group-text">
                          <i className="fa fa-user"></i>
                        </div>
                        <Field
                          type="text"
                          className="form-control w-75"
                          placeholder="Enter Name"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          className="text-danger mt-1"
                          component="div"
                        />
                      </div>
                      <div className="input-group mb-4">
                        <div className="input-group-text">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <Field
                          type="email"
                          className="form-control w-75"
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
                            className="btn btn-success px-4"
                          >
                            Sign In
                          </button>
                        </div>
                        <div className="col-6 text-right">
                          <Link
                            to="/login"
                            type="button"
                            className="btn btn-link px-0"
                          >
                            Already have an account?
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

export default Register;
