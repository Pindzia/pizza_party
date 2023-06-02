import { QueryClient } from "@tanstack/react-query";
import { Adress } from "../../../models/adress/Adress";
import { Form } from "react-router-dom";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import AdressHiddenIdInput from "../../atoms/adress/AdressHiddenIdInput";
import * as yup from "yup";
import AdressTextInput from "../../atoms/adress/AdressTextInput";
import AdressMaskedInput from "../../molecules/adress/AdressZipCodeInput";

type Props = {
  method: string;
  adress: Adress;
};

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  street: yup.string().required("Street is required"),
  city: yup.string().required("City is required"),
  zipCode: yup.string().required("ZipCode is required"),
  country: yup.string().required("Country is required"),
  phoneNumber: yup.string().required("PhoneNumber is required"),
});

const AdressForm = (props: Props) => {
  const formik = useFormik({
    initialValues: { ...props.adress },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form method="post">
      {props.adress.id && <AdressHiddenIdInput id={props.adress.id} />}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        <AdressTextInput
          name="name"
          label="Name"
          handleChange={formik.handleChange}
          id="name"
          value={formik.values.name}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <AdressTextInput
          name="surname"
          label="Surname"
          handleChange={formik.handleChange}
          id="surname"
          value={formik.values.surname}
          error={formik.touched.surname && Boolean(formik.errors.surname)}
          helperText={formik.touched.surname && formik.errors.surname}
        />
        <AdressTextInput
          name="street"
          label="Street"
          handleChange={formik.handleChange}
          id="street"
          value={formik.values.street}
          error={formik.touched.street && Boolean(formik.errors.street)}
          helperText={formik.touched.street && formik.errors.street}
        />
        <AdressMaskedInput
          name="zipCode"
          label="ZipCode"
          handleChange={formik.handleChange}
          id="zipCode"
          value={formik.values.zipCode}
          error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
          helperText={formik.touched.zipCode && formik.errors.zipCode}
          mask="99-999"
        />
        <AdressTextInput
          name="city"
          label="City"
          handleChange={formik.handleChange}
          id="city"
          value={formik.values.city}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <AdressTextInput
          name="country"
          label="Country"
          handleChange={formik.handleChange}
          id="country"
          value={formik.values.country}
          error={formik.touched.country && Boolean(formik.errors.country)}
          helperText={formik.touched.country && formik.errors.country}
        />
        <AdressTextInput
          name="phoneNumber"
          label="PhoneNumber"
          handleChange={formik.handleChange}
          id="phoneNumber"
          value={formik.values.phoneNumber}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
      </Box>
    </Form>
  );
};

export default AdressForm;

export const action =
  (queryClient: QueryClient) =>
  async ({ request, params }: { request: any; params: any }) => {
    const data = await request.formData();
    const adress = {
      id: data.get("id"),
      street: data.get("street"),
      city: data.get("city"),
      zipCode: data.get("zipCode"),
      country: data.get("country"),
    };
    const response = await fetch("https://localhost/adresses", {
      method: params.method,
      body: JSON.stringify(adress),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    queryClient.invalidateQueries({ queryKey: ["adresses"] });
  };
