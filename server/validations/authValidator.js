import zod from 'zod';


export const userRegisterValidation = zod.object({
    username: zod.string({ required_error: "Username is Required" }).trim().min(3, { message: 'Name at least of 3 characters' }).max(255, { message: 'Name must not be greater then 255 characters' }),
    email: zod.string({ required_error: "Email is Required" }).trim().email({ message: "Invalid Email" }),
    password: zod.string({ required_error: "Password is Required" }).trim().min(8, { message: "Password must be at least 8 characters long" }),
    phone: zod.string({ required_error: "Phone is Required" }).trim().min(11, { message: "Phone must be at least 11 characters long" }).max(11, { message: "Phone must not be greater then 11 characters" })
})


export const userLoginValidation = zod.object({
    email: zod.string({ required_error: "Email is Required" }).trim().email({ message: "Invalid Email" }),
    password: zod.string({ required_error: "Password is Required" }).trim().min(8, { message: "Password must be at least 8 characters long" })
})



