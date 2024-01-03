'use client'

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession()
  
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4">
        <figure>
          <img src={session?.user.image} alt="Profile Image" />
        </figure>
        <div className="card-body">
          <h1 className="card-title">Profile Settings</h1>
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              type="text"
              value={session?.user.name}
              className="input input-bordered w-full max-w-sm"
              disabled
            />
          </label>
          <label className="form-control w-full max-w-sm">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              value={session?.user.email}
              className="input input-bordered w-full max-w-sm"
              disabled
            />
          </label>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}
