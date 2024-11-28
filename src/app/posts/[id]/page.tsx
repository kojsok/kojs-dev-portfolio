import { getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { id: string } }) {
  // Дожидаемся получения params
  const { id } = await params; // Используем await для params

  // Получаем данные поста
  const post = await getPost(id);

  // Если пост не найден, возвращаем 404
  if (!post) {
    notFound();
  }

  return (
    <article className="bg-slate-950 text-white min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        {/* <p className="text-gray-400 mb-6">{post.date}</p> */}
        <div className="mt-6 text-gray-300">{post.content}</div>
      </div>
    </article>
  );
}



// import { getPost } from "@/lib/posts";
// import { notFound } from "next/navigation";

// export default async function PostPage({ params }: { params: { id: string } }) {
//   // Достаем id из params без await
//   const { id } = params;

//   // Получаем данные поста
//   const post = await getPost(id);

//   // Если пост не найден, возвращаем 404
//   if (!post) {
//     notFound();
//   }

//   return (
//     <article className="bg-slate-950 text-white min-h-screen py-12">
//       <div className="max-w-screen-xl mx-auto">
//         <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//         {/* <p className="text-gray-400 mb-6">{post.date}</p> */}
//         <div className="mt-6 text-gray-300">{post.content}</div>
//       </div>
//     </article>
//   );
// }




// import { getPost } from "@/lib/posts";
// import { notFound } from "next/navigation";

// export default async function PostPage({ params }: { params: { id: string } }) {
//   const { id } = await params; // Дождаться params, чтобы получить id

//   const post = await getPost(id);

//   if (!post) {
//     notFound(); // Показать страницу 404
//   }

//   return (
//     <article>
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <p className="text-gray-600">{post.date}</p>
//       <div className="mt-6">{post.content}</div>
//     </article>
//   );
// }


