"use client";

import { useState } from "react";
import Logo from "./logo";
import Menu from "./menu";
import Search from "./search";
import SignInButton from "./sign-in-button";
import SignUpButton from "./sign-up-button";
import Modal from "../ui/modals/modal";
import AuthContent from "./auth-content";
import Avatar from "./avatar";
import NotificationIcon from "./notification-icon";
import Submit from "./submit";
import Link from "next/link";

interface NavbarProps {
  authenticatedUser?: any;
  notifications?: any;
  products?: any;
}

const Navbar: React.FC<NavbarProps> = ({
  authenticatedUser,
  notifications,
  products,
}) => {
  const [authModalVisible, setAuthModalVisible] = useState(false);

  const handleButtonClick = () => {
    setAuthModalVisible(true);
  };

  return (
    <div
      className="border-b md:py-0 px-4 md:px-6 py-5 bg-white"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          {/* <Logo /> */}
          {/* <Search /> */}
          <Link href={"/"}>
            <img src="/logo/sandboxlogo.png" className="h-10 w-auto" alt="" />
          </Link>
        </div>

        <div className="absolute right-1/2 translate-x-1/2 transform z-10">
          <Menu />
        </div>

        <div className="flex items-center text-sm space-x-6 cursor-pointer">
          {authenticatedUser ? (
            <>
              <Submit
                products={products}
                authenticatedUser={authenticatedUser}
              />
              <NotificationIcon notifications={notifications} />
              <Avatar authenticatedUser={authenticatedUser} />
            </>
          ) : (
            <div
              onClick={handleButtonClick}
              className="flex items-center space-x-6 cursor-pointer text-sm"
            >
              <SignUpButton />
              <SignInButton />
            </div>
          )}
        </div>

        <Modal visible={authModalVisible} setVisible={setAuthModalVisible}>
          <AuthContent />
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
