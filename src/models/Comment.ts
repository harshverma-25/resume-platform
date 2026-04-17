import mongoose, { Schema, Document } from 'mongoose';

export interface IComment extends Document {
  postId: Schema.Types.ObjectId;
  userId: string;
  userName: string;
  userImageUrl: string;
  text: string;
  createdAt: Date;
}

const CommentSchema: Schema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'ResumePost', required: true, index: true },
  userId: { type: String, required: true },
  userName: { type: String, required: true },
  userImageUrl: { type: String },
  text: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Comment || mongoose.model<IComment>('Comment', CommentSchema);
