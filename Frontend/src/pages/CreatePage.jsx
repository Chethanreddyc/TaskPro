import React, { useState } from "react";
import {toast} from "react-hot-toast"
import api from '../lib/axios'
import { useNavigate } from "react-router-dom";
 
function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const[loading,setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/notes", { title, content });
      toast.success("Note created successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      if(error.response.status === 429){
        toast.error("too many requests",{
          duration:5000,
          icon:"🔥"
        })
      }
      else{
        toast.error("failed to create note")
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <div className="card bg-base-100 shadow-2xl rounded-3xl">
          <div className="card-body p-8 sm:p-10">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Create Post
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm opacity-80">
                    Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Give your post a title"
                  className="input input-bordered rounded-2xl h-12 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              {/* Content */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-sm opacity-80">
                    Content
                  </span>
                </label>
                <textarea
                  placeholder="Write something meaningful..."
                  className="textarea textarea-bordered rounded-2xl min-h-[180px] resize-none transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  disabled={loading}
                  type="submit"
                  className="btn btn-ghost rounded-full px-6"
                >
                  {loading ? "Creating..." : "Create Note"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;
