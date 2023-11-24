"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProfessionalRegistrationForm = () => {
  const handleSubmit = (e) => {};

  return (
    <>
      <div className="w-full h-[80vh] sm:h-[87vh] md:h-[84vh] flex justify-center items-center animate-fade-in-down">
        <div className="w-[85%] md:w-[85%] xl:w-[75%] h-[90%] border-[1px] border-solid border-[#53c28b]/90 rounded-2xl shadow-lg flex flex-rol gap-0 p-1 ease-in-out duration-300">
          <div className="w-[50%] h-full hidden sm:flex justify-center items-cent rounded-xl ease-in-out duration-300">
            <Image
              src="/authImg.png"
              alt="authImg"
              width={400}
              // fill={true}
              height={400}
              className="contactImg w-auto h-auto object-contain animate-[moveCon_2s_infinite_ease_alternate]"
            />
          </div>
          <div className="scrollDiv overflow-y-scroll scroll-snap-type-x-mandatory w-full sm:w-[50%] h-full">
            <div className="fontFam w-full h-auto flex flex-col justify-between gap-2 px-5 rounded-xl ease-in-out duration-300">
              <div className="fontFam w-full h-auto text-[40px] md:text-[45px] lg:text-[60px] text-[#53c28b] text-center ease-in-out duration-300">
                Register
              </div>
              <form
                action=""
                method=""
                onSubmit={handleSubmit}
                className="w-full h-full flex flex-col gap-4"
              >
                <div className="w-full h-[20vh] flex flex-col items-center justify-center">
                  <label className="text-xl">Add Profile</label>
                  <div className="border-[1px] hover:border-[#53c28b] rounded-3xl w-full h-[20vh] text-center p-10">
                    <input
                      type="file"
                      name="profileImg"
                      accept=".jpg, .jpeg, .png"
                      className="allFormInput w-full h-full border-none cursor-pointer"
                    />
                  </div>
                </div>
                <select
                  name="category"
                  placeholder="Freelancer Category"
                  className="w-full h-[52px] fontFam text-[#53c28b] text-xl rounded-sm bg-transparent border-b-[1px] border-b-[#53c28b] hover:shadow-md focus:shadow-md outline-none"
                >
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="web_development">Web Development</option>
                  <option value="graphic_design">Graphic Design</option>
                  <option value="writing">Writing</option>
                </select>
                <textarea
                  name="address"
                  placeholder="Address"
                  rows={3}
                  className="allFormInput h-auto"
                />
                <input
                  type="text"
                  name="zip"
                  placeholder="ZIP/Postal Code"
                  className="allFormInput h-[52px]"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="countryCode"
                    value="+91"
                    className="w-[3rem] h-[52px] fontFam text-[#53c28b] text-xl rounded-sm bg-transparent border-b-[1px] border-b-[#53c28b] hover:shadow-md focus:shadow-md outline-none"
                  />
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number"
                    className="allFormInput h-[52px] appearance-none numHide"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                      margin: 0,
                    }}
                  />
                </div>
                <textarea
                  name="bio"
                  placeholder="Bio / Introduction"
                  rows={3}
                  className="allFormInput h-auto"
                ></textarea>
                <label className="text-xl">Years of Experience</label>
                <input
                  type="range"
                  name="skill_level"
                  min=""
                  max=""
                  step="1"
                  value=""
                  className="accent-[#53c28b]"
                />
                <label className="text-xl">Add your resume</label>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf, .doc, .docx"
                  className="allFormInput h-[52px]"
                />
                <input
                  type="url"
                  name="slOne"
                  placeholder="Social Link 1"
                  className="allFormInput h-[52px]"
                />
                <input
                  type="url"
                  name="slTwo"
                  placeholder="Social Link 2"
                  className="allFormInput h-[52px]"
                />
                <textarea
                  name="workHistory"
                  placeholder="Write about your work history"
                  rows={3}
                  className="allFormInput h-auto"
                ></textarea>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="termsAgree"
                    required
                    className="w-4 h-4 leading-tight bg-[#53c28b] rounded hover:ring-1 focus:ring-1 accent-[#53c28b]"
                    checked
                  />
                  I agree to the terms and conditions!
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="termsAgree"
                    required
                    className="w-4 h-4 leading-tight bg-[#53c28b] rounded hover:ring-1 focus:ring-1 accent-[#53c28b]"
                    checked
                  />
                  I agree to the terms and conditions!
                </div>
                <button
                  type="submit"
                  className="allBtn w-[7rem] h-[3rem] text-xl rounded-3xl"
                >
                  Register
                </button>
              </form>
              <div className="lg:flex gap-1 justify-center mb-2">
                Already have account?{" "}
                <Link
                  className="cursor-pointer font-semibold hover:shadow-md focus:shadow-md hover:scale-105 duration-500"
                  // text-[#fff]/80 hover:text-[#fff]
                  href={"/signIn"}
                >
                  <span className="underline underline-offset-2">SignIn</span>{" "}
                  <span className="underline underline-offset-2">Here</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalRegistrationForm;
