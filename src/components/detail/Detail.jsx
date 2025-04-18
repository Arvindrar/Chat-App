import { useChatStore } from "../../lib/chatStore";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import { arrayUnion, doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Detail = () => {
  const { chatId, user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } =
    useChatStore();

  const { currentUser } = useUserStore();
  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id);

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="detail">
      <div className="user">
        <img src={user?.profilePic || "./profile2.png"} />
        <h2>{user?.username}</h2>
        <p>I m not following anyone</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/R.6dd18590bed0014c999a1967bf556c17?rik=jtPmMO0Z49p6jg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f7%2fGallery-PNG-Image-HD.png&ehk=YZ4xikdPTrY%2flhwwbRFwuiIuAvuO6F%2f6jCvGrEOz2o0%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/R.6dd18590bed0014c999a1967bf556c17?rik=jtPmMO0Z49p6jg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f7%2fGallery-PNG-Image-HD.png&ehk=YZ4xikdPTrY%2flhwwbRFwuiIuAvuO6F%2f6jCvGrEOz2o0%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/R.6dd18590bed0014c999a1967bf556c17?rik=jtPmMO0Z49p6jg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f7%2fGallery-PNG-Image-HD.png&ehk=YZ4xikdPTrY%2flhwwbRFwuiIuAvuO6F%2f6jCvGrEOz2o0%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://th.bing.com/th/id/R.6dd18590bed0014c999a1967bf556c17?rik=jtPmMO0Z49p6jg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f7%2fGallery-PNG-Image-HD.png&ehk=YZ4xikdPTrY%2flhwwbRFwuiIuAvuO6F%2f6jCvGrEOz2o0%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button onClick={handleBlock}>
          {isCurrentUserBlocked
            ? "You are Blocked!"
            : isReceiverBlocked
            ? "User blocked"
            : "Block User"}
        </button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
