import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import useSWR from "swr";

const API_PATH = (ip: string) => `/server/${ip}`;

const API_SERVER = (ip: string) => `https://api.open.mp${API_PATH(ip)}`;

const getServer = async (ip: string) => {
  const r: Response = await fetch(API_SERVER(ip));
  const servers: Server = await r.json();
  return servers;
};

interface Core {
  ip: string;
  hn: string;
  pc: number;
  pm: number;
  gm: string;
  la: string;
  pa: boolean;
  vn: string;
}

interface Server {
  ip: string;
  dm?: any;
  core: Core;
  description?: any;
  banner?: any;
  active: boolean;
  ru: Record<string, string>;
}

type Props = {
  ip: string;
  initialData?: Server;
};

const Item = ({ k, v }: { k: string; v: string }) => {
  return (
    <>
      <dt className="f6 pt2 b">{k}</dt>
      <dd className="ml0 lh-copy black-50">{v}</dd>
    </>
  );
};

type ServerProp = { server: Server };

const Description = ({ server }: ServerProp) => {
  if (!server.description) {
    return null;
  }
  return (
    <>
      <h4>Description</h4>
      <p>{server.description}</p>
    </>
  );
};

const Properties = ({ server }: ServerProp) => {
  if (!server.core) {
    return null;
  }
  return (
    <>
      <h4>Properties:</h4>
      <dl className="lh-title ph4 mt0">
        <Item k="Address" v={server.core.ip} />
        <Item k="Hostname" v={server.core.hn} />
        <Item k="Players" v={`${server.core.pc}/${server.core.pm}`} />
        <Item k="Gamemode" v={server.core.gm} />
        <Item k="Language" v={server.core.la} />
        <Item k="Mod Version" v={server.core.vn} />
      </dl>
    </>
  );
};

const Rules = ({ server }: ServerProp) => {
  if (!server.ru) {
    return null;
  }
  return (
    <>
      <h4>Game Rules:</h4>
      <dl className="lh-title ph4 mt0">
        {Object.keys(server.ru).map((v) => (
          <Item key={v} k={v} v={server.ru[v]} />
        ))}
      </dl>
    </>
  );
};

const Info = ({ data }: { data: Server }) => (
  <article>
    <NextSeo
      title={`${data.core.hn} | SA-MP Servers Index`}
      canonical={`https://www.open.mp/servers/${data.core.ip}`}
      description={`${data.core.pc}/${data.core.pm} players currently online at ${data.core.hn} (${data.core.gm}). View more information on open.mp servers list.`}
    />

    <hgroup>
      <h1 className="pv0 mb0">{data.core.hn}</h1>
      <div className="black-50 pv1 mt0 flex justify-between">
        <h2 className="di static mv0">{data.core.gm}</h2>
        <span className="lh-copy f6 self-end">
          {data.core.pa ? "🔐" : null}
          {data.core.ip}
        </span>
      </div>
    </hgroup>

    <section>
      <Description server={data} />
      <Properties server={data} />
      <Rules server={data} />
    </section>
  </article>
);

const Error = ({ error }: { error: TypeError }) => (
  <p>
    Unfortunately there was an error while getting the server list! The error
    message is below: <pre>{error.message}</pre>
  </p>
);
const Page = ({ ip, initialData }: Props) => {
  const { data, error } = useSWR<Server, TypeError>(ip, getServer, {
    initialData,
  });

  return (
    <>
      <section className="measure-wide center">
        <Link href="/servers">
          <a className="black-80 hover-blue">Back</a>
        </Link>

        {error ? <Error error={error} /> : <Info data={data!} />}
      </section>
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<Props>> => {
  const ip: string = context.params?.ip as string;
  return {
    props: {
      ip: ip,
      initialData: undefined, // TODO: put this back: await getServer(ip),
    },
  };
};

export default Page;
