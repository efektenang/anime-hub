"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const CollectionHeader = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center m-4">
        <h3 className="text-2xl text-black font-bold">My Collections</h3>
        <span>
          <button onClick={() => router.back()}>
            <ArrowSquareLeft size={40} color="#151414" weight="bold" />
          </button>
        </span>
      </div>
    </div>
  );
};

export default CollectionHeader;
