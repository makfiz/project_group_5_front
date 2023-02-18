import WorkDays from "./WorkDays";

const OurFriendsItem = ({friend}) => {
  const { title, imageUrl, address, email, phone, workDays, addressUrl, url } = friend;

  const mailto = 'mailto:' 
  const tel = 'tel:'
  const hrefMail = mailto.concat(email) 
  const hreftel = tel.concat(phone)

  return <>
          <h2 className="FriendTitle"> <a href={url} target="_blank" rel="noreferrer">{title}</a></h2>
          <div className="BoxFriendItem">
            <div className="BoxFriendLogo">
              <img src={imageUrl} alt="Logo" className="FriendLogo"></img>
            </div>
            <div className="BoxFriendInfo">
              <ul className="FriendInfoList">
          <li className="FriendInfoItem">Time: {workDays ? (<WorkDays workDays={workDays} name={title} />) : (<p>--------------------------</p>) }</li>
          <li className="FriendInfoItem">Address: {address ? (<address><a href={addressUrl} target="_blank" rel="noreferrer">{address}</a></address>) : (<p>--------------------------</p>) }</li>
          <li className="FriendInfoItem">Email: {email ? (<a href={hrefMail}>{email}</a>) : (<p>--------------------------</p>) }</li>
          <li className="FriendInfoItem">Phone: {phone ? (<a href={hreftel}>{phone}</a>) : (<p>--------------------------</p>) }</li>
              </ul>
            </div>
          </div>
  </>
}

export default OurFriendsItem