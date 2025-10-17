import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
export default function LoginPage() {
  const handleSubmit = (values) => {
    let domain = "http://localhost:1337";
    let endPoint = "/api/auth/local";
    let url = domain + endPoint;
    let data = {
      identifier: values.email,
      password: values.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        // console.log("Token is :" + res.data.jwt)
        // console.log(res);
        let user = res.data.user
        toast.success("Welcome "+ user.username)
        if(values.remeberIndex){
          localStorage.setItem('token' , res.data.jwt)
        }else{
          sessionStorage.setItem('token' , res.data.jwt)
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Wrong username or password")
      });
    console.log(values);
  };
  const initialschema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <div className="w-full h-[100vh] bg-violet-400 flex items-center justify-center">
      <Formik
        validationSchema={initialschema}
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "" , remeberIndex:true}}
      >
        <Form className="bg-yellow-50 w-[450px] p-4 flex flex-col justify-center items-center gap-4 rounded shadow border">
          <h1>Welcome back</h1>

          <Field
            name="email"
            type="email"
            placeholder="enter your email"
            className="input via-indigo-400 text-violet-400 w-full"
          />
          <ErrorMessage
            name="email"
            component={"div"}
            className="text-red-500"
          />
          <Field
            name="password"
            type="password"
            placeholder="enter your password"
            className="w-full input via-indigo-400 text-violet-400"
          />
          <ErrorMessage
            name="password"
            component={"div"}
            className="text-red-500"
          />
         <label >
          <Field  type="checkbox" name="remeberIndex" />
          Remeber me
         </label>

          <button type="submit" className="btn btn-soft btn-primary w-full">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
