// const posts = [
//     { id: '1', title: 'First Post', excerpt: 'This is the first post.', content: 'Full content of the first post.', date: '2024-11-01' },
//     { id: '2', title: 'Second Post', excerpt: 'This is the second post.', content: 'Full content of the second post.', date: '2024-11-05' },
//   ];
  
//   export const getPosts = async () => posts;
  
//   export const getPost = async (id: string) => posts.find((post) => post.id === id);


export async function getPosts() {
    return [
      { id: "1", title: "Dynamic Post 1", excerpt: "This is a dynamic post." },
      { id: "2", title: "Dynamic Post 2", excerpt: "This is another dynamic post." },
      {
        id: "3",
        staticPath: "/articles/article1",
        title: "Деплой проекта Next.js на Ubuntu сервер",
        excerpt: "Деплой проекта Next.js на Ubuntu сервер.",
      },
      {
        id: "4",
        staticPath: "/articles/article2",
        title: "Static Article 2",
        excerpt: "Another static article page.",
      },
    ];
  }

  // posts.ts
const posts = [
    { id: "1", title: "Dynamic Post 1", excerpt: "This is a dynamic post.", content: "This is the content of Dynamic Post 1." },
    { id: "2", title: "Dynamic Post 2", excerpt: "This is another dynamic post.", content: "This is the content of Dynamic Post 2." },
  ];
  
  
  export async function getPost(id: string) {
    return posts.find((post) => post.id === id) || null;
  }