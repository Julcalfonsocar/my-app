import { Card } from "antd";
import { Field, Form, Formik } from "formik";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { checkingAutentication, starGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {

  const dispatch = useDispatch();
  const form = useRef();


  const valuesInitial = {
    email: "",
    password: ""
  }

  const submit = () => {
    dispatch(checkingAutentication())
  }

  const onGoogleSignIn = () => {
    dispatch(starGoogleSignIn())
  }

  return (
    <div className="login">
      <Card className="form"
        actions={[
          <div>
            <button
              type="submit"
              onClick={() => {
                form.current.submitForm();
                console.log(form.current.values);
              }}>
              Enviar
            </button>
            <button
              onClick={() => {
                onGoogleSignIn()
              }} type="submit">Google</button>
          </div>
        ]}>
        <Formik innerRef={form} onSubmit={submit} initialValues={valuesInitial}>
          <Form>
            <div>
              <span>Login</span>
              <div>
                <label>Correo Electrónico</label>
                <Field type="email" name="mail"  placeholder="Ingrese su correo"/>
              </div>
              <div>
                <label>Contraseña</label>
                <Field type="password" name="password" placeholder="Ingrese su contraseña"/>
              </div>
            </div>

          </Form>
        </Formik>
      </Card>
    </div>
  )
}

