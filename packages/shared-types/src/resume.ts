export type ResumeStatus = "draft" | "published" | "archived"

export type SectionType =
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "certifications"
  | "achievements"
  | "activities"
  | "coursework"

export interface ResumeSection {
  type: SectionType
  order: number
  items: any[]
}

export interface PersonalInfo {
  name: string
  email: string
  phone?: string
  location?: string
  linkedin?: string
  github?: string
  portfolio?: string
}

export interface Resume {
  id: string
  userId: string

  title: string
  templateId: string
  status: ResumeStatus

  personalInfo: PersonalInfo
  summary?: string

  sections: ResumeSection[]

  createdAt: Date
  updatedAt: Date
}