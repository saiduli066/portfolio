import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

export type TSkills = {
  _id?: string;
  name: string;
  icon_url: string;
};

const AddSkill = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSkills>();

  const onSubmit: SubmitHandler<TSkills> = async (data: TSkills) => {
    try {
      const response = await axios.post(
        "https://portfolio-server-seven-alpha.vercel.app/skills",
        data
      );
      reset();
      console.log("Skill added successfully:", response.data);
    } catch (error) {
      console.error("Error adding skill:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add a New Skill</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Skill Name
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Skill name is required" })}
            className="mt-1 p-2 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.name && (
            <p className="mt-1  text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="icon_url" className="block text-gray-700 font-medium">
            Icon URL
          </label>
          <input
            id="icon_url"
            type="text"
            {...register("icon_url", { required: "Icon URL is required" })}
            className="mt-1 p-2 block w-full rounded-md bg-gray-200 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
          {errors.icon_url && (
            <p className="mt-1 text-sm text-red-600">
              {errors.icon_url.message}
            </p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSkill;
