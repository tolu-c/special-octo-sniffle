import Link from "next/link";
import classes from "./main-navigation.module.css";
import { useSession } from "next-auth/react";

function MainNavigation() {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);

  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session ? (
            <li>
              <button>Logout</button>
            </li>
          ) : (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
