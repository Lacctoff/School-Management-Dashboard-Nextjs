import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const infoItems = [
  { icon: "/blood.png", label: "A+" },
  { icon: "/date.png", label: "January 2026" },
  { icon: "/mail.png", label: "user@gmail.com" },
  { icon: "/phone.png", label: "08034567890" },
];

const statsCards = [
  { icon: "/singleAttendance.png", value: "90%", label: "Attendance" },
  { icon: "/singleBranch.png", value: "6th Grade", label: "Grade" },
  { icon: "/singleLesson.png", value: "18", label: "Lessons" },
  { icon: "/singleClass.png", value: "6A", label: "Class" },
];

const shortcutLinks = [
  { label: "Student's Lessons", href: "/", bg: "bg-tofunmiSkyLight" },
  { label: "Student's Teachers", href: "/", bg: "bg-tofunmiPurpleLight" },
  { label: "Student's Exams", href: "/", bg: "bg-pink-50" },
  { label: "Student's Assignments", href: "/", bg: "bg-tofunmiSkyLight" },
  { label: "Student's Results", href: "/", bg: "bg-tofunmiYellowLight" },
];

const SingleStudentPage = () => (
  <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
    {/* LEFT */}
    <div className="w-full xl:w-2/3">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* users card */}
        <div className="bg-tofunmiSky py-6 px-4 rounded-md flex-1 flex gap-4">
          {/* image container */}
          <div className="w-1/3">
            <Image
              src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              width={144}
              height={144}
              className="w-36 h-36 rounded-full  object-cover"
            />
          </div>
          <div className="w-2/3 flex flex-col justify-between gap-4">
            <h1 className="text-xl font-semibold">Dapson Adeola</h1>
            <p className="text-sm text-gray-500">
              Primary 6 Head girl Brilliant Stars Int&apos;l schools.
            </p>

            {/* info stats */}
            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
              {infoItems.map((item, index) => (
                <div
                  className="w-full md:w-1/3 xl:w-full 2xl:w-1/3 flex items-center gap-2"
                  key={index}
                >
                  <Image src={item.icon} alt="" width={14} height={14} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* small cards */}
        <div className="flex-1 flex flex-wrap gap-4 justify-between">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
            >
              <Image
                src={card.icon}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="">
                <h1 className="text-xl font-semibold">{card.value}</h1>
                <span className="text-sm text-gray-400">{card.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-white p-4 mt-4 rounded-md">
        <h1>Student&apos;s Schedule</h1>
        <BigCalender />
      </div>
    </div>

    {/* RIGHT */}
    <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="bg-white p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
          {shortcutLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`p-3 rounded-md ${link.bg}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Performance />
      <Announcements />
    </div>
  </div>
);

export default SingleStudentPage;
