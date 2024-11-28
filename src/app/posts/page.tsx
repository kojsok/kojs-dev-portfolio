import { getPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
// import Navigation from "@/components/navigation";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col items-center pt-8 bg-slate-950 max-w-screen-xl">
      {/* <Navigation /> */}
      <div className="bg-slate-950 text-white py-12 mt-8 w-full">
        <h1 className="text-4xl font-bold mb-8 text-center text-violet-300">
          Welcome to Blog KOJS
        </h1>
        <div className="flex flex-col gap-6 w-full px-4 max-w-6xl mx-auto">
          {posts.map((post) => (
            <PostCard key={post.id || post.staticPath} post={post} />
            // <PostCard key={post.staticPath} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}






// import { getPosts } from "@/lib/posts";
// import PostCard from "@/components/PostCard";
// import Navigation from "@/components/navigation";
// export default async function HomePage() {
//     const posts = await getPosts();
  
//     return (
//       <div className="flex overflow-hidden flex-col items-center pt-8 w-full bg-slate-950 mx-auto">
//       <Navigation />
//       <div className="bg-slate-950 text-white  py-12 mt-8">
//         <div className="max-w-screen-xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8 text-center text-violet-300">Welcome to My Blog</h1>
//           <div className="flex flex-col gap-6">
//             {posts.map((post) => (
//               <PostCard key={post.id || post.staticPath} post={post} />
//             ))}
//           </div>
//         </div>
//       </div>
//       </div>
//     );
//   }
  
