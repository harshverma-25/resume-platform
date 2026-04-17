import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { ResumeData, Education, Experience, Project, SkillSet } from '@/types/resume';

interface ResumeState {
  resumeData: ResumeData;
  setHeading: (heading: Partial<ResumeData['basicInfo']>) => void;
  setSummary: (summary: string) => void;
  setEducation: (education: Education[]) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
  setSkills: (skills: Partial<SkillSet>) => void;
  setExperience: (experience: Experience[]) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
  setProjects: (projects: Project[]) => void;
  addProject: () => void;
  removeProject: (id: string) => void;
  setAchievements: (achievements: string[]) => void;
  addAchievement: () => void;
  removeAchievement: (index: number) => void;
  setTemplate: (templateId: string) => void;
  loadResume: (data: ResumeData) => void;
  resetResume: () => void;
}

const initialResumeData: ResumeData = {
  basicInfo: {
    name: '',
    title: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    portfolio: '',
  },
  summary: '',
  education: [],
  skills: {
    languages: '',
    frameworks: '',
    databases: '',
    tools: '',
    cloud: '',
  },
  experience: [],
  projects: [],
  achievements: [],
  templateId: 'modern',
};

export const useResumeStore = create<ResumeState>()(
  persist(
    (set) => ({
      resumeData: initialResumeData,

      setHeading: (heading) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            basicInfo: { ...state.resumeData.basicInfo, ...heading },
          },
        })),

      setSummary: (summary) =>
        set((state) => ({
          resumeData: { ...state.resumeData, summary },
        })),

      setEducation: (education) =>
        set((state) => ({
          resumeData: { ...state.resumeData, education },
        })),

      addEducation: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: [
              ...state.resumeData.education,
              { id: crypto.randomUUID(), college: '', course: '', cgpa: '', year: '', address: '' },
            ],
          },
        })),

      removeEducation: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: state.resumeData.education.filter((edu) => edu.id !== id),
          },
        })),

      setSkills: (skills) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: { ...state.resumeData.skills, ...skills },
          },
        })),

      setExperience: (experience) =>
        set((state) => ({
          resumeData: { ...state.resumeData, experience },
        })),

      addExperience: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: [
              ...state.resumeData.experience,
              { id: crypto.randomUUID(), company: '', role: '', description: '' },
            ],
          },
        })),

      removeExperience: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: state.resumeData.experience.filter((exp) => exp.id !== id),
          },
        })),

      setProjects: (projects) =>
        set((state) => ({
          resumeData: { ...state.resumeData, projects },
        })),

      addProject: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: [
              ...state.resumeData.projects,
              { id: crypto.randomUUID(), name: '', tech: '', github: '', live: '', description: '' },
            ],
          },
        })),

      removeProject: (id) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            projects: state.resumeData.projects.filter((proj) => proj.id !== id),
          },
        })),

      setAchievements: (achievements) =>
        set((state) => ({
          resumeData: { ...state.resumeData, achievements },
        })),

      addAchievement: () =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            achievements: [...state.resumeData.achievements, ''],
          },
        })),

      removeAchievement: (index) =>
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            achievements: state.resumeData.achievements.filter((_, i) => i !== index),
          },
        })),

      setTemplate: (templateId) =>
        set((state) => ({
          resumeData: { ...state.resumeData, templateId },
        })),

      loadResume: (data) => set({ resumeData: data }),

      resetResume: () => set({ resumeData: initialResumeData }),
    }),
    {
      name: 'resume-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
