import mongoose, { Schema, Document } from 'mongoose';

export interface IUpvote extends Document {
  postId: Schema.Types.ObjectId;
  userId: string;
}

const UpvoteSchema: Schema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'ResumePost', required: true, index: true },
  userId: { type: String, required: true, index: true },
});

// Ensure one upvote per user per post
UpvoteSchema.index({ postId: 1, userId: 1 }, { unique: true });

export default mongoose.models.Upvote || mongoose.model<IUpvote>('Upvote', UpvoteSchema);
