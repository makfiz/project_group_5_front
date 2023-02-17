const OurFriends = ({ourFriends}) => {
console.log("ourFriends", ourFriends)

  return <div>
    <ul>Our friends list
      {ourFriends.map(friend => (
        <li key={friend._id}>
          <p>{friend.title}</p>

        </li>
      ))}
    </ul>
  </div>;
}

export default OurFriends;
