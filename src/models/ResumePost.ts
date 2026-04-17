import mongoose, { Schema, Document } from 'mongoose';

export interface IResumePost extends Document {
  userId: string;
  resumeId: string;
  resumeUrl: string;
  previewImageUrl: string;
  description: string;
  upvoteCount: number;
  commentCount: number;
  createdAt: Date;
}

const ResumePostSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  resumeId: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  previewImageUrl: { type: String, required: true },
  description: { type: String },
  upvoteCount: { type: Number, default: 0 },
  commentCount: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.ResumePost || mongoose.model<IResumePost>('ResumePost', ResumePostSchema);
