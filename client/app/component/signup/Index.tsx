// SignUpIndex.tsx
import React, { useEffect } from 'react'
import { SignUpService } from 'service/SignUp.service'
import { SubmitHandler } from 'react-hook-form'
import XSvg from '../svgs/X'
import { MdOutlineMail } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'
import { MdPassword } from 'react-icons/md'
import { MdDriveFileRenameOutline } from 'react-icons/md'
import Link from 'next/link'
import ToastAlert from '../toast/ToastAlert'
import TextInput from '../UI/TextInput'
import { SignUpProps } from 'model/SignUp.model'
import { useRouter } from 'next/router'

export default function SignUpIndex() {
    const { SignUpForm } = SignUpService()
    const router = useRouter()

    const onSubmit: SubmitHandler<SignUpProps> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        ToastAlert('success', 'SignUp Successfully')
        SignUpForm.reset()
        router.push('login')
        console.log(data)
    }

    return (
        <div className="max-w-screen-xl mx-auto flex h-screen px-10">
            <div className="flex-1 hidden lg:flex items-center justify-center">
                <XSvg className="lg:w-2/3 fill-white" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <form
                    className="lg:w-2/3 mx-auto md:mx-20 flex gap-4 flex-col"
                    onSubmit={SignUpForm.handleSubmit(onSubmit)}
                >
                    <h1 className="text-4xl font-extrabold text-white">
                        Join today.
                    </h1>
                    <TextInput
                        type={'email'}
                        name="email"
                        control={SignUpForm.control}
                        label="Email"
                        placeholder="Enter your email"
                        register={SignUpForm.register}
                        icon={MdOutlineMail}
                        errors={SignUpForm.formState.errors}
                        rules={{ required: 'Email is required' }}
                        className="w-full"
                    />
                    <div className="flex flex-wrap gap-4">
                        <TextInput
                            type="text"
                            name="username"
                            control={SignUpForm.control}
                            label="User Name"
                            placeholder="Enter Username"
                            register={SignUpForm.register}
                            icon={FaUser}
                            errors={SignUpForm.formState.errors}
                            rules={{ required: 'Username is required' }}
                            className="w-full md:w-1/2"
                        />
                        <TextInput
                            type="text"
                            name="fullName"
                            control={SignUpForm.control}
                            label="Full Name"
                            placeholder="Enter Full Name"
                            register={SignUpForm.register}
                            icon={MdDriveFileRenameOutline}
                            errors={SignUpForm.formState.errors}
                            rules={{ required: 'Name is required' }}
                            className="w-full md:w-1/2"
                        />
                    </div>
                    <TextInput
                        type={'password'}
                        name="password"
                        control={SignUpForm.control}
                        label="Password"
                        placeholder="Enter your password"
                        register={SignUpForm.register}
                        icon={MdPassword}
                        errors={SignUpForm.formState.errors}
                        rules={{ required: 'Password is required' }}
                        className="w-full"
                    />
                    <button
                        type="submit"
                        className="btn rounded-full btn-primary text-white"
                        disabled={SignUpForm.formState.isSubmitting}
                    >
                        {SignUpForm.formState.isSubmitting ? (
                            <>
                                <span className="spinner mr-2"></span>
                            </>
                        ) : (
                            'Sign up'
                        )}
                    </button>
                </form>
                <div className="flex flex-col lg:w-2/3 gap-2 mt-4">
                    <p className="text-white text-lg underline">
                        Already have an account?
                    </p>
                    <Link href="/login">
                        <button className="btn rounded-full btn-primary text-white btn-outline w-full">
                            Sign in
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
