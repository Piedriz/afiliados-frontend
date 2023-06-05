import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MyFormValues, Errors } from "../../types";

export const RegisterForm = () => {
  const initialValues: MyFormValues = { email: "", password: "", user: "" };
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: Errors = {};
        if (!values.user) {
          errors.user = "Usuario requerido";
        }
        if (!values.password) {
          errors.password = "Se requiere una contraseña";
        }
        if (!values.email) {
          errors.email = "Correo requerido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Correo no valido";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="space-y-4 md:space-y-6" action="#">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Correo
          </label>
          <Field
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@company.com"
            required
          />
          <ErrorMessage
            className="pt-2 text-red-500"
            name="email"
            component="p"
          />
        </div>
        <div>
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nombre
          </label>
          <Field
            type="text"
            name="user"
            id="user"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="nombre"
            required
          />
          <ErrorMessage
            className="pt-2 text-red-500"
            name="user"
            component="p"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <ErrorMessage
            className="pt-2 text-red-500"
            name="password"
            component="p"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Recuerdame
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Registrarse
        </button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Ya estas registrado?{" "}
          <Link
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            to="/signin"
          >
            Inicia sesión
          </Link>
        </p>
      </Form>
    </Formik>
  );
};
