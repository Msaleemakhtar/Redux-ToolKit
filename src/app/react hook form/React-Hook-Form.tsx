"use client";

import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type formValue = {
  name: string;
  channel: string;
  email: string;
  social: {
    twitter: string;
    Facebook: string;
  };
  phoneNumbers: string[];
  phoneNum: {
    number: string;
  }[];
  age: number;
};

const ReactHookForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<formValue>({
    defaultValues: {
      name: "saleem",
      channel: "",
      email: "",
      social: {
        twitter: "",
        Facebook: "",
      },
      phoneNumbers: ["", ""],
      phoneNum: [
        {
          number: "",
        },
      ],
      age: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "phoneNum",
    control,
  });

  const onSubmit = (data: formValue) => {
    console.log("Form submitted", data);
  };
  return (
    <div>
      <DevTool control={control} placement="top-left" />
      <h1 className="text-2xl  font-bold underline mb-10 mt-10">
        Created a Basic Form with react-hook-form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> UserName</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="name"
            {...register("name")}
          />
        </div>
        <p>{errors.name?.message}</p>
        <div>
          <label htmlFor="email"> Email</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="email"
            id="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />

          {errors.email && errors.email.type === "required" && (
            <p className="text-red">Email is required.</p>
          )}

          {errors.email && errors.email.type === "pattern" && (
            <p>Email is not valid.</p>
          )}
        </div>
        <div>
          <label htmlFor="channel"> Channel</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="channel"
            {...register("channel")}
          />
        </div>

        <div>
          <label htmlFor="twitter"> Twitter</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="twitter"
            {...register("social.twitter")}
          />
        </div>
        <div>
          <label htmlFor="Facebook"> Facebook</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="Facebook"
            {...register("social.Facebook")}
          />
        </div>

        <div>
          <label htmlFor="Primary- number"> Primary- number</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="Primary- number"
            {...register("phoneNumbers.0")}
          />
        </div>

        <div>
          <label htmlFor="Secondary number"> Secondary- number</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="text"
            id="Secondary- number"
            {...register("phoneNumbers.1")}
          />
        </div>

        <h1 className="text-2xl  font-bold underline mb-10 mt-10">
          List of Dynamic Phone Number Data.
        </h1>

        <div>
          <label htmlFor="Dynamic Phone Numbers"> Dynamic Phone Numbers</label>

          <div>
            {fields.map((field, index) => {
              return (
                <div key={field.id}>
                  <input
                    className="border rounded-md border-black"
                    type="text"
                    {...register(`phoneNum.${index}.number`)}
                  />
                  {index > 0 && (
                    <button
                      className=" border rounded-md bg-teal-700 px-2 py-1 mt-10"
                      type="button"
                      onClick={() => remove(index)}
                    >
                      {" "}
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button
              className=" border rounded-md bg-teal-700 px-4 py-2 mt-10"
              type="button"
              onClick={() => append({ number: "" })}
            >
              {" "}
              Add Phone Number
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="age"> Age</label>
          <br />
          <input
            className="border rounded-md border-black"
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true, 
              required:{
                value:true,
                message: 'age is required'
              },
            })}
          />
        </div>

        <div className="mt-10">
          <button className=" border rounded-md bg-teal-700 px-4 py-2 ">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReactHookForm;
