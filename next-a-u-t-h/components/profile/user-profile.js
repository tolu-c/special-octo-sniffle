import { getSession, useSession } from "next-auth/react";
import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";
import { useEffect, useState } from "react";

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  // Redirect away if NOT auth
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        window.location.href = "/auth";
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const { data: session, status } = useSession();
  console.log({ session, status });

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
