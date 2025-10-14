import { UserModel } from "../../schema/user.schema.js";

export const followUser = async (req, res) => {
  const followedUserid = req.params.followedUserid;
  const followingUserId = req.user._id;

  if (followedUserid === followingUserId) {
    res.status(400).json({ message: "sug yumbe" });
    return;
  }
  const followingUser = await UserModel.findById(followingUserId);
  const followedUser = await UserModel.findById(followedUserid);

  const follow = followedUser.followers;
  const test = follow.includes(followingUserId);

  if (test) {
    await UserModel.findByIdAndUpdate(followingUserId, {
      following: followingUser.following.filter(
        (item) => item.toString() != followedUserid
      ),
    });

    await UserModel.findByIdAndUpdate(followedUserid, {
      followers: followedUser.followers.filter(
        (item) => item.toString() != followingUserId
      ),
    });
  } else {
    await UserModel.findByIdAndUpdate(followingUserId, {
      following: [...followingUser.following, followedUserid],
    });
    await UserModel.findByIdAndUpdate(followedUserid, {
      followers: [...followedUser.followers, followingUserId],
    });

    res.status(200).json({ message: "amjilttai" });
  }
};
