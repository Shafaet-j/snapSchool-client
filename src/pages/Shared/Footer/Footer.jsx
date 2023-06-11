import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-base-200 dark:bg-slate-950 dark:text-slate-300">
        <footer className="footer bg-base-200 py-10 text-base-content px-4 container mx-auto lg:grid-cols-4 grid-cols-2 dark:bg-slate-950 dark:text-slate-300">
          <div className=" text-left">
            <h2 className=" text-primary font-bold text-3xl">SnapScholl</h2>
            <p>
              Snapscholl Ltd.
              <br />
              Providing reliable photograpgy course since 1992
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Wildlife photograpgy</a>
            <a className="link link-hover">Street photograpgy</a>
            <a className="link link-hover">Night photograpgy</a>
            <a className="link link-hover">Portrait photograpgy</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
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
