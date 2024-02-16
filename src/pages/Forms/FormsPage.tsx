import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  Card,
  FormField,
  Grid,
  HeroSection,
  Input,
} from "@gabrielrabreu/sage-react";

import Section from "../../layout/Section/Section";

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
  } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: {
      firstName: "",
      age: 0,
      birthday: new Date(),
    },
  });

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
                <FormField
                  name="firstName"
                  label="First Name"
                  control={control}
                  rules={{ required: "First Name is required" }}
                  error={errors.firstName}
                  render={({ value, onChange, onBlur }) => (
                    <Input
                      type="text"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <FormField
                  name="age"
                  label="Age"
                  control={control}
                  rules={{ required: "Age is required" }}
                  error={errors.age}
                  render={({ value, onChange, onBlur }) => (
                    <Input
                      type="number"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
                <FormField
                  name="birthday"
                  label="Birthday"
                  control={control}
                  rules={{ required: "Birthday is required" }}
                  error={errors.birthday}
                  render={({ value, onChange, onBlur }) => (
                    <Input
                      type="date"
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  )}
                />
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
