import { ArrowLeft, Balloon, BriefcaseBusiness, Calendar, Ellipsis, Link, Mail, MapPinHouse } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();

  return <div>
    <header className="flex items-center py-1 px-4">
      <Button onClick={() => navigate(-1)} variant="ghost">
        <ArrowLeft />
      </Button>
      <div>
        <p className="text-[20px] font-bold leading-[24px]">Stas Neprokin</p>
        <p className="text-[#6E767D] text-[13px] leading-[16px]">23 post</p>
      </div>
    </header>
    <div className="px-4">
      <div className="flex items-start gap-3 mt-4">
        <img src="https://mockmind-api.uifaces.co/content/human/80.jpg" className="size-[132px] rounded-full object-cover" alt="" />
        <div>
          <div className="flex flex-col gap-1">
          <p className="text-[20px] font-bold leading-[24px]">Stas Neprokin</p>
          <p className="text-[13px] font-normal leading-[16px] text-[#6E767D]">@sneprokin</p>
        </div>
        <div className="flex mt-3 items-center gap-3 flex-wrap">
          <div className="flex gap-1 text-[#6E767D] items-center">
          <BriefcaseBusiness size={16} />
          <p className="text-[15px] leading-[20px]">Entrepreneur</p>
        </div>
        <div className="flex gap-1 text-[#6E767D] items-center">
          <MapPinHouse size={16} />
          <p className="text-[15px] leading-[20px]">Earth</p>
        </div>
        <div className="flex gap-1 text-[#6E767D] items-center">
          <Link size={16} />
          <p className="text-[15px] text-[#1D9BF0] leading-[20px]">neprokin.com</p>
        </div>
        <div className="flex gap-1 text-[#6E767D] items-center">
          <Balloon size={16} />
          <p className="text-[15px] leading-[20px]">Born November 7, 1987</p>
        </div>
        <div className="flex gap-1 text-[#6E767D] items-center">
          <Calendar size={16} />
          <p className="text-[15px] leading-[20px]">Joined November 2010</p>
        </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Button variant="ghost" className="border border-[#6E767D] rounded-full">
            <Ellipsis size={20} />  
          </Button>
          <Button variant="ghost" className="border border-[#6E767D] rounded-full">
            <Mail size={20} />  
          </Button>
          <Button className="rounded-full text-[15px] font-bold leading-[20px] py-2 px-5 text-black bg-white">
            Follow
          </Button>
        </div>
        </div>
      </div>
    </div>
  </div>
}