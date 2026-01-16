import React from "react";
import { Link } from "react-router";
import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { formatDate } from "../lib/utils";
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({ note,setNotes }) => {

  const handleDelete = async (e, id) => {
    e.preventDefault();

    try {
      api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter(note => note._id !== id));
      toast.success("Deleted successfully")
    } catch (error) {
      console.log("error while deleting",error)
      toast.error("failed to delete");
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow=lg transition-all duration-200
    border-t-4 border-solid border-gray-800"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-action justify-between items-center mt-4">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button onClick={(e) => handleDelete(e,note._id)} className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
