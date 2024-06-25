import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username }).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log("Error in getUserProfile: ", error.message);
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id)
        const currentuser = await User.findById(req.user._id);

        if (id === req.user._id) return res.status(400).json({ error: "You can't follow/Unfollow your self" });
        if (!userToModify || !currentuser) return res.status(400).json({ error: "Usern ot found" });

        const isFollowing = currentuser.following.includes(id)
        if (isFollowing) {
            //Unfollow User
        } else {
            //Follow User
        }

    } catch (error) {
        console.log("Error in followUnfollowUser ", error.message)
        res.status(500).json({ error: error.message })
    }
}