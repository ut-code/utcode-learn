import { useEffect, useState } from "react";

type Post = { id: number; message: string };

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/posts`,
      );
      setPosts(await response.json());
    }
    fetchPosts();
  }, []);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.message}</li>
        ))}
      </ul>
      <input
        value={newPostContent}
        onChange={(e) => {
          setNewPostContent(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={async () => {
          await fetch(`${import.meta.env.VITE_API_ENDPOINT}/send`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: newPostContent }),
          });
        }}
      >
        送信
      </button>
    </>
  );
}

export default App;
