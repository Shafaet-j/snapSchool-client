import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-base-200 dark:bg-slate-950">
        <footer className="footer bg-base-200 py-24 px-4 container mx-auto lg:grid-cols-4 grid-cols-2 dark:bg-slate-950 dark:text-white">
          <div className=" text-left">
            <h2 className=" text-primary font-bold text-3xl">SnapScholl</h2>
            <p>
              Snapscholl Ltd.
              <br />
              Providing reliable photograpgy course since 1992
            </p>
          </div>
          <div>
            <span className=" text-2xl font-bold text-accent dark:text-slate-300">
              Services
            </span>
            <a className="link link-hover font-medium mb-5 text-base">
              Wildlife photograpgy
            </a>
            <a className="link link-hover font-medium mb-5 text-base">
              Street photograpgy
            </a>
            <a className="link link-hover font-medium mb-5 text-base">
              Night photograpgy
            </a>
            <a className="link link-hover font-medium mb-5 text-base">
              Portrait photograpgy
            </a>
          </div>
          <div>
            <span className="text-2xl font-bold text-accent dark:text-slate-300">
              Company
            </span>
            <a className="link link-hover mb-5 font-medium text-base">
              About us
            </a>
            <a className="link link-hover mb-5 font-medium text-base">
              Contact
            </a>
            <a className="link link-hover mb-5 font-medium text-base">Jobs</a>
            <a className="link link-hover mb-5 font-medium text-base">
              Press kit
            </a>
          </div>
          <div>
            <span className=" text-2xl font-bold text-accent dark:text-slate-300">
              Legal
            </span>
            <a className="link link-hover mb-5 font-medium text-base">
              Terms of use
            </a>
            <a className="link link-hover mb-5 font-medium text-base">
              Privacy policy
            </a>
            <a className="link link-hover mb-5 font-medium text-base">
              Cookie policy
            </a>
          </div>
        </footer>
      </div>
      <div className="dark:bg-slate-950 dark:text-slate-300 dark:border-t-2 dark:border-slate-900 py-5">
        <p>Copyright © 2023 - All right reserved by SnapSchool</p>
      </div>
    </>
  );
};

export default Footer;
