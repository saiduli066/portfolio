import { useState, useEffect } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import { TSkills } from "./AddSkill";

const EditSkill = () => {
  const [skills, setSkills] = useState<TSkills[]>([]);
  //   const [editedSkill, setEditedSkill] = useState(null);
  //   const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(
          "https://portfolio-server-seven-alpha.vercel.app/skills"
        );
        setSkills(res.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, [skills]);

  const handleDeleteSkill = async (id: string) => {
    try {
      await axios.delete(
        `https://portfolio-server-seven-alpha.vercel.app/skills/${id}`
      );
      setSkills(skills.filter((skill: TSkills) => skill._id !== id));
      console.log("Skill deleted successfully");
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  //   const onSubmit = async (data:TSkills) => {
  //     try {
  //       await axios.patch(
  //         `http://localhost:5000/skills/${editedSkill._id}`,
  //         data
  //       );
  //       console.log("Skill updated successfully");
  //       setEditedSkill(null);
  //     } catch (error) {
  //       console.error("Error updating skill:", error);
  //     }
  //   };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Skill Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Icon
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {skills.map((skill: TSkills) => (
            <tr key={skill._id}>
              <td className="px-6 py-4 whitespace-nowrap">{skill.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={skill.icon_url}
                  alt={skill.name}
                  className="h-8 w-8"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDeleteSkill(skill._id as string)}
                  className="text-red-600 hover:text-red-900 mr-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* {editedSkill && (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <input
            type="text"
            {...register("name", { required: true })}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter skill name"
          />
          <input
            type="text"
            {...register("icon_url", { required: true })}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md mb-2"
            placeholder="Enter icon URL"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update Skill
          </button>
        </form>
      )} */}
    </div>
  );
};

export default EditSkill;
