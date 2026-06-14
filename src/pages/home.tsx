import { Download, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useEffect, useState } from "react";
import type { Tweet } from "../types/tweet";
import type { User } from "../types/user";
import { TWEETS_SERVICE } from "../services/tweets";
import { USERS_SERVICE } from "../services/users";
import { Textarea } from "../components/ui/textarea";

export default function HomePage() {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null | unknown>(null);

  const [tweetText, setTweetText] = useState<string>("");

  useEffect(() => {
    async function loadData() {
      try {
        const [users, tweets] = await Promise.all([
          USERS_SERVICE.getAll(),
          TWEETS_SERVICE.getAll()
        ])

        setTweets(tweets);
        setUsers(users);
      } catch (error) {
        setError(error);
      }
    }

    loadData()
  }, []);

  const usersById = Object.fromEntries(
    users.map(user => [String(user.id), user])
  )

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await TWEETS_SERVICE.create({
      content: tweetText,
      createdAt: new Date().toISOString(),
      userId: 1
    });
  }

  if (error) return <div className="p-4 text-red-500">Error: {String(error)}</div>

  return <div>
    <form onSubmit={handleSubmit} className="flex flex-col items-end m-5">
      <Textarea onChange={(e) => setTweetText(e.target.value)} placeholder="What's happening?" />
      <Button type="submit" className="mt-2 bg-[#1D9BF0]">Tweet</Button>
    </form>

    <ul className="flex flex-col">
      {tweets.map(tweet => {
        const user = usersById[String(tweet.userId)];

        return <li>
        <div className="flex gap-3 py-3 px-4 border-b border-[#6E767D]">
          <Link className="shrink-0" to={ROUTES.PROFILE}>
            <img src={user.avatarUrl} className="size-[48px] rounded-full object-cover" alt="" />
          </Link>
          <div>
            <header className="flex items-center gap-1 text-[15px]">
              <p className="font-bold">{user.firstName}</p>
              <p className="text-[#6E767D]">@{user.username}</p>
              <p className="text-[#6E767D]">.</p>
              <p className="text-[#6E767D]">{new Date(tweet.createdAt).getDate()} мая</p>
            </header>
            <p className="text-[15px] text-[#D9D9D9]">{tweet.content}</p>
            <div className="flex items-center justify-between mt-3">
              <Button variant="ghost" className="flex items-center gap-2 px-[13px] py-[9px] text-[#6E767D]">
                <MessageCircle />
                <p>58</p>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 px-[13px] py-[9px] text-[#6E767D]">
                <Repeat2 />
                <p>58</p>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 px-[13px] py-[9px] text-[#6E767D]">
                <Heart />
                <p>58</p>
              </Button>
              <Button variant="ghost" className="px-[13px] py-[9px] text-[#6E767D]">
                <Download />
              </Button>
            </div>
          </div>
        </div>
      </li>
      })}
    </ul>
  </div>
}