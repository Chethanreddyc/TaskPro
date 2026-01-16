import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { ArrowLeftIcon, LoaderIcon, LogIn, Trash2Icon } from "lucide-react";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("failed to fetch the note", error);
        toast.error("failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async() => {
    
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/")
    } catch (error) {
      console.log("error deleting",error);
      toast.error("Failed to delete note");
    } 
  };
  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()){
      toast.error("please fill all the fields");
      return;
    }

    setSaving(true)

    try {
      await api.put(`/notes/${id}`,note);
      toast.success("Note update");
      navigate("/")
    } catch (error) {
      console.log("error saving the notes:",error);
      toast.error("failed to update notes");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-base-200">
  <div className="container mx-auto px-4 py-10">
    <div className="max-w-2xl mx-auto">
      
      {/* Header Actions */}
      <div className="flex items-center justify-between mb-8">
        <Link to="/" className="btn btn-ghost rounded-3xl gap-2">
          <ArrowLeftIcon className="h-5 w-5" />
          Back to Notes
        </Link>
        <div className="flex gap-3">
          <button
            onClick={handleDelete}
            className="btn btn-error btn-outline rounded-3xl gap-2"
          >
            <Trash2Icon className="h-5 w-5" />
            Delete
          </button>
          <button
            disabled={saving}
            onClick={handleSave}
            className="btn btn-primary rounded-3xl gap-2"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>

      {/* Note Editor Card */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body space-y-6">
          
          {/* Title Input */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter note title..."
              className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          {/* Content Textarea */}
          <div>
            <label className="label">
              <span className="label-text font-semibold">Content</span>
            </label>
            <textarea
              placeholder="Write your note here..."
              className="textarea textarea-bordered w-full rounded-3xl h-40 focus:outline-none focus:ring-2 focus:ring-primary"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default NoteDetailPage;
