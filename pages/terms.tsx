import { type ExtendedRecordMap } from "notion-types";

import { NotionPage } from "@/components/NotionPage";
import notion from "@/lib/notion";

const rootNotionPageId = "29db4199ba908052853af3482aa66c33";

export const getStaticProps = async () => {
  const pageId = rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />;
}
