import useSWR from "swr";

import { apiSWR } from "src/fetcher/fetcher";
import { GitHubLink } from "src/types/generated_githubAuth";
import { UserModel } from "src/types/generated_user";
import { APIError } from "src/types/generated_error";

type Props = {
  bg: string;
  icon: JSX.Element;
  type: string;
};

const OAuthButton = ({ bg, icon, type }: Props) => {
  const { data: link } = useSWR<GitHubLink>(`/auth/${type}/link`, apiSWR);
  const { data, error } = useSWR<UserModel, APIError>("/users/self", apiSWR);

  let text: string;
  let href = link?.url;

  if (type === "github") {
    if (!error && data && data.github) {
      text = data.github.username;
      href = undefined;
    } else {
      text = "Login with GitHub";
      href = link?.url;
    }
  } else if (type === "discord") {
    if (!error && data && data.discord) {
      text = data.discord.username;
      href = undefined;
    } else {
      text = "Login with Discord";
      href = link?.url;
    }
  } else {
    throw new Error(`Unknown OAuth type: ${type}`);
  }

  return (
    <li className="pv2">
      <a
        href={href}
        className="link pa2 br3 h3 flex align-center justify-center"
      >
        <span className="pa2">{icon}</span>
        <span className="pa2">
          <h2 className="pa0 ma0">{text}</h2>
        </span>
      </a>

      <style jsx>{`
        a {
          background-color: ${bg};
          color: white;
        }
        span {
          margin: auto 0 auto 0;
        }
      `}</style>
    </li>
  );
};

export default OAuthButton;
