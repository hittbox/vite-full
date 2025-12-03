import type { PostDomain } from '@/domain/Post';
import { getPosts, postNewPost } from '@/remote/api/PostApi';
import { useEffect, useState } from 'react';

const AxiosTemplate = () => {
  const [posts, setPosts] = useState<PostDomain[]>([]);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '',
  });

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="flex-col justify-center p-10">
      <div>Posts Page</div>
      <div className="flex flex-row items-center gap-5">
        <div className="flex flex-col border p-2">
          <input
            className="border"
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          />
          <input
            className="border"
            type="text"
            placeholder="Content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          />
          <input
            className="border"
            type="text"
            placeholder="Category"
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
          />
        </div>

        <div className="h-12 border p-2" onClick={() => postNewPost(newPost)}>
          Create New Post
        </div>
      </div>

      <div>
        {posts.map((post) => (
          <div className="mb-2 w-150 border p-2" key={post.id}>
            <div>{post.title}</div>
            <div>{post.content}</div>
            <div>{post.category}</div>
            <div>{post.is_published ? 'Published' : 'Draft'}</div>
            <div>{post.created_at}</div>
            <div>{post.updated_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosTemplate;
