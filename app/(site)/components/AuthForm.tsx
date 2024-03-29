'use client';//specifies Next.js that this is a client component and not a server component.

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useCallback, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";


type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () =>{
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [loading, setLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if(variant == 'LOGIN'){
            setVariant('REGISTER')
        }else{
            setVariant('LOGIN')
        }
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setLoading(true)

        if(variant === 'REGISTER'){
            //axios register
        }

        if(variant === 'LOGIN'){
            //next auth signin
        }
    }

    //for google and github login
    const socialAction = (action : string) => {
        setLoading(true)

        //nextAuth social sign in.
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
               <form
                className="space-y-6"
                onSubmit={handleSubmit(onSubmit)}
               >
                {variant === 'REGISTER' && (
                    <Input id = "name" label="Name" register={register} errors={errors} disabled={loading} />
                )}
                <Input id = "email" label="Email Address" type="email" register={register} errors={errors} disabled={loading} />
                <Input id = "password" label="Password" type="password" register={register} errors={errors} disabled={loading} />
                
                <div>
                    <Button
                        disabled={loading}
                        fullWidth
                        type="submit"
                    >
                        {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                    </Button>
                </div>
               </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-white px-2 text-gray-500">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
                <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
                    <div>
                        {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm

