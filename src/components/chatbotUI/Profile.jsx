
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
// import Stellantis-comm


const Profile = () => {
  // const { user, isAuthenticated, isLoading } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();
  const botname = "StellaBot";

  const { loginWithRedirect, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  // function closeForm() {
  //   document.getElementById("my_chatbot").style.display = "none";
  // }

  return (


    // isAuthenticated && (
    //   <div style={{ backgroundColor: '#376B7E', padding: "5px", borderRadius: "3px", display: "flex", justifyContent: "center", alignItems: "center" }}>
    //     <img src={user.picture} alt={user.name} />
    //     <h4>{user.name}</h4>
    //     {/* <p>{user.email}</p> */}
    //   </div>
    // ),


    isAuthenticated ? (<div style={{
      backgroundColor: '#376B7E',
      //backgroundImage: ('https://dlt.mobi/wp-content/uploads/2022/03/Stellantis-community-logo-3.png'),
      padding: "7px",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      height: "40px",
      align: "left"

    }} >

      <img src={user.picture} alt={user.name} style={{
        height: "80%", borderRadius: "50%", marginRight: "10px", marginLeft: "6px"
      }} />
      {/* <h4 style={{height: "10px" , width: "10px"}}>{user.name}</h4> */}
      {/* <p>{user.email}</p> */}
      <div style={{ fontSize: "small", fontWeight: "bold" }}>{user.name}</div>
      <div style={{ display:'block', fontSize: 'initial', fontWeight: 'bold', cursor: 'pointer', marginLeft:'auto',marginRight:'5px' }}>
        {isAuthenticated ? (<p
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>) : (<p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => loginWithRedirect()}>Log In</p>)}
      </div>

    </div >) : (<div style={{
      backgroundColor: "#376B7E",
      backgroundImage: ('https://dlt.mobi/wp-content/uploads/2022/03/Stellantis-community-logo-3.png'),
      padding: "7px",
      borderRadius: "3px",
      display: "flex",
      justifyContent: "left",
      alignItems: "center",
      height: "40px",
      align: "left"
    }} >
      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="profile_img" style={{ height: "80%", borderRadius: "50%", marginRight: "10px", marginLeft: "6px" }}></img>
      <img></img>
      <div style={{ fontSize: "medium", fontWeight: "bold", height: "80%", marginLeft: "6px", marginTop: "6px" }}>{botname}</div>
      <div style={{ display: 'block', fontSize: 'initial', fontWeight: 'bold', cursor: 'pointer',marginLeft:'auto',  marginRight:'5px' }}>
        {isAuthenticated ? (<p
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</p>) : (<p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => loginWithRedirect()}>Log In</p>)}
      </div>

    </div>

    )

  );
};

export default Profile;
