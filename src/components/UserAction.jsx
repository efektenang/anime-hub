import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserAction = async () => {
  const user = await authUserSession();
  return (
    <div>
      {!user ? (
        <Link href="/api/auth/signin" className="btn btn-sm btn-success">
          Sign In
        </Link>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user.image}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-white text-black rounded-box w-52">
            <li>
              <Link href='/user/profile' className="justify-between">Profile</Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAction