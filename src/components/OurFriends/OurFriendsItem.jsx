const OurFriendsItem = ({friend}) => {
  console.log("friend", friend)
  
  const { title, imageUrl, address, email, phone, workDays, addressUrl, url } = friend;
  console.log("addressUrl", addressUrl)
  console.log("workDays", workDays)

  return <>
          <h2 className="FriendTitle"> <a href={url} target="_blank" rel="noreferrer">{title}</a></h2>
          <div className="BoxFriendItem">
            <div className="BoxFriendLogo">
              <img src={imageUrl} alt="Logo" className="FriendLogo"></img>
            </div>
            <div className="BoxFriendInfo">
              <ul className="FriendInfoList">
                <li className="FriendInfoItem">Time:<p></p></li>
                <li className="FriendInfoItem">Address: <p>{address}</p></li>
                <li className="FriendInfoItem">Email: <p>{email}</p></li>
                <li className="FriendInfoItem">Phone: <p>{phone}</p></li>
              </ul>
            </div>
          </div>
  </>
}

export default OurFriendsItem