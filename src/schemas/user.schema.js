import { z } from 'zod'

export const createUserSchema = z.object({
    name: z.string().min(4).max(45),
    lastname: z.string().min(4).max(45),
    email: z.string().email(),

    password: z.string().regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        { message: 'Password must contain at least eight characters, one uppercase letter, one lowercase letter, one number and one special character:' }
    ),
    birth_date: z
        .preprocess((arg) => {
            if (typeof arg === 'string' || arg instanceof Date) {
                return new Date(arg);
            }
        }, z.date())
        .refine((date) => {
            const mindate = new Date()
            mindate.setFullYear(mindate.getFullYear() - 18)

            return date <= mindate
        }, {
        message: 'User must be at least 18 years old.'
        })
})