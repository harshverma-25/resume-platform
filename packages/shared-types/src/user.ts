export interface User {
  id: string
  clerkId: string

  name: string
  username?: string
  email: string

  profilePicture?: string
  bio?: string
  headline?: string
  location?: string

  socialLinks?: {
    linkedin?: string
    github?: string
    portfolio?: string
    twitter?: string
    leetcode?: string
  }

  createdAt: Date
  updatedAt: Date
}