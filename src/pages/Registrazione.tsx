import { yupResolver } from "@hookform/resolvers/yup";
import { setCookie } from "cookies-next";
import { useForm } from "react-hook-form";

import { v4 } from "uuid";
import * as yup from "yup";
import HeaderTitle from "../components/HeaderTitle";
import Logo from "../components/Logo";
import { useNavigate, useParams } from "react-router-dom";

type IFormInput = {
  name?: string | undefined;
  surname?: string | undefined;
  dateOfBirth?: string | undefined;
  email?: string;
  phone?: number | undefined;
  stage?: string | undefined;
  privacyAccept?: boolean | undefined;
};
const schema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  dateOfBirth: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  stage: yup.string().required(),
  privacyAccept: yup
    .boolean()
    .required("La privacy deve essere accettata per proseguire.")
    .oneOf([true], "La privacy deve essere accettata per proseguire."),
});

const dateGare = [
  {
    date: "11-07-2024",
    key: "roma",
    value: "Roma",
  },
  {
    date: "11-07-2025",
    key: "milano",
    value: "Milano",
  },
  {
    date: "11-07-2026",
    key: "torino",
    value: "Torino",
  },
];

export default function Registrazione() {
  const { date } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const skuCreate = v4();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    console.log(skuCreate);
    console.log("ciao");

    const apiUrl = import.meta.env.VITE_API_HOST + "users";
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        createdAt: new Date(),
        name: data.name,
        surname: data.surname,
        dateOfBirth: data.dateOfBirth,
        sku: skuCreate,
        email: data.email,
        phone: data.phone,
        privacyAccept: data.privacyAccept,
        stage: data.stage,
        weight: null,
        athleteLevel: "",
        goal: "",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCookie("isQrCodeView", true);
        console.log(data);
        navigate("/registrazionecompletata");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="flex flex-col items-center ">
      <Logo></Logo>
      <HeaderTitle
        title="Welcome runner!"
        shadow={true}
        description="ciao <span class='text-red'>come stai</span><br /> io molto bene"
      />

      <form
        id="registrationForm"
        className="w-full max-w-sm px-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3 ">
            <label htmlFor="registration-name" className="required">
              Nome
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <input
              {...register("name")}
              className={`input input-primary ${
                errors.name && " !border-alert "
              }`}
              id="registration-name"
              type="text"
              placeholder="Mario"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3">
            <label htmlFor="registration-surname" className="required">
              Cognome
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <input
              {...register("surname")}
              className={`input input-primary ${
                errors.surname && " !border-alert "
              }`}
              id="registration-surname"
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3">
            <label htmlFor="registration-surname" className="required">
              Data di nascita
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <input
              type="date"
              {...register("dateOfBirth", {
                valueAsDate: true,
              })}
              className={`input input-primary ${
                errors.dateOfBirth && " !border-alert "
              }`}
              id="registration-dateOfBirth"
              // You can add other attributes like placeholder, className, etc.
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3">
            <label htmlFor="registration-email" className="required">
              Email
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <input
              {...register("email")}
              className={`input input-primary ${
                errors.email && " !border-alert "
              }`}
              id="registration-email"
              type="email"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3">
            <label htmlFor="registration-phone" className="required">
              Telefono
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <input
              {...register("phone")}
              className={`input input-primary ${
                errors.surname && " !border-alert "
              }`}
              id="registration-phone"
              type="phone"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3">
            <label htmlFor="registration-phone" className="required">
              Tappa
            </label>
          </div>
          <div className="md:w-2/3 d-block">
            <select
              id="registration-stage"
              defaultValue={
                dateGare.find(
                  (d) => d.key.toLowerCase() === date?.toLowerCase()
                ) && date
              }
              {...register("stage")}
              className={`select select-bordered border-black w-full 
              ${errors.stage && " !border-alert"}`}
            >
              {dateGare.map((g, i) => (
                <option value={g.key} key={i}>
                  {g.value}
                </option>
              ))}
              <option value="Roma">Roma</option>
              <option value="Milano">Milano</option>
              <option value="Torino">Torino</option>
            </select>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6 form-group">
          <div className="md:w-1/3 " />
          <div className="md:w-2/3  d-flex direction-column">
            <label>
              <input
                id="registration-privacyAccept"
                {...register("privacyAccept", { required: true })}
                className={`mr-2 leading-tight `}
                type="checkbox"
              />
              <span
                className={`text-sm  ${errors?.privacyAccept && "text-alert"}`}
              >
                Accetta la privacy
              </span>
            </label>
          </div>
        </div>

        <div className="md:flex md:items-center form-group">
          <div className="md:w-1/3" />
          <div className="md:w-2/3 flex md:block pb-10">
            <button
              className="button btn btn-accent mx-auto btn-footer shadow-xl"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
