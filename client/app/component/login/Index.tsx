import { MdOutlineMail } from 'react-icons/md'
import { MdPassword } from 'react-icons/md'

import Link from 'next/link'
import XSvg from '../svgs/X'
import { LoginService } from 'service/Login.service'
import ToastAlert from '../toast/ToastAlert'
import { SubmitHandler } from 'react-hook-form'
import { LoginProps } from 'model/Login.model'

const LoginIndex = () => {
    const { LoginForm } = LoginService()
    const onSubmit: SubmitHandler<LoginProps> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        ToastAlert('success', 'Login Successfull')
        LoginForm.reset()
        console.log(data)
    }

    return (
        <div className="max-w-screen-xl mx-auto flex h-screen">
            <div className="flex-1 hidden lg:flex items-center  justify-center">
                <XSvg className="md:w-2/3 fill-white" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center">
                <form
                    className="flex gap-4 flex-col"
                    onSubmit={LoginForm.handleSubmit(onSubmit)}
                >
                    <h1 className="text-4xl font-extrabold text-white">
                        {"Let's"} go.
                    </h1>
                    <label className="input input-bordered rounded flex items-center gap-2">
                        <MdOutlineMail />
                        <input
                            {...LoginForm.register('username', {
                                required: 'Username is required',
                            })}
                            type="text"
                            className="grow"
                            placeholder="username"
                            name="username"
                        />
                    </label>
                    {LoginForm.formState.errors.username && (
                        <p className="text-red-500">
                            {LoginForm.formState.errors.username.message}
                        </p>
                    )}
                    <label className="input input-bordered rounded flex items-center gap-2">
                        <MdPassword />
                        <input
                            {...LoginForm.register('password', {
                                required: 'Password is required',
                            })}
                            type="password"
                            className="grow"
                            placeholder="Password"
                            name="password"
                        />
                    </label>
                    {LoginForm.formState.errors.password && (
                        <p className="text-red-500">
                            {LoginForm.formState.errors.password.message}
                        </p>
                    )}
                    <button
                        className="btn rounded-full btn-primary text-white"
                        type="submit"
                        disabled={LoginForm.formState.isSubmitting}
                    >
                        {LoginForm.formState.isSubmitting ? (
                            <>
                                <span className="spinner"></span> loading...
                            </>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <div className="flex flex-col gap-2 mt-4">
                    <p className="text-white text-lg">
                        {"Don't"} have an account?
                    </p>
                    <Link href="/signup">
                        <button className="btn rounded-full btn-primary text-white btn-outline w-full">
                            Sign up
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LoginIndex
