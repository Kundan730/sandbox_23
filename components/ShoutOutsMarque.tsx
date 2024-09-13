import Marquee from "@/components/magicui/marquee";

import { BiStar } from "react-icons/bi";
const data = [
  {
    title: "Mneme AI",
    description: "Chat with your notes, documents and books on-device",
    headline: "Chat with your notes, documents and books on-device",
    likes: 19,
    tags: ["Solo maker", "Productivity"],
    imageLink:
      "https://ph-files.imgix.net/c125cb60-ecf1-4116-b170-9699c2ea4fb2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
  },
  {
    title: "AIPhone.AI",
    description: "AI-powered phone call app with live translation",
    headline: "AI-powered phone call app with live translation",
    likes: 128,
    tags: ["Productivity", "Languages"],
    imageLink:
      "https://ph-files.imgix.net/1675ed36-35cf-4d0c-a55d-8cd5c573992c.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2",
  },
  {
    title: "FunBlocks AIFlow",
    description: "Work, Learn, Explore with AI-powered Whiteboard and MindMap",
    headline: "Work, Learn, Explore with AI-powered Whiteboard and MindMap",
    likes: 57,
    tags: ["Productivity", "Education", "Artificial Intelligence"],
    imageLink:
      "https://ph-files.imgix.net/d41b1fd6-3501-489d-a709-915cfffb4eb1.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2",
  },
  {
    title: "Codemeup",
    description: "Embed code snippets directly from Github",
    headline: "Embed code snippets directly from Github",
    likes: 21,
    tags: ["Solo maker", "Api", "GitHub"],
    imageLink:
      "https://ph-files.imgix.net/3523b1ce-d041-4af4-9be1-34377d81e859.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
  },
  {
    title: "VELS",
    description: "Voice-enabled learning simulations for learning and training",
    headline: "Voice-enabled learning simulations for learning and training",
    likes: 29,
    tags: ["Productivity", "Simulation Games", "Artificial Intelligence"],
    imageLink:
      "https://ph-files.imgix.net/e39ffa38-f434-4f43-9a0a-e2e6d8d5a969.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=max&dpr=2",
  },
  {
    title: "Motion",
    description: "Get up to 6 months free of Notion + unlimited AI",
    headline: "Get up to 6 months free of Notion + unlimited AI",
    likes: null,
    tags: ["Promoted"],
    imageLink:
      "https://ph-files.imgix.net/55a2dda9-c4c7-4e65-86db-09e9f128573b.x-icon?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
  },
  {
    title: "Cavela",
    description: "Create custom products at factory cost",
    headline: "Create custom products at factory cost",
    likes: 24,
    tags: ["Artificial Intelligence", "E-Commerce", "Tech"],
    imageLink:
      "https://ph-files.imgix.net/dc95099f-4e00-4a2d-b235-c0a62dedb3f4.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=2",
  },
];

interface ShoutOutItem {
  title: string;
  description: string;
  headline: string;
  likes: number | null;
  tags: string[];
  imageLink: string;
}

const ShoutOutCard: React.FC<ShoutOutItem> = ({
  imageLink,
  title,
  headline,
  description,
  likes,
  tags,
}) => {
  return (
    <div
      className="w-full  flex flex-col p-4 rounded-md"
      style={{
        textTransform: "lowercase",
        backgroundImage: "url('/top-left-right.svg')",
      }}
    >
      <div className="flex items-center mb-2">
        <img
          src={imageLink}
          alt={title}
          className="w-12 h-12 rounded-lg border mr-3"
        />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{headline}</p>
        </div>
      </div>
      <p className="text-sm mb-2">{description}</p>
      <div className="flex items-center justify-between  space-x-5 flex-wrap">
        <div className="flex items-center justify-center text-black">
          <BiStar size={16} className="mr-1" />
          <span className="text-sm ">{likes !== null ? `${likes}` : "0"}</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-200 rounded-full px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export function ShoutOutMarque() {
  return (
    <div className="relative flex h-full w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {data.map((item: ShoutOutItem) => (
          <ShoutOutCard key={item.title} {...item} />
        ))}
      </Marquee>
    </div>
  );
}
