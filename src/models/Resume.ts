import mongoose, { Schema, Document } from 'mongoose';

export interface IResume extends Document {
  userId: string;
  heading: {
    fullName: string;
    title: string;
    phone: string;
    email: string;
    linkedinUrl: string;
    githubUrl: string;
    portfolioUrl: string;
  };
  summary: string;
  education: Array<{
    college: string;
    course: string;
    cgpa: string;
    year: string;
    address: string;
  }>;
  skills: {
    languages: string[];
    webFrameworks: string[];
    databases: string[];
    tools: string[];
    cloudDevOps: string[];
  };
  experience: Array<{
    company: string;
    role: string;
    description: string;
  }>;
  projects: Array<{
    name: string;
    techStack: string[];
    githubLink: string;
    liveLink: string;
    description: string;
  }>;
  achievements: string[];
  templateId: string;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema: Schema = new Schema({
  userId: { type: String, required: true, index: true },
  heading: {
    fullName: String,
    title: String,
    phone: String,
    email: String,
    linkedinUrl: String,
    githubUrl: String,
    portfolioUrl: String,
  },
  summary: String,
  education: [{
    college: String,
    course: String,
    cgpa: String,
    year: String,
    address: String,
  }],
  skills: {
    languages: [String],
    webFrameworks: [String],
    databases: [String],
    tools: [String],
    cloudDevOps: [String],
  },
  experience: [{
    company: String,
    role: String,
    description: String,
  }],
  projects: [{
    name: String,
    techStack: [String],
    githubLink: String,
    liveLink: String,
    description: String,
  }],
  achievements: [String],
  templateId: { type: String, default: 'modern' },
}, { timestamps: true });

export default mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);
