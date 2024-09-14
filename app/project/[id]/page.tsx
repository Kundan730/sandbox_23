"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProjectShowcase } from "@/lib/types";
import { projects } from "@/lib/testdata";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  MessageSquare,
  Send,
  Reply,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
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

const ProjectShowcaseComponent: React.FC<{ productData: ProjectShowcase }> = ({
  productData,
}) => {
  const {
    logo,
    headline,
    description,
    projectDetails,
    projectType,
    creationDate,
    lastUpdate,
    rating,
    tags,
    targetAudience,
    views,
    name,
  } = productData;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div
      className=" px-4 sm:px-6 lg:px-8 py-12 "
      style={{
        backgroundColor: "#ffffff",
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-10">
          <div
            className="p-2"
            style={{
              backgroundImage: "url('/top-left-right.svg')",
            }}
          >
            <img src={logo} alt="Project Logo" className="h-60 w-auto  " />
          </div>

          <div>
            <h1 className=" text-7xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-xl text-gray-600 mb-4">{headline}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-black rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex flex-col space-y-4">
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-black text-white   transition duration-300 flex items-center">
              Visit Project <ArrowUpRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-6 py-3 bg-gray-200 text-gray-800  hover:bg-gray-300 transition duration-300 flex items-center">
              Upvote 90
            </button>
          </div>
          <div className="flex space-x-4 ">
            <button className="px-6 py-3 bg-gray-200 text-gray-800  hover:bg-gray-300 transition duration-300 flex items-center border">
              Gthub Link
            </button>
            {/* <button className="px-6 py-3 bg-gray-200 text-gray-800  hover:bg-gray-300 transition duration-300 flex items-center border">
              Acquastion
            </button> */}
            <Drawer>
              <DrawerTrigger asChild>
                {/* <Button variant="outline">Acquisition</Button> */}
                <button className="px-6 py-3 bg-gray-200 text-gray-800  hover:bg-gray-300 transition duration-300 flex items-center border">
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
            {/* <AcquisitionDrawer /> */}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="bg-black">
            <ImageGallery
              images={[
                "https://cdn.dribbble.com/userupload/16566774/file/original-db228ce3f4ec8586d638dd2dc87be3c9.jpg?crop=0x266-3000x2516&resize=400x300&vertical=center",
                "https://cdn.dribbble.com/userupload/16486498/file/original-abbc254663deebf34576159949b18fc7.jpg?resize=400x300&vertical=center",
                "https://cdn.dribbble.com/userupload/16569715/file/original-37e36b2ea47a7caa49d56da4e4441eae.png?crop=278x142-4574x3364&resize=400x300&vertical=center",
              ]}
              setSelectedImage={setSelectedImage}
            />
          </div>
          <div
            className="bg-white p-6 mt-6"
            style={{
              backgroundImage: "url('/top.svg')",
            }}
          >
            <h3 className="text-2xl font-semibold mb-4 pb-3 ">Team Members</h3>
            <div className="grid grid-cols-2 gap-6">
              {projectDetails.teamMembers.map((member, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center text-gray-500 ">
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="w-1 h-full "
          style={{
            backgroundImage: "url('/right.svg')",
          }}
        ></div>
        <div
          className="h-full"
          style={{
            backgroundImage: "url('/top.svg')",
          }}
        >
          <div className=" p-6 py-8  ">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Project Type
                </h4>
                <p className="text-lg">{projectType}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Tech Stack
                </h4>
                <p className="text-lg">{projectDetails.techStack.join(", ")}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Development Stage
                </h4>
                <p className="text-lg">{projectDetails.developmentStage}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">
                  Target Audience
                </h4>
                <p className="text-lg">{targetAudience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-11"
        style={{
          backgroundImage: "url('/top.svg')",
        }}
      >
        <h1 className="text-4xl  text-center ">Write your feedback</h1>
        <CommentSystem />
      </div>

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
};

// image gallery
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

// comments component
interface Comment {
  id: number;
  text: string;
  author: string;
  likes: number;
  dislikes: number;
  subComments: Comment[];
}

const CommentSystem: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const addComment = (text: string, parentId: number | null = null) => {
    const newCommentObj: Comment = {
      id: Date.now(),
      text,
      author: "User",
      likes: 0,
      dislikes: 0,
      subComments: [],
    };

    if (parentId === null) {
      setComments([...comments, newCommentObj]);
    } else {
      setComments(
        comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              subComments: [...comment.subComments, newCommentObj],
            };
          }
          return comment;
        })
      );
    }

    setNewComment("");
    setReplyingTo(null);
  };

  const handleVote = (
    commentId: number,
    parentId: number | null,
    isLike: boolean
  ) => {
    const updateComment = (comment: Comment): Comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          likes: isLike ? comment.likes + 1 : comment.likes,
          dislikes: !isLike ? comment.dislikes + 1 : comment.dislikes,
        };
      }
      return {
        ...comment,
        subComments: comment.subComments.map(updateComment),
      };
    };

    setComments(comments.map(updateComment));
  };

  const CommentItem: React.FC<{
    comment: Comment;
    level: number;
    parentId: number | null;
  }> = ({ comment, level, parentId }) => (
    <div className={`ml-${level * 4} mb-4 border-l-2 border-gray-200 pl-4`}>
      <div className="flex items-start space-x-3">
        <div className="bg-gray-100 p-2">
          <User className="w-5 h-5 text-gray-500" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold text-gray-800">{comment.author}</p>
          <p className="text-gray-700 mt-1">{comment.text}</p>
          <div className="flex items-center mt-2 space-x-4">
            <button
              onClick={() => setReplyingTo(comment.id)}
              className="text-gray-500 text-sm flex items-center hover:text-black transition-colors duration-200"
            >
              <Reply className="w-4 h-4 mr-1" /> Reply
            </button>
            <button
              onClick={() => handleVote(comment.id, parentId, true)}
              className="text-gray-500 text-sm flex items-center hover:text-black transition-colors duration-200"
            >
              <ThumbsUp className="w-4 h-4 mr-1" /> {comment.likes}
            </button>
            <button
              onClick={() => handleVote(comment.id, parentId, false)}
              className="text-gray-500 text-sm flex items-center hover:text-black transition-colors duration-200"
            >
              <ThumbsDown className="w-4 h-4 mr-1" /> {comment.dislikes}
            </button>
          </div>
        </div>
      </div>
      {replyingTo === comment.id && (
        <div className="mt-3 flex items-center">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a reply..."
            className="flex-grow border px-3 py-2 focus:outline-none focus:border-black"
          />
          <button
            onClick={() => addComment(newComment, comment.id)}
            className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition duration-200"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      )}
      {comment.subComments.map((subComment) => (
        <CommentItem
          key={subComment.id}
          comment={subComment}
          level={level + 1}
          parentId={comment.id}
        />
      ))}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto mt-5 bg-white p-6">
      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="flex-grow border px-3 py-2 focus:outline-none focus:border-black"
        />
        <button
          onClick={() => addComment(newComment)}
          className="bg-black text-white px-4 py-2.5 border-l-2 hover:bg-gray-800 transition duration-200"
        >
          <Send className="w-5 h-[1.32rem]" />
        </button>
      </div>
      <div className="space-y-4">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            level={0}
            parentId={null}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProjectShowcasePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProjectShowcaseComponent productData={projects[0]} />
    </div>
  );
}
