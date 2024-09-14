"use client";
import { ArrowBigUp } from "lucide-react";
import { CiCalendar } from "react-icons/ci";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  Star,
  Twitter,
  Linkedin,
  Youtube,
  Github,
  ExternalLink,
  Users,
  Clock,
  Eye,
} from "lucide-react";
import { BiSolidUpvote } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/testdata";
// const projectDet = {
//   name: "zenistu",
//   logo: "https://cdn.dribbble.com/userupload/16561192/file/original-6c6fc9c1fd54dab3100df254fdec93d4.jpg?resize=1200x900",
//   description:
//     "A hackathon project focused on reducing global food waste using AI and machine learningLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
//   projectDetails: {
//     techStack: ["React", "Node.js", "MongoDB"],
//     developmentStage: "Completed",
//     businessOpportunity:
//       "Potential to scale across industries for reducing food wastage.",
//     socialLinks: [
//       "https://twitter.com/project1",
//       "https://linkedin.com/project1",
//     ],
//     imgs: ["https://example.com/image1.png", "https://example.com/image2.png"],
//     youtubeLinks: ["https://youtube.com/project1demo"],
//     projectLink: "https://project1.com",
//     githubLink: "https://github.com/project1",
//     shortInfo: "Created on: Jan 2024, Last Updated: Feb 2024",
//     teamMembers: [
//       { name: "Alice", role: "Lead Developer" },
//       { name: "Bob", role: "UI/UX Designer" },
//       { name: "Charlie", role: "Data Scientist" },
//     ],
//     feedback:
//       "Received excellent feedback during the hackathon. Recognized for innovation.",
//     projectMentor: "Dr. John Smith",
//     acquiredDetails: "Partnered with local food banks to trial the solution.",
//     challengesFaced: [
//       "Limited data availability",
//       "Integration with existing systems",
//     ],
//     solutionsImplemented: [
//       "Built a custom dataset",
//       "Used an API-based approach for integration",
//     ],
//     futureScope:
//       "Expand to other regions and collaborate with food waste organizations.",
//     fundingDetails: "Received initial funding from Hackathon sponsors.",
//     documentationLink: "https://docs.project1.com",
//     features: [
//       "Real-time food waste detection",
//       "Custom AI algorithms",
//       "Seamless integration with food distribution networks",
//     ],
//   },
//   headline: "AI-Powered Solution to Reduce Food Waste",
//   projectType: "Hackathon",
//   creationDate: new Date("2024-01-15"),
//   lastUpdate: new Date("2024-02-20"),
//   rating: 4.8,
//   tags: ["AI", "Sustainability", "Hackathon"],
//   targetAudience: ["Non-profits", "Governments", "Businesses"],
//   featured: true,
//   views: 5000,
// };

export default function Component() {
  const projectDet = projects[0];
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = ["Overview", "Team", "Details", "Gallery"];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <div
      className="w-full mx-auto p-6 bg-white"
      style={{
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img
            src={projectDet.logo}
            alt={`${projectDet.name} Logo`}
            className="rounded-xl h-48 w-auto"
          />
          <div>
            <h1 className="text-3xl font-bold">{projectDet.name}</h1>
            <p className="text-gray-600">{projectDet.headline}</p>
            <div className="flex mt-6  space-x-5">
              <Drawer>
                <DrawerTrigger asChild>
                  {/* <Button variant="outline">Acquisition</Button> */}
                  <button className="px-6 py-2 rounded-md bg-gray-200 text-gray-800  hover:bg-gray-300 transition duration-300 flex items-center border">
                    Acquastion
                  </button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Acquisition Proposal</DrawerTitle>
                    <DrawerDescription>
                      Fill out this form with your acquisition details. Click
                      submit when youre done.
                    </DrawerDescription>
                  </DrawerHeader>
                  <form onSubmit={handleSubmit} className="px-4">
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="company" className="text-right">
                          Company
                        </Label>
                        <Input
                          id="company"
                          placeholder="Your company"
                          className="col-span-3"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="price" className="text-right">
                          Price Offering
                        </Label>
                        <Input
                          id="price"
                          placeholder="$0.00"
                          type="number"
                          min="0"
                          step="0.01"
                          className="col-span-3"
                          required
                        />
                      </div>
                      {/* <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="target" className="text-right">
                        Target Company
                      </Label>
                      <Input
                        id="target"
                        placeholder="Company to acquire"
                        className="col-span-3"
                        required
                      />
                    </div> */}
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="date" className="text-right">
                          Proposed Date
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? (
                                format(date, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="comments" className="text-right">
                          Comments
                        </Label>
                        <Textarea
                          id="comments"
                          placeholder="Additional comments"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DrawerFooter>
                      <Button type="submit">Submit Proposal</Button>
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </form>
                </DrawerContent>
              </Drawer>
              <a
                href={projectDet.projectDetails.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
              <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center">
                <BiSolidUpvote className="w-4 h-4 mr-2" />
                80
              </button>
              <a
                href={projectDet.projectDetails.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-md  flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Project
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4"></div>

          {/*          */}

          <div className="flex items-center space-x-4">
            {/*            
            <a
              href={projectDet.projectDetails.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-md  flex items-center"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Project
            </a> */}
          </div>
        </div>
      </header>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-gray-600">
            {projectDet.rating.toFixed(1)}
          </span>
        </div>
        <span className="text-gray-600">{projectDet.projectType}</span>
        <div className="flex items-center">
          <Eye className="w-5 h-5 text-gray-400 mr-1" />
          <span className="text-gray-600">{projectDet.views} views</span>
        </div>
      </div>

      <div className="mb-6">
        {projectDet.tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex space-x-4 border-b mb-6">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              className={({ selected }) =>
                `pb-2 font-medium outline-none ${
                  selected
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Project Description</h2>
                <p className="text-gray-700 mb-6">{projectDet.description}</p>
                <div className="my-6">
                  <ImageGallery
                    images={[...projectDet.projectDetails.imgs]}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 mb-6">
                  {projectDet.projectDetails.features.map((feature, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectDet.projectDetails.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 rounded px-2 py-1 text-sm text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <CiCalendar className="inline w-4 h-4 mr-2" />
                    Created: {projectDet.creationDate.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <Clock className="inline w-4 h-4 mr-2" />
                    Last Updated: {projectDet.lastUpdate.toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Target Audience: {projectDet.targetAudience.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h2 className="text-2xl font-bold mb-4">Team Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectDet.projectDetails.teamMembers.map((member, index) => (
                <div key={index} className="bg-white shadow rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Project Mentor</h3>
              <p className="text-gray-700">
                {projectDet.projectDetails.projectMentor}
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Development Stage
                </h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.developmentStage}
                </p>
                <h3 className="text-xl font-semibold mb-3">
                  Business Opportunity
                </h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.businessOpportunity}
                </p>
                <h3 className="text-xl font-semibold mb-3">Challenges Faced</h3>
                <ul className="list-disc pl-5 mb-4">
                  {projectDet.projectDetails.challengesFaced.map(
                    (challenge, index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        {challenge}
                      </li>
                    )
                  )}
                </ul>
                <h3 className="text-xl font-semibold mb-3">
                  Solutions Implemented
                </h3>
                <ul className="list-disc pl-5 mb-4">
                  {projectDet.projectDetails.solutionsImplemented.map(
                    (solution, index) => (
                      <li key={index} className="text-gray-700 mb-2">
                        {solution}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Future Scope</h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.futureScope}
                </p>
                <h3 className="text-xl font-semibold mb-3">Funding Details</h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.fundingDetails}
                </p>
                <h3 className="text-xl font-semibold mb-3">Feedback</h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.feedback}
                </p>
                <h3 className="text-xl font-semibold mb-3">Acquired Details</h3>
                <p className="text-gray-700 mb-4">
                  {projectDet.projectDetails.acquiredDetails}
                </p>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <h2 className="text-2xl font-bold mb-4">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {projectDet.projectDetails.imgs.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Project Image ${index + 1}`}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-64"
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Demo</h3>
            <div className="aspect-w-16 aspect-h-9 mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${
                  projectDet.projectDetails.youtubeLinks[0].split("v=")[1]
                }`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <footer className="mt-8 pt-8 border-t">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <a
              href={projectDet.projectDetails.socialLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href={projectDet.projectDetails.socialLinks[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={projectDet.projectDetails.youtubeLinks[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600"
            >
              <Youtube className="w-6 h-6" />
            </a>
          </div>
          <a
            href={projectDet.projectDetails.documentationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            View Documentation
          </a>
        </div>
      </footer>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}

const ImageGallery: React.FC<{
  images: string[];
  setSelectedImage: (img: string) => void;
}> = ({ images, setSelectedImage }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative group cursor-pointer overflow-hidden  "
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-full h-40 object-cover transition duration-300 transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">View</span>
          </div>
        </div>
      ))}
    </div>
  );
};
