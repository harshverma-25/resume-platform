import mongoose, { Schema, Document } from 'mongoose';

export interface IAtsResult extends Document {
  userId: string;
  score: number;
  suggestions: string[];
  resumeTextSnippet: string;
  createdAt: Date;
}

const AtsResultSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  score: { type: Number, required: true },
  suggestions: [{ type: String }],
  resumeTextSnippet: { type: String },
}, { timestamps: true });

export default mongoose.models.AtsResult || mongoose.model<IAtsResult>('AtsResult', AtsResultSchema);
