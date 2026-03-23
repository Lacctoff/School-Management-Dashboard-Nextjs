"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(10, { message: "Phone number must be at most 10 digits" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood type is required" }),
  birthday: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image file is required" }),
  age: z.number().min(10),
});

type Inputs = z.infer<typeof schema>;

const ParentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Parent</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
        label="Name"
        register={register}
        name="name"
        error={errors?.name}
        defaultValue={data?.name}
      />
      <InputField
        label="Email"
        type="email"
        register={register}
        name="email"
        error={errors?.email}
        defaultValue={data?.email}
      />
      <InputField
        label="Password"
        type="password"
        register={register}
        name="password"
        error={errors?.password}
        defaultValue={data?.password}
      />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal information
      </span>
      <div className="flex flex-wrap justify-between gap-4">
        <InputField
          label="First Name"
          register={register}
          name="firstName"
          error={errors?.firstName}
          defaultValue={data?.firstName}
        />
        <InputField
          label="Last Name"
          register={register}
          name="lastName"
          error={errors?.lastName}
          defaultValue={data?.lastName}
        />
        <InputField
          label="Phone"
          type="phone"
          register={register}
          name="phone"
          error={errors?.phone}
          defaultValue={data?.phone}
        />
        <InputField
          label="Address"
          type="address"
          register={register}
          name="address"
          error={errors?.address}
          defaultValue={data?.address}
        />
        <InputField
          label="Blood Type"
          register={register}
          name="bloodType"
          error={errors?.bloodType}
          defaultValue={data?.bloodType}
        />
        <InputField
          label="Birthday"
          register={register}
          name="birthday"
          error={errors?.birthday}
          defaultValue={data?.birthday}
          type="date"
        />
      
      {/* select element */}
      <div className="flex flex-col gap-2 w-full md:w-1/4">
        <label htmlFor="sex" className="text-xs text-gray-500">
          Sex
        </label>
        <select id="sex" className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm focus:outline-none focus:ring-green-500 w-full" {...register("sex")} defaultValue={data?.sex}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.sex?.message && (
          <p className="text-xs text-red-400">
            {errors.sex.message.toString()}
          </p>
        )}
      </div>

      {/* upload element */}
      <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
        <label htmlFor="img" className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer">
          <Image src="/upload.png" alt="" width={28} height={28} />
          <span>Upload a photo</span>
        </label>
        <input type="file" id="img" {...register("img")} className="hidden"/>
        {errors.img?.message && (
          <p className="text-xs text-red-400">
            {errors.img.message.toString()}
          </p>
        )}
      </div>
      </div>
      <button className="bg-blue-400 rounded-md p-2 text-white">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ParentForm;
