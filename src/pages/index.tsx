import Head from "next/head";
import { Button } from "@/components/button";
import IconDiagramSuccessor from "@/Icons/IconDiagramSuccessor";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          paddingTop: "10px",
          gap: "20px",
        }}
      >
        <h1>COLORS</h1>
        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <Button variant="default">Default!</Button>
          <Button variant="primary">Primary!</Button>
          <Button variant="secondary">Secondary!</Button>
          <Button variant="duo">Duo!</Button>
          <Button variant="marketplace">Marketplace!</Button>
          <Button variant="error">Error!</Button>
        </div>
        <h1>OUTLINED</h1>
        <div>
          <Button variant="default" outlined>
            Outlined!
          </Button>
        </div>
        <div>
          <h1>WITH ICON</h1>
          <Button
            variant="duo"
            circle
            icon={<IconDiagramSuccessor name="icon" />}
          />
        </div>
        <h1>DISABLED</h1>
        <div>
          <Button variant="default" disabled>
            Outlined!
          </Button>
        </div>

        <h1>SHAPE</h1>
        <div>
          <Button variant="primary" shape="tile">
            PILL!
          </Button>
        </div>

        <h1>SIZES</h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button variant="primary" size="small">
            Small!
          </Button>
          <Button variant="secondary" size="big">
            Large!
          </Button>
        </div>
      </main>
    </>
  );
}