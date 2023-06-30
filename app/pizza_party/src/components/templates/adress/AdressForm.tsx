import { Box, Divider } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";
import { Adress } from "../../../models/adress/Adress";
import { Form, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AdressHiddenIdInput from "../../atoms/adress/AdressHiddenIdInput";
import * as yup from "yup";
import AdressTextInput from "../../atoms/adress/AdressTextInput";
import AdressFormGroup from "../../molecules/adress/AdressFormGroup";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import { adressActions } from "../../../store/adress-slice";

type Props = {
  method: string;
  adress: Adress;
  title: string;
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
  const method = props.method === "post" ? "post" : "put";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { ...props.adress },
    validationSchema: validationSchema,
    onSubmit: (values: Adress) => {
      if (method === "post") dispatch(adressActions.addAdress(values));
      else dispatch(adressActions.editAdress(values));
      dispatch(
        uiActions.showNotification({
          fromWhere: "New Adress",
          type: "success",
          message: "Adress successfully added",
          title: "Adress saved",
        })
      );
      navigate(-1);
    },
  });
  return (
    <>
      <Typography variant="h2" marginLeft={0.5}>
        {props.title}
      </Typography>
      <Divider sx={{ marginLeft: 0.8, marginRight: 0.8 }} />
      <Form method={method} onSubmit={formik.handleSubmit} className="">
        {props.adress.id && <AdressHiddenIdInput id={props.adress.id} />}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            overflow: "auto",
            gap: 1,
            mt: 3,
          }}
        >
          <AdressFormGroup
            formGroupTitle="Personal Information"
            formGroupInputs={[
              <AdressTextInput
                key="name"
                name="name"
                label="Name"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="name"
                value={formik.values.name}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />,
              <AdressTextInput
                key="surname"
                name="surname"
                label="Surname"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="surname"
                value={formik.values.surname}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />,
            ]}
          />
          <AdressFormGroup
            formGroupTitle="Adress Information"
            formGroupInputs={[
              <AdressTextInput
                key="street"
                name="street"
                label="Street"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="street"
                value={formik.values.street}
                error={formik.touched.street && Boolean(formik.errors.street)}
                helperText={formik.touched.street && formik.errors.street}
              />,
              <AdressTextInput
                key="zipCode"
                name="zipCode"
                label="ZipCode"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="zipCode"
                value={formik.values.zipCode}
                error={formik.touched.zipCode && Boolean(formik.errors.zipCode)}
                helperText={formik.touched.zipCode && formik.errors.zipCode}
              />,
              <AdressTextInput
                key="city"
                name="city"
                label="City"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="city"
                value={formik.values.city}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />,
              <AdressTextInput
                key="country"
                name="country"
                label="Country"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="country"
                value={formik.values.country}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />,
            ]}
          />
          <AdressFormGroup
            formGroupTitle="Contact Information"
            formGroupInputs={[
              <AdressTextInput
                key="phoneNumber"
                name="phoneNumber"
                label="PhoneNumber"
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
                id="phoneNumber"
                value={formik.values.phoneNumber}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />,
            ]}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row-reverse", m: 2 }}>
          <Button variant="contained" type="submit">
            {method === "post" ? "SUBMIT" : "SAVE"}
          </Button>
        </Box>
      </Form>
    </>
  );
};

export default AdressForm;

export const action =
  (queryClient: QueryClient) =>
  async ({ request, params }: { request: any; params: any }) => {
    console.log("params", params);
    console.log("request", request);
    const data = await request.formData();
    const adress = {
      id: data.get("id"),
      street: data.get("street"),
      city: data.get("city"),
      zipCode: data.get("zipCode"),
      country: data.get("country"),
    };

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
  };
