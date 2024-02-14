import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  Card,
  DatePicker,
  ErrorMessage,
  Grid,
  HeroSection,
  InputNumber,
  InputText,
  Label,
} from "@gabrielrabreu/sage-react";

import Section from "../../layout/Section/Section";

import styles from "./FormsPage.module.scss";

interface FormData {
  firstName: string;
  age: number;
  birthday: Date;
}

const FormsPage: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <HeroSection
        title="Forms"
        breadcrumb={[
          { name: "Home", link: "/" },
          { name: "Forms", link: "/forms" },
        ]}
      ></HeroSection>
      <Section>
        <Grid cols={4}>
          <Grid.Item>
            <Card>
              <Card.Title>Forms Elements</Card.Title>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formField}>
                  <Label htmlFor="firstName" text="First Name" />
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <InputText
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                    rules={{ required: "First Name is required" }}
                  />
                  <ErrorMessage message={errors.firstName?.message} />
                </div>
                <div className={styles.formField}>
                  <Label htmlFor="age" text="Age" />
                  <Controller
                    control={control}
                    name="age"
                    render={({ field }) => (
                      <InputNumber
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                    rules={{ required: "Age is required" }}
                  />
                  <ErrorMessage message={errors.age?.message} />
                </div>
                <div className={styles.formField}>
                  <Label htmlFor="birthday" text="Birthday" />
                  <Controller
                    control={control}
                    name="birthday"
                    render={({ field }) => (
                      <DatePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    )}
                    rules={{ required: "Birthday is required" }}
                  />
                  <ErrorMessage message={errors.birthday?.message} />
                </div>
                <Button type="submit" text="Submit" />
              </form>
            </Card>
          </Grid.Item>
        </Grid>
      </Section>
    </>
  );
};

export default FormsPage;
