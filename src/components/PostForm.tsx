"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormData = {
  title: string;
  content: string;
};

export default function PostForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    alert("Post submitted successfully!");
    reset(); // Сброс формы после отправки
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/10 backdrop-blur-md shadow-lg p-8 rounded-lg text-white"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Create or Edit Post</h2>

          {/* Поле для заголовка */}
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-2">
              Title
            </label>
            <Input
              id="title"
              placeholder="Enter the title"
              {...register("title", { required: "Title is required" })}
              className={`${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title.message}</span>
            )}
          </div>

          {/* Поле для контента */}
          <div className="mb-6">
            <label htmlFor="content" className="block font-medium mb-2">
              Content
            </label>
            <Textarea
              id="content"
              placeholder="Enter the content"
              {...register("content", { required: "Content is required" })}
              className={`${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.content && (
              <span className="text-red-500 text-sm">{errors.content.message}</span>
            )}
          </div>

          {/* Кнопка отправки */}
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}




// "use client";

// import { useForm, SubmitHandler } from "react-hook-form";

// type FormData = {
//   title: string;
//   content: string;
// };

// export default function PostForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log("Form Data:", data);
//     alert("Post submitted successfully!");
//     reset(); // Сброс формы после отправки
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="bg-white p-6 shadow-md rounded-md max-w-md mx-auto"
//     >
//       <h2 className="text-xl font-bold mb-4">Create or Edit Post</h2>

//       {/* Поле для заголовка */}
//       <div className="mb-4">
//         <label htmlFor="title" className="block font-medium text-gray-700">
//           Title
//         </label>
//         <input
//           id="title"
//           {...register("title", { required: "Title is required" })}
//           className={`w-full px-4 py-2 border rounded-md ${
//             errors.title ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.title && (
//           <span className="text-red-500 text-sm">{errors.title.message}</span>
//         )}
//       </div>

//       {/* Поле для контента */}
//       <div className="mb-4">
//         <label htmlFor="content" className="block font-medium text-gray-700">
//           Content
//         </label>
//         <textarea
//           id="content"
//           {...register("content", { required: "Content is required" })}
//           className={`w-full px-4 py-2 border rounded-md h-32 ${
//             errors.content ? "border-red-500" : "border-gray-300"
//           }`}
//         />
//         {errors.content && (
//           <span className="text-red-500 text-sm">{errors.content.message}</span>
//         )}
//       </div>

//       {/* Кнопка отправки */}
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }