import { useQuery } from "@tanstack/react-query";

import { githubApi } from "../../api/githubApi";
import { sleep } from "../../helpers/sleep";
import { Label } from "../interfaces/label";

const getLabels = async (): Promise<Label[]> => {
  const { data } = await githubApi.get<Label[]>("/labels");
  await sleep(2);
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery(["labels"], getLabels, {
    // refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    // initialData: [],
    placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE=",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
        description: "",
      },
      {
        id: 725156255,
        node_id: "MDU6TGFiZWw3MjUxNTYyNTU=",
        url: "https://api.github.com/repos/facebook/react/labels/good%20first%20issue%20(taken)",
        name: "good first issue (taken)",
        color: "b60205",
        default: false,
        description: "",
      },
    ],
  });
  return labelsQuery;
};
