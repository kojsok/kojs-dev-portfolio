export default function PostCard({
  post,
}: {
  post: { id?: string; title: string; excerpt: string; staticPath?: string };
}) {
  const link = post.staticPath ? post.staticPath : `/posts/${post.id}`;

  return (
    <div className="group w-full max-w-6xl mx-auto flex items-start gap-6 border-t border-gray-800 py-6  transition">
      {/* Дата слева */}
      <div className="text-gray-400 text-xl min-w-[200px]">
        August 5, 2023
      </div>
      {/* Основной контент */}
      <div className="flex-1">
        {/* Заголовок */}
        <h2 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition">
          {post.title}
        </h2>
        {/* Категории */}
        <div className="flex gap-2 mb-4">
          <span className="text-xs font-semibold text-violet-300 bg-pink-500/10 px-2 py-1 rounded">
            NEXT.JS
          </span>
          <span className="text-xs font-semibold text-violet-300 bg-pink-500/10 px-2 py-1 rounded">
            TAILWIND
          </span>
          <span className="text-xs font-semibold text-violet-300 bg-pink-500/10 px-2 py-1 rounded">
            GUIDE
          </span>
          <span className="text-xs font-semibold text-violet-300 bg-pink-500/10 px-2 py-1 rounded">
            FEATURE
          </span>
        </div>
        {/* Краткое описание */}
        <p className="text-gray-400 mb-4">{post.excerpt}</p>
        {/* Ссылка */}
        <a
          href={link}
          className="text-pink-500 flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read more <span>→</span>
        </a>
      </div>
    </div>
  );
}





// export default function PostCard({
//   post,
// }: {
//   post: { id?: string; title: string; excerpt: string; staticPath?: string };
// }) {
//   // Проверяем, если это статичный пост, то используем staticPath
//   const link = post.staticPath ? post.staticPath : `/posts/${post.id}`;

//   return (
//     <div className="bg-gray-900 border-t border-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//       <p className="text-sm text-gray-400 mb-2">August 5, 2023</p>
//       <h2 className="text-2xl font-bold text-white mb-3 hover:text-pink-500 transition">
//         {post.title}
//       </h2>
//       <div className="flex gap-2 mb-4">
//         <span className="text-xs font-semibold text-pink-500 bg-pink-500/10 px-2 py-1 rounded">
//           NEXT.JS
//         </span>
//         <span className="text-xs font-semibold text-pink-500 bg-pink-500/10 px-2 py-1 rounded">
//           TAILWIND
//         </span>
//         <span className="text-xs font-semibold text-pink-500 bg-pink-500/10 px-2 py-1 rounded">
//           GUIDE
//         </span>
//         <span className="text-xs font-semibold text-pink-500 bg-pink-500/10 px-2 py-1 rounded">
//           FEATURE
//         </span>
//       </div>
//       <p className="text-gray-400 mb-4">{post.excerpt}</p>
//       <a
//         href={link}
//         className="text-pink-500 flex items-center gap-1 hover:gap-2 transition-all"
//       >
//         Read more <span>→</span>
//       </a>
//     </div>
//   );
// }




// export default function PostCard({
//     post,
//   }: {
//     post: { id?: string; title: string; excerpt: string; staticPath?: string };
//   }) {
//     // Проверяем, если это статичный пост, то используем staticPath
//     const link = post.staticPath ? post.staticPath : `/posts/${post.id}`;
  
//     return (
//       <div className="bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg p-6 rounded-lg transition">
//         <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
//         <p className="text-gray-300 mb-4">{post.excerpt}</p>
//         <a href={link} className="text-blue-400 hover:text-blue-500 underline">
//           Read more
//         </a>
//       </div>
//     );
//   }



// export default function PostCard({
//     post,
//   }: {
//     post: { id?: string; title: string; excerpt: string; staticPath?: string };
//   }) {
//     const link = post.staticPath ? post.staticPath : `/posts/${post.id}`;
  
//     return (
//       <div className="bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg p-6 rounded-lg transition">
//         <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
//         <p className="text-gray-300 mb-4">{post.excerpt}</p>
//         <a href={link} className="text-blue-400 hover:text-blue-500 underline">
//           Read more
//         </a>
//       </div>
//     );
//   }


// export default function PostCard({
//     post,
//   }: {
//     post: { id: string; title: string; excerpt: string };
//   }) {
//     return (
//       <div className="bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg p-6 rounded-lg transition">
//         <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
//         <p className="text-gray-300 mb-4">{post.excerpt}</p>
//         <a
//           href={`/posts/${post.id}`}
//           className="text-blue-400 hover:text-blue-500 underline"
//         >
//           Read more
//         </a>
//       </div>
//     );
//   }



// import Link from "next/link";

// export default function PostCard({
//   post,
// }: {
//   post: { id: string; title: string; excerpt: string };
// }) {
//   return (
//     <div className="bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg p-6 rounded-lg transition">
//       <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
//       <p className="text-gray-300 mb-4">{post.excerpt}</p>
//       <Link
//         href={`/posts/${post.id}`}
//         className="text-blue-400 hover:text-blue-500 underline"
//       >
//         Read more
//       </Link>
//     </div>
//   );
// }



// import Link from 'next/link';

// export default function PostCard({ post }: { post: { id: string; title: string; excerpt: string } }) {
//   return (
//     <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
//       <h2 className="text-xl font-bold">{post.title}</h2>
//       <p className="text-gray-600">{post.excerpt}</p>
//       <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
//         Read more
//       </Link>
//     </div>
//   );
// }