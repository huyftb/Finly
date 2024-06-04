import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});


export const RegisterSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters long',
  }),
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords must match',
  path: ['confirmPassword'],
});

