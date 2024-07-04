import { EditProps } from 'model/EditProfile.model'
import { SubmitHandler } from 'react-hook-form'
import { EditProfileService } from 'service/EditProfile.service'
import ToastAlert from '../toast/ToastAlert'

const EditProfileModal = () => {
    const { EditProfileForm } = EditProfileService()

    const showModal = () => {
        const modal = document.getElementById(
            'edit_profile_modal'
        ) as HTMLDialogElement | null
        if (modal) {
            modal.showModal()
        }
    }

    const closeModal = () => {
        const modal = document.getElementById(
            'edit_profile_modal'
        ) as HTMLDialogElement | null
        if (modal) {
            modal.close()
        }
    }

    const OnSubmit: SubmitHandler<EditProps> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        ToastAlert('success', 'Update Success')
        closeModal()
        console.log(data)
    }

    return (
        <>
            <button
                className="btn btn-outline rounded-full btn-sm"
                onClick={showModal}
            >
                Edit profile
            </button>
            <dialog id="edit_profile_modal" className="modal">
                <div className="modal-box border rounded-md border-gray-700 shadow-md">
                    <h3 className="font-bold text-lg my-3">Update Profile</h3>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={EditProfileForm.handleSubmit(OnSubmit)}
                    >
                        <div className="flex flex-wrap gap-2">
                            <input
                                {...EditProfileForm.register('fullName', {
                                    required: 'Full name is required',
                                })}
                                type="text"
                                placeholder="Full Name"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="fullName"
                            />
                            <br />
                            {EditProfileForm.formState.errors.fullName && (
                                <p className="text-red-500 ">
                                    {
                                        EditProfileForm.formState.errors
                                            .fullName.message
                                    }
                                </p>
                            )}
                            <input
                                {...EditProfileForm.register('username')}
                                type="text"
                                placeholder="Username"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="username"
                            />
                            {EditProfileForm.formState.errors.username && (
                                <p className="text-red-500 ">
                                    {
                                        EditProfileForm.formState.errors
                                            .username.message
                                    }
                                </p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input
                                {...EditProfileForm.register('email')}
                                type="email"
                                placeholder="Email"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="email"
                            />
                            {EditProfileForm.formState.errors.email && (
                                <p className="text-red-500 ">
                                    {
                                        EditProfileForm.formState.errors.email
                                            .message
                                    }
                                </p>
                            )}
                            <textarea
                                {...EditProfileForm.register('bio')}
                                placeholder="Bio"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="bio"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <input
                                {...EditProfileForm.register('currentPassword')}
                                type="password"
                                placeholder="Current Password"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="currentPassword"
                            />
                            {EditProfileForm.formState.errors
                                .currentPassword && (
                                <p className="text-red-500 ">
                                    {
                                        EditProfileForm.formState.errors
                                            .currentPassword.message
                                    }
                                </p>
                            )}
                            <input
                                {...EditProfileForm.register('newPassword')}
                                type="password"
                                placeholder="New Password"
                                className="flex-1 input border border-gray-700 rounded p-2 input-md"
                                name="newPassword"
                            />
                            {EditProfileForm.formState.errors.newPassword && (
                                <p className="text-red-500 ">
                                    {
                                        EditProfileForm.formState.errors
                                            .newPassword.message
                                    }
                                </p>
                            )}
                        </div>
                        <input
                            {...EditProfileForm.register('link')}
                            type="text"
                            placeholder="Link"
                            className="flex-1 input border border-gray-700 rounded p-2 input-md"
                            name="link"
                        />
                        <button className="btn btn-primary rounded-full btn-sm text-white">
                            Update
                        </button>
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button className="outline-none">close</button>
                </form>
            </dialog>
        </>
    )
}
export default EditProfileModal
